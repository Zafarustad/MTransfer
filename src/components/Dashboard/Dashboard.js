import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import TransactionList from './TransactionList';
import {useSelector} from 'react-redux';
import BurgerMenu from '../../assests/icons/burger-menu.png';

const DashBoard = ({navigation}) => {
  const {balance} = useSelector(({transaction}) => transaction);

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor={'#010A43'} />
      <View style={styles.headerSection}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.openDrawer()}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={BurgerMenu} style={styles.menuIcon} />
          <Text style={styles.username}>Hello Sandra,</Text>
        </TouchableOpacity>
        <View style={styles.addMoney}>
          <Text style={{color: '#426DDC'}}>Add money</Text>
        </View>
      </View>
      <View style={styles.balanceSection}>
        <Text style={styles.balanceText}>Your current balance is</Text>
        <Text style={styles.currBal}>&#8377; {balance}</Text>
      </View>
      <View style={styles.makeTransactionSection}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate('Search', {transactionType: 'request'})
          }
          style={[styles.transactionBtn, {marginRight: 30}]}>
          <Text style={styles.btnText}>Request Money</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate('Search', {transactionType: 'send'})
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
  menuIcon: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  username: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25,
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
