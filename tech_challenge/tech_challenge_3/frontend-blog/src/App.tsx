import { useState } from 'react'
import UserList from './components/lists/usersList';
import AddUser from './components/forms/addUser';
import './App.css'
import CreatePost from './components/forms/creatPost';

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
    <>
      <CreatePost />
    </>
  )
}  

export default App;
