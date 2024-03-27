import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {EOptions, initialScore} from '../constants/constants';
import {useAppDispatch, useAppSelector} from '../_redux/dispatch';
import {setPlayAgain, setResult, setScore} from '../_redux/game';

function Result() {
  const dispatch = useAppDispatch();
  const {score, userChoice, botChoice, result} = useAppSelector(
    state => state.game,
  );

  const handlePlayAgain = () => {
    dispatch(setPlayAgain());
  };

  useEffect(() => {
    const handleUpdateScore = (value: keyof typeof initialScore) => {
      dispatch(
        setScore({
          ...score,
          [value]: score[value] + 1,
        }),
      );
    };
    if (!result) {
      if (userChoice === botChoice) {
        dispatch(setResult('DRAW'));
        handleUpdateScore('drawCount');
      } else if (
        (userChoice === EOptions.ROCK && botChoice === EOptions.SCISSOR) ||
        (userChoice === EOptions.PAPER && botChoice === EOptions.ROCK) ||
        (userChoice === EOptions.SCISSOR && botChoice === EOptions.PAPER)
      ) {
        dispatch(setResult('WIN'));
        handleUpdateScore('winCount');
      } else {
        dispatch(setResult('LOSE'));
        handleUpdateScore('loseCount');
      }
    }
  }, [botChoice, result, userChoice, dispatch, score]);

  return (
    <View style={styleSheet.resultContainer}>
      <Text style={styleSheet.result}>{result}</Text>

      <Button title="Play Again" onPress={() => handlePlayAgain()} />
    </View>
  );
}

export default Result;

const styleSheet = StyleSheet.create({
  resultContainer: {
    width: 200,
    height: 200,
    justifyContent: 'space-between',
    backgroundColor: '#444',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 20,
  },
  result: {
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 45,
    fontWeight: '500',
  },
});
