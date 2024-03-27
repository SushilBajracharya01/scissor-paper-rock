import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {EOptions, ERESULT, initialScore} from '../constants/constants';
import {useAppDispatch, useAppSelector} from '../_redux/dispatch';
import {resetGame, setPlayAgain, setResult, setScore} from '../_redux/game';
import {genericStyles} from '../constants/styles';

function Result() {
  const dispatch = useAppDispatch();
  const {score, userChoice, botChoice, result} = useAppSelector(
    state => state.game,
  );

  const handlePlayAgain = () => {
    dispatch(setPlayAgain());
  };

  const handleReset = () => {
    dispatch(resetGame());
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
        dispatch(setResult(ERESULT.DRAW));
        handleUpdateScore('drawCount');
      } else if (
        (userChoice === EOptions.ROCK && botChoice === EOptions.SCISSOR) ||
        (userChoice === EOptions.PAPER && botChoice === EOptions.ROCK) ||
        (userChoice === EOptions.SCISSOR && botChoice === EOptions.PAPER)
      ) {
        dispatch(setResult(ERESULT.WIN));
        handleUpdateScore('winCount');
      } else {
        dispatch(setResult(ERESULT.LOSE));
        handleUpdateScore('loseCount');
      }
    }
  }, [botChoice, result, userChoice, dispatch, score]);

  return (
    <View style={styleSheet.resultContainer}>
      <Text style={styleSheet.result}>{result}</Text>

      <View style={styleSheet.btnContainer}>
        <TouchableHighlight
          style={genericStyles.btn}
          onPress={() => handlePlayAgain()}>
          <Text>Play Again</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={genericStyles.btn}
          onPress={() => handleReset()}>
          <Text>Quit</Text>
        </TouchableHighlight>
      </View>
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
    fontFamily: 'ChangaOneRegular',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
