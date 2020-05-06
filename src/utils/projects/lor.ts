import { uuid } from 'uuidv4';

import { ProjectProps } from './interfaces';

const lor: ProjectProps = {
  id: uuid(),
  name: "L'or",
  thumbImgSrc: '/projects/lor/6.jpg',
  titleImgSrc: '/texts/lor.svg',
  sectionTitle: 'Abc',
  textA:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac fermentum ex, at lobortis massa. Integer vel augue sem. Nam vitae pellentesque ex. Ut aliquam dapibus massa nec convallis. Nullam finibus congue efficitur. Praesent ipsum elit, tincidunt ut vehicula a, maximus vel tortor',
  textB:
    ' Aenean nec cursus nulla. In hac habitasse platea dictumst. Vestibulum viverra massa at purus condimentum, sit amet bibendum neque sodales. Curabitur vel eros ante.',
  imagesSrcs: [
    '/projects/lor/1.jpg',
    '/projects/lor/2.jpg',
    '/projects/lor/3.jpg',
    '/projects/lor/4.jpg',
    '/projects/lor/5.jpg',
    '/projects/lor/6.jpg',
    '/projects/lor/7.jpg',
    '/projects/lor/8.jpg',
  ],
};

export default lor;
