import { useState } from 'react';
import ProgressBar from './components/Progress/ProgressBar';
import { StepEnum, STEP_OPTIONS } from './constants/step';
import WasteType from './components/WasteType';

const App = () => {
  const [currentStep, setCurrentStep] = useState(2 as StepEnum);

  // functions
  const getContent = (step: StepEnum) => {
    switch (step) {
      case StepEnum.STEP_WASTE_TYPE:
        return <WasteType onBack={handleBack} onContinue={handleContinue} />;
      default:
        return undefined;
    }
  };
  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    currentContent = getContent(currentStep);
  };
  const handleContinue = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    currentContent = getContent(currentStep);
  };

  let currentContent = getContent(currentStep);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <ProgressBar currentStep={currentStep} progressSteps={STEP_OPTIONS} />
        {currentContent}
      </main>
    </div>
  );
};

export default App;
