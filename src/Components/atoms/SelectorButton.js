import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as css from '../../Styles/Colours';
import * as size from '../../Styles/Mixins';

const SelectorButton = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          props.onClick();
        }}>
        <Text>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    ...size.FLEX_CENTER,
    ...size.BORDER_STYLE,
    borderColor: css.BORDER_COLOR,
    backgroundColor: css.BUTTON_BACKGROUND_COLOUR,
    height: 40,
    width: 120,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default SelectorButton;
