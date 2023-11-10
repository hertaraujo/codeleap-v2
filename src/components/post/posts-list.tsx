import { PostType } from '@/types';
import { FC } from 'react';
import { PostItem } from './post-item';

type PostsListProps = {
  posts?: PostType[];
};

export const PostsList: FC<PostsListProps> = ({ posts }) => {
  return posts && posts.map((post) => <PostItem key={post.id} post={post} />);
};
