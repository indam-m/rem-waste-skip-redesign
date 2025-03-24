import React, { createContext, useContext, useState } from 'react';
import { DEFAULT_STEP } from '../constants/step';
import { GeneralContextInterface, WasteInput } from '../types/context';
import { BasicPropsWithChildren } from '../types/props';
import { SkipOption } from '../types/skipType';

const initialValue: GeneralContextInterface = {
  wasteInput: {
    selectedSkipID: 0,
    selectedSkipObj: {} as SkipOption,
    selectedWasteTypes: [],
    selectedPermitCheck: 0,
  } as WasteInput,
  currentStep: DEFAULT_STEP,
  loading: false,
  currency: '£',
  setCurrentStep: () => {},
  setLoading: () => {},
  setWasteInput: () => {},
};

const GeneralContext = createContext<GeneralContextInterface>({
  ...initialValue,
});

export const GeneralProvider: React.FC<BasicPropsWithChildren> = ({
  children,
}): React.JSX.Element => {
  const [wasteInput, setWasteInput] = useState({ ...initialValue.wasteInput });
  const [currentStep, setCurrentStep] = useState(initialValue.currentStep);
  const [loading, setLoading] = useState(initialValue.loading);

  return (
    <GeneralContext.Provider
      value={{
        wasteInput,
        currentStep,
        loading,
        currency: initialValue.currency,
        setWasteInput,
        setCurrentStep,
        setLoading,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  const ctx = useContext(GeneralContext);
  return ctx;
};
