import { FC, ReactNode, useState } from 'react';
import { LogoutButton } from '../logout-button';

export const FeedHeading: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="flex min-h-[80px] bg-slate-900 p-6 text-slate-50 dark:bg-slate-50 dark:text-slate-900">
      <strong className="text-2xl">CodeLeap Network</strong>
      <div className="ml-auto">
        <LogoutButton />
      </div>
    </header>
  );
};
