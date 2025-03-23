import { FC, JSX } from 'react';
import { ProgressBarItemProps } from '../../types/props';

const ProgressBarItem: FC<ProgressBarItemProps> = ({
  icon,
  step,
  currentStep,
  name,
  onClick,
}): JSX.Element => {
  const Icon = icon;
  return (
    <>
      {step > 0 && (
        <div
          className={`w-16 h-px ${currentStep < step ? 'bg-[#2A2A2A]' : 'bg-[#0037C1]'}`}
        ></div>
      )}
      <button
        disabled={step > currentStep}
        className={`flex items-center whitespace-nowrap transition-colors ${
          step <= currentStep
            ? 'text-[#0037C1] cursor-pointer hover:text-[#0037C1]'
            : 'text-white/60 cursor-not-allowed opacity-50'
        }`}
        onClick={onClick}
      >
        <Icon />
        <span className="ml-2 text-white">{name}</span>
      </button>
    </>
  );
};

export default ProgressBarItem;
