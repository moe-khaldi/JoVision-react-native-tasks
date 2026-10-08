   import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';

class Task18 extends Component {
  constructor(props) {
    super(props);
    this.state = {
       loading: true
    };
}

    componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ loading: false });
    }, 5000);
  
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
render() {
    return (
        <View style={styles.container}>
                      {this.state.loading ? (<ActivityIndicator size="large" />) : (<Text style={styles.text}>Mohammad</Text>)}

            
            
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
export default Task18;