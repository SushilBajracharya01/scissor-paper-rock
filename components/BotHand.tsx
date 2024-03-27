import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {EOptions} from '../constants/constants';
import {genericStyles} from '../constants/styles';
import {useAppDispatch, useAppSelector} from '../_redux/dispatch';
import {setBotChoice} from '../_redux/game';
import ChoiceDisplay from './UserChoice';

function BotHand() {
  const {botChoice, show} = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function getRandomChoice() {
      const choices = Object.values(EOptions);
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      dispatch(setBotChoice(randomChoice));
    }

    if (!botChoice) {
      getRandomChoice();
    }
  }, [botChoice, dispatch]);

  return (
    <View>
      {show ? (
        <ChoiceDisplay player="bot" />
      ) : (
        <Text style={genericStyles.choice}>XXXXX</Text>
      )}
    </View>
  );
}

export default BotHand;
