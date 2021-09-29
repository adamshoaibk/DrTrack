import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as css from '../../Styles/Colours';
import * as size from '../../Styles/Mixins';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ActionLogoButton = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          props.onClick();
        }}>
        <Ionicons name={props.icon} size={props.size} color={props.color} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    ...size.FLEX_CENTER,
    ...size.BORDER_STYLE,
    borderColor: css.BORDER_COLOR,
    height: 30,
    width: 50,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default ActionLogoButton;
