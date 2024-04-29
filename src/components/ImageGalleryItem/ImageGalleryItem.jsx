import React from 'react';
import styled from 'styled-components';

const GalleryItem = styled.li`
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export default function ImageGalleryItem({ image, onClick }) {
  const handleClick = () => {
    onClick(image.largeImageURL);
  };

  return (
    <GalleryItem onClick={handleClick}>
      <img src={image.webformatURL} alt={image.id} />
    </GalleryItem>
  );
}
