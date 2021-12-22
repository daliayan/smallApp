import React from 'react';
import AdderButton from './AddOn /AdderButton';
import Counter from './AddOn /Counter';
import PlusMinus from './AddOn /PlusMinus';

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
    </header>
  );
}

export default About;