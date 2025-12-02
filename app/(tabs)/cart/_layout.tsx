import { Stack } from "expo-router"

const CartLayout = () => {
    return(
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="[id]" />
        </Stack>
    )
}

export default CartLayout