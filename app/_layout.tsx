import { Stack } from "expo-router"

const RootLayout = () => {
    return(
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="splash" />
        </Stack>
    )
}

export default RootLayout