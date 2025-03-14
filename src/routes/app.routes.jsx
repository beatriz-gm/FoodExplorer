import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Add } from '../pages/Add';
import { Edit } from '../pages/Edit';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details/:id' element={<Details/>} />
      <Route path='/new' element={<Add/>} />
      <Route path='/edit' element={<Edit/>} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}