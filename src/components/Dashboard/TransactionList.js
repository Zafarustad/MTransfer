import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import TransactionCard from './TransactionCard';
import {useSelector} from 'react-redux';

const {width} = Dimensions.get('window');

const TransactionList = () => {
  const {transactions} = useSelector(({transaction}) => transaction);

  return (
    <View style={styles.wrapper}>
      <View style={styles.hLine} />
      <View style={styles.sortSection}>
        <Text style={{fontSize: 16}}>All Transaction</Text>
        <Text style={{fontSize: 16}}>Sort By</Text>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <TransactionCard item={item} index={index} />
        )}
      />
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
    paddingTop: 5,
    backgroundColor: '#10194E',
    flex: 1,
    width: width,
    alignSelf: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  hLine: {
    alignSelf: 'center',
    backgroundColor: '#4E589F',
    width: 64,
    height: 7,
    borderRadius: 10,
    marginTop: 10,
  },
  sortSection: {
    justifyContent: 'space-between',
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 30,
  },
});
