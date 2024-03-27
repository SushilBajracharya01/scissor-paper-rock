import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useAppSelector} from '../_redux/dispatch';
import {EOptions, ERESULT} from '../constants/constants';
import {genericStyles} from '../constants/styles';

function ChoiceDisplay({player}: IChoiceDisplayProps) {
  const {botChoice, userChoice, result} = useAppSelector(state => state.game);
  const [icon, setIcon] = useState(null);
  let playerChoice: EOptions | undefined;
  if (player === 'bot') {
    playerChoice = botChoice;
  } else {
    playerChoice = userChoice;
  }

  useEffect(() => {
    let iconFile;
    switch (playerChoice) {
      case EOptions.ROCK:
        if (!result || result === ERESULT.DRAW) {
          iconFile = require('../assets/images/rock.png');
        } else {
          if (result === ERESULT.WIN) {
            if (player === 'user') {
              iconFile = require('../assets/images/rock_win.png');
            } else {
              iconFile = require('../assets/images/dizy_rock.png');
            }
          } else {
            if (player === 'bot') {
              iconFile = require('../assets/images/rock_win.png');
            } else {
              iconFile = require('../assets/images/dizy_rock.png');
            }
          }
        }
        break;
      case EOptions.PAPER:
        if (!result || result === ERESULT.DRAW) {
          iconFile = require('../assets/images/paper.png');
        } else {
          if (result === ERESULT.WIN) {
            if (player === 'user') {
              iconFile = require('../assets/images/paper_win.png');
            } else {
              iconFile = require('../assets/images/dizy_paper.png');
            }
          } else {
            if (player === 'bot') {
              iconFile = require('../assets/images/paper_win.png');
            } else {
              iconFile = require('../assets/images/dizy_paper.png');
            }
          }
        }
        break;
      case EOptions.SCISSOR:
        if (!result || result === ERESULT.DRAW) {
          iconFile = require('../assets/images/scissor.png');
        } else {
          if (result === ERESULT.WIN) {
            if (player === 'user') {
              iconFile = require('../assets/images/scissor_win.png');
            } else {
              iconFile = require('../assets/images/dizy_scissor.png');
            }
          } else {
            if (player === 'bot') {
              iconFile = require('../assets/images/scissor_win.png');
            } else {
              iconFile = require('../assets/images/dizy_scissor.png');
            }
          }
        }
        break;
      default:
        iconFile = require('../assets/images/rock_shadow.png');
        break;
    }
    setIcon(iconFile);
  }, [player, playerChoice, result]);

  if (!icon) {
    return null;
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
