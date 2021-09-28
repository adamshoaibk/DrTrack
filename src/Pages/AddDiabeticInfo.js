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
import {connect} from 'react-redux';
import {addDiabetesData} from '../Redux/Actions';

import DateTimePicker from '@react-native-community/datetimepicker';

class AddDiabeticInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true,
      modalVisible: false,
      formModalVisible: false,
      formType: '',
      date: new Date(),
      renderCalenderPicker: false,
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

  openCalenderPicker = selectedDate => {
    this.setState({formModalVisible: false, date: selectedDate}, () => {
      this.setState({renderCalenderPicker: true});
    });
  };

  setDates = (event, selectedDate) => {
    this.setState({date: selectedDate, renderCalenderPicker: false}, () => {
      this.setState({formModalVisible: true});
    });
  };

  saveFormDate = data => {
    this.setState({formModalVisible: false});
    this.props.addDiabetesData(data);
  };

  render() {
    const {
      modalVisible,
      formModalVisible,
      formType,
      date,
      renderCalenderPicker,
    } = this.state;
    console.log('State : ', this.props.diabetesData);
    return (
      <View style={styles.container}>
        {/* Floating Add Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.addButtonStyle}
            onPress={() => {
              this.onAddButtonClicked();
            }}>
            <Text>Add +</Text>
          </TouchableOpacity>
        </View>
        {/* Floating Add Button */}

        {/* Modal to select the reading type BP or diabetic */}
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
        {/* Modal to select the reading type BP or diabetic */}

        {/* Form */}
        <View>
          <AddDetailFormModal
            closeModal={() => {
              this.setState({formModalVisible: false});
            }}
            date={date}
            formType={formType}
            modalVisible={formModalVisible}
            datePickRequest={selectedDate => {
              this.openCalenderPicker(selectedDate);
            }}
            saveFormDate={formData => {
              this.saveFormDate(formData);
            }}
          />
        </View>
        {/* Form */}

        {/* Date Picker Modal */}
        {renderCalenderPicker && (
          <View style={styles.datePickerContainer}>
            <DateTimePicker
              timeZoneOffsetInMinutes={0}
              value={date ? date : new Date()}
              mode={'date'}
              is24Hour={true}
              maximumDate={new Date()}
              display="default"
              onChange={this.setDates}
            />
          </View>
        )}
        {/* Date Picker Modal */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  datePickerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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

const mapStateToProps = (state, ownProps) => {
  const {diabetesData} = state;
  return {
    ...diabetesData,
  };
};

export default connect(mapStateToProps, {addDiabetesData})(AddDiabeticInfo);
