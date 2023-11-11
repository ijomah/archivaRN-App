import React, {useEffect} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FileManagerAuth from "./fileManagerAuth";
import Tablescore from "./tabulate";
// import DocPreview from "../screenStack/docPreview";
// import { SearchBar } from "react-native-screens";

const NestedDrawer = createDrawerNavigator();

function NestedDrawerWithAuth({navigation}) {
    // useEffect(() => {
    //     const unsub = navigation.addListener('drawerItemPress', (e)=>{
    //         console.log(e);
    //         const routeKeyStr = e.target;
    //         console.log(routeKeyStr.slice(0, 10));
    //         // if (routeKeyStr.slice(0, 10) === 'nestDrawer') {

    //         // }
    //     })
    //     return unsub
    // }, [])

   
    return (
        <NestedDrawer.Navigator 
            screenOptions={{
                drawerPosition: 'left',
                // headerShown: false
            }}
            //id="drawerNested"
        >
            {/* <NestedDrawer.Screen 
                name="fileManager" 
                component={FileManager} 
                options={{
                    title: 'File Manager'
                }}
            /> */}
            <NestedDrawer.Screen name="fileManagerAuth" component={FileManagerAuth} 
                options={{
                    title: 'File Manager Verification',
                    // headerTitle: (props) => <LogoTitle {...props} />
                }} 
            />
            <NestedDrawer.Screen name="table" component={Tablescore} 
                options={{
                    title: 'Document Table',
                    // headerTitle: (props) => <LogoTitle {...props} />
                }}
            />
            
        </NestedDrawer.Navigator>
    )
}

export default NestedDrawerWithAuth;