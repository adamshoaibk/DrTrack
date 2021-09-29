import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, FlatList, View} from 'react-native';
import DiabetesReadingCard from '../molecules/Forms/DiabetesReadingCard';

class ReadingsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }

  componentDidMount = () => {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={({item, index}) => (
            <DiabetesReadingCard
              item={item}
              onPress={() => this.props.cardPressed(item)}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.margin} />}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  margin: {
    marginTop: 10,
  },
});

export default ReadingsList;
