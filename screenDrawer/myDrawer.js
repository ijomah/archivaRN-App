import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardPage from "./dashboard";
// import FileComponent from "./partsToScan";
import FileManager from "./fileManager";
import FileManagerAuth from "./fileManagerAuth";
import NestedDrawerWithAuth from "./nestedDrawer";


const Drawer = createDrawerNavigator();

function MyDrawer() {
    
    return(
        <Drawer.Navigator
            screenOptions={{drawerPosition: 'right'}}
        >
            <Drawer.Screen name="dashboard" component={DashboardPage} 
                options={{
                    title: 'Dashboard'
                }} />
            {/* <Drawer.Screen name="fileManagerAuth" component={FileManagerAuth} 
                options={{
                    title: 'File Manager Verification'
                }} /> */}
            <Drawer.Screen name="nestDrawer" component={NestedDrawerWithAuth}
                options={{
                    title: 'File Manager',
                    headerShown: false,
                }}

            />
        </Drawer.Navigator>
    )
}

export default MyDrawer;