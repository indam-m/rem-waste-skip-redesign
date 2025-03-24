import { SkipOption } from './skipType';

export interface WasteInput {
  selectedSkipID: number;
  selectedSkipObj: SkipOption;
  selectedWasteTypes: number[];
  selectedPermitCheck: number;
}

export interface GeneralContextInterface {
  currentStep: number;
  loading: boolean;
  wasteInput: WasteInput;
  currency: string;
  setCurrentStep: (currentStep: number) => void;
  setLoading: (loading: boolean) => void;
  setWasteInput: (wasteInput: WasteInput) => void;
}
