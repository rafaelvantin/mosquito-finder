import $api from "./api";

const searchReport = (id) => {
  return new Promise((resolve, reject) => {
    $api
      .get(`/report/${id}`)
      .catch((error) => reject(error))
      .then(({ data }) => resolve(data));
  });
};

export { searchReport };