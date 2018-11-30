import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Fab, Spinner } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'
import axios from 'axios'; // lib untuk ged data

export default class NativeBase extends React.Component {

    // deklarasi data kosong
    state = {
        data: [],
        isLoading: false
    }

    componentDidMount() {
        //set loading true
        this.setState({
            isLoading: true
        })
        //get data online dari api
        axios({

            url: 'http://jsonplaceholder.typicode.com/todos',
            method: "GET", // enum POST, PUT, GET, DELETE
        }).then((succResult) => {
            console.log(succResult)
            //set state data kosong ke data online api
            this.setState({
                data: succResult.data,
                isLoading: false
            })

        }).catch((errResult) => {
            alert(errResult)
        })

    }

    handleNavForm = () => {
        this.props.navigation.navigate('Form')
    }

    renderList = (item, index) => {
        return (
            <ListItem key={index}>
                <Text>{item.title} </Text>
            </ListItem>)
    }


    render() {
        return (
            <Container>
                {this.state.isLoading === true ? <Spinner /> : null}
                <Content>
                    <List>
                        {this.state.data.map(this.renderList)}
                    </List>
                </Content>

                <Fab
                    containerStyle={{}}
                    style={{ backgroundColor: 'red' }}
                    position="bottomRight"
                    onPress={this.handleNavForm}>
                    <MaterialIcons name="add" />
                </Fab>
            </Container>

        );
    }
}

// deklarasi style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
        // flexDirection : 'row' for oriantation
    }


});
