import React from 'react';
import {useAppSelector} from '../_redux/dispatch';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import BotHand from '../components/BotHand';
import Result from '../components/Result';
import CountDown from '../components/CountDown';
import ChoiceDisplay from '../components/UserChoice';
import ScoreBoard from '../components/ScoreBoard';
import ChooseContainer from '../components/ChooseContainer';

function Game({navigation}: {navigation: any}) {
  const {startGame, userChoice, show, result} = useAppSelector(
    state => state.game,
  );

  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <View style={styleSheet.mainView}>
        {startGame && (
          <View style={styleSheet.gameScreen}>
            <ScoreBoard />

            <BotHand />

            {show ? (
              <View>
                <Result navigation={navigation} />
              </View>
            ) : (
              <CountDown />
            )}

            {userChoice || result ? (
              <ChoiceDisplay player="user" />
            ) : (
              <ChooseContainer />
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default Game;

const styleSheet = StyleSheet.create({
  mainView: {
    flex: 1,
    fontFamily: 'AbelRegular',
  },
  gameScreen: {
    flex: 1,
    backgroundColor: '#FFE6E6',
  },
});
