// import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import CreatePost from './Screems/createPost';

/* interface List {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (userName: string) => {
    setUsers([...users, { id: users, name: userName }]);
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <AddUser onAddUser={addUser} />
      <UserList users={users} />
    </div>
  );
} */

function App() {

  return (
    <body>
      <Header />
      <MainContent>
        <CreatePost />
      </MainContent>
      <Footer />
    </body>
  )
}  

export default App;
