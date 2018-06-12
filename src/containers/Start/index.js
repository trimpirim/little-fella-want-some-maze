import React from 'react';

import { Grid } from '@material-ui/core';

import { connect } from 'react-redux';

import StartComponent from '../../components/Start';
import { dispatch } from '../../App';
import settingsActions from '../../actions/settings';

class Start extends React.Component {
  state = {};

  static getDerivedStateFromProps(props) {
    if (props && props.id) {
      props.history.push(`/maze/${props.id}`);
    }

    return props;
  }

  _handleStart = this._handleStart.bind(this);
  _handleStart({
    width, height, name, difficulty,
  }) {
    dispatch(settingsActions.changeSettings({
      width, height, name, difficulty,
    }));
  }

  render() {
    return (
      <Grid container spacing={16}>
        <Grid container item justify="center">
          <Grid item xs={4}>
            <StartComponent onSubmit={this._handleStart} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  id: state.maze.id,
});

export default connect(mapStateToProps)(Start);
