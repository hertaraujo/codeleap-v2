import { PostType } from '@/types';
import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { EditIcon } from '../icons';
import { TrashIcon } from '../icons/trash-icon';
import { formatDateString } from '@/utils';

type PostItemProps = {
  post: PostType;
};

export const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div className="w-full overflow-hidden rounded ring-1 ring-slate-300">
      <header className="flex min-h-[50px] items-center bg-slate-900 p-4 text-slate-50 dark:bg-slate-50 dark:text-slate-900">
        <strong className="text-lg">{post.title}</strong>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" className="group h-8 w-8 p-0">
            <TrashIcon className="h-8 w-8 group-hover:fill-slate-800" />
          </Button>
          <Button variant="ghost" className="group h-8 w-8 p-0 ">
            <EditIcon className="h-8 w-8 group-hover:fill-slate-800" />
          </Button>
        </div>
      </header>
      <div className="space-y-4 p-6">
        <div className="flex justify-between">
          <strong className="text-gray-500">@{post.username}</strong>
          <time className="text-gray-500">
            {formatDateString(new Date(post.created_datetime).getTime())}
          </time>
        </div>
        <div className="space-y-2">
          {post.content.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
