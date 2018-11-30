import React from 'react';
import {View, Button, Text,Image, StyleSheet} from 'react-native'

//deklarasi component body
export default class Body extends React.Component {
      constructor(){
        super();
        this.state = {
          showContent : 'hidden'
        }
      }

      componentDidMount(){
        setTimeout(this.task,5000)
      }

      task = () => {
        this.setState({
          showContent: 'show'
        })
      }

      renderContent = () => {
        if (this.state.showContent == 'hidden'){
          return null
        }else{
          return(
            <View>
            <Text style={styles.textbody}>body Arkademy</Text>
          <AppChild/>
              <Image source={require('../../ypt-logo-02.jpg')} 
              style ={{width:50, height:50}}>
              </Image>
  
              <Image source={require('../../0-nuptk.jpg')} 
               style ={{width:150, height:200}}>
               </Image>
  
          <Text style={styles.textbody}>
          <Text>Open up App.js to start working on your app</Text>
            <Text>Create by Widdi Hermawan Amd, S.Kom, MPd </Text>
            <Text> Jakarta, 2018 </Text>
          </Text>
            
                    
          <Button
            onPress={this.onPressButton1}
            title="ARkademy"
            color="black"
            accessibilityLabel="Learn more than this people"
          />
  
          <Button
            onPress={this.onPressButton2}
            title="SMK Telkom Banjarbaru"
            color="red"
            accessibilityLabel="Learn more than this people"
          />
          <AppChild/>
  
          <Text>Selamat datang di Aplikasi Arkademy</Text>
        </View>
          )
        }
      }

    onPressButton1 = ()=> {
      alert('Selamat Datang Di ARkademy')
    }
   
    onPressButton2 = ()=> {
      alert('Selamat Datang di SMK Telkom Banjarbaru')
    }
    render (){
      return (
        <View style={styles.body}>
          {this.renderContent()}
        </View>
      )
    }  
  }

    
  class AppChild extends React.Component{
    render() {
      return (
        <View>
          <Text>Child App Component </Text>
          </View>
      )
    }
  }
      const styles = StyleSheet.create({
        body :{
          flex :1,
          alignItems : 'center',
          justifyContent : 'center',
          backgroundColor : 'white'
     
    }
})

 