import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ActionSheet from 'react-native-actions-sheet';
import CloseIcon from '../../assests/icons/close.png';
import Toast, {BaseToast} from 'react-native-toast-message';
import {addTransaction, setBalance} from '../../Redux/transactionSlice';
import NumPad from './NumPad';

const {width, height} = Dimensions.get('window');

const toastConfig = {
  info: props => <BaseToast {...props} style={{borderLeftColor: '#FAAD39'}} />,
};

const Header = ({sheetRef, setAmount}) => (
  <View style={styles.headerWrapper}>
    <Pressable
      onPress={() => {
        sheetRef.current?.hide();
        setAmount('');
      }}
      style={styles.closeBtn}>
      <Image source={CloseIcon} />
    </Pressable>
  </View>
);

const AmountModal = ({amountActionSheetRef, user, transactionType}) => {
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const {balance} = useSelector(({transaction}) => transaction);

  const getNewBalance = add => {
    let total;
    total = add
      ? parseInt(balance) + parseInt(amount)
      : parseInt(balance) - parseInt(amount);
    return total.toString();
  };

  const completeTransaction = () => {
    dispatch(
      addTransaction({
        ...user,
        amount,
        status: transactionType === 'send' ? 'Sent' : 'Received',
      }),
    );
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Transaction Completed ✅',
      position: 'bottom',
      bottomOffset: 120,
    });

    setTimeout(() => {
      amountActionSheetRef.current?.hide();
    }, 1000);
  };

  const continueTransaction = () => {
    if (transactionType === 'request') {
      dispatch(setBalance(getNewBalance(true)));
      completeTransaction();
    } else {
      if (parseInt(balance) >= parseInt(amount)) {
        dispatch(setBalance(getNewBalance(false)));
        completeTransaction();
      } else {
        Toast.show({
          type: 'error',
          text1: 'Failed',
          text2: 'Not enough Balance ❌',
          position: 'bottom',
          bottomOffset: 120,
        });
      }
    }
  };

  return (
    <ActionSheet
      ref={amountActionSheetRef}
      onClose={() => setAmount('')}
      gestureEnabled
      indicatorColor="#4E589F"
      closeOnPressBack
      CustomHeaderComponent={
        <Header sheetRef={amountActionSheetRef} setAmount={setAmount} />
      }
      defaultOverlayOpacity={0.6}
      containerStyle={styles.container}>
      <View style={styles.keypadWrapper}>
        <View style={styles.inputWrapper}>
          <Text style={{fontSize: 50, color: '#FFF', fontWeight: 'bold'}}>
            &#8377;{' '}
            {amount === '' ? (
              <Text style={{fontSize: 64, color: '#FFF'}}> 0.00 </Text>
            ) : (
              <Text style={{fontSize: 64, color: '#FFF'}}>
                {parseFloat(amount).toFixed(2)}
              </Text>
            )}
          </Text>
        </View>
        <NumPad setAmount={setAmount} amount={amount} />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => continueTransaction()}
          style={styles.submitBtn}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <Toast config={toastConfig} />
    </ActionSheet>
  );
};

export default AmountModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 0.9,
    backgroundColor: '#10194E',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 10,
    zIndex: 1,
  },
  headerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    marginBottom: 50,
    position: 'relative',
    zIndex: 99,
    bottom: 60,
  },
  keypadWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 40,
  },
  inputWrapper: {
    paddingHorizontal: 20,
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtn: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 100,
    padding: 20,
  },
  submitBtn: {
    width: 150,
    marginTop: 15,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FF2E63',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
