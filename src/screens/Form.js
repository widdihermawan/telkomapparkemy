import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Content, List, ListItem, Text,Fab } from 'native-base';
import {MaterialIcons} from '@expo/vector-icons'


export default class Form extends React.Component {

    constructor() {
        super();
    }
    render() {
        return (
            <Container>
              <Content>
              <List>
                <ListItem>
                  <Text>Simon Mignolet</Text>
                </ListItem>
                <ListItem>
                  <Text>Nathaniel Clyne</Text>
                </ListItem>
                <ListItem>
                  <Text>Dejan Lovren</Text>
                </ListItem>
              </List>
            </Content>

            <Fab 
                containerStyle={{}}
                style={{backgroundColor:'red'}}
                position="bottomRight"
                onPress={() =>{}}>
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
