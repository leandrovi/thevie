import { uuid } from 'uuidv4';

import { ProjectProps } from './interfaces';

const fusics: ProjectProps = {
  id: uuid(),
  name: 'Fusics',
  thumbImgSrc: '/projects/fusics/6.jpg',
  titleImgSrc: '/texts/fusics.svg',
  sectionTitle: 'Abc',
  textA:
    'Gilmar, product engineer and his son Vinícius, product designer.From a big dream, they founded Cria Criativa, a company that develops and design products creating many possibilities throughout forms, materials and purpose.',
  textB:
    'The name, from Portuguese, means “Creative Breeding” - Comes from their creative way to think and design products - It all starts with creativity.”',
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
