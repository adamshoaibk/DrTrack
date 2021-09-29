import React from 'react';
import {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as css from '../../../Styles/Colours';
import * as size from '../../../Styles/Mixins';
import TextBox from '../../atoms/TextBox';
import moment from 'moment';
import SelectorButton from '../../atoms/SelectorButton';
import * as constants from '../../../Utils/constants';

class Diabetes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bBf: '',
      aBf: '',
      bLun: '',
      aLun: '',
      bDin: '',
      aDin: '',
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
  datePickRequest = e => {
    this.props.datePickRequest(this.props.date);
  };
  saveFormRequest = () => {
    const {bBf, aBf, bLun, aLun, bDin, aDin} = this.state;
    const formData = {
      readings: {
        bBf: bBf,
        aBf: aBf,
        bLun: bLun,
        aLun: aLun,
        bDin: bDin,
        aDin: aDin,
      },
      dateKey: moment(this.props.date).format('DD-MM-YYYY'),
      date: this.props.date,
      type: constants.Diabetes,
    };
    this.props.saveFormDate(formData);
  };

  render() {
    const {bBf, aBf, bLun, aLun, bDin, aDin} = this.state;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.datePickRequest();
          }}>
          <View style={styles.containerStyle}>
            <Text>{moment(this.props.date).format('Do MMM YYYY')}</Text>
          </View>
        </TouchableOpacity>
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
        <View style={styles.buttonContainer}>
          <View style={styles.buttonLeftSpace}>
            <SelectorButton
              label="Cancel"
              onClick={() => {
                this.props.closeModal();
              }}
            />
          </View>
          <View>
            <SelectorButton
              label="Save"
              onClick={() => {
                this.saveFormRequest();
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    ...size.FLEX_CENTER,
    marginBottom: 30,
    height: 30,
    shadowColor: '#4e4f72',
    shadowOpacity: 0.6,
    shadowRadius: 30,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    borderColor: css.BORDER_COLOR,
    backgroundColor: css.BUTTON_BACKGROUND_COLOUR,
    borderWidth: 1,
    borderRadius: 30,
    elevation: 30,
  },
  buttonContainer: {
    ...size.FLEX_CENTER,
    flexDirection: 'row',
  },
  buttonLeftSpace: {
    marginRight: size.BUTTON_SPACE,
  },
});

export default Diabetes;
