import { StyleSheet, Text, View, Image} from 'react-native' //imports core components for React Native
import React from 'react'  //imports react so we can use jsx and components\
import Logo from '../assets/logo1.png' //need to import logo as it is not inbuilt in ReactNative

const Home = () => {                  //simply a function "Home"
  return (                            
    <View style ={styles.container}>    {/*view is a container, we pulled container object from styless in <view style>*/}
      <Image source={Logo}></Image>

      <Text style = {styles.title}>The Number 1</Text>  {/*we pulled title object from styless in <view style>*/}

      <Text style = {{marginTop: 10, marginBottom: 30}}>Reading List App</Text>  {/*we can also do inline styles*/}

    </View>                                    
  )
}

export default Home             //exports a function so it can be used elsewhere.

const styles = StyleSheet.create({            //setting up a styles object
  container: {                                 //container is an object itself
    flex: 1,                                  
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
})      