import { httpRequest } from '../../utils/httpClient';

export const userService = {
  getUsers,
};

function getUsers() {
  const uri = `/users`;
  return new Promise((resolve, reject) =>
    httpRequest
      .default()
      .get(uri)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      }),
  );
}
