import { Roboto, Inter } from 'next/font/google';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const font = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
});

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
// import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux';
import { fetchPosts } from '@/actions/posts';

const formSchema = z.object({
  username: z.string().min(3, { message: 'should have at least 3 characters' }),
});

export default function SignUp() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { data, status, error } = useAppSelector(({ posts }) => posts);

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(fetchPosts());
    router.push('/feed');
  }

  return (
    <main
      className={cn(
        'flex min-h-screen flex-col items-center justify-center space-y-8 bg-slate-200 p-8',
        font.className,
      )}
    >
      <div className="space-y-6 rounded-lg bg-white p-6">
        <h1 className="text-xl font-semibold">Welcome to CodeLeap network!</h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-[400px] flex-col space-y-4"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Please enter your username</FormLabel>
                  <FormControl>
                    <Input {...field}></Input>
                  </FormControl>
                  <FormDescription>
                    It&lsquo;s used to identify you throughout the application
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="self-end">
              ENTER
            </Button>
          </form>
        </Form>
      </div>
      {/* <ThemeToggle /> */}
    </main>
  );
}
