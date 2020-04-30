import React from 'react';
import { NextComponentType } from 'next';

import { Container, Slider, Prev, Next } from './styles';

const HomeSlider: NextComponentType = () => {
  return (
    <Container>
      <Slider>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
        <p>Item 4</p>

        <Prev />
        <Next />
      </Slider>
    </Container>
  );
};

export default HomeSlider;
