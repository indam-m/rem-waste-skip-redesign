import { FC, JSX } from 'react';
import { ContentTitleProps } from '../../types/props';

const ContentTitle: FC<ContentTitleProps> = ({ title }): JSX.Element => {
  return <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>;
};

export default ContentTitle;
