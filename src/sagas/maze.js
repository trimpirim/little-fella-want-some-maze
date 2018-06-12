import { put } from 'redux-saga/effects';
import API from '../api';
import mazeActions from '../actions/maze';

const create = function* create(action) {
  try {
    const { settings } = action;
    const { name, difficulty, ...size } = settings;
    const request = {
      'maze-width': size.width,
      'maze-height': size.height,
      'maze-player-name': name,
      difficulty,
    };

    const { data } = yield API.maze.create(request);

    yield put(mazeActions.setId(data.maze_id));
    yield put(mazeActions.setSize({
      ...size,
    }));
  } catch (error) {
    console.log('exception', error);
  }
};

const load = function* load({ id }) {
  try {
    const { data } = yield API.maze.load(id);

    const [width, height] = data.size;

    const [pony] = data.pony;
    const [domokun] = data.domokun;
    const [exit] = data['end-point'];

    yield put(mazeActions.setLoaded(true));

    yield put(mazeActions.setPositions({
      pony,
      enemy: domokun,
      exit,
    }));

    yield put(mazeActions.setOriginalWalls(data.data));

    yield put(mazeActions.setSize({ height, width }));

    yield put(mazeActions.generateWalls(data.data, { height, width }));
  } catch (error) {
    console.log('exception', error);
  }
};

const move = function* move({ direction, id }) {
  try {
    yield API.maze.move(id, direction);
    const { data } = yield API.maze.print(id);

    yield put(mazeActions.setPrint(data));
  } catch (error) {
    console.log('exception', error);
  }
};

const print = function* print({ id }) {
  try {
    const { data } = yield API.maze.print(id);
    yield put(mazeActions.setPrint(data));
  } catch (error) {
    console.log('exception', error);
  }
};

export default {
  create,
  load,
  move,
  print,
};
