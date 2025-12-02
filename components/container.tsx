import { View, StyleSheet } from "react-native"
import { ReactNode } from "react"

type Props = {
    center?: boolean,
    children: ReactNode
}

export const Container = ({ children, center }: Props) => {
    return(
        <View style={center ? styles.centerContainer : styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 30
    }
})