import { Check } from 'lucide-react';
import { FC, JSX } from 'react';
import { CheckboxProps } from '../../types/props';

const CheckBoxCard: FC<CheckboxProps> = ({
  title,
  subtitle,
  exampleList = [],
  checked,
  icon,
  onClick,
}): JSX.Element => {
  const Icon = icon;

  const exampleListUI = exampleList.map((example, index) => (
    <li key={index} className="text-sm text-gray-400">
      • {example}
    </li>
  ));

  return (
    <button
      className={`w-full text-left p-6 rounded-lg border-2 transition-all relative
        ${checked ? 'border-[#0037C1] bg-[#0037C1]/10' : 'border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C]'}`}
      onClick={onClick}
    >
      <div className="absolute top-4 right-4">
        <div
          className={`w-5 h-5 border-2 rounded ${checked ? 'flex items-center justify-center bg-[#0037C1] border-[#0037C1]' : 'border-[#2A2A2A]'}`}
        >
          {checked && <Check />}
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <div
          className={`p-3 rounded-full bg-[#1C1C1C] border border-[#2A2A2A] ${checked ? 'text-[#0037C1]' : 'text-gray-400'}`}
        >
          {Icon && <Icon />}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-4">{subtitle}</p>
          {exampleList.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-300">Examples:</p>
              <ul className="grid grid-cols-2 gap-2">{exampleListUI}</ul>
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default CheckBoxCard;
