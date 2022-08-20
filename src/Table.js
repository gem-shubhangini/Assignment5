import React, { useState } from 'react';
import UserForm from './Form';
import jsonData from './data.json';
  
function TableData() {
  const [UserData, setUserData] = useState(jsonData);
  
  const tableRows = UserData.map((info) => {
    return (
      <tr key={info.id} >
        <td>{info.id}</td>
        <td>{info.Name}</td>
        <td>{info.Email}</td>
        <td>{info.Phone}</td>
        <td>{info.Gender}</td>
        <td>{info.Category}</td>
        <td>{info.Technology}</td>
        <td>{info.Picture}</td>
      </tr>
    );
  });
  
  const addRows = (data) => {
    const totalUsers = UserData.length;
    data.id = totalUsers + 1;
    const updatedUserData = [...UserData];
    updatedUserData.push(data);
    setUserData(updatedUserData);
  };
  
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
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <UserForm func={addRows} />
    </div>
  );
}
  
export default TableData;
