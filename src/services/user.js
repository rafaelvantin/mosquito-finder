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

    if(email == 'client@client.com')
      resolve({id: "10", name: "Client" });
    if(email == 'secretaria@secretaria.com')
      resolve({id: "20", name: "Client" });

    // $api
    //   .get(`/auth`, { params: { email, password } })
    //   .catch((error) => reject(error))
    //   .then(({ data }) => resolve(data));
  });
};

export { getUserInfo, authenticate };