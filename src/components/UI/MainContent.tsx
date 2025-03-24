import { FC, JSX } from 'react';

import ContentTitle from './ContentTitle';
import { MainContentProps } from '../../types/props';

const MainContent: FC<MainContentProps> = ({
  className,
  title,
  children,
}): JSX.Element => (
  <div className={className}>
    <ContentTitle title={title} />
    {children}
  </div>
);

export default MainContent;
