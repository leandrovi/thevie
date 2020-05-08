import React from 'react';
import { NextComponentType } from 'next';
import Slider from 'react-slick';

import ProjectArrowLink from '@/components/ProjectArrowLink';

import projects from '@/utils/projectsResume';

import {
  Container,
  SliderWrapper,
  Item,
  Content,
  Title,
  Indicators,
  LinkWrapper,
} from './styles';

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
          pauseOnHover={false}
          adaptiveHeight
          customPaging={i => (
            <Indicators>
              <p>{i + 1}</p>
            </Indicators>
          )}
        >
          {projects.map(project => (
            <Item key={project.id}>
              <Content>
                <img src={project.thumbImgSrc} alt={project.name} />

                <Title>
                  <img src={project.titleImgSrc} alt={project.name} />
                </Title>

                <LinkWrapper>
                  <ProjectArrowLink
                    href={project.projectHref}
                    direction="right"
                  />
                </LinkWrapper>
              </Content>
            </Item>
          ))}
        </Slider>
      </SliderWrapper>
    </Container>
  );
};

export default HomeSlider;
