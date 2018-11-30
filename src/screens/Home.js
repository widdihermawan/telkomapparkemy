import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Header from '../components/Header';
import Body from '../components/Body';


export default class Home extends React.Component {

  constructor() {
  super();
  }

  //Handel Tombol Nav Counter
  HendleNav = () =>{
    this.props.navigation.navigate('Counter');
    }

 //Handel Tombol Navite Base
    NativeBase =() => {
     this.props.navigation.navigate('NativeBase')
   }


  
  // diekseskusi sebelum render
  componentWillMount() { //deprecated
    console.log('ini will mount');
   }

  
  componentDidMount() {
    console.log('ini did Mount')
   }
   
  render() {

    console.log('ini render');

    return (
      <View style={styles.container}>
    
        {/* pemanggilana komponen header */}
         <Header title="COUNTER NUMBER"/> 

         <Button
         title ="NAV to Counter Page"
         color  ="gray"
         onPress={this.HendleNav}
         />

        <Button
        title = "NAV to Native Base"
        color ="black"
        onPress={this.NativeBase}
        />


         {/*panggilan component boyd */}
         <Body/>
      </View>
      
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth : 5,
    paddingTop:20
  },
  

  textbody :{
    color :'white',
    fontSize :15,
    textAlign : 'center'
    },
  
  
     
});
