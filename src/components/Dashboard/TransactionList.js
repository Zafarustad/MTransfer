import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import TransactionCard from './TransactionCard';

const {width} = Dimensions.get('window');

const TransactionListData = [
  {
    id: 1,
    name: 'Adeboye Usman',
    status: 'Received',
    amount: '200,000',
    profileUri: require('../../assests/Transaction-Profile/propic-1.png'),
  },
  {
    id: 2,
    name: 'Mercy Popoola',
    status: 'Failed',
    amount: '200,000',
    profileUri: require('../../assests/Transaction-Profile/propic-2.png'),
  },
  {
    id: 3,
    name: 'Onome Adetayo',
    status: 'Sent',
    amount: '200,000',
    profileUri: require('../../assests/Transaction-Profile/propic-3.png'),
  },
  {
    id: 4,
    name: 'Kingsley Abiodun',
    status: 'Received',
    amount: '200,000',
    profileUri: require('../../assests/Transaction-Profile/propic-4.png'),
  },
  {
    id: 5,
    name: 'Adeleke Adeyanju',
    status: 'Received',
    amount: '200,000',
    profileUri: require('../../assests/Transaction-Profile/propic-5.png'),
  },
  {
    id: 6,
    name: 'Aduni Wale',
    status: 'Received',
    amount: '200,000',
    profileUri: require('../../assests/Transaction-Profile/propic-6.png'),
  },
  {
    id: 7,
    name: 'Adeboye Usman',
    status: 'Failed',
    amount: '200,000',
    profileUri: require('../../assests/Transaction-Profile/propic-7.png'),
  },
  {
    id: 8,
    name: 'Kingsley Abiodun',
    status: 'Sent',
    amount: '200,000',
    profileUri: require('../../assests/Transaction-Profile/propic-8.png'),
  },
];

const TransactionList = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.hLine} />
      <View style={styles.sortSection}>
        <Text style={{fontSize: 16}}>All Transaction</Text>
        <Text style={{fontSize: 16}}>Sort By</Text>
      </View>
      <FlatList
        data={TransactionListData}
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
