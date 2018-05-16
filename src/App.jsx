import React from 'react';

import './App.css';

import PointingBox from './components/styled/PointingBox';
import PointingBox2 from './components/glamorous/PointingBox';
import PointingBox3 from './components/emotion/PointingBox';

export default () =>
  (
    <div className="App">
      <PointingBox
        width="150px"
        height="150px"
        bottom
        borderRadius="10px"
        padding="10px"
        backgroundColor="#88b7d5"
        borderColor="#c2e1f5"
        size={25}
        color="#fff"
      >
        <h1>I am a stylish pointing box!</h1>
      </PointingBox>

      <PointingBox2
        width="150px"
        height="150px"
        top
        borderRadius="10px"
        padding="10px"
        backgroundColor="#88b7d5"
        borderColor="#c2e1f5"
        size={20}
        color="#fff"
      >
        <h1>I am a glamorous pointing box!</h1>
      </PointingBox2>

      <PointingBox3
        width="150px"
        height="150px"
        left
        borderRadius="10px"
        padding="10px"
        backgroundColor="#88b7d5"
        borderColor="#c2e1f5"
        size={20}
        color="#fff"
      >
        <h1>I am an emotional pointing box!</h1>
      </PointingBox3>
    </div>
  );
