import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Animated, Easing, StyleSheet} from 'react-native';

const SkeletionLoading = props => {
  // *@ State
  const opacityValue = new Animated.Value(0);
  const offsetX = new Animated.Value(-100);
  const [loading, setLoading] = useState(true);

  // console.log(opacityValue.addListener(({value}) => console.log(value)));

  useEffect(() => {
    moveToLeft();
    if (loading) {
      _opacityView();
    }
    // setTimeout(() => {
    //   setLoading(false);
    // }, 10000);
    // return () => {
    //   cleanup;
    // };
  }, []);

  const _opacityView = () => {
    // alert('KJLKJL');
    opacityValue.setValue(-100);
    Animated.timing(opacityValue, {
      toValue: 2,
      duration: 1000,
    }).start(() => _opacityView());
  };

  const moveToLeft = () => {
    offsetX.setValue(0);
    Animated.timing(offsetX, {
      toValue: 414,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => moveToLeft());
  };

  const moveToRight = () => {
    Animated.timing(offsetX, {
      toValue: -120,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => moveToLeft());
  };

  const opacity = opacityValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 0],
  });

  return (
    <View>
      <Animated.View
        style={{
          opacity: opacity,
          width: '90%',
          height: 30,
          backgroundColor: 'red',
          marginTop: 30,
          borderRadius: 20,
        }}
      />

      <View
        style={{
          backgroundColor: '#ffffff',
          padding: 10,
          marginHorizontal: 10,
          flexDirection: 'row',
          marginTop: 10,
          borderRadius: 5,
          justifyContent: 'space-between',
          ...styles.shadow,
        }}>
        <View
          style={{
            backgroundColor: '#c1c0c0',
            width: 100,
            height: 100,
            justifyContent: 'flex-start',
            borderRadius: 100,
            zIndex: 100,
          }}>
          <Animated.View
            style={{
              backgroundColor: '#ffffff',
              width: 50,
              height: 100,
              transform: [{translateX: offsetX}],
              opacity: offsetX.interpolate({
                inputRange: [0, 450],
                outputRange: [0.8, 0],
              }),
            }}
          />
        </View>
        <View style={{width: '70%', marginTop: 20}}>
          <View
            style={{
              backgroundColor: '#c1c0c0',
              width: '50%',
              height: 30,
              borderRadius: 15,
            }}
          />
          <View
            style={{
              backgroundColor: '#c1c0c0',
              marginTop: 15,
              width: '90%',
              height: 30,
              borderRadius: 15,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
export default SkeletionLoading;
