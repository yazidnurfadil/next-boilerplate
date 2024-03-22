import React from 'react';

type Props = {
  variant: 'orange' | 'green' | 'yellow';
};

export const Circle = ({ variant }: Props) => {
  let bgColor;
  switch (variant) {
    case 'orange':
      bgColor = 'bg-orange-500';
      break;
    case 'green':
      bgColor = 'bg-green-500';
      break;
    case 'yellow':
      bgColor = 'bg-yellow-500';
      break;
  }

  return <div className={`${bgColor} h-14 w-14 rounded-full p-2`}></div>;
};
