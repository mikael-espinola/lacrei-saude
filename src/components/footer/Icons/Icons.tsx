"use client";
import React from "react";
import { TbBrandFacebook } from "react-icons/tb";
import { PiInstagramLogo } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IconType } from "react-icons";
import { Tag } from "./style";

interface IconProp {
  component: IconType;
  link: string;
}

type IconKeys =
  | "TbBrandFacebook"
  | "PiInstagramLogo"
  | "PiLinkedinLogo"
  | "MdOutlineMailOutline";

const IconComponents: IconProp[] = [
  {
    component: TbBrandFacebook,
    link: "https://www.facebook.com/lacrei.saude/",
  },
  {
    component: PiInstagramLogo,
    link: "https://www.instagram.com/lacrei.saude",
  },
  {
    component: PiLinkedinLogo,
    link: "https://www.linkedin.com/company/lacrei",
  },
  {
    component: MdOutlineMailOutline,
    link: "contato@lacreisaude.com.br",
  },
];

const Icons = () => {
  return (
    <>
      {IconComponents.map((icon, index) => {
        const { component: IconComponent, link } = icon;
        return (
          <Tag
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconComponent
              style={{ width: "24px", height: "24px", color: "#018762" }}
            />
          </Tag>
        );
      })}
    </>
  );
};

export default Icons;
