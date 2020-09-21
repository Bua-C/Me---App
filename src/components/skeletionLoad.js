import React, {useEffect, useState} from 'react';
import {View, Text, Animated} from 'react-native';

const SkeletionLoading = props => {
  // *@ State
  const opacityValue = new Animated.Value(0);
  const [loading, setLoading] = useState(true);

  // console.log(opacityValue.addListener(({value}) => console.log(value)));

  useEffect(() => {
    if (loading) {
      _opacityView();
    }
    setTimeout(() => {
      setLoading(false);
    }, 10000);
    // return () => {
    //   cleanup;
    // };
  }, []);
  console.log('%c loading:', 'color: green; font-size: 13px', loading);
  const _opacityView = () => {
    // alert('KJLKJL');
    opacityValue.setValue(0);
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 3000,
    }).start(() => _opacityView());
  };

  const opacity = opacityValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 1],
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
    </View>
  );
};
export default SkeletionLoading;
