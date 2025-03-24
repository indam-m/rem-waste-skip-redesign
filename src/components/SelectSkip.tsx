import { FC, JSX, useEffect } from 'react';
import FixedBottom from './UI/FixedBottom';
import MainContent from './UI/MainContent';
import { useGeneralContext } from '../contexts/GeneralContext';
import { DefaultContentProps } from '../types/props';
import { SkipOption } from '../types/skipType';
import { useFetchSkips } from '../hooks/useFetchSkips';
import ErrorCard from './UI/ErrorCard';
import SelectSkipCard from './SelectSkipCard';

const SelectSkip: FC<DefaultContentProps> = ({
  onBack,
  onContinue,
}): JSX.Element => {
  // context
  const generalCtx = useGeneralContext();
  // states
  const { data: skipOptions, isLoading, error } = useFetchSkips();

  useEffect(() => {
    if (isLoading) {
      generalCtx.setLoading(true);
    } else {
      generalCtx.setLoading(false);
    }
  }, [isLoading]);

  const handleSelect = (skipObj: SkipOption) => {
    generalCtx.setWasteInput({
      ...generalCtx.wasteInput,
      ...{ selectedSkipID: skipObj.id, selectedSkipObj: { ...skipObj } },
    });
  };

  const skipOptionJSXs: JSX.Element[] = skipOptions.map(
    (skipOption: SkipOption, index: number) => (
      <SelectSkipCard
        key={index}
        skipOption={skipOption}
        selected={generalCtx.wasteInput.selectedSkipID === skipOption.id}
        onSelect={() => handleSelect(skipOption)}
      />
    ),
  );

  return (
    <MainContent
      className="max-w-7xl mx-auto px-4 pb-32"
      title="Choose Your Skip Size"
    >
      <p className="text-gray-400 text-center mb-8">
        Select the skip size that best suits your needs
      </p>
      {!!error && (
        <ErrorCard
          error="Failed to load available skips for your location"
          onTryAgain={useFetchSkips}
        />
      )}
      {!error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skipOptionJSXs}
        </div>
      )}
      {generalCtx.wasteInput.selectedSkipID > 0 && (
        <FixedBottom
          isBackDisabled={false}
          isContinueDisabled={false}
          onBack={onBack}
          onContinue={onContinue}
        >
          <div>
            <p className="text-sm text-gray-400">
              {generalCtx.wasteInput.selectedSkipObj.size}
            </p>
            <span className="text-2xl font-bold text-[#0037C1]">
              {generalCtx.currency}
            </span>
            <span className="text-sm text-gray-400 ml-2">
              {generalCtx.wasteInput.selectedSkipObj.hire_period_days} day hire
            </span>
          </div>
        </FixedBottom>
      )}
    </MainContent>
  );
};

export default SelectSkip;
