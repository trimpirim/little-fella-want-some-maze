import React from 'react';

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBackward from '@material-ui/icons/ArrowBack';

import { Grid, Button } from '@material-ui/core';
import { WALL_NAMES } from '../../utils/maze-transformer';

const Direction = ({ direction, index, onClick }) => {
  let icon = null;

  switch (direction) {
    case WALL_NAMES.BOTTOM:
      icon = <ArrowDownward />;
      break;
    case WALL_NAMES.TOP:
      icon = <ArrowUpward />;
      break;
    case WALL_NAMES.LEFT:
      icon = <ArrowBackward />;
      break;
    case WALL_NAMES.RIGHT:
      icon = <ArrowForward />;
      break;
    default:
      return null;
  }

  return (
    <Grid item xs={4}>
      <Button variant="outlined" color="primary" fullWidth onClick={() => onClick(direction, index)}>
        {icon}
      </Button>
    </Grid>
  );
};

const PathExtractor = ({ path, onMove }) => {
  if (!path) {
    return null;
  }

  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        Here you go, follow this path and you will find the EXIT!
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          {path.directions.map((direction, key) => (
            <Direction direction={direction} key={key} index={key} onClick={onMove} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PathExtractor;
