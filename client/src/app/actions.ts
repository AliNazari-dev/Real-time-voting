"use server";

import { redis } from "@/lib/redis";
import { redirect } from "next/navigation";

export const createTopic = async ({ topicName }: { topicName: string }) => {
  const regex = /^[a-zA-Z-]+$/;

  if (!topicName || topicName.length > 50) {
    return { error: "Name must be between 1 and 50 charts" };
  }

  if (!regex.test(topicName)) {
    return { error: "Only letter and hyphens allowed in name" };
  }

  await redis.sadd("existing topics", topicName);

  //redirect => /redis ( for Example )
  redirect(`/${topicName}`);
};