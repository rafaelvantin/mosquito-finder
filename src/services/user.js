import $api from "./api";

const getUserInfo = (id) => {
    return new Promise((resolve, reject) => {
        $api
        .get(`/user/${id}`)
        .catch((error) => reject(error))
        .then(({ data }) => resolve(data));
    });
};

const authenticate = (email, password) => {
  return new Promise((resolve, reject) => {
    $api
      .get(`/auth`, { params: { email, password } })
      .catch((error) => reject(error))
      .then(({ data }) => resolve(data));
  });
};

export { getUserInfo, authenticate };