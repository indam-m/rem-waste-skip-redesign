import { FC } from 'react';

export interface StepOption {
  id: number;
  name: string;
  icon: FC<{ className: string }>;
}
