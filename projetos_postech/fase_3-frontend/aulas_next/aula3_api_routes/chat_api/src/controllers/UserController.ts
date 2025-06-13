import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

class UserController {
  static async register(req: Request, res: Response) {
    const { name, password } = req.body;
    
    try {
      const existingUser = await prisma.user.findFirst({
        where: {
          name,
        },
      });

      if (existingUser) {
        return res.status(400).json({ message: 'Usuário já existe.' });
      }


      const hashedPassword = await bcrypt.hash(password, 10);


      const user = await prisma.user.create({
        data: {
          name,
          password: hashedPassword,
        },
      });

      const userWithoutPassword: any = {
        id: user.id,
        name: user.name,
      };

      res.status(201).json(userWithoutPassword);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao criar usuário.', error: error.message });
    }
  }

  
  static async login(req: Request, res: Response) {
    const { name, password } = req.body;

    try {
      
      const user = await prisma.user.findFirst({
        where: {
          name,
        },
      });

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Senha inválida.' });
      }

      const userWithoutPassword: any = {
        id: user.id,
        name: user.name,
      };

      res.json(userWithoutPassword);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao autenticar usuário.', error: error.message });
    }
  }

  static async listAll(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,         
        },
      });
      res.json(users);
    } catch (error) {
      res.status(500).send({ message: "Erro ao buscar usuários" });
    }
  }
  static async getById(req: Request, res: Response) {
    const { id } = req.query;
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ message: 'ID é necessário e deve ser um string.' });
   }
    try {
      const user = await prisma.user.findFirst({
        where: {
          id: parseInt(id, 10),
        },
      });
      if(!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
      const userWithoutPassword: any = {
        id: user.id,
        name: user.name,
      };
      res.json(userWithoutPassword);
    } catch (error) {
      res.status(500).send({ message: "Erro ao buscar usuários" });
    }
  }


  
}

export default UserController;
