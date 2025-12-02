import { Tabs } from "expo-router"
import FontAwesome from "@expo/vector-icons/FontAwesome"

const TabLayout = () => {
    return(
        <Tabs screenOptions={{ tabBarStyle: { backgroundColor: '#F47C7C' }, tabBarActiveTintColor: '#FFF', tabBarInactiveTintColor: '#FAD4D4', headerShown: false }}>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={25} name="home" color={color} />,
                    title: "Home"
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={25} name="cart-plus" color={color} />,
                    title: "Carrinho"
                }}
            />
            <Tabs.Screen
                name="order"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={25} name="clipboard" color={color} />,
                    title: "Pedidos"
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={25} name="user" color={color} />,
                    title: "Perfil"
                }}
            />
        </Tabs>
    )
}

export default TabLayout