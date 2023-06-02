import React, { createContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { authenticate, getUserInfo } from "../services/user";

export const UserContext = createContext([]);

export const UserStorage = ({ children }) => {
  const [user, setUser] = useState("");

  const login = async (email, password) => {
    const user_data = await authenticate(email, password);

    if(user_data != undefined) {
        setUser(user_data.id);
        await AsyncStorage.setItem("@user", user_data.id);
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
    //Comment this next line to test login screen
    setUser("Test_user");
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
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        fetchUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};