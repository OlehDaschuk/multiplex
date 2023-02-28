import React, { useState } from 'react';
import image404 from '../../assets/imgs/404-image.jpeg';

const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ src, ...props }) => {
  const [hasError, setHasError] = useState(false);

  return <img onError={() => setHasError(true)} src={hasError ? image404 : src} {...props} />;
};

export default Image;
