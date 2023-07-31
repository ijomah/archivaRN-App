import { Drawer } from 'expo-router/drawer';
import ImageHeader from '../../proj/tinyParts/headerLogo';

export default function DropDownLayout() {
    return (
        <Drawer 
            name=''
            screenOptions={{
                drawerPosition: 'right',
                drawerIcon: '',
                headerTitle: () => <ImageHeader />,
                headerTitleAlign: 'center'
            }}
        >
                
            <Drawer.Screen 
                name='home'
                options={{
                    drawerLabel: 'Home',
                    headerTintColor: '#FFEDD6',
                    // title: 'home'
                }}
            />
            <Drawer.Screen 
                name='preDropDown'
                options={{
                    drawerLabel: 'Document Title',
                    // headerTintColor: '#FFEDD6',
                    title: 'Document Names',
                    drawerPosition: 'right'
                }}
            />

            <Drawer.Screen 
                name='filePartsToScan'                
                options={{
                    drawerLabel: 'Selected Document Title',
                    headerTintColor: '#FFEDD6',
                    title: 'Seleceted Document Names',
                    
                }}
            />

            <Drawer.Screen 
                name='form'
                options={{
                    drawerLabel: 'File Information',
                    headerTintColor: '#FFEDD6',
                    title: 'File Information'
                }}
            />

            <Drawer.Screen 
                name='approval'
                options={{
                    drawerLabel: 'Approved Documents',
                    headerTintColor: '#FFEDD6',
                    title: 'Approved Documents'
                }}
            />
         </Drawer>
    )
}