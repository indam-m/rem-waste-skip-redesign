import { FC, JSX } from 'react';
import { ProgressBarProps } from '../../types/props';
import ProgressBarItem from './ProgressBarItem';

const ProgressBar: FC<ProgressBarProps> = ({
  progressSteps,
  currentStep,
}): JSX.Element => {
  return (
    <div className="flex justify-center mb-8 overflow-x-auto">
      <div className="flex items-center space-x-4">
        {progressSteps.map((stepItem, step) => (
          <ProgressBarItem
            key={step}
            {...stepItem}
            step={step}
            currentStep={currentStep}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
