import { Tabs } from "expo-router"
import FontAwesome from "@expo/vector-icons/FontAwesome"

const TabLayout = () => {
    return(
        <Tabs screenOptions={{ tabBarStyle: { backgroundColor: '#F47C7C' }, tabBarActiveTintColor: '#FFF', tabBarInactiveBackgroundColor: '#FAD4D4' }}>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={25} name="home" color={color} />
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={25} name="shopping-cart" color={color} />,
                }}
            />
            <Tabs.Screen
                name="order"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={25} name="clipboard" color={color} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={25} name="user" color={color} />
                }}
            />
        </Tabs>
    )
}

export default TabLayout