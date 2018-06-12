import { MAZE_ACTION_TYPES } from '../actions/maze';
import { MazeUtils } from '../utils/maze-transformer';

const INITIAL_STATE = {
  id: null,
  walls: {
    original: [], // the original array of maze data with all the [west, north] elements
    generated: [], // generated array of maze data into one dimension array for easier floodfill
  },
  loaded: false,
  positions: {
    enemy: null,
    pony: null,
    exit: null,
  },
  size: {
    width: null,
    height: null,
  },
  print: null,
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case MAZE_ACTION_TYPES.SET_MAZE_ID:
      return {
        ...state,
        id: action.id,
      };
    case MAZE_ACTION_TYPES.SET_SIZE:
      return {
        ...state,
        size: { ...action.size },
      };
    case MAZE_ACTION_TYPES.SET_LOADED:
      return {
        ...state,
        loaded: action.loaded,
      };
    case MAZE_ACTION_TYPES.SET_POSITIONS:
      return {
        ...state,
        positions: action.positions,
      };
    case MAZE_ACTION_TYPES.SET_ORIGINAL_WALLS:
      return {
        ...state,
        walls: { ...state.walls, original: action.originalWalls },
      };
    case MAZE_ACTION_TYPES.GENERATE_WALLS:
      return {
        ...state,
        walls: { ...state.walls, generated: MazeUtils.generateWalls(action.walls, action.size) },
      };
    case MAZE_ACTION_TYPES.SET_PRINT:
      return {
        ...state,
        print: action.data,
      };
    default:
      return state;
  }
};
