import { FC, JSX } from 'react';
import { useGeneralContext } from '../../contexts/GeneralContext';
import { ProgressBarItemProps } from '../../types/props';

const ProgressBarItem: FC<ProgressBarItemProps> = ({
  icon,
  step,
  name,
  onClick,
}): JSX.Element => {
  const generalCtx = useGeneralContext();
  const Icon = icon;
  return (
    <>
      {step > 0 && (
        <div
          className={`w-16 h-px ${generalCtx.currentStep < step ? 'bg-[#2A2A2A]' : 'bg-[#0037C1]'}`}
        ></div>
      )}
      <button
        disabled={step > generalCtx.currentStep}
        className={`flex items-center whitespace-nowrap transition-colors ${
          step <= generalCtx.currentStep
            ? 'text-[#0037C1] cursor-pointer opacity-100 transition-opacity duration-300 hover:opacity-60'
            : 'text-white/60 cursor-not-allowed opacity-50'
        }`}
        onClick={onClick}
      >
        <Icon className="w-6 h-6" />
        <span className="ml-2 text-white">{name}</span>
      </button>
    </>
  );
};

export default ProgressBarItem;
