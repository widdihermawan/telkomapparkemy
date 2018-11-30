import React from 'react';
import { StyleSheet, View,} from 'react-native';

import Header from '../components/Header';
import BodyCounting from '../components/BodyCounting';


export default class Counter extends React.Component {

  constructor() {
  super();
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
         {/* <Header title="COUNTER NUMBER"/>  */}

         {/*penggilan component boyd */}
         <BodyCounting/>
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
