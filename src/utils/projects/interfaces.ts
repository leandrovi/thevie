export interface ProjectProps {
  id: string;
  name: string;
  thumbImgSrc: string;
  titleImgSrc: string;
  sectionTitle: string;
  textA: string;
  textB: string;
  imagesSrcs: string[];
}

export interface ProjectResume {
  id: string;
  name: string;
  thumbImgSrc: string;
  titleImgSrc: string;
  projectHref: string;
}
