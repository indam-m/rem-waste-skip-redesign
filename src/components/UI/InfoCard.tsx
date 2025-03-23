import { Info } from 'lucide-react';
import { FC, JSX } from 'react';
import { InfoCardProps } from '../../types/props';

const InfoCard: FC<InfoCardProps> = ({
  title,
  description,
  icon = Info,
}): JSX.Element => {
  const Icon = icon;
  return (
    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-8">
      <div className="flex items-start space-x-3">
        {Icon && <Icon className="w-5 h-5 text-blue-400 mt-1" />}
        <div>
          <p className="text-gray-300 mb-2">{title}</p>
          {typeof description === 'string' && (
            <span className="text-sm text-gray-400">{description}</span>
          )}
          {Array.isArray(description) && (
            <ul className="list-disc list-inside text-sm text-gray-400">
              {description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
