import { FC, JSX, useState } from 'react';
import { WASTE_TYPE_INFO, WASTE_TYPE_OPTIONS } from '../constants/wasteType';
import { WasteTypeEnum } from '../types/enum';
import { useGeneralContext } from '../contexts/GeneralContext';
import { DefaultContentProps } from '../types/props';
import CheckBoxCard from './UI/CheckboxCard';
import ContentTitle from './UI/ContentTitle';
import DefaultBottom from './UI/DefaultBottom';
import InfoCard from './UI/InfoCard';

const WasteType: FC<DefaultContentProps> = ({
  onBack,
  onContinue,
}): JSX.Element => {
  // context
  const generalCtx = useGeneralContext();

  // states
  const [checkedMap, setCheckedMap] = useState(
    Object.values(WasteTypeEnum).reduce(
      (acc, value) => {
        acc[value as WasteTypeEnum] = false;
        return acc;
      },
      {} as Record<WasteTypeEnum, boolean>,
    ),
  );

  // functions
  const handleCheck = (id: WasteTypeEnum) => {
    // set checked map
    let newCheckedMap = { ...checkedMap };
    newCheckedMap[id] = !newCheckedMap[id];
    setCheckedMap(newCheckedMap);

    // set waste types context
    let newSelectedWasteTypes = [] as number[];
    if (newCheckedMap[id]) {
      newSelectedWasteTypes = generalCtx.wasteInput.selectedWasteTypes.concat([
        id,
      ]);
    } else {
      newSelectedWasteTypes = generalCtx.wasteInput.selectedWasteTypes.filter(
        (val) => val !== id,
      );
    }
    generalCtx.setWasteInput({
      ...generalCtx.wasteInput,
      selectedWasteTypes: newSelectedWasteTypes,
    });
  };
  const handleBack = () => {
    onBack();
  };
  const handleContinue = () => {
    onContinue();
  };

  return (
    <div className="max-w-5xl mx-auto">
      <ContentTitle title="Which type of waste best describes what you are disposing of?" />
      <InfoCard
        title={WASTE_TYPE_INFO.title}
        description={WASTE_TYPE_INFO.description}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {WASTE_TYPE_OPTIONS.map((option) => (
          <CheckBoxCard
            key={option.id}
            id={option.id}
            title={option.title}
            subtitle={option.subtitle}
            exampleList={option.exampleList}
            checked={checkedMap[option.id]}
            icon={option.icon}
            onClick={() => {
              handleCheck(option.id);
            }}
          />
        ))}
      </div>
      <DefaultBottom
        isBackDisabled={true} // disable back button of Waste Type for this coding challenge
        isContinueDisabled={!generalCtx.wasteInput.selectedWasteTypes?.length}
        onBack={handleBack}
        onContinue={handleContinue}
      />
    </div>
  );
};

export default WasteType;
