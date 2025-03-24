import { FC } from 'react';

// PermitCheckOption interface represents the structure of a permit check option
export interface PermitCheckOption {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: FC<{ className: string }>;
}
