import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useAppDispatch} from '../_redux/dispatch';
import {setStartGame} from '../_redux/game';
import {genericStyles} from '../constants/styles';

export default function StartScreen() {
  const dispatch = useAppDispatch();
  const handleLinkClick = () => {
    Linking.openURL('https://sushilbajracharya.com.np/');
  };

  return (
    <View style={styleSheet.startScreen}>
      <View style={styleSheet.startContainer}>
        <View>
          <Image
            source={require('../assets/images/logo.png')}
            style={styleSheet.logoImg}
          />

          <Text style={styleSheet.title}>SCISSOR PAPER ROCK</Text>
        </View>
        <View style={styleSheet.btnContainer}>
          <TouchableHighlight
            style={styleSheet.startBtn}
            underlayColor="#E1AFD1"
            onPress={() => dispatch(setStartGame())}>
            <Text style={styleSheet.startBtnText}>Start Game</Text>
          </TouchableHighlight>
        </View>

        <View style={styleSheet.creditContainer}>
          <Text style={styleSheet.creditText}>Made with love by</Text>
          <TouchableHighlight
            style={styleSheet.link}
            onPress={() => {
              handleLinkClick();
            }}>
            <Text style={genericStyles.linkText}>Sushil Bajracharya</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  startScreen: {
    flex: 1,
    backgroundColor: '#FFE6E6',
    padding: 20,
    paddingVertical: 60,
  },
  startContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoImg: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 20,
  },
  btnContainer: {
    flex: 1,
  },
  startBtn: {
    textAlign: 'center',
    backgroundColor: '#AD88C6',
    borderRadius: 8,
    fontWeight: '500',
    width: 200,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  startBtnText: {
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'AbelRegular',
    fontSize: 16,
  },
  title: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 60,
    fontFamily: 'ChangaOneRegular',
    color: '#7469B6',
  },
  creditContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  creditText: {
    width: 200,
    fontFamily: 'AbelRegular',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#7469B6',
  },
  link: {
    alignSelf: 'center',
  },
});
