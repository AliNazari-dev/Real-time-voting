"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useMutation } from "@tanstack/react-query";
import { createTopic } from "@/app/actions";

const TopicCreator = () => {
  const [input, setInput] = useState<string>("");

  const { mutate, error, isPending } = useMutation({
    mutationFn: createTopic,
  });

  return (
    <div className='mt-12 flex-col flex gap-2'>
      <div className='flex gap-2'>
        <Input
          value={input}
          className='bg-white min-w-64'
          placeholder='Enter topic here ... '
          onChange={({ target }) => setInput(target.value)}
        />
        <Button disabled={isPending} onClick={() => mutate({ topicName: input })}>
          Create
        </Button>
      </div>
      {error ? <p className='text-sm text-red-600'>{error.message}</p> : null}
    </div>
  );
};

export default TopicCreator;
