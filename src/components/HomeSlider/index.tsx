import React from 'react';
import { NextComponentType } from 'next';
import Slider from 'react-slick';

import ProjectArrowLink from '@/components/ProjectArrowLink';

import { Container, SliderWrapper, Item, Content, Indicators } from './styles';

interface SliderItem {
  id: number;
  url: string;
  alt: string;
}

const sliderItems = [
  {
    id: 0,
    url:
      'https://cdn.pixabay.com/photo/2013/03/02/02/41/city-89197_960_720.jpg',
    alt: 'Architecture',
  },
  {
    id: 1,
    url:
      'https://images.unsplash.com/photo-1588772666545-fa67e1bc0737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
    alt: 'Architecture',
  },
  {
    id: 2,
    url:
      'https://cdn.pixabay.com/photo/2015/03/26/09/48/chicago-690364_960_720.jpg',
    alt: 'Architecture',
  },
  {
    id: 3,
    url:
      'https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041_960_720.jpg',
    alt: 'Architecture',
  },
];

const HomeSlider: NextComponentType = () => {
  return (
    <Container>
      <SliderWrapper>
        <Slider
          dots
          infinite
          speed={500}
          autoplay
          autoplaySpeed={3000}
          slidesToShow={1}
          slidesToScroll={1}
          pauseOnDotsHover
          adaptiveHeight
          fade
          customPaging={i => (
            <Indicators>
              <p>{i + 1}</p>
            </Indicators>
          )}
        >
          {sliderItems.map(item => (
            <Item key={item.id}>
              <Content>
                <img src={item.url} alt={item.alt} />

                <ProjectArrowLink href="/about" direction="right" />
              </Content>
            </Item>
          ))}
        </Slider>
      </SliderWrapper>
    </Container>
  );
};

export default HomeSlider;
