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

function Game() {
  const isDarkMode = useColorScheme() === 'dark';

  const {score, startGame, userChoice, show} = useAppSelector(
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

            <Text style={styleSheet.title}>ROCK PAPER SCISSOR</Text>

            <TouchableHighlight
              style={styleSheet.startBtn}
              onPress={() => dispatch(setStartGame())}>
              <Text style={genericStyles.center}>Start Game</Text>
            </TouchableHighlight>
          </View>
        )}

        {startGame && (
          <View style={styleSheet.gameScreen}>
            <View style={styleSheet.scoreBoard}>
              <View style={styleSheet.scoreView}>
                <Text>Wins</Text>
                <Text>{score.winCount}</Text>
              </View>

              <View style={styleSheet.scoreView}>
                <Text>Draws</Text>
                <Text>{score.drawCount}</Text>
              </View>

              <View style={styleSheet.scoreView}>
                <Text>Loses</Text>
                <Text>{score.loseCount}</Text>
              </View>
            </View>

            <BotHand />

            {show ? (
              <View>
                <Result />
              </View>
            ) : (
              <CountDown />
            )}

            {userChoice ? (
              <ChoiceDisplay player="user" />
            ) : (
              <View style={styleSheet.btnContainer}>
                <TouchableHighlight
                  style={{
                    ...genericStyles.btn,
                  }}
                  onPress={() => handleUserChoice(EOptions.ROCK)}>
                  <Image
                    style={genericStyles.Icon}
                    source={require('../assets/images/rock.png')}
                  />
                </TouchableHighlight>

                <TouchableHighlight
                  style={{
                    ...genericStyles.btn,
                  }}
                  onPress={() => handleUserChoice(EOptions.PAPER)}>
                  <Image
                    style={genericStyles.Icon}
                    source={require('../assets/images/paper.png')}
                  />
                </TouchableHighlight>

                <TouchableHighlight
                  style={{
                    ...genericStyles.btn,
                  }}
                  onPress={() => handleUserChoice(EOptions.SCISSOR)}>
                  <Image
                    style={genericStyles.Icon}
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
    padding: 16,
    paddingTop: 100,
  },
  startBtn: {
    textAlign: 'center',
    backgroundColor: '#EA4C89',
    borderRadius: 8,
    color: '#FFFFFF',
    fontWeight: '500',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60,
  },
  gameScreen: {
    flex: 1,
  },
  scoreBoard: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 60,
  },
  scoreView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
});
