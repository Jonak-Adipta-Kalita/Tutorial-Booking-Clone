"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

  return <div></div>;
};

export default SearchForm;
