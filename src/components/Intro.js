import React, {useRef, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import carouselData from '../Data/carouselData';
import SplashImage from '../assests/splash.png';
import SplashImage2 from '../assests/splash-2.png';

const {width, height} = Dimensions.get('window');

const Intro = ({navigation}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef();

  const pagination = () => {
    return (
      <Pagination
        dotsLength={carouselData.length}
        activeDotIndex={carouselIndex}
        containerStyle={{marginRight: 120, marginTop: -30}}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={{
          backgroundColor: '#FDD590',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        source={!carouselIndex ? SplashImage : SplashImage2}
        style={styles.splashImage}>
        <View
          style={[
            styles.bottomContainer,
            {backgroundColor: !carouselIndex ? '#17288E' : '#FFF'},
          ]}>
          {pagination()}
          <Carousel
            ref={carouselRef}
            enableMomentum
            data={carouselData}
            onSnapToItem={index => setCarouselIndex(index)}
            renderItem={({item}) => (
              <View style={styles.carouselContainer}>
                <Text
                  style={[
                    styles.carouselMainText,
                    {color: !carouselIndex ? '#FFF' : '#17288E'},
                  ]}>
                  {item.mainText}
                </Text>
                <Text
                  style={[
                    styles.carouselSubtext,
                    {color: !carouselIndex ? '#FFF' : '#17288E'},
                  ]}>
                  {item.subText}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.replace('Home')}
                  style={[
                    styles.carouselBtn,
                    {backgroundColor: !carouselIndex ? '#FFF' : '#17288E'},
                  ]}>
                  <Text
                    style={[
                      styles.btnText,
                      {color: !carouselIndex ? '#17288E' : '#FFF'},
                    ]}>
                    Start Banking
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            autoplay
            loop
            enableSnap
            sliderWidth={250}
            itemWidth={240}
            sliderHeight={250}
            itemHeight={250}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  splashImage: {
    width: '100%',
    height: '100%',
  },
  bottomContainer: {
    width: width,
    height: height * 0.3,
    padding: 30,
    position: 'absolute',
    bottom: 0,
    left: -65,
    borderTopRightRadius: 130,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  carouselContainer: {
    marginLeft: 20,
  },
  carouselMainText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  carouselSubtext: {
    fontSize: 12,
    marginTop: 5,
    lineHeight: 25,
  },
  carouselBtn: {
    width: 120,
    marginTop: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '500',
  },
  dotStyle: {
    width: 30,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#FFB129',
  },
});
