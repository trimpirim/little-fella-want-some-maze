export const MAZE_ACTION_TYPES = {
  SET_MAZE_ID: 'maze:set-id',
  SET_SIZE: 'maze:set-size',
  LOAD_MAZE: 'maze:load',
  SET_ORIGINAL_WALLS: 'maze:set-original-walls',
  GENERATE_WALLS: 'maze:generate-walls',
  SET_POSITIONS: 'maze:set-positions',
  SET_LOADED: 'maze:set-loaded',
  MOVE: 'maze:move',
  SET_PRINT: 'maze:set-print',
  PRINT: 'maze:print',
};

export default {
  setId: id => ({
    type: MAZE_ACTION_TYPES.SET_MAZE_ID,
    id,
  }),
  setSize: size => ({
    type: MAZE_ACTION_TYPES.SET_SIZE,
    size,
  }),
  load: id => ({
    type: MAZE_ACTION_TYPES.LOAD_MAZE,
    id,
  }),
  setPositions: positions => ({
    type: MAZE_ACTION_TYPES.SET_POSITIONS,
    positions,
  }),
  setOriginalWalls: originalWalls => ({
    type: MAZE_ACTION_TYPES.SET_ORIGINAL_WALLS,
    originalWalls,
  }),
  generateWalls: (walls, size) => ({
    type: MAZE_ACTION_TYPES.GENERATE_WALLS,
    walls,
    size,
  }),
  setLoaded: loaded => ({
    type: MAZE_ACTION_TYPES.SET_LOADED,
    loaded,
  }),
  move: (direction, id) => ({
    type: MAZE_ACTION_TYPES.MOVE,
    direction,
    id,
  }),
  print: id => ({
    type: MAZE_ACTION_TYPES.PRINT,
    id,
  }),
  setPrint: data => ({
    type: MAZE_ACTION_TYPES.SET_PRINT,
    data,
  }),
};
