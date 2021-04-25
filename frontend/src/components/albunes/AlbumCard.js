import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

export const AlbumCard = ({ id, title, year, artist, image }) => {
  return (
    <div className='card ms-3' style={{ maxWidth: 540 }}>
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img
            src={`assets/album/${image}.jpg`}
            className='card-img'
            alt={title}
            style={{ height: 189.14 }}
          />
        </div>
        <div className='col-md-8' style={{ height: 185, overflow: 'auto' }}>
          <div className='card-body'>
            <h5 className='card-title'>Title: {title}</h5>
            <p className='card-text'>year: {year}</p>
            <p className='card-text'>
              <small className='text-muted'>Artist: {artist}</small>
            </p>

            <Link to={`./album/${id}`}>Más...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

AlbumCard.propTypes = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  year: Proptypes.number.isRequired,
  artist: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
};
