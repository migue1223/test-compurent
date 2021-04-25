import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getAlbumById } from '../../selectors/getAlbumById';

export const AlbumScreen = ({ history }) => {
  const { albumId } = useParams();

  const album = useMemo(() => getAlbumById(+albumId), [albumId]);

  if (!album) {
    return <Redirect to='/' />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  const { title, year, artist, desc, image } = album;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={`../assets/album/${image}.jpg`}
          alt={title}
          className='img-thumbnail animate__animated animate__fadeInLeft'
          style={{ height: 480 }}
        />
      </div>

      <div className='col-8 animate__animated animate__fadeIn'>
        <h3>Title: {title}</h3>
        
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b> Artist: </b> {artist}{' '}
          </li>
          <li className='list-group-item'>
            <b> Year: </b> {year}{' '}
          </li>
        </ul>

        <h5>Description</h5>
        <p>{desc}</p>

        <button onClick={handleReturn} className='btn btn-outline-info'>
          Return
        </button>
      </div>
    </div>
  );
};
