import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { UserContext } from "../store/userContext.js";

import Ionicons from 'react-native-vector-icons/Ionicons.js'

import CustomDrawer from "./customDrawer.js";
import MainScreen from "./report.js";
// import ViewReports from "../views/viewReports.js";
import Profile from "../views/profile.js";
import CheckReports from "./checkReports.js";

const DrawerInstance = createDrawerNavigator();

export default function Drawer() {

  const { checkIsSec } = useContext(UserContext);

  return (
    <DrawerInstance.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="MainScreen"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#e2d686',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        }
      }}>

      <DrawerInstance.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />


      <DrawerInstance.Screen
        name="CheckReports"
        component={CheckReports}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name={checkIsSec() ? "images-outline" : "image-outline"} size={22} color={color} />
          ),
        }} />

      <DrawerInstance.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }} />
    </DrawerInstance.Navigator>
  );
}