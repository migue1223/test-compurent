import React from 'react';
import { getAlbunesAll } from '../../selectors/getAlbunesAll';
import { AlbumCard } from './AlbumCard';

export const AlbumList = () => {
  const albunes = getAlbunesAll();

  return (
    <div className='card-columns animate__animated animate__fadeIn'>
      {albunes?.map((albun) => (
        <AlbumCard key={albun.id} {...albun} />
      ))}
    </div>
  );
};
