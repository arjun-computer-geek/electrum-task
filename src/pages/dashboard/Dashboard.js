import React, { useEffect, useState } from 'react'
import { DashboardHeader } from '../../component/DashboardHeader'
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, setCurrentPage } from '../../redux/slices/userSlice';
import Pagination from '@mui/material/Pagination';

import './dashboard.css'
export const Dashboard = () => {
  const { users, totalPages, currentPage } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const[page, setPage] =  useState(1)

  useEffect(() => {
    dispatch(getAllUsers(currentPage))
  }, [currentPage])

  const handleChange = (event, value) => {
    console.log(value)
    dispatch(setCurrentPage(value));
  };
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
      <h3>page : {currentPage}</h3>
      <Pagination count={totalPages} color="primary" page={currentPage} onChange={handleChange} />
    </div>
  </>
  )
}
