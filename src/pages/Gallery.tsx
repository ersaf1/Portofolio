import React from 'react';
import CircularGallery from '../components/CircularGallery';
import photo1 from '../assets/WhatsApp Image 2025-10-10 at 10.12.54.jpeg';
import photo2 from '../assets/WhatsApp Image 2025-10-10 at 10.12.56.jpeg';
import photo3 from '../assets/WhatsApp Image 2025-10-10 at 10.13.04 (1).jpeg';
import photo4 from '../assets/WhatsApp Image 2025-10-10 at 10.13.05.jpeg';
import photo5 from '../assets/WhatsApp Image 2025-10-10 at 10.13.26.jpeg';
import photo6 from '../assets/WhatsApp Image 2025-10-10 at 10.13.27.jpeg';
import photo7 from '../assets/WhatsApp Image 2025-10-10 at 10.13.28.jpeg';

const galleryItems = [
  { image: photo1, text: '' },
  { image: photo2, text: '' },
  { image: photo3, text: '' },
  { image: photo4, text: '' },
  { image: photo5, text: '' },
  { image: photo6, text: '' },
  { image: photo7, text: '' },
];

const Gallery: React.FC = () => {
  return (
    <div
      style={{
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        width: '100vw',
      }}
    >
      <h1 className="text-4xl font-bold py-8 text-center">Galeri Foto</h1>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          items={galleryItems}
          bend={10}
          textColor="#ffffff"
          borderRadius={0.22}
          scrollSpeed={2.2}
          scrollEase={0.09}
        />
      </div>
    </div>
  );
};

export default Gallery;


