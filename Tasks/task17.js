   import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';

class Task17 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: true
    };
}
componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }))
  }
render() {
    return (
        <View style={styles.container}>
            {!this.state.content ? <Text style={styles.text}>Mohammad</Text> : null}
            <Button title={this.state.content ? "Show" : "Hide"} onPress={this.componentHideAndShow} />
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
export default Task17;