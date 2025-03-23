// For Step Progress Indicator

import {
  MapPin,
  Trash2,
  Truck,
  Shield,
  Calendar,
  CreditCard,
} from 'lucide-react';
import { StepOption } from '../types/step';

export enum StepEnum {
  STEP_POST_CODE = 1,
  STEP_WASTE_TYPE,
  STEP_SELECT_SKIP,
  STEP_PERMIT_CHECK,
  STEP_CHOOSE_DATE,
  STEP_PAYMENT,
}

export const STEP_OPTIONS: StepOption[] = [
  { id: StepEnum.STEP_POST_CODE, name: 'Post Code', icon: MapPin },
  { id: StepEnum.STEP_WASTE_TYPE, name: 'Waste Type', icon: Trash2 },
  { id: StepEnum.STEP_SELECT_SKIP, name: 'Select Skip', icon: Truck },
  { id: StepEnum.STEP_PERMIT_CHECK, name: 'Permit Check', icon: Shield },
  { id: StepEnum.STEP_CHOOSE_DATE, name: 'Choose Date', icon: Calendar },
  { id: StepEnum.STEP_PAYMENT, name: 'Payment', icon: CreditCard },
];

export const STEP_TITLES: string[] = [
  '',
  'Which type of waste best describes what you are disposing of?',
  '',
  '',
  '',
  '',
];
