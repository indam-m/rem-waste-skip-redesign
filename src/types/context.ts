import { SkipOption } from './skipType';

// WasteInput interface represents the structure of the waste input data
// used in the application.
export interface WasteInput {
  selectedSkipID: number;
  selectedSkipObj: SkipOption;
  selectedWasteTypes: number[];
  selectedPermitCheck: number;
}

// GeneralContextInterface represents the structure of the context data
// used for managing global state in the application.
export interface GeneralContextInterface {
  currentStep: number;
  loading: boolean;
  wasteInput: WasteInput;
  currency: string;
  setCurrentStep: (currentStep: number) => void;
  setLoading: (loading: boolean) => void;
  setWasteInput: (wasteInput: WasteInput) => void;
}
