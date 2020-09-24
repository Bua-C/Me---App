import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Animated, Easing} from 'react-native';

const SkeletionLoading = props => {
  // *@ State
  const opacityValue = new Animated.Value(0);
  const offsetX = new Animated.Value(0);
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
    opacityValue.setValue(0);
    Animated.timing(opacityValue, {
      toValue: 2,
      duration: 1000,
    }).start(() => _opacityView());
  };

  const moveToLeft = () => {
    offsetX.setValue(0);
    Animated.timing(offsetX, {
      toValue: 430,
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
      <Animated.View
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
          borderRadius: 20,
          transform: [{translateX: offsetX}],
          opacity: offsetX.interpolate({
            inputRange: [0, 400],
            outputRange: [0.8, 0],
          }),
        }}
      />
      <TouchableOpacity
        onPress={() => movingBox}
        style={{backgroundColor: 'blue', padding: 10}}>
        <Text>Moving</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SkeletionLoading;
