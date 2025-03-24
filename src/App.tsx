import { useEffect, useState } from 'react';
import ProgressBar from './components/Progress/ProgressBar';
import {
  MAX_STEP_ALLOWED,
  MIN_STEP_ALLOWED,
  StepEnum,
  STEP_OPTIONS,
} from './constants/step';
import { useGeneralContext } from './contexts/GeneralContext';
import WasteType from './components/WasteType';
import SelectSkip from './components/SelectSkip';
import PermitCheck from './components/PermitCheck';

const App = () => {
  // context
  const generalCtx = useGeneralContext();

  // functions
  const getContent = (step: StepEnum) => {
    switch (step) {
      case StepEnum.STEP_WASTE_TYPE:
        return <WasteType onBack={handleBack} onContinue={handleContinue} />;
      case StepEnum.STEP_SELECT_SKIP:
        return <SelectSkip onBack={handleBack} onContinue={handleContinue} />;
      case StepEnum.STEP_PERMIT_CHECK:
        return <PermitCheck onBack={handleBack} onContinue={handleContinue} />;
      default:
        return undefined;
    }
  };
  const handleBack = () => {
    if (generalCtx.currentStep === MIN_STEP_ALLOWED) {
      return;
    }
    generalCtx.setCurrentStep(generalCtx.currentStep - 1);
  };
  const handleContinue = () => {
    if (generalCtx.currentStep === MAX_STEP_ALLOWED) {
      return;
    }
    generalCtx.setCurrentStep(generalCtx.currentStep + 1);
  };
  const handleClickProgress = (step: number) => {
    if (step < MIN_STEP_ALLOWED || step > MAX_STEP_ALLOWED) {
      return;
    }
    generalCtx.setCurrentStep(step);
  };

  // states
  const [currentContent, setCurrentContent] = useState(
    getContent(generalCtx.currentStep),
  );

  // effect
  useEffect(() => {
    setCurrentContent(getContent(generalCtx.currentStep));
  }, [generalCtx.currentStep]);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <ProgressBar
          progressSteps={STEP_OPTIONS}
          onClick={handleClickProgress}
        />
        {currentContent}
      </main>
    </div>
  );
};

export default App;
