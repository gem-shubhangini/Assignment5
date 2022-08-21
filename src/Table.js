import React, { useState } from 'react';
import UserForm from './Form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function TableData() {

  const UserData = useSelector((state)=>state.UserData);
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>           
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Category</th>
            <th>Technology</th>
           
          </tr>
          </thead>
          <tbody>
          {
            UserData.map((item)=> <tr key={item.id}>
              <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.gender}</td>
            <td> {item.category.map((cb)=><p key={cb}>{cb}</p>)}</td>
             <td>{item.chooseCb}</td>
             
            </tr>
            ) 
          }
          </tbody>
       
      </table>
    </div>
  );
}
  
export default TableData;
