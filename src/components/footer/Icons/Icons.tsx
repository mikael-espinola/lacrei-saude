"use client";
import React from "react";
import { TbBrandFacebook } from "react-icons/tb";
import { PiInstagramLogo } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IconType } from "react-icons";
import { Tag } from "./style";
import { theme } from "@/components/style/patterns";

interface IconProp {
  component: IconType;
  link: string;
  title: string;
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
    title: "Facebook",
  },
  {
    component: PiInstagramLogo,
    link: "https://www.instagram.com/lacrei.saude",
    title: "Instagram",
  },
  {
    component: PiLinkedinLogo,
    link: "https://www.linkedin.com/company/lacrei",
    title: "LinkedIn",
  },
  {
    component: MdOutlineMailOutline,
    link: "mailto:contato@lacreisaude.com.br",
    title: "Email",
  },
];

const Icons = () => {
  return (
    <>
      {IconComponents.map((icon, index) => {
        const { component: IconComponent, link, title } = icon;
        return (
          <Tag
            key={index}
            href={link}
            target="_blank"
            title={title}
            rel="noopener noreferrer"
          >
            <IconComponent
              style={{
                width: "24px",
                height: "24px",
                color: theme.colors["$icon-accent"],
              }}
            />
          </Tag>
        );
      })}
    </>
  );
};

export default Icons;
