import express, { Application } from 'express';
import { createServer, Server } from 'http';
import { Server as Io, Socket } from 'socket.io';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/userRoutes';
import cors from 'cors';

class App {
  public app: Application;
  public server: Server;
  private socketIo: Io;
  private prisma: PrismaClient = new PrismaClient();

  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.socketIo = new Io(this.server, {
      cors: {
        origin: '*',
      },
    });

    this.middlewares();
    this.routes();
    this.socketConfiguration();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use('/api/users', userRoutes);
  }

  private socketConfiguration(): void {
    this.socketIo.on('connection', async (socket: Socket) => {
      const userId = socket.handshake.query.userId;
      socket.join(`user:${userId}`);
      socket.on('historicoMensagens', async (data) => {
        try {
          console.log(data);
          const messages = await this.prisma.message.findMany({
            where: {
              OR: [
                { idRemetente: data.idRemetente, idDestinatario: data.idDestinatario },
                { idRemetente: data.idDestinatario, idDestinatario: data.idRemetente }
              ],
            },
            orderBy: { createdAt: 'asc' },
          });

          socket.emit('historicoMensagens', messages);
        } catch (error) {
          console.log(error)
          socket.emit('error', 'Não foi possível recuperar o histórico de mensagens');
        }
      });

      socket.on('disconnect', () => {
        console.log('Usuário desconectado');
      });

      socket.on('message', async (messageData) => {
        try {
          const newMessage = await this.prisma.message.create({
            data: {
              content: messageData.content,
              idRemetente: messageData.idRemetente,
              idDestinatario: messageData.idDestinatario,
            },
          });

          console.log('Mensagem salva:', newMessage);
          this.socketIo.to(`user:${messageData.idDestinatario}`).emit('message', messageData);
        } catch (error) {
          console.error('Erro ao salvar a mensagem:', error);
          socket.emit('error', 'Não foi possível salvar a mensagem');
        }
      });
    });
  }
}

export default App;
