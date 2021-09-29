import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import * as size from '../../../Styles/Mixins';
import * as color from '../../../Styles/Colours';
import moment from 'moment';
import ActionLogoButton from '../../atoms/ActionLogoButton';

const DiabetesReadingCard = props => {
  return (
    <View style={styles.cardStyle}>
      {/* Header */}
      <View style={styles.headerStyle}>
        <Text>{props.item.type?.toUpperCase()}</Text>
        <Text>{moment(props.item.date).format('DD-MM-YYYY')}</Text>
      </View>
      {/* Header */}
      {/* Readings */}
      <View style={styles.readingListStyle}>
        <View>
          <Text>bBF</Text>
          <Text style={styles.textCenter}>
            {props.item.readings.bBf ? props.item.readings.bBf : '-'}
          </Text>
        </View>
        <View>
          <Text>aBF</Text>
          <Text style={styles.textCenter}>
            {props.item.readings.aBf ? props.item.readings.aBf : '-'}
          </Text>
        </View>
        <View>
          <Text>bLunch</Text>
          <Text style={styles.textCenter}>
            {props.item.readings.bLun ? props.item.readings.bLun : '-'}
          </Text>
        </View>
        <View>
          <Text>aLunch</Text>
          <Text style={styles.textCenter}>
            {props.item.readings.aLun ? props.item.readings.aLun : '-'}
          </Text>
        </View>
        <View>
          <Text>bDinner</Text>
          <Text style={styles.textCenter}>
            {props.item.readings.bDin ? props.item.readings.bDin : '-'}
          </Text>
        </View>
        <View>
          <Text>aDinner</Text>
          <Text style={styles.textCenter}>
            {props.item.readings.aDin ? props.item.readings.aDin : '-'}
          </Text>
        </View>
      </View>
      {/* Readings */}
      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <View />
        <View style={styles.actionButtonContainer}>
          <View style={styles.marginRight}>
            <ActionLogoButton
              icon={'trash-outline'}
              size={size.ICON_SIZE}
              color={color.RED}
              onClick={() => {}}
              label={'Delete'}
            />
          </View>
          <View>
            <ActionLogoButton
              icon={'pencil-outline'}
              size={size.ICON_SIZE}
              color={color.GREEN}
              onClick={() => {}}
              label={'Delete'}
            />
          </View>
        </View>
      </View>
      {/* Action Buttons */}
    </View>
  );
};

const styles = StyleSheet.create({
  textCenter: {
    alignSelf: 'center',
  },
  marginRight: {
    marginRight: 10,
  },
  actionButtonContainer: {
    ...size.FLEX_ROW,
  },
  actionContainer: {
    ...size.FLEX_ROW,
    justifyContent: 'space-between',
  },
  headerStyle: {
    paddingVertical: 10,
    ...size.FLEX_ROW,
    justifyContent: 'space-between',
  },
  readingListStyle: {
    paddingBottom: 10,
    ...size.FLEX_ROW,
    flex: 1,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  cardStyle: {
    flex: 1,
    minWidth: '97%',
    minHeight: 80,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 15,
  },
});

export default DiabetesReadingCard;
