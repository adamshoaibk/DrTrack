import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import * as css from '../../Styles/Colours';
import * as size from '../../Styles/Mixins';

const TextBox = props => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{props.label}</Text>
        <TextInput
          keyboardType={props.keyboardType}
          style={styles.input}
          maxLength={props.maxLength}
          onChangeText={e => {
            props.onChange(e);
          }}
          value={props.value.toString()}
        />
        <Text>{'mg/dL'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    minWidth: 100,
  },
  container: {
    ...size.FLEX_CENTER,
    flexDirection: 'row',
  },
  input: {
    height: 30,
    width: 60,
    margin: 12,
    borderWidth: 1,
    padding: 0,
    paddingHorizontal: 8,
  },
});

export default TextBox;
