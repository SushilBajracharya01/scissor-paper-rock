import {createSlice} from '@reduxjs/toolkit';
import {initialScore} from '../constants/constants';

const initialState = {
  score: initialScore,
  startGame: false,
  userChoice: undefined,
  botChoice: undefined,
  show: false,
  result: '',
  playAgain: false,
  choose: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    setStartGame(state) {
      state.startGame = true;
    },
    setUserChoice(state, action) {
      state.userChoice = action.payload;
    },
    setBotChoice(state, action) {
      state.botChoice = action.payload;
    },
    setShow(state, action) {
      state.show = action.payload;
    },
    setResult(state, action) {
      state.result = action.payload;
    },
    setScore(state, action) {
      state.score = action.payload;
    },
    setChoose(state, action) {
      state.choose = action.payload;
    },
    setPlayAgain(state) {
      state.choose = false;
      state.show = false;
      state.result = '';
      state.botChoice = undefined;
      state.userChoice = undefined;
    },
    resetGame() {
      return initialState;
    },
  },
});

export const {
  setStartGame,
  setUserChoice,
  setBotChoice,
  setShow,
  setResult,
  setScore,
  setChoose,
  setPlayAgain,
  resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;
