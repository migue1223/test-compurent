import { albunes } from '../data/albunes';

export const getAlbumById = (id) => {
  return albunes?.find((albun) => albun.id === id);
};
