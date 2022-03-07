import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ReceivedIcon from '../../assests/icons/received-icon.png';
import FailedIcon from '../../assests/icons/failed-icon.png';
import SentIcon from '../../assests/icons/sent-icon.png';

const TransactionCard = ({item, index}) => {
  return (
    <View
      style={[
        styles.cardContainer,
        {
          backgroundColor: (index + 1) % 2 !== 0 ? '#192259' : '',
        },
      ]}>
      <View style={styles.cardWrapper}>
        <Image source={{uri: item.image}} style={styles.userImg} />
        <View style={{marginLeft: 10}}>
          <Text style={styles.name}>{item.name}</Text>
          <View
            style={[
              styles.tag,
              {
                backgroundColor:
                  item.status === 'Received'
                    ? '#1DC7AC'
                    : item.status === 'Failed'
                    ? '#FE4A54'
                    : '#FAAD39',
              },
            ]}>
            <Image
              source={
                item.status === 'Received'
                  ? ReceivedIcon
                  : item.status === 'Failed'
                  ? FailedIcon
                  : SentIcon
              }
              style={styles.status}
            />
            <Text style={{color: '#FFF'}}>{item.status}</Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color:
            item.status === 'Received'
              ? '#1DC7AC'
              : item.status === 'Failed'
              ? '#FE4A54'
              : '#FAAD39',
        }}>
        &#8377; {item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </Text>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'space-between',
    padding: 20,
    flexDirection: 'row',
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  tag: {
    flexDirection: 'row',
    borderRadius: 20,
    height: 28,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    color: '#858EC5',
    marginBottom: 7,
  },
  status: {
    width: 16,
    height: 16,
    marginRight: 5,
    marginLeft: 7,
  },
});
