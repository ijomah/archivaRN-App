import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack 
            screenOptions = {{
                headerStyle: {
                    backgroundColor: '#FFEDD6'
                }
            }}
        >
            <Stack.Screen 
                
                name='auth/login'
                options={{
                    title: 'Login',
                }}
                
            />

            <Stack.Screen 
                name='auth/logout'
                options={{
                    title: 'Logout',
                }}
                
            />

            <Stack.Screen 
                name='pages'
                options={{
                    title: 'My Drawer',
                    headerShown: false
                }}
                
            />

            <Stack.Screen 
                name='modal/scanningChoiceModal'
                options={{
                    title: 'Scan Document or File?',
                    headerShown: true,
                    presentation: 'modal'
                }}
            />

            <Stack.Screen 
                name='scanPart/scanner'
                options={{
                    title: 'Scanner',
                }}
                
            />

            {/* <Stack.Screen 
                name='scanPart/beforeScan'
                options={{
                    title: 'Prescan',
                }}
                
            /> */}
        </Stack>
        
    )
    
}