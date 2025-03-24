import { ArrowRight } from 'lucide-react';
import { FC, JSX } from 'react';
import { FixedBottomProps } from '../../types/props';

const FixedBottom: FC<FixedBottomProps> = ({
  children,
  smallViewChildren,
  isBackDisabled,
  isContinueDisabled,
  onBack,
  onContinue,
}): JSX.Element => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
      <div className="max-w-7xl mx-auto">
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-4">
            {smallViewChildren}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              className="btn-secondary w-full"
              disabled={isBackDisabled}
              onClick={onBack}
            >
              Back
            </button>
            <button
              className={`btn-primary w-full${isContinueDisabled ? ' opacity-50 cursor-not-allowed' : ''}`}
              disabled={isContinueDisabled}
              onClick={onContinue}
            >
              Continue
            </button>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6">{children}</div>
          <div className="flex items-center gap-4">
            <button
              className="btn-secondary"
              disabled={isBackDisabled}
              onClick={onBack}
            >
              Back
            </button>
            <button
              className={`btn-primary flex items-center gap-2${isContinueDisabled ? ' opacity-50 cursor-not-allowed' : ''}`}
              disabled={isContinueDisabled}
              onClick={onContinue}
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedBottom;
