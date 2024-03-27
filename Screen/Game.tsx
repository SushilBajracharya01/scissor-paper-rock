import React from 'react';
import {useAppDispatch, useAppSelector} from '../_redux/dispatch';
import {EOptions} from '../constants/constants';
import {setStartGame, setUserChoice} from '../_redux/game';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BotHand from '../components/BotHand';
import Result from '../components/Result';
import CountDown from '../components/CountDown';
import {genericStyles} from '../constants/styles';
import ChoiceDisplay from '../components/UserChoice';
import ScoreBoard from '../components/ScoreBoard';

function Game() {
  const isDarkMode = useColorScheme() === 'dark';

  const {startGame, userChoice, show, result} = useAppSelector(
    state => state.game,
  );

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const dispatch = useAppDispatch();

  const handleUserChoice = (choice: EOptions) => {
    dispatch(setUserChoice(choice));
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styleSheet.mainView}>
        {!startGame && (
          <View style={styleSheet.startScreen}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styleSheet.logoImg}
            />

            <Text style={styleSheet.title}>SCISSOR PAPER ROCK</Text>

            <TouchableHighlight
              style={styleSheet.startBtn}
              onPress={() => dispatch(setStartGame())}>
              <Text style={genericStyles.center}>Start Game</Text>
            </TouchableHighlight>
          </View>
        )}

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
  logoImg: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 20,
  },
  startScreen: {
    flex: 1,
    color: 'white',
    padding: 20,
    paddingTop: 100,
  },
  startBtn: {
    textAlign: 'center',
    backgroundColor: '#EA4C89',
    borderRadius: 8,
    color: '#FFFFFF',
    fontWeight: '500',
    width: 200,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 60,
    fontFamily: 'ChangaOneRegular',
    color: 'white',
  },
  gameScreen: {
    flex: 1,
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
