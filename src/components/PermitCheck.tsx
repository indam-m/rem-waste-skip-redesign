import { FC, JSX, useState } from 'react';
import { useGeneralContext } from '../contexts/GeneralContext';
import { PERMIT_CHECK_LIST } from '../constants/permitCheck';
import ContentTitle from './UI/ContentTitle';
import PermitCheckCard from './PermitCheckCard';
import { DefaultContentProps } from '../types/props';

const PermitCheck: FC<DefaultContentProps> = ({
  onBack,
  onContinue,
}): JSX.Element => {
  // context
  const generalCtx = useGeneralContext();

  // state
  const [isContinueDisabled] = useState(true); // set disabled to true for this coding challenge

  // functions
  const handleSelect = (id: number) => {
    generalCtx.setWasteInput({
      ...generalCtx.wasteInput,
      selectedPermitCheck: id,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <ContentTitle title="Where will the skip be placed?" />
        <p className="text-gray-400 text-center">
          This helps us determine if you need a permit for your skip
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {PERMIT_CHECK_LIST.map((option, index) => (
          <PermitCheckCard
            key={index}
            option={option}
            selected={generalCtx.wasteInput.selectedPermitCheck === option.id}
            onSelect={() => handleSelect(option.id)}
          />
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <button className="btn-secondary" onClick={onBack}>
          Back
        </button>
        <button
          disabled={isContinueDisabled}
          className={`btn-primary${isContinueDisabled ? ' opacity-50 cursor-not-allowed' : ''}`}
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PermitCheck;
