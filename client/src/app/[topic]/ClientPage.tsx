import React from "react";

interface ClientPageProps {
  topicName: string;
  initialData: { text: string; value: number }[];
}

const ClientPage = ({ initialData, topicName }: ClientPageProps) => {
  return <div>ClientPage</div>;
};

export default ClientPage;
