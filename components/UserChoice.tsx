import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useAppSelector} from '../_redux/dispatch';
import {EOptions} from '../constants/constants';
import {genericStyles} from '../constants/styles';

function ChoiceDisplay({player}: IChoiceDisplayProps) {
  const {botChoice, userChoice} = useAppSelector(state => state.game);
  let icon = null;
  let playerChoice;
  if (player === 'bot') {
    playerChoice = botChoice;
  } else {
    playerChoice = userChoice;
  }

  if (!playerChoice) {
    return null;
  }

  switch (playerChoice) {
    case EOptions.ROCK:
      icon = require('../assets/images/rock.png');
      break;
    case EOptions.PAPER:
      icon = require('../assets/images/paper.png');
      break;
    case EOptions.SCISSOR:
      icon = require('../assets/images/scissor.png');
      break;
    default:
      break;
  }
  return (
    <View style={styleSheet.imageContainer}>
      <Image source={icon} style={genericStyles.Icon} />
    </View>
  );
}

export default ChoiceDisplay;

interface IChoiceDisplayProps {
  player: 'bot' | 'user';
}

const styleSheet = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginVertical: 20,
  },
});
