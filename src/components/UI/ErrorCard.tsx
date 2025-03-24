import { AlertTriangle } from 'lucide-react';
import { FC, JSX } from 'react';
import { ErrorCardProps } from '../../types/props';

const ErrorCard: FC<ErrorCardProps> = ({ error, onTryAgain }): JSX.Element => {
  return (
    <div
      className="max-w-xl mx-auto mb-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg"
      role="alert"
    >
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
        <div>
          <p className="text-red-500">
            {typeof error === 'string' ? error : error.message}
          </p>
          <button
            className="mt-2 text-sm text-[#0037C1] hover:underline"
            onClick={onTryAgain}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
