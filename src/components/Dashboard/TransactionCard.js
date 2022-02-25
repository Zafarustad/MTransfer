import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ReceivedIcon from '../../assests/icons/received-icon.png';
import FailedIcon from '../../assests/icons/failed-icon.png';
import SentIcon from '../../assests/icons/sent-icon.png';

const TransactionCard = ({item, index}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        padding: 20,
        flexDirection: 'row',
        backgroundColor: (index + 1) % 2 !== 0 ? '#192259' : '',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={item.profileUri} style={{width: 50, height: 50}} />
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 16, color: '#858EC5', marginBottom: 7}}>
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 20,
              height: 28,
              backgroundColor:
                item.status === 'Received'
                  ? '#1DC7AC'
                  : item.status === 'Failed'
                  ? '#FE4A54'
                  : '#FAAD39',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={
                item.status === 'Received'
                  ? ReceivedIcon
                  : item.status === 'Failed'
                  ? FailedIcon
                  : SentIcon
              }
              style={{
                width: 16,
                height: 16,
                marginRight: 5,
                marginLeft: 7,
              }}
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
        &#8377; {item.amount}
      </Text>
    </View>
  );
};

export default TransactionCard;
