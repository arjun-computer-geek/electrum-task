import React, { useEffect } from 'react'
import { DashboardHeader } from '../../component/DashboardHeader'
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../../redux/slices/userSlice';
import Pagination from '@mui/material/Pagination';
import './dashboard.css'
export const Dashboard = () => {
  const dispatch = useDispatch()
  const { users, totalPages } = useSelector(state => state.user)
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
console.log(users)
  return (<>
    <DashboardHeader />
    <div className='dashboard'>
      <table className='user'>
        <tr>
          <th>id</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>Photo</th>
        </tr>
        
          {
            users?.map(user => {
              return<>
              <tr>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td><img src={user.avatar} /></td>
              </tr>
              </> 
            })
          }
      </table>
    </div>
    <div spacing={2}>
      <Pagination count={totalPages} color="primary" />
    </div>
  </>
  )
}
