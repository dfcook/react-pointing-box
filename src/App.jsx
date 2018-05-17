import React from 'react';

import './App.css';

import PointingBox from './components/styled/PointingBox';
import PointingBox2 from './components/glamorous/PointingBox';
import PointingBox3 from './components/emotion/PointingBox';
import PointingBox4 from './components/css/PointingBox';

const styles = {
  width: '200px',
  height: '200px',
  borderRadius: '10px',
  padding: '10px',
  backgroundColor: '#88b7d5',
  borderColor: '#c2e1f5',
  borderSize: 20,
  size: 40,
  color: '#fff',
};

export default () =>
  (
    <div className="App">
      <PointingBox
        {...styles}
        bottom
      >
        <h1>I am a stylish pointing box!</h1>
      </PointingBox>

      <PointingBox2
        {...styles}
        top
      >
        <h1>I am a glamorous pointing box!</h1>
      </PointingBox2>

      <PointingBox3
        {...styles}
        bottom
      >
        <h1>I am an emotional pointing box!</h1>
      </PointingBox3>

      <PointingBox4
        {...styles}
        right
      >
        <h1>I am a pointing box with SASS!</h1>
      </PointingBox4>
    </div>
  );
