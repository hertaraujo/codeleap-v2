import { Nunito, Neucha, Inter } from 'next/font/google';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';

const font = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ThemeToggle } from '@/components/theme-toggle';

const formSchema = z.object({
  region: z.string(),
  url: z.string().url({ message: 'Must be a valid url' }),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <main
      className={classNames(
        'flex min-h-screen flex-col items-center space-y-8 p-8',
        font.className,
      )}
    >
      <h1 className="text-xl">POC</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="region"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Region</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="">
                      <SelectValue placeholder="Select a region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="br1">Brasil</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  This is the region of the provider
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input {...field}></Input>
                </FormControl>
                <FormDescription>
                  This is the url to receive tournament
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      <ThemeToggle />
    </main>
  );
}
