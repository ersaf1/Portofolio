import React from 'react';
import PhotoGallery from '../components/PhotoGallery';

const Gallery: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Galeri Foto</h1>
      <PhotoGallery />
    </div>
  );
};

export default Gallery;
