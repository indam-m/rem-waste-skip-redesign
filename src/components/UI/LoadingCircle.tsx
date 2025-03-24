import { FC, JSX } from 'react';
import { LoaderCircle } from 'lucide-react';

const LoadingCircle: FC = (): JSX.Element => {
  return (
    <div className="absolute flex inset-0 items-center justify-center text-[#0037C1]">
      <LoaderCircle className="animate-spin w-10 h-10" />
    </div>
  );
};

export default LoadingCircle;
