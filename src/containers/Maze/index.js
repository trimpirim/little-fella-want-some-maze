import React from 'react';

import { Grid } from '@material-ui/core';

import { connect } from 'react-redux';

import { dispatch } from '../../App';
import mazeActions from '../../actions/maze';
import PathFinder from '../../components/PathFinder';
import MazePrint from '../../components/MazePrint';

class Maze extends React.Component {
  static getDerivedStateFromProps(props) {
    if (props && props.id && !props.loaded) {
      dispatch(mazeActions.load(props.id));
      dispatch(mazeActions.print(props.id));
    }

    return {};
  }

  _onMove = this._onMove.bind(this);
  _onMove(direction) {
    dispatch(mazeActions.move(direction, this.props.id));
  }

  render() {
    return (
      <Grid container spacing={16}>
        <Grid container item justify="center">
          <Grid item xs={8}>
            <PathFinder walls={this.props.walls} size={this.props.size} positions={this.props.positions} onMove={direction => this._onMove(direction)} />
          </Grid>
          <Grid item xs={8}>
            {this.props.print && <MazePrint print={this.props.print} />}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  id: state.maze.id,
  walls: state.maze.walls.generated,
  positions: state.maze.positions,
  size: state.maze.size,
  loaded: state.maze.loaded,
  print: state.maze.print,
});

export default connect(mapStateToProps)(Maze);
