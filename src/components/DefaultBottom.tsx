import { FC, JSX } from 'react';
import { DefaultBottomProps } from '../types/props';

const DefaultBottom: FC<DefaultBottomProps> = ({
  isBackDisabled,
  isContinueDisabled,
  onBack,
  onContinue,
}): JSX.Element => {
  return (
    <div className="text-center space-x-4">
      <button
        className="btn-secondary"
        disabled={isBackDisabled}
        onClick={onBack}
      >
        Back
      </button>
      <button
        className={`btn-primary${isContinueDisabled ? ' btn-primary opacity-50 cursor-not-allowed' : ''}`}
        disabled={isContinueDisabled}
        onClick={onContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default DefaultBottom;
