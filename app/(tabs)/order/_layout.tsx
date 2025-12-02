import { Stack } from "expo-router"

const OrderLayout = () => {
    return(
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="[id]" />
        </Stack>
    )
}

export default OrderLayout