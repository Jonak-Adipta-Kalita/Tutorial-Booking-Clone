"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { BedDoubleIcon, CalendarIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { format } from "date-fns";

export const formSchema = z.object({
  location: z.string().min(2, "Please enter a valid location").max(50),
  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),
  adults: z
    .string()
    .min(1, "Please select at least 1 adult")
    .max(12, "Max 12 adults Occupancy"),
  children: z.string().min(0).max(12, "Max 12 children Occupancy"),
  rooms: z.string().min(1, "Please select at least 1 room"),
});

type Props = {};

const SearchForm = (props: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: "1",
      children: "0",
      rooms: "1",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg"
      >
        <div className="formItem">
          <FormField
            control={form.control}
            name="location"
            render={(field) => (
              <FormItem>
                <FormLabel className="text-white flex">
                  Location
                  <BedDoubleIcon className="ml-2 h-4 w-4 text-white" />
                </FormLabel>
                <FormMessage />
                <FormControl>
                  <Input placeholder="Guwahati, Assam" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        
      </form>
    </Form>
  );
};

export default SearchForm;
