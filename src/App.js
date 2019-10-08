import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import Player from './components/player'; 

import './App.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function App() {

  const [ show, setShow ] = useState(true);

  var layout = [
    {i: 'a', x: 0, y: 0, w: 10, h: 5},
    // {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    // {i: 'c', x: 4, y: 0, w: 1, h: 2}
  ];

  return (
    <div className="App">
      {show && <div key="a"><Player/></div>}
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key="b">b</div>
        {/* <div key="b">b</div>
        <div key="c">c</div> */}
      </GridLayout>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default App;
