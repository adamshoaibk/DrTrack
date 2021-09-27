import React from 'react';
import {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as css from '../../../Styles/Colours';
import * as size from '../../../Styles/Mixins';
import TextBox from '../../atoms/TextBox';

class Diabetes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bBf: 0,
      aBf: 0,
      bLun: 0,
      aLun: 0,
      bDin: 0,
      aDin: 0,
      modalVisible: false,
      formModalVisible: false,
      formType: '',
    };
  }
  onChangebBf = e => {
    const filterValue = e.replace(/[^0-9]/g, '');
    this.setState({bBf: filterValue});
  };
  onChangeaBf = e => {
    const filterValue = e.replace(/[^0-9]/g, '');
    this.setState({aBf: filterValue});
  };
  onChangebLun = e => {
    const filterValue = e.replace(/[^0-9]/g, '');
    this.setState({bLun: filterValue});
  };
  onChangeaLun = e => {
    const filterValue = e.replace(/[^0-9]/g, '');
    this.setState({aLun: filterValue});
  };
  onChangebDin = e => {
    const filterValue = e.replace(/[^0-9]/g, '');
    this.setState({bDin: filterValue});
  };
  onChangeaDin = e => {
    const filterValue = e.replace(/[^0-9]/g, '');
    this.setState({aDin: filterValue});
  };
  render() {
    const {bBf, aBf, bLun, aLun, bDin, aDin} = this.state;
    return (
      <View>
        <View style={styles.containerStyle}>
          <Text>Calender Picker Here</Text>
        </View>
        <View>
          <TextBox
            maxLength={3}
            keyboardType="numeric"
            label="Before Breakfast"
            value={bBf}
            onChange={e => {
              this.onChangebBf(e);
            }}
          />
          <TextBox
            maxLength={3}
            keyboardType="numeric"
            label="After Breakfast"
            value={aBf}
            onChange={e => {
              this.onChangeaBf(e);
            }}
          />
          <TextBox
            maxLength={3}
            keyboardType="numeric"
            label="Before Lunch"
            value={bLun}
            onChange={e => {
              this.onChangebLun(e);
            }}
          />
          <TextBox
            maxLength={3}
            keyboardType="numeric"
            label="After Lunch"
            value={aLun}
            onChange={e => {
              this.onChangeaLun(e);
            }}
          />
          <TextBox
            maxLength={3}
            keyboardType="numeric"
            label="Before Dinner"
            value={bDin}
            onChange={e => {
              this.onChangebDin(e);
            }}
          />
          <TextBox
            maxLength={3}
            keyboardType="numeric"
            label="After Dinner"
            value={aDin}
            onChange={e => {
              this.onChangeaDin(e);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    ...size.FLEX_CENTER,
    marginBottom: 30,
  },
});

export default Diabetes;
