import React, { createContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { authenticate, getUserInfo } from "../services/user";
import { set } from "react-native-reanimated";

export const UserContext = createContext([]);

export const UserStorage = ({ children }) => {
  const [user, setUser] = useState("");
  const [tipo, setTipo] = useState("");

  const checkIsSec = () => {
    if(tipo == "Secretaria"){
      return true;
    }

    return false;
  }

  const login = async (email, password) => {
    try{
      const user_data = await authenticate(email, password);
  
      if(user_data != undefined) {
          setUser(user_data.id);
          await AsyncStorage.setItem("@user", user_data.id);

          setTipo(user_data.tipo);
      }
    }
    catch(error){
      console.log(error);
    }
  }

  //equivalent to componentDidMount()
  useEffect(() => {
    // async function loadStorage() {
    //   const storedUser = await AsyncStorage.getItem("@user");
    //   if (storedUser) setUser(storedUser);
    // }
    // loadStorage();

    setUser("");
    setTipo("");
    //Comment this next line to test login screen
    // setUser("Test_user");
  }, []);

  const fetchUserInfo = async (id) => {
    try {
      return await getUserInfo(id);
    } catch {
      return null;
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("@user");
    setUser("");
    setTipo("");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        fetchUserInfo,
        checkIsSec,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};