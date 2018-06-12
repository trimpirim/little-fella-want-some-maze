export const WALL_NAMES = {
  TOP: 'north',
  LEFT: 'west',
  BOTTOM: 'south',
  RIGHT: 'east',
};

class Location {
  constructor(key, path, directions) {
    this.key = key;
    this.path = path;
    this.directions = directions;
  }
}

class LocationPoint {
  constructor(key, direction) {
    this.key = key;
    this.direction = direction;
  }
}

function calculatePointKey(key, wallIdentifier, mazeWidth) {
  switch (wallIdentifier) {
    case WALL_NAMES.LEFT:
      return key - 1;
    case WALL_NAMES.TOP:
      return key - mazeWidth;
    case WALL_NAMES.RIGHT:
      return key + 1;
    case WALL_NAMES.BOTTOM:
      return key + mazeWidth;
    default:
      return false;
  }
}

function locationAndDirectionAvailable(maze, key, wallIdentifier) {
  switch (wallIdentifier) {
    case WALL_NAMES.LEFT:
      return maze[key].left;
    case WALL_NAMES.TOP:
      return maze[key].top;
    case WALL_NAMES.RIGHT:
      return maze[key].right;
    case WALL_NAMES.BOTTOM:
      return maze[key].bottom;
    default:
      return false;
  }
}

export const generateWalls = (data, mazeParameters) => {
  const generated = data.reduce((carry, item, i, originalArray) => {
    const walls = {
      left: false,
      top: false,
      right: false,
      bottom: false,
    };

    /**
     * Generates rest of the walls and transforms walls into the needed object:
     * {
     *  left: boolean, // wall exists - true | false
     *  right: boolean,
     *  top: boolean,
     *  bottom: boolean
     * }
     *
     * Right wall is calculated by checking next cell's left wall or checking if the next index is out of borders
     * Bottom wall is calculated almost in the same way as the right one -
     *  checking if the cell below has top wall or is out of boundaries.
     */
    walls.right = (i + 1 > originalArray.length) ||
      (i + 1 < originalArray.length &&
        originalArray[i + 1].some(wall => wall === WALL_NAMES.LEFT));
    walls.bottom = (i + mazeParameters.width > originalArray.length) ||
      (i + mazeParameters.width < originalArray.length &&
        originalArray[i + mazeParameters.width].some(wall => wall === WALL_NAMES.TOP));
    walls.left = item.some(wall => wall === WALL_NAMES.LEFT);
    walls.top = item.some(wall => wall === WALL_NAMES.TOP);

    carry.push(walls);

    return carry;
  }, []);

  return generated;
};

/**
 * Finds path to the exit by using simpliest iterative idea of floodfill.
 */
// eslint-disable-next-line
export function findPath(maze, initialPoint, positions, mazeParameters) {
  // visited keys
  const visited = {};
  // creating initial locations array
  const locations = [new Location(initialPoint, [initialPoint], [])];
  // the iterative method begins - repeat the loop as long as we have something in the queue
  while (locations.length > 0) {
    // shifts the element from the locations list
    const location = locations.shift();
    // create new next four points (neightbours)
    const nextPoints = [
      new LocationPoint(calculatePointKey(location.key, WALL_NAMES.LEFT, mazeParameters.width), WALL_NAMES.LEFT),
      new LocationPoint(calculatePointKey(location.key, WALL_NAMES.TOP, mazeParameters.width), WALL_NAMES.TOP),
      new LocationPoint(calculatePointKey(location.key, WALL_NAMES.RIGHT, mazeParameters.width), WALL_NAMES.RIGHT),
      new LocationPoint(calculatePointKey(location.key, WALL_NAMES.BOTTOM, mazeParameters.width), WALL_NAMES.BOTTOM),
    ];

    while (nextPoints.length > 0) {
      const point = nextPoints.pop();

      if (point.key < 0 ||
        point.key >= maze.length ||
        visited[point.key] ||
        point.key === positions.enemy) {
        // eslint-disable-next-line
        continue;
      }

      if (locationAndDirectionAvailable(maze, location.key, point.direction)) {
        // eslint-disable-next-line
        continue;
      }

      // check if current location is the exit
      if (location.key === positions.exit) {
        return location;
      }

      // creates new location with the path and directions
      const nextLocation = new Location(
        point.key,
        [...location.path, point.key],
        [...location.directions, point.direction],
      );

      // push into the queue
      locations.push(nextLocation);
      visited[location.key] = true;
    }
  }
}

export const MazeUtils = {
  findPath,
  generateWalls,
  WALL_NAMES,
};
