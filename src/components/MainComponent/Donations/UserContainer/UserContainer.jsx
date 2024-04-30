import React, { useEffect,useState } from "react";
import {useSelector,useDispatch} from 'react-redux';
import {fetchUsers} from '../../../../redux'


const UserContainer = () => {
  const userData = useSelector(state => state.userR);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false)

  useEffect(() => {
    
    if(load) {
      dispatch(fetchUsers())}
  }, [load,dispatch])

  return <div>
    <h2>Lista de usuarios</h2>
    {load===false?<button onClick={()=>setLoad(true)}>Descargar</button>:""}
    {userData.loading?<p>Cargando....</p>
      :userData.error?(<h2>{userData.error}</h2>)
      :userData.users.map((user,i)=><p key={i}>{user.name}</p>)
  }
  </div>;
};

export default UserContainer;