import { Home, Truck } from 'lucide-react';
import { PermitCheckOption } from '../types/permitCheck';

// PERMIT_CHECK_LIST defines the available options for permit checks
export const PERMIT_CHECK_LIST: PermitCheckOption[] = [
  {
    id: 1,
    title: 'Private Property',
    subtitle: 'Driveway or private land',
    description: 'No permit required when placed on your private property',
    icon: Home,
  },
  {
    id: 2,
    title: 'Public Road',
    subtitle: 'Street or public highway',
    description: 'Permit required for placement on public roads',
    icon: Truck,
  },
];
