import { FC, JSX } from 'react';
import { DefaultBottomProps } from '../../types/props';

const DefaultBottom: FC<DefaultBottomProps> = ({
  isBackDisabled,
  isContinueDisabled,
  onBack,
  onContinue,
}): JSX.Element => {
  return (
    <div className="text-center space-x-4">
      <button
        className={`btn-secondary${isBackDisabled ? ' opacity-50 cursor-not-allowed' : ''}`}
        disabled={isBackDisabled}
        onClick={onBack}
      >
        Back
      </button>
      <button
        className={`btn-primary${isContinueDisabled ? ' opacity-50 cursor-not-allowed' : ''}`}
        disabled={isContinueDisabled}
        onClick={onContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default DefaultBottom;
