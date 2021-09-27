import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import SelectorButton from '../Components/atoms/SelectorButton';
import * as colour from '../Styles/Colours';
import * as size from '../Styles/Mixins';
import AddDetailFormModal from '../Components/organisms/AddDetailFormModal';
import * as constants from '../Utils/constants';

class AddDiabeticInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true,
      modalVisible: false,
      formModalVisible: false,
      formType: '',
    };
  }

  onAddButtonClicked = () => {
    this.setState({modalVisible: true});
  };

  closeBottomModal = () => {
    this.setState({modalVisible: false});
  };

  openForm = formType => {
    this.setState({modalVisible: false, formType: formType}, () => {
      this.setState({formModalVisible: true});
    });
  };

  render() {
    const {modalVisible, formModalVisible, formType} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.addButtonStyle}
            onPress={() => {
              this.onAddButtonClicked();
            }}>
            <Text>Add +</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              this.closeBottomModal();
            }}>
            <TouchableWithoutFeedback
              onPress={() => {
                this.closeBottomModal();
              }}>
              <View style={styles.modalContainer}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <SelectorButton
                      label="Diabetic"
                      onClick={() => {
                        this.openForm(constants.Diabetes);
                      }}
                    />
                    <SelectorButton
                      label="Blood Pressure"
                      onClick={() => {
                        this.openForm(constants.BloodPreassure);
                      }}
                    />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
        <View>
          <AddDetailFormModal
            closeModal={() => {
              this.setState({formModalVisible: false});
            }}
            formType={formType}
            modalVisible={formModalVisible}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  centeredView: {
    ...size.BOTTOM_FIX,
    flex: 1,
    marginBottom: 48,
  },
  buttonContainer: {
    ...size.BOTTOM_FIX,
    marginBottom: 20,
  },
  addButtonStyle: {
    ...size.BORDER_STYLE,
    ...size.FLEX_CENTER,
    borderColor: colour.BORDER_COLOR,
    backgroundColor: colour.BUTTON_BACKGROUND_COLOUR,
    height: 40,
    width: 120,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
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

export default AddDiabeticInfo;
