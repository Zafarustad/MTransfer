import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Pressable,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import CloseIcon from '../../assests/icons/close.png';

const {width, height} = Dimensions.get('window');

const numPad = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
  {
    value: 6,
  },
  {
    value: 7,
  },
  {
    value: 8,
  },
  {
    value: 9,
  },
  {
    value: '.',
  },
  {
    value: 0,
  },
  {
    value: 'back',
  },
];

const Header = ({sheetRef}) => (
  <View style={styles.headerWrapper}>
    <Pressable onPress={() => sheetRef.current?.hide()} style={styles.closeBtn}>
      <Image source={CloseIcon} />
    </Pressable>
  </View>
);

const AmountModal = ({amountActionSheetRef, selectedUser}) => {
  return (
    <ActionSheet
      ref={amountActionSheetRef}
      gestureEnabled
      indicatorColor="#4E589F"
      closeOnPressBack
      CustomHeaderComponent={<Header sheetRef={amountActionSheetRef} />}
      defaultOverlayOpacity={0.6}
      containerStyle={styles.container}>
      <View style={styles.inputWrapper}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: 60,
          }}>
          {numPad.map((item, index) => (
            <View
              key={index}
              style={{
                padding: 20,
                justifyContent: 'center',
                alignItems: 'center',
                width: width * 0.3,
                marginBottom: 55,
              }}>
              <Text style={{fontSize: 24}}>{item.value}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          //   onPress={() => amountActionSheetRef.current?.show()}
          style={styles.submitBtn}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
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
  },
  inputWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 40,
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
    marginTop: 30,
    padding: 20,
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
