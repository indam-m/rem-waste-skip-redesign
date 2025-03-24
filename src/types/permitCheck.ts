import { FC } from 'react';

export interface PermitCheckOption {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: FC<{ className: string }>;
}
