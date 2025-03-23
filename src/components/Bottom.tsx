import { JSX } from 'react';

const Bottom = (): JSX.Element => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
      <div className="max-w-7xl mx-auto">
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6"></div>
          <div className="flex items-center gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
