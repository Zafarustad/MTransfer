import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import BackIcon from '../assests/icons/back-icon.png';
import {addTransaction, setBalance} from '../Redux/transactionSlice';
import {nanoid} from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');

const Requests = ({navigation}) => {
  const dispatch = useDispatch();
  const [requests, setRequests] = useState([
    {
      id: nanoid(),
      name: 'Adeleke Ramon',
      amount: '200000',
      image: 'https://i.pravatar.cc/150?img=17',
    },
  ]);
  const {balance} = useSelector(({transaction}) => transaction);

  const sendMoney = () => {
    if (parseInt(balance) >= parseInt(requests[0].amount)) {
      dispatch(addTransaction({...requests[0], status: 'sent'}));
      dispatch(setBalance(parseInt(balance) - parseInt(requests[0].amount)));
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Transaction Completed ✅',
        position: 'bottom',
        bottomOffset: 20,
      });
      setRequests([]);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Failed',
        text2: 'Not enough Balance ❌',
        position: 'bottom',
        bottomOffset: 20,
      });
    }
  };

  const cancelRequest = () => {
    setRequests([]);
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Request Removed ✅',
      position: 'bottom',
      bottomOffset: 20,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backCont}>
          <Image source={BackIcon} style={styles.backIcon} />
          <Text style={styles.backTxt}>Back</Text>
        </Pressable>
        <Text style={styles.headerTxt}>New Request</Text>
      </View>
      {requests.length > 0 ? (
        <>
          <View style={styles.circles}>
            <View style={styles.outerCircle}>
              <View style={styles.innerCircle}>
                <Image
                  source={{uri: requests[0].image}}
                  style={styles.userImg}
                />
              </View>
            </View>
          </View>
          <Text style={styles.name}>{requests[0].name}</Text>
          <Text style={styles.requestingFor}>is requesting for:</Text>
          <Text style={styles.amount}>
            &#8377;{' '}
            {requests[0].amount
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
          <View style={styles.makeTransactionSection}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => sendMoney()}
              style={[
                styles.transactionBtn,
                {backgroundColor: '#FF2E63', borderWidth: 0},
              ]}>
              <Text style={[styles.btnText, {color: '#FFF'}]}>Send Money</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => cancelRequest()}
              style={[styles.transactionBtn, {marginTop: 24}]}>
              <Text style={styles.btnText}>Don't Money</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.noReqWrapper}>
          <Text style={styles.noReq}>No requests</Text>
        </View>
      )}
    </View>
  );
};

export default Requests;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center',
    backgroundColor: '#010A43',
    paddingHorizontal: 20,
  },
  headerWrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: width,
  },
  headerTxt: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
  backCont: {
    alignItems: 'center',
    width: '20%',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    position: 'absolute',
    left: 20,
  },
  backIcon: {
    width: 10,
    height: 20,
    marginRight: 15,
  },
  backTxt: {
    fontSize: 16,
    color: '#D7C9C9',
  },
  circles: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    width: 200,
    height: 200,
    backgroundColor: '#10194E',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 150,
    height: 150,
    backgroundColor: '#192259',
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImg: {
    width: 100,
    height: 100,
    borderRadius: 150,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    color: '#FFF',
  },
  requestingFor: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
    color: '#FFF',
  },
  amount: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  makeTransactionSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  transactionBtn: {
    width: 150,
    marginTop: 10,
    padding: 5,
    height: 60,
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
  noReqWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noReq: {
    fontSize: 25,
    color: '#FFF',
  },
});
