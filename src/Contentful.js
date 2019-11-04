import { createClient } from 'contentful';

export default createClient({
  space: '3wpon9s6ss2x',
  accessToken: 'Db-XUohzGHBMiv-1O4huA24Er_FNnb8Oh1KF9QyQb4Y'
  // space: process.env.REACT_APP_API_SPACE,
  // accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
