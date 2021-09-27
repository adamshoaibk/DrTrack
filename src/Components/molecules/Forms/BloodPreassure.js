import React from 'react';
import {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as css from '../../../Styles/Colours';
import * as size from '../../../Styles/Mixins';
import TextBox from '../../atoms/TextBox';

class BloodPreassure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bBf: '',
      modalVisible: false,
      formModalVisible: false,
      formType: '',
    };
  }
  onChange = e => {
    this.setState({bbf: e});
  };
  render() {
    const {bBf} = this.state;
    return (
      <View>
        <Text>Coming Soon !</Text>
        <Text>Work In Progress !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default BloodPreassure;
