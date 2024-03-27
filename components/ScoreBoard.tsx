import React from 'react';
import {DimensionValue, StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../_redux/dispatch';

function ScoreBoard() {
  const {winCount, drawCount, loseCount} = useAppSelector(
    state => state.game.score,
  );

  const winBarStyle = {
    backgroundColor: 'green',
    width: `${
      (winCount / (winCount + drawCount + loseCount)) * 100
    }%` as DimensionValue,
  };

  const loseBarStyle = {
    backgroundColor: 'red',
    width: `${
      (loseCount / (winCount + drawCount + loseCount)) * 100
    }%` as DimensionValue,
  };

  const drawBarStyle = {
    backgroundColor: 'blue',
    width: `${
      (drawCount / (winCount + drawCount + loseCount)) * 100
    }%` as DimensionValue,
  };

  return (
    <View style={styleSheet.scoreBoardContainer}>
      <View style={styleSheet.scoreBoard}>
        <View style={styleSheet.scoreView}>
          <Text>Wins</Text>
          <Text>{winCount}</Text>
        </View>

        <View style={styleSheet.scoreView}>
          <Text>Draws</Text>
          <Text>{drawCount}</Text>
        </View>

        <View style={styleSheet.scoreView}>
          <Text>Loses</Text>
          <Text>{loseCount}</Text>
        </View>
      </View>

      <View style={styleSheet.scoreBar}>
        <View style={winBarStyle} />
        <View style={drawBarStyle} />
        <View style={loseBarStyle} />
      </View>
    </View>
  );
}

export default ScoreBoard;

const styleSheet = StyleSheet.create({
  scoreBoardContainer: {
    marginBottom: 20,
  },
  scoreBoard: {
    flexDirection: 'row',
    padding: 16,
  },

  scoreView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  scoreBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: 10,
    backgroundColor: '#333',
  },
});
