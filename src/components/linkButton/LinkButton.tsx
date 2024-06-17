import { Text } from "@/app/sobre/style";
import Link from "next/link";
import React from "react";

interface Props {
  value: string;
}

const LinkButton = ({ value }: Props) => {
  return (
    <Link href={`/${value === "return" ? "" : value}`}>
      <Text>{value}</Text>
    </Link>
  );
};

export default LinkButton;
