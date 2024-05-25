"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const TopicCreator = () => {
  const [input, setInput] = useState<string>("");
  return (
    <div className="mt-12 flex-col flex gap-2">
      <div className="flex gap-2">
        <Input
          value={input}
          className="bg-white min-w-64"
          placeholder="Enter topic here ... "
          onChange={({ target }) => setInput(target.value)}
        />
        <Button>Create</Button>
      </div>
    </div>
  );
};

export default TopicCreator;
