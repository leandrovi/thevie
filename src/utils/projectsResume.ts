import fusics from './projects/fusics';
import lor from './projects/lor';
import cafeRancheiro from './projects/cafeRancheiro';

import { ProjectResume } from './projects/interfaces';

const projects: ProjectResume[] = [
  {
    id: fusics.id,
    name: fusics.name,
    titleImgSrc: fusics.titleImgSrc,
    thumbImgSrc: fusics.thumbImgSrc,
    projectHref: '/work/fusics',
  },
  {
    id: lor.id,
    name: lor.name,
    titleImgSrc: lor.titleImgSrc,
    thumbImgSrc: lor.thumbImgSrc,
    projectHref: '/work/lor',
  },
  {
    id: cafeRancheiro.id,
    name: cafeRancheiro.name,
    titleImgSrc: cafeRancheiro.titleImgSrc,
    thumbImgSrc: cafeRancheiro.thumbImgSrc,
    projectHref: '/work/cafe-rancheiro',
  },
];

export default projects;
