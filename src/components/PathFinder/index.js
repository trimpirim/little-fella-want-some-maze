import React from 'react';

import { Grid, Card, CardHeader, Button, CardContent } from '@material-ui/core';

import PathExtractor from '../PathExtractor';
import { MazeUtils } from '../../utils/maze-transformer';

class PathFinder extends React.Component {
  state = {
    path: null,
  };

  _findPath = this._findPath.bind(this);
  _findPath() {
    this.setState({
      path: MazeUtils.findPath(this.props.walls, this.props.positions.pony, this.props.positions, this.props.size),
    });
  }

  _onMove = this._onMove.bind(this);
  _onMove(location, index) {
    const directions = this.state.path.directions.filter((item, key) => key !== index);
    this.setState({
      path: { ...this.state.path, directions },
    });
    this.props.onMove(location);
  }

  render() {
    return (
      <Card>
        <CardHeader title="Psst, I can help to find the path?" />
        <CardContent>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary" fullWidth onClick={this._findPath}>
                Help me, please!
              </Button>
            </Grid>
            <Grid item xs={12}>
              {this.state.path && <PathExtractor path={this.state.path} onMove={this._onMove} />}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default PathFinder;
