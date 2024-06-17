import React from "react";
import { Text } from "./style";
import LinkButton from "@/components/linkButton/LinkButton";

const page = () => {
  const value = "sobre";
  return (
    <>
      <div>
        <Text>{value}</Text>
        {value}
      </div>
      <LinkButton value="return" />
    </>
  );
};

export default page;
