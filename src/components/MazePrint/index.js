import React from 'react';

import { Grid, Card, CardHeader, CardContent } from '@material-ui/core';

const MazePrint = ({ print }) => (
  <Card>
    <CardHeader title="Cheating is fine." />
    <CardContent>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <code style={{ whiteSpace: 'pre' }} dangerouslySetInnerHTML={{ __html: print }} />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default MazePrint;
