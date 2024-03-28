import React from 'react';
import {DimensionValue, StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../_redux/dispatch';
import {genericStyles} from '../constants/styles';

function ScoreBoard() {
  const {winCount, drawCount, loseCount} = useAppSelector(
    state => state.game.score,
  );

  const winBarStyle = {
    backgroundColor: '#83E85A',
    width: `${
      (winCount / (winCount + drawCount + loseCount)) * 100
    }%` as DimensionValue,
  };

  const loseBarStyle = {
    backgroundColor: '#FF204E',
    width: `${
      (loseCount / (winCount + drawCount + loseCount)) * 100
    }%` as DimensionValue,
  };

  const drawBarStyle = {
    backgroundColor: '#EDE862',
    width: `${
      (drawCount / (winCount + drawCount + loseCount)) * 100
    }%` as DimensionValue,
  };

  return (
    <View style={styleSheet.scoreBoardContainer}>
      <View style={styleSheet.scoreBoard}>
        <View style={styleSheet.scoreView}>
          <Text style={genericStyles.fontAbel}>Wins</Text>
          <Text style={genericStyles.fontAbel}>{winCount}</Text>
        </View>

        <View style={styleSheet.scoreView}>
          <Text style={genericStyles.fontAbel}>Draws</Text>
          <Text style={genericStyles.fontAbel}>{drawCount}</Text>
        </View>

        <View style={styleSheet.scoreView}>
          <Text style={genericStyles.fontAbel}>Loses</Text>
          <Text style={genericStyles.fontAbel}>{loseCount}</Text>
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
    backgroundColor: '#AD88C6',
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
    backgroundColor: '#E1AFD1',
  },
});
