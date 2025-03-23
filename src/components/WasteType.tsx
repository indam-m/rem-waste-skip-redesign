import { FC, JSX, useState } from 'react';
import {
  WasteTypeEnum,
  WASTE_TYPE_INFO,
  WASTE_TYPE_OPTIONS,
} from '../constants/wasteType';
import { DefaultContentProps } from '../types/props';
import CheckBoxCard from './UI/CheckboxCard';
import DefaultBottom from './DefaultBottom';
import InfoCard from './UI/InfoCard';
import MainContent from './UI/MainContent';

const WasteType: FC<DefaultContentProps> = ({
  onBack,
  onContinue,
}): JSX.Element => {
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
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  // functions
  const checkContinueDisabled = () => {
    const isDisabled = Object.values(checkedMap).every((value) => !value);
    setIsContinueDisabled(isDisabled);
  };
  const handleCheck = (index: WasteTypeEnum) => {
    let newCheckedMap = { ...checkedMap };
    newCheckedMap[index] = !newCheckedMap[index];
    setCheckedMap(newCheckedMap);
  };
  const handleBack = () => {
    onBack();
  };
  const handleContinue = () => {
    onContinue();
  };

  //   checkContinueDisabled();

  return (
    <MainContent title={WASTE_TYPE_INFO.title}>
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
        isContinueDisabled={isContinueDisabled}
        onBack={handleBack}
        onContinue={handleContinue}
      />
    </MainContent>
  );
};

export default WasteType;
