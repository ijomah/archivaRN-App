import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardPage from "./dashboard";
// import FileComponent from "./partsToScan";
import FileManager from "./fileManager";


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return(
        <Drawer.Navigator
            screenOptions={{drawerPosition: 'right'}}
        >
            <Drawer.Screen name="dashboard" component={DashboardPage} />
            <Drawer.Screen name="fileManager" component={FileManager} />
        </Drawer.Navigator>
    )
}

export default MyDrawer;