import React from 'react';
import { ContentTitleProps } from '../../types/props';

const ContentTitle: React.FC<ContentTitleProps> = ({
  title,
}): React.JSX.Element => {
  return <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>;
};

export default ContentTitle;
