import { FC, JSX } from 'react';
import { ProgressBarProps } from '../../types/props';
import ProgressBarItem from './ProgressBarItem';

const ProgressBar: FC<ProgressBarProps> = ({
  progressSteps,
  onClick,
}): JSX.Element => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C1C] p-4 mb-8 overflow-x-auto">
      <div className="flex justify-center md:justify-center items-center space-x-4 w-max mx-auto">
        {progressSteps.map((stepItem, step) => (
          <ProgressBarItem
            key={step}
            {...stepItem}
            step={step}
            onClick={() => onClick(step)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
