import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  // Easing,
  useAnimatedSensor,
} from 'react-native-reanimated';
import { View, Button } from 'react-native';
import React from 'react';

function AnimatedStyleUpdateExample(): React.ReactElement {
  const randomWidth = useSharedValue(10);

  // const config = {
  //   duration: 500,
  //   easing: Easing.bezierFn(0.5, 0.01, 0, 1),
  // };

  const animatedSensor = useAnimatedSensor(1);

  const style = useAnimatedStyle(() => {
    return {
      // width: withTiming(randomWidth.value, config),
      // height: withTiming(animatedSensor.sensor.x.value * 10)
      width: withTiming(animatedSensor.sensor.x.value * 15 + 20),
    };
  });

  // console.log(animatedSensor);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <Animated.View
        style={[
          { width: 100, height: 80, backgroundColor: 'black', margin: 30 },
          style,
        ]}
      />
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
          console.log(animatedSensor.sensor.x.value);
        }}
      />
    </View>
  );
}

export default AnimatedStyleUpdateExample;
