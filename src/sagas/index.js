import { takeLatest } from 'redux-saga/effects';
import { SETTINGS_ACTION_TYPES } from '../actions/settings';
import MazeSagas from './maze';
import { MAZE_ACTION_TYPES } from '../actions/maze';

export default function* rootSaga() {
  yield takeLatest(SETTINGS_ACTION_TYPES.SETTINGS_CHANGE, MazeSagas.create);
  yield takeLatest(MAZE_ACTION_TYPES.LOAD_MAZE, MazeSagas.load);
  yield takeLatest(MAZE_ACTION_TYPES.PRINT, MazeSagas.print);
  yield takeLatest(MAZE_ACTION_TYPES.MOVE, MazeSagas.move);
}
