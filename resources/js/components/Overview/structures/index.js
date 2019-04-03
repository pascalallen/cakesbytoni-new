import Orders from './orders';
import Images from './images';

const matrix = {
  orders: Orders,
  images: Images,
};

export default function (key) {
  const result = matrix[key];
  if (!result) {
    // eslint-disable-next-line no-console
    console.error('Overview Structure does not exist! Please add overview structure to Overview/structures/index.js');
  }
  return result;
}
