import React, { useEffect } from 'react';

const Film: React.FC = (props) => {
  useEffect(() => {
    document.title = 'MULTIPLEX - login';
    console.log(props);

    return () => {
      document.title = 'Multiplex';
    };
  }, []);

  return (
    <div className="h-screen flex">
      <div className="w-1/2">fasddfsa</div>
      <div className="w-1/2">fdasf</div>
    </div>
  );
};

export default Film;
