import { uuid } from 'uuidv4';

import { ProjectProps } from './interfaces';

const fusics: ProjectProps = {
  id: uuid(),
  name: 'Fusics',
  thumbImgSrc: '/projects/fusics/6.jpg',
  titleImgSrc: '/texts/fusics.svg',
  sectionTitle: 'Abc',
  textA:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac fermentum ex, at lobortis massa. Integer vel augue sem. Nam vitae pellentesque ex. Ut aliquam dapibus massa nec convallis. Nullam finibus congue efficitur. Praesent ipsum elit, tincidunt ut vehicula a, maximus vel tortor',
  textB:
    ' Aenean nec cursus nulla. In hac habitasse platea dictumst. Vestibulum viverra massa at purus condimentum, sit amet bibendum neque sodales. Curabitur vel eros ante.',
  imagesSrcs: [
    '/projects/fusics/1.jpg',
    '/projects/fusics/2.jpg',
    '/projects/fusics/3.jpg',
    '/projects/fusics/4.jpg',
    '/projects/fusics/5.jpg',
    '/projects/fusics/6.jpg',
    '/projects/fusics/7.jpg',
    '/projects/fusics/8.jpg',
    '/projects/fusics/9.jpg',
    '/projects/fusics/10.jpg',
    '/projects/fusics/11.jpg',
    '/projects/fusics/12.jpg',
  ],
};

export default fusics;
