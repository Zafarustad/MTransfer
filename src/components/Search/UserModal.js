import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

const {height} = Dimensions.get('window');

const UserModal = ({user, userActionSheetRef, amountActionSheetRef}) => {
  return (
    <ActionSheet
      ref={userActionSheetRef}
      gestureEnabled
      indicatorColor="#4E589F"
      closeOnPressBack
      defaultOverlayOpacity={0.2}
      containerStyle={styles.modalContainer}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={{uri: user.image}}
          style={{
            width: 72,
            height: 72,
            borderRadius: 50,
            marginTop: 10,
          }}
        />
        <Text style={{fontSize: 20, marginTop: 10}}>{user.name}</Text>
        <Text style={{marginTop: 20, fontSize: 14}}>{user.number}</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => amountActionSheetRef.current?.show()}
          style={styles.continueBtn}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

export default UserModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    height: height * 0.45,
    backgroundColor: '#10194E',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 10,
  },
  continueBtn: {
    width: 150,
    marginTop: 30,
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
