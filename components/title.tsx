import { Text, StyleSheet } from "react-native"

type Props = {
    label: string
}

export const Title = ({ label }: Props) => {
    return(
        <Text style={styles.title}>{label}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#F47C7C',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})