import { Pressable, Text, StyleSheet } from "react-native"

type Props = {
    label: string,
    onPress: () => void
}

export const Button = ({ label, onPress }: Props) => {
    return(
        <Pressable 
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: '#F47C7C',
        borderRadius: 5
    },
    label: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'semibold'
    }
})