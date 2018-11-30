import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


//deklarasi component header
export default class Header extends React.Component {
    render (){
      return (
        <View style={styles.header}>
        {/* pemanggilan component left */}
        {/* <NavButton text="Back"/> */}
          <Text style={styles.textHeader}>{this.props.title}</Text>
        {/* penggilan komponen right */}
        {/* <NavButton text="Next"/> */}
         </View>
      )
    }  
  }

  // deklarasi komponen Left
    class NavButton extends React.Component{
    render(){
      return(
        <View style={styles.containerButton}>
          <Text style={styles.textButton}>{this.props.text}</Text>
        </View>
      )
    }
  }
  // deklrasi komponen Right
  // class Right extends React.Component{
  //   render(){
  //     return(
  //       <View style={styles.containerButton}>
  //          <Text style={styles.textButton}>Right</Text>
  //       </View>
  //     )
  //   }
  // }

  const styles = StyleSheet.create({
    header :{
        height:50,
        alignItems : 'center',
        justifyContent : 'center',
        justifyContent : 'space-between',
        backgroundColor : 'red',
        flexDirection: 'row'
      },
        textHeader :{
        color :'white',
        fontSize :20
      },
        textButton :{
        color : 'white',
        fontSize :17
        },
        containerButton: {
          margin :10
        }

  })