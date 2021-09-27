import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import * as css from '../../Styles/Colours';
import * as size from '../../Styles/Mixins';
import * as constant from '../../Utils/constants';
import BloodPreassure from '../molecules/Forms/BloodPreassure';
import Diabetes from '../molecules/Forms/Diabetes';

class AddDetailFormModal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            this.props.closeModal();
          }}>
          <TouchableWithoutFeedback onPress={this.props.closeModal}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View>
                  {this.props.formType === constant.BloodPreassure ? (
                    <BloodPreassure />
                  ) : (
                    <Diabetes />
                  )}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 350,
    height: 500,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: size.BORDER_RADIUS,
    paddingVertical: 15,
    paddingHorizontal: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default AddDetailFormModal;
