import React from 'react';

import users from './data.json';//all our data

import Header from './components/Header';
import Content from './components/Content';//Component were we will fill with our data

import './App.css';

//Sorting our data by balance
let sorted = users.sort((a, b) => {
  if (a.balance < b.balance) return 1;
  if (a.balance > b.balance) return -1;
  return 0;
});

//And filtering our data by eye color and isActive status
let activeBlueEyes = sorted.filter(item => item.eyeColor === "blue" && item.isActive);
let activeGreenEyes = sorted.filter(item => item.eyeColor === "green" && item.isActive);
let activeBrownEyes = sorted.filter(item => item.eyeColor === "brown" && item.isActive);

let inActiveBlueEyes = sorted.filter(item => item.eyeColor === "blue" && !item.isActive);
let inActiveGreenEyes = sorted.filter(item => item.eyeColor === "green" && !item.isActive);
let inActiveBrownEyes = sorted.filter(item => item.eyeColor === "brown" && !item.isActive);


export default function App() {
  return (

    <div className="App">
      <Header title="Some Header"/>

      {/* Dividing our data into two big colums  of active and inactive users*/}
      <div className="flexy-stuff">

        <Header title="Active" />
        <Header title="In Active" />

      </div>

      {/* And filling our data into our DOM */}
      <div className="flexy-stuff">

        <Content
          blue={activeBlueEyes}
          green={activeGreenEyes}
          brown={activeBrownEyes}
        />
        <Content
          blue={inActiveBlueEyes}
          green={inActiveGreenEyes}
          brown={inActiveBrownEyes}
        />

      </div>

    </div>

  );
}
