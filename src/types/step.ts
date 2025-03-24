import { FC } from 'react';

// StepOption interface represents the structure of a step option
export interface StepOption {
  id: number;
  name: string;
  icon: FC<{ className: string }>;
}
