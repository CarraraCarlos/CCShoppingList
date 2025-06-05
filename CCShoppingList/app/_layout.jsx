import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
    return (
        <>
        <Stack
        screenOptions={{
            headerStyle: {
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
            }      
        }}>
            <Stack.Screen name="index" options={{  }}/>
            <Stack.Screen name="home"/>
        </Stack>
        <StatusBar style='light'/>
        </>

    )
}