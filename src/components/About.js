import React from 'react';
import AdderButton from './AddOn /AdderButton';
import Counter from './AddOn /Counter';
import PlusMinus from './AddOn /PlusMinus';
import AddToString from './AddOn /AddToString';
import BoldenMe from './AddOn /BoldenMe';

const About = () => {
  return (
    <header className="about-page">
      INSERT NUMBERS TO ADD THEM TOGETHER
      <AdderButton></AdderButton>
      <div>
          --------
      </div>
      THE BOX BELOW WILL ADD THE SUM OF THE TEXT CHARACTERS 
      <Counter></Counter>
      <div>
          --------
      </div>
        <PlusMinus></PlusMinus>
        <div>
          ---
        </div>
      <AddToString header="Hello World"/>
      <div>
        ------</div>   
      <BoldenMe />

    </header>
  );
}

export default About;