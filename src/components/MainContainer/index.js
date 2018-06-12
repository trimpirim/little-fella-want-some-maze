import React from 'react';

const MainComponent = ({ route, ...props }) => (
  <div style={{ height: '100%' }}>
    {route.main && <route.main key="main" {...props} />}
  </div>
);

export default MainComponent;
