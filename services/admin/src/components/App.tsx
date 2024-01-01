import { useState } from 'react';
import {Outlet} from 'react-router-dom';
import {deepMerge} from '@packages/shared/src/utils/deepMerge';
import { UserCard } from '@packages/shared/src/components/UserCard';

export const App = () => {
  const newArr = deepMerge(Array<string>('hello','world'));
  console.log(newArr);
  return (
    <div>
      <h1>ADMIN MODULE</h1>
      <Outlet />
      <UserCard username={'FROM ADMIN'} />
    </div>
  )
}