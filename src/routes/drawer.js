import { createDrawerNavigator } from "@react-navigation/drawer";

import MainScreen from "./report.js";
import MyReports from "../views/myReports.js";
import ViewReports from "../views/viewReports.js";
import Profile from "../views/profile.js";

const DrawerInstance = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerInstance.Navigator initialRouteName="MainScreen">
      <DrawerInstance.Screen name="MainScreen" component={MainScreen} />
      <DrawerInstance.Screen name="MyReports" component={MyReports} />
      <DrawerInstance.Screen name="ViewReports" component={ViewReports} />
      <DrawerInstance.Screen name="Profile" component={Profile} />
    </DrawerInstance.Navigator>
  );
}