import ProgressBar from './components/Progress/ProgressBar';
import {
  MAX_STEP_ALLOWED,
  MIN_STEP_ALLOWED,
  StepEnum,
  STEP_OPTIONS,
} from './constants/step';
import { GeneralProvider, useGeneralContext } from './contexts/GeneralContext';
import WasteType from './components/WasteType';
import SelectSkip from './components/SelectSkip';

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
      default:
        return undefined;
    }
  };
  const handleBack = () => {
    if (generalCtx.currentStep === MIN_STEP_ALLOWED) {
      return;
    }
    generalCtx.setCurrentStep(generalCtx.currentStep - 1);
    currentContent = getContent(generalCtx.currentStep);
  };
  const handleContinue = () => {
    if (generalCtx.currentStep === MAX_STEP_ALLOWED) {
      return;
    }
    generalCtx.setCurrentStep(generalCtx.currentStep + 1);
    currentContent = getContent(generalCtx.currentStep);
  };

  let currentContent = getContent(generalCtx.currentStep);

  return (
    <GeneralProvider>
      <div className="min-h-screen bg-[#121212] text-white">
        <main className="max-w-7xl mx-auto px-4 py-8">
          <ProgressBar progressSteps={STEP_OPTIONS} />
          {currentContent}
        </main>
      </div>
    </GeneralProvider>
  );
};

export default App;
