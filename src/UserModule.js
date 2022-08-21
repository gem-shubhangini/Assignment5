import React, { Suspense,lazy } from 'react';
import { Routes, Route ,Navigate} from "react-router-dom";

const UserForm = lazy(()=>import('./Form'));
const TableData =lazy(()=>import('./Table'))
export const UserModule = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
    <Route path="/Assignment5/user/create" element={<UserForm />} />
    <Route path="/Assignment5" element={<Navigate replace to="/Assignment5/user/create" />} />
  <Route path="/Assignment5/users/view" element={<TableData/>}/>
  </Routes>
  </Suspense>
  )
}
