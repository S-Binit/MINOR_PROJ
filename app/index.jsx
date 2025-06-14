import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import Logo from '../assets/logo1.png' 

const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={Logo}></Image>

        <Text style={[styles.title, {color: 'purple'}]}>The Number 1</Text>

        <Text style={{marginTop: 10, marginBottom: 30}}>Waste Tracking App</Text>

    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
  
})