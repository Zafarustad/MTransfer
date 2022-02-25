import React from 'react';
import {View, Text, StyleSheet, StatusBar, Pressable} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TransactionList from './TransactionList';

const DashBoard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor={'#010A43'} />
      <View style={styles.headerSection}>
        <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 25}}>
          Hello Sandra,
        </Text>
        <View style={styles.addMoney}>
          <Text style={{color: '#426DDC'}}>Add money</Text>
        </View>
      </View>
      <View style={styles.balanceSection}>
        <Text style={styles.balanceText}>Your current balance is</Text>
        <Text style={styles.currBal}>&#8377; 200,000</Text>
      </View>
      <View style={styles.makeTransactionSection}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate('Search', {transactionType: 'send'})
          }
          style={[styles.transactionBtn, {marginRight: 30}]}>
          <Text style={styles.btnText}>Request Money</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate('Search', {transactionType: 'request'})
          }
          style={styles.transactionBtn}>
          <Text style={styles.btnText}>Send Money</Text>
        </TouchableOpacity>
      </View>
      <TransactionList />
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010A43',
    paddingHorizontal: 20,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  addMoney: {
    backgroundColor: '#212A6B',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  balanceSection: {
    marginTop: 50,
  },
  balanceText: {
    color: '#FFF',
    fontWeight: '300',
  },
  currBal: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 60,
    marginTop: 5,
  },
  makeTransactionSection: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  transactionBtn: {
    width: 170,
    marginTop: 10,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#464E8A',
    borderWidth: 1,
  },
  btnText: {
    color: '#464E8A',
    fontSize: 16,
  },
});
