import { FC, JSX } from 'react';
import { ContentTitleProps } from '../../types/props';

const ContentTitle: FC<ContentTitleProps> = ({ title }): JSX.Element => (
  <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
);

export default ContentTitle;
