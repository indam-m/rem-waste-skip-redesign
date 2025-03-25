import { AlertTriangle, ArrowRight, Check } from 'lucide-react';
import { FC, JSX } from 'react';
import { useGeneralContext } from '../contexts/GeneralContext';
import { SelectSkipCardProps } from '../types/props';
import SkipDefault from '../assets/skip_default.png';

const SelectSkipCard: FC<SelectSkipCardProps> = ({
  skipOption,
  selectedButtonWord = 'Selected',
  selectButtonWord = 'Select This Skip',
  image = SkipDefault,
  selected,
  onSelect,
}): JSX.Element => {
  // variables
  const generalCtx = useGeneralContext();
  const disabled = !skipOption.allows_heavy_waste;

  let className =
    'group relative rounded-lg border-2 p-4 md:p-6 transition-all text-white ';
  if (disabled) {
    // additional classes for disabled cards
    className +=
      'animate-fadeIn-50 border-[#2A2A2A] opacity-50 bg-[#1C1C1C] cursor-not-allowed';
  } else {
    className += selected
      ? 'animate-fadeIn border-[#0037C1] bg-[#0037C1]/10 cursor-pointer' // additional classes for selected card
      : 'animate-fadeIn border-[#2A2A2A] hover:bg-[#0037C1]/5 hover:border-[#0037C1]/50 bg-[#1C1C1C] transition-all duration-300 cursor-pointer'; // additional classes for unselected card
  }

  // functions
  const handleSelect = () => {
    if (!disabled) {
      onSelect();
    }
  };

  const description = (
    <>
      <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
        {skipOption.size}-Yard Skip
      </h3>
      <p className="text-sm text-gray-400 mb-4 md:mb-6">
        {skipOption.hire_period_days}-day hire period
      </p>
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
            {generalCtx.currency}
            {skipOption.price_before_vat}
          </span>
          <span className="text-sm text-gray-400 ml-2">per week</span>
        </div>
      </div>
    </>
  );

  const imageInfo = (
    <>
      <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md  opacity-80">
        {skipOption.size} Yard{skipOption.size > 1 ? 's' : ''}
      </div>
      <div className="absolute bottom-3 left-2 z-20 space-y-2">
        {!skipOption.allowed_on_road && (
          <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2  opacity-80">
            <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0" />
            <span className="text-xs font-medium text-yellow-500">
              Private Property Only
            </span>
          </div>
        )}
        {!skipOption.allows_heavy_waste && (
          <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2  opacity-80">
            <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
            <span className="text-xs font-medium text-red-500">
              Not Suitable for Heavy Waste
            </span>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className={className} onClick={handleSelect}>
      {selected && (
        <div className="absolute top-3 right-3 md:top-4 md:right-4">
          <Check className="w-5 h-5 md:w-6 md:h-6 text-[#0037C1]" />
        </div>
      )}
      <div className="relative">
        <img
          src={image}
          alt={`${skipOption.size} Yard Skip`}
          className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
        />
        {imageInfo}
      </div>
      {description}
      <button
        className={`w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2 text-white
            ${selected ? 'bg-[#0037C1] hover:bg-[#002da1]' : 'bg-[#2A2A2A] hover:bg-[#3A3A3A] hover:border-[#0037C1] transition-all duration-300'}${disabled ? ' opacity-50 cursor-not-allowed' : ''}`}
        disabled={disabled}
      >
        <span>
          {selected
            ? selectedButtonWord
            : !disabled
              ? selectButtonWord
              : 'Skip Unavailable'}
        </span>
        {!selected && !disabled && <ArrowRight className="w-4 h-4" />}
      </button>
    </div>
  );
};

export default SelectSkipCard;
