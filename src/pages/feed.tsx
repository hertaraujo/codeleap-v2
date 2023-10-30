import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux';
import { PostType } from '@/types';
import { useEffect, useState } from 'react';
import { api } from '@/services/api';

export default function Feed({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log('THIS IS POSTS ___| ', posts);

  useEffect(() => {
    /* const username = localStorage.getItem('username');
    if (!username) {
      router.push('/');
    } else {
      setIsLoggedIn(true);
    } */
  }, [router]);

  return <div>Posts</div>;
}

export const getServerSideProps = (async (context) => {
  const { data: posts } = await api.get<PostType[]>(
    `https://dev.codeleap.co.uk/careers/`,
  );

  return { props: { posts } };
}) satisfies GetServerSideProps<{
  posts: PostType[] | undefined;
}>;
