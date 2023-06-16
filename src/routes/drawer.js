import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Ionicons from 'react-native-vector-icons/Ionicons.js'

import CustomDrawer from "./customDrawer.js";
import MainScreen from "./report.js";
import MyReports from "../views/myReports.js";
import ViewReports from "../views/viewReports.js";
import Profile from "../views/profile.js";

const DrawerInstance = createDrawerNavigator();

export default function Drawer() {
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
        name="MyReports"
        component={MyReports}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="image-outline" size={22} color={color} />
          ),
        }} />

      <DrawerInstance.Screen
        name="ViewReports"
        component={ViewReports}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="images-outline" size={22} color={color} />
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