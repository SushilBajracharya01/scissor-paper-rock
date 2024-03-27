import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {genericStyles} from '../constants/styles';

function ShuffleBot() {
  const shadowScissor = require('../assets/images/scissor_shadow.png');
  const shadowRock = require('../assets/images/rock_shadow.png');
  const shadowPapper = require('../assets/images/paper_shadow.png');

  const images = [shadowScissor, shadowRock, shadowPapper];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prev => (prev + 1) % 3);
    }, 100);

    return () => clearInterval(intervalId);
  }, [shadowPapper, shadowRock, shadowScissor]);

  return (
    <View style={styleSheet.ShuffleBot}>
      <Image source={images[index]} style={genericStyles.Icon} />
    </View>
  );
}

export default ShuffleBot;

const styleSheet = StyleSheet.create({
  ShuffleBot: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginVertical: 20,
  },
});
