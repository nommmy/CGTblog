import { FC, useEffect, useState } from 'react';

const PreloadImage: FC<{ image: string }> = ({ image }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setLoaded(true);
    };
  }, [image]);

  if (loaded) {
    return (
      <img
        src={image}
        alt="Header"
        decoding="async"
      />
    );
  }

  return <img src="/pommeblog.webp" alt="Header" decoding="async" />;
};

export default PreloadImage;
