import { View, StyleSheet } from "react-native"
import { Container } from "../components/container"
import { Title } from "../components/title"
import { useState } from "react"
import { Input } from "../components/input"
import { Button } from "../components/button"

const Screen = () => {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    const handlePressButton = () => {
        
    }

    return(
        <Container center>
            <Title label="Login" />

            <View style={styles.formArea}>
                <Input 
                    label="CPF"
                    placeholder="Digite seu CPF"
                    value={cpf}
                    onChange={setCpf}
                />

                <Input 
                    label="Senha"
                    placeholder="Digite sua senha"
                    value={password}
                    senha
                    onChange={setPassword}
                />

                <Button 
                    label="Login"
                    onPress={handlePressButton}
                />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    formArea: {
        gap: 30,
        marginTop: 25
    }
})

export default Screen