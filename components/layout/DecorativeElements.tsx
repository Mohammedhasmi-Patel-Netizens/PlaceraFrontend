import React from 'react';

const DecorativeElements: React.FC = () => {
  return (
    <>
      <div className="absolute top-10 left-10 w-12 h-12 border-2 border-orange-400 rotate-12 opacity-50" />
      <div className="absolute top-20 right-20 w-8 h-8 border-2 border-orange-400 rotate-45 opacity-50" />
      <div className="absolute bottom-20 left-32 w-10 h-10 border-2 border-orange-400 -rotate-12 opacity-50" />
      <div className="absolute bottom-32 right-40 w-6 h-6 border-2 border-orange-400 rotate-45 opacity-50" />
      <div className="absolute top-1/3 left-20 w-16 h-16 border-2 border-orange-400 rotate-45 opacity-30" />
      <div className="absolute bottom-1/4 right-24 w-12 h-12 border-2 border-orange-400 -rotate-12 opacity-40" />
    </>
  );
};

export default DecorativeElements;