import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import numPad from '../../Data/numPad';
import BackSpace from '../../assests/icons/backspace.png';
import Toast from 'react-native-toast-message';

const NumPad = ({amount, setAmount}) => {
  return (
    <View style={styles.inputs}>
      {numPad.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.6}
          key={index}
          onPress={() => {
            if (amount.length === 6 && item.value !== 'back') {
              Toast.show({
                type: 'info',
                text1: 'Warning',
                text2: 'Amount limit reached 🤚',
                position: 'bottom',
                bottomOffset: 120,
              });
            } else if (item.value === '.') {
              setAmount(amount);
            } else if (item.value === 'back') {
              setAmount(amount.slice(0, -1));
            } else {
              setAmount(v => v.toString() + item.value.toString());
            }
          }}
          style={styles.inputBtn}>
          {item.value === 'back' ? (
            <Image source={BackSpace} style={{width: 35, height: 35}} />
          ) : (
            <Text style={{fontSize: 24}}>{item.value}</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NumPad;

const styles = StyleSheet.create({
  inputs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  inputBtn: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.3,
    marginBottom: 25,
  },
});
