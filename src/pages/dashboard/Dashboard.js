import React, { useEffect } from 'react'
import { DashboardHeader } from '../../component/DashboardHeader'
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../../redux/slices/userSlice';
import Pagination from '@mui/material/Pagination';
import './dashboard.css'
export const Dashboard = () => {
  const dispatch = useDispatch()
  const { users } = useSelector(state => state.user)
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return (<>
    <DashboardHeader />
    <div className='dashboard'>
      <table>
        <tr>
          <th>id</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>Photo</th>
        </tr>
        <tr>
          {
            users?.map(user => {
              return<>
              <th>{user.id}</th>
              <th>{user.firstName}</th>
              <th>{user.lastName}</th>
              <th>{user.email}</th>
              <th><img src={user.avatar} /></th>
              </> 
            })
          }
        </tr>
      </table>
    </div>
    <div spacing={2}>
      <Pagination count={10} color="primary" />
    </div>
  </>
  )
}
