import { uuid } from 'uuidv4';

import { ProjectProps } from './interfaces';

const cafeRancheiro: ProjectProps = {
  id: uuid(),
  name: 'Café Rancheiro',
  thumbImgSrc: '/projects/cafe-rancheiro/6.jpg',
  titleImgSrc: '/texts/cafe-rancheiro.svg',
  sectionTitle: 'Abc',
  textA:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac fermentum ex, at lobortis massa. Integer vel augue sem. Nam vitae pellentesque ex. Ut aliquam dapibus massa nec convallis. Nullam finibus congue efficitur. Praesent ipsum elit, tincidunt ut vehicula a, maximus vel tortor',
  textB:
    ' Aenean nec cursus nulla. In hac habitasse platea dictumst. Vestibulum viverra massa at purus condimentum, sit amet bibendum neque sodales. Curabitur vel eros ante.',
  imagesSrcs: [
    '/projects/cafe-rancheiro/1.jpg',
    '/projects/cafe-rancheiro/2.jpg',
    '/projects/cafe-rancheiro/3.jpg',
    '/projects/cafe-rancheiro/4.jpg',
    '/projects/cafe-rancheiro/5.jpg',
    '/projects/cafe-rancheiro/6.jpg',
    '/projects/cafe-rancheiro/7.jpg',
    '/projects/cafe-rancheiro/8.jpg',
    '/projects/cafe-rancheiro/9.jpg',
    '/projects/cafe-rancheiro/10.jpg',
    '/projects/cafe-rancheiro/11.jpg',
  ],
};

export default cafeRancheiro;
