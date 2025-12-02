import { View, Text, TextInput, StyleSheet } from "react-native"

type Props = {
    label: string,
    placeholder: string,
    value: string,
    senha?: boolean,
    onChange: (newValue: string) => void,
}

export const Input = ({ label, placeholder, value, onChange, senha }: Props) => {
    return(
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input} 
                value={value}
                placeholder={placeholder}
                secureTextEntry={senha}
                onChangeText={t => onChange(t)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        color: '#F47C7C',
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        flex: 1,
        paddingVertical: 9,
        paddingHorizontal: 10,
        marginTop: 5,
        backgroundColor: 'transparent',
        color: '#F47C7C',
        fontSize: 18,
        fontWeight: 'semibold',
        outlineColor: '#F47C7C',
        borderWidth: 3,
        borderColor: '#F47C7C',
        borderRadius: 5
    }
})