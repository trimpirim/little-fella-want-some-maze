import React from 'react';

import { Field as ReduxFormField, reduxForm } from 'redux-form';
import { CardHeader, Card, CardContent, CardActions, Button, MenuItem, FormControl, InputLabel, Grid } from '@material-ui/core';
import { TextField, Select } from 'redux-form-material-ui';

import { required } from '../../utils/validations';

const Start = ({
  handleSubmit,
  onSubmit,
}) => {
  const names = ['Twilight Sparkle', 'Rainbow Dash', 'Pinkie Pie', 'Rarity', 'Applejack', 'Fluttershy'];

  const _onSubmit = ({
    width, height, name, difficulty,
  }) => {
    onSubmit({
      width: +width, height: +height, name, difficulty,
    });
  };

  return (
    <form onSubmit={handleSubmit(_onSubmit)}>
      <Card>
        <CardHeader title="Are you able to help Pony?" />
        <CardContent>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              Maze settings
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <ReduxFormField
                  name="width"
                  label="Width?"
                  component={TextField}
                  validate={required}
                  type="number"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <ReduxFormField
                  name="height"
                  label="Height?"
                  component={TextField}
                  validate={required}
                  type="number"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              Pony details
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="width">Name?</InputLabel>
                <ReduxFormField
                  name="name"
                  component={Select}
                  validate={required}
                  fullWidth
                >
                  {names.map((name, index) => (
                    <MenuItem value={name} key={index}>{name}</MenuItem>
                  ))}
                </ReduxFormField>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              Game settings
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="width">Difficulty?</InputLabel>
                <ReduxFormField
                  name="difficulty"
                  component={Select}
                  validate={required}
                  fullWidth
                >
                  {[...Array(10).keys()].map((number, index) => (
                    <MenuItem value={number} key={index}>{number}</MenuItem>
                  ))}
                </ReduxFormField>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions disableActionSpacing>
          <Button variant="outlined" color="primary" fullWidth type="submit">
            Do it!
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default reduxForm({
  form: 'startForm',
})(Start);
