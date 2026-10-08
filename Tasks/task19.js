   import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';
import MyClassPage from '../Components/MyClassComponent_task19';
componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }))
  }
export default class Task19 extends Component {
  state = {
      showPage: false,
    };


render() {
    return (
        <View style={styles.container}>
            
            <Button title={this.state.showPage ? "Hide" : "Show"} onPress={() => this.setState({ showPage: !this.state.showPage })} />
                 {this.state.showPage ? <MyClassPage /> : null}
        </View>
      );
    }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },

});
