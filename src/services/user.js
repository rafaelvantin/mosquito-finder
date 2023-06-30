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
      resolve({id: "10", name: "Client", tipo: "Cliente" });
    if(email == 'sec@sec.com')
      resolve({id: "20", name: "Secretaria", tipo: "Secretaria" });

    reject({error: "Usuário não encontrado"});
    // $api
    //   .get(`/auth`, { params: { email, password } })
    //   .catch((error) => reject(error))
    //   .then(({ data }) => resolve(data));
  });
};

export { getUserInfo, authenticate };