import { Text } from "@/app/sobre/style";
import Link from "next/link";
import React from "react";
import { Button } from "./style";

interface Props {
  value: string;
}

const LinkButton = ({ value }: Props) => {
  return (
    <Button href={`/${value === "return" ? "" : value}`}>
      <Text>{value}</Text>
    </Button>
  );
};

export default LinkButton;
