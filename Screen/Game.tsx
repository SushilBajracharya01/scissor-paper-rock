import React from 'react';
import {useAppDispatch, useAppSelector} from '../_redux/dispatch';
import {EOptions} from '../constants/constants';
import {setUserChoice} from '../_redux/game';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import BotHand from '../components/BotHand';
import Result from '../components/Result';
import CountDown from '../components/CountDown';
import {genericStyles} from '../constants/styles';
import ChoiceDisplay from '../components/UserChoice';
import ScoreBoard from '../components/ScoreBoard';
import StartScreen from '../components/StartScreen';

function Game() {
  const {startGame, userChoice, show, result} = useAppSelector(
    state => state.game,
  );

  const backgroundStyle = {
    flex: 1,
  };

  const dispatch = useAppDispatch();

  const handleUserChoice = (choice: EOptions) => {
    dispatch(setUserChoice(choice));
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <View style={styleSheet.mainView}>
        {!startGame && <StartScreen />}

        {startGame && (
          <View style={styleSheet.gameScreen}>
            <ScoreBoard />

            <BotHand />

            {show ? (
              <View>
                <Result />
              </View>
            ) : (
              <CountDown />
            )}

            {userChoice || result ? (
              <ChoiceDisplay player="user" />
            ) : (
              <View style={styleSheet.btnContainer}>
                <TouchableHighlight
                  style={{
                    ...genericStyles.btn,
                  }}
                  underlayColor="#E1AFD1"
                  onPress={() => handleUserChoice(EOptions.ROCK)}>
                  <Image
                    style={styleSheet.Icon}
                    source={require('../assets/images/rock.png')}
                  />
                </TouchableHighlight>

                <TouchableHighlight
                  style={{
                    ...genericStyles.btn,
                  }}
                  underlayColor="#E1AFD1"
                  onPress={() => handleUserChoice(EOptions.PAPER)}>
                  <Image
                    style={styleSheet.Icon}
                    source={require('../assets/images/paper.png')}
                  />
                </TouchableHighlight>

                <TouchableHighlight
                  style={{
                    ...genericStyles.btn,
                  }}
                  underlayColor="#E1AFD1"
                  onPress={() => handleUserChoice(EOptions.SCISSOR)}>
                  <Image
                    style={styleSheet.Icon}
                    source={require('../assets/images/scissor.png')}
                  />
                </TouchableHighlight>
              </View>
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
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    marginTop: 100,
  },
  Icon: {
    width: 80,
    height: 80,
  },
});
