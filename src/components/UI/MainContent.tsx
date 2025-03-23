import { FC, JSX } from 'react';

import ContentTitle from './ContentTitle';
import { MainContentProps } from '../../types/props';

const MainContent: FC<MainContentProps> = ({
  title,
  children,
}): JSX.Element => (
  <div className="max-w-5xl mx-auto">
    <ContentTitle title={title} />
    {children}
  </div>
);

export default MainContent;
