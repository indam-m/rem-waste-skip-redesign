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
import { StepEnum } from '../types/enum';

// DEFAULT_STEP defines the default step when entering the page
export const DEFAULT_STEP = StepEnum.STEP_SELECT_SKIP;

// MAX_STEP_ALLOWED defines the maximum allowed step as a limitation of this code challenge
export const MAX_STEP_ALLOWED = StepEnum.STEP_PERMIT_CHECK;

// MIN_STEP_ALLOWED defines the minimum allowed step as a limitation of this code challenge
export const MIN_STEP_ALLOWED = StepEnum.STEP_WASTE_TYPE;

// STEP_OPTIONS defines the available steps in the step progress indicator
export const STEP_OPTIONS: StepOption[] = [
  { id: StepEnum.STEP_POST_CODE, name: 'Post Code', icon: MapPin },
  { id: StepEnum.STEP_WASTE_TYPE, name: 'Waste Type', icon: Trash2 },
  { id: StepEnum.STEP_SELECT_SKIP, name: 'Select Skip', icon: Truck },
  { id: StepEnum.STEP_PERMIT_CHECK, name: 'Permit Check', icon: Shield },
  { id: StepEnum.STEP_CHOOSE_DATE, name: 'Choose Date', icon: Calendar },
  { id: StepEnum.STEP_PAYMENT, name: 'Payment', icon: CreditCard },
];
