import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux';
import type { PostType } from '@/types';
import { useEffect, useState } from 'react';
import { api } from '@/services/api';
import Head from 'next/head';
import { FeedHeading } from '@/components/heading';
import { PostForm, PostsList } from '@/components/post';
import { PaginatedResponseData } from '@/services/types';

export default function Feed({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    /* const username = localStorage.getItem('username');
    if (!username) {
      router.push('/');
    } else {
      setIsLoggedIn(true);
    } */
  }, [router]);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="A network to share what you're thinking"
        />
        <title>Codeleap Network Feed</title>
      </Head>
      <FeedHeading />
      <div className="m-auto flex w-full max-w-[760px] flex-col items-center space-y-6 rounded-lg p-6">
        <PostForm />
        <PostsList posts={data.results} />
      </div>
    </>
  );
}

export const getServerSideProps = (async (context) => {
  const { data } = await api.get<PaginatedResponseData<PostType>>(
    `https://dev.codeleap.co.uk/careers/`,
  );

  return { props: { data } };
}) satisfies GetServerSideProps<{
  data: PaginatedResponseData<PostType> | undefined;
}>;
