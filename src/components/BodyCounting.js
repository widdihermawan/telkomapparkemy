import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

export default class BodyCounting extends React.Component {
    
      //deklarasi state counter
    state = {
        counter :0,
        backgroundColor:'#fff'
    }

   componentDidMount(){
       setInterval(this.handelChangeBackgroundColor, 2000)
   }

   handelChangeBackgroundColor =() =>{
       this.setState({
            backgroundColor:this.getRandomColor()
       })
   }

    handelPressButtonPLUS =()=>{
       // alert('Button Plus')
       const currentCounter = this.state.counter;
       this.setState({
           counter: currentCounter + 1
       })

    }

    handelPressButtonMINUS =()=>{
        //alert('Button Minus')
        const currentCounter = this.state.counter;
        this.setState({
            counter: currentCounter - 1
        })
    }
 

    handelPressButtonCLEAR=()=>{
        //alert('Button Clear')
        const currnetCounter= this.state.counter;
        this.setState({
            counter : currentCounter = 0
        })
    }
     
    getRandomColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++){
            color +=letters[Math.floor(Math.random()*16)];
        }
        return color;
    }
    
    render(){
        return(
            <View style={[
                styles.container,
                {backgroundColor:this.state.backgroundColor}]}>
                <Text style={styles.fontstyle}> Widdi Hermawan Arkademy </Text>  
                <Text style={styles.number}>
                    {/* pemanggilan state counter */}
                    {this.state.counter}
                </Text>
            <Button
                title="Plus + 1"
                color="red"
                onPress={this.handelPressButtonPLUS}
            />
            <Button
                title="Minus - 1"
                color="gray"
                onPress={this.handelPressButtonMINUS}
                />
            <Button
                title="RESET ke 0"
                color="black"
                onPress={this.handelPressButtonCLEAR}
                />
            </View>
        )
    }
}
   const styles = StyleSheet.create ({
    container :{
        flex :10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    number :{
        fontSize:200,
        margin:20,
        color :'orange'
    },
    fontstyle :{
        fontSize:25,
        color : 'white'
    }
})