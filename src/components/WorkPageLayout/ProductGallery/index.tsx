import React, { useRef, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';

import { useScroll } from '@/hooks/useScroll';

import { Container, ImageContainer } from './styles';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement>();
  const { scrollY } = useScroll();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  // const handleScroll = () => {
  //   const posY = containerRef.current.getBoundingClientRect().top;
  //   const newOffset = scrollY - posY;
  //   set({ offset: newOffset });

  //   console.log(offset);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // });

  return (
    <Container ref={containerRef}>
      {images.map(image => (
        <ImageContainer key={images.indexOf(image)}>
          <img src={image} alt="Fusics" />
        </ImageContainer>
      ))}
    </Container>
  );
};

export default ProductGallery;
