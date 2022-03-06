import React, {useState, useEffect, createRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  Pressable,
  ImageBackground,
  Keyboard,
} from 'react-native';
import BackIcon from '../../assests/icons/back-icon.png';
import SearchBg from '../../assests/search-bg.png';
import userData from '../../Data/userData';
import AmountModal from './AmountModal';
import UserModal from './UserModal';

const {width, height} = Dimensions.get('window');

const userActionSheetRef = createRef();
const amountActionSheetRef = createRef();

const Search = ({navigation, route}) => {
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (search.length > 0) {
      const filteredData = userData.filter(item =>
        item.name.toLowerCase().startsWith(search.toLowerCase()),
      );
      setFilteredData(filteredData);
    }
  }, [search]);

  return (
    <ImageBackground source={SearchBg} style={styles.container}>
      <View style={styles.searchWrapper}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backCont}>
          <Image source={BackIcon} style={styles.backIcon} />
          <Text style={styles.backTxt}>Back</Text>
        </Pressable>
        <TextInput
          style={styles.textinput}
          value={search}
          onChangeText={val => setSearch(val)}
          placeholder="John Wick"
        />
      </View>
      <View style={styles.searchBox}>
        {filteredData.length > 0 &&
          filteredData.map((item, index) => (
            <Pressable
              key={item.id}
              onPress={() => {
                Keyboard.dismiss();
                setSelectedUser(item);
                setTimeout(() => {
                  userActionSheetRef.current?.show();
                }, 100);
              }}
              style={[
                styles.userAvatar,
                (index + 1) % 2 !== 0
                  ? {right: Math.floor(Math.random() * (100 - 80 + 1) + 80)}
                  : {left: Math.floor(Math.random() * (100 - 80 + 1) + 80)},
              ]}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: selectedUser && item.id === selectedUser.id ? 72 : 36,
                  height: selectedUser && item.id === selectedUser.id ? 72 : 36,
                  borderRadius: 50,
                  borderWidth:
                    selectedUser && item.id === selectedUser.id ? 2 : 0,
                  borderColor:
                    selectedUser && item.id === selectedUser.id
                      ? '#1DC76B'
                      : '',
                }}
              />
              <Text
                style={{
                  marginTop: 3,
                  color:
                    selectedUser && item.id === selectedUser.id
                      ? '#1DC76B'
                      : '#FFF',
                }}>
                {item.name}
              </Text>
            </Pressable>
          ))}
      </View>
      {selectedUser && (
        <UserModal
          user={selectedUser}
          userActionSheetRef={userActionSheetRef}
          amountActionSheetRef={amountActionSheetRef}
        />
      )}
      <AmountModal
        user={selectedUser}
        amountActionSheetRef={amountActionSheetRef}
        transactionType={route.params?.transactionType}
      />
    </ImageBackground>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  searchWrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  backCont: {
    alignItems: 'center',
    marginRight: 10,
    width: '20%',
    flexDirection: 'row',
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
  textinput: {
    padding: 15,
    backgroundColor: '#10194E',
    borderWidth: 1,
    borderColor: '#1DC7AC',
    width: '80%',
    borderRadius: 10,
    height: 55,
  },
  searchBox: {
    flex: 0.6,
    marginTop: 15,
  },
  userAvatar: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    marginVertical: 10,
    top: 50,
  },
});
