import { FC, JSX } from 'react';
import { PermitCheckCardProps } from '../types/props';

const PermitCheckCard: FC<PermitCheckCardProps> = ({
  option,
  selected,
  onSelect,
}): JSX.Element => {
  const Icon = option.icon;
  return (
    <button
      className={`p-6 rounded-lg border-2 transition-all text-left
            ${selected ? 'border-[#0037C1] bg-[#0037C1]/10' : 'border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C]'}`}
      onClick={onSelect}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 rounded-full bg-[#1C1C1C] border border-[#2A2A2A]">
          <Icon className="w-6 h-6 text-[#0037C1]" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{option.title}</h3>
          <p className="text-gray-400">{option.subtitle}</p>
        </div>
      </div>
      <p className="text-sm text-gray-400">{option.description}</p>
    </button>
  );
};

export default PermitCheckCard;
