import { router } from 'expo-router'
import { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

const Screen = () => {
    const changePage = () => {
        setTimeout(() => router.replace('/login'), 3000);
    }

    useEffect(() => {
        changePage()
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.logoArea}>
                <Image 
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                    resizeMode='cover'
                />
            </View>
            <View style={styles.logoNameArea}>
                <Text style={styles.logoName}>PizzaNotes</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F47C7C'
    },
    logoArea: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        backgroundColor: '#FFF',
        borderRadius: '50%'
    },
    logo: {
        width: 150,
        height: 150
    },
    logoNameArea: {
        paddingVertical: 5,
        paddingHorizontal: 30,
        marginTop: 20,
        backgroundColor: '#FFF',
        borderRadius: 20
    },
    logoName: {
        color: '#F47C7C',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Screen