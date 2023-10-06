import {
  Linkedin,
  Instagram,
  Twitter,
  Github,
  Youtube,
  Facebook,
  Mail,
  LucideMail,
} from "lucide-react";
import Link from "next/link";
import React, { ReactElement } from "react";

const SocialLink = ({
  platform,
  link,
  isShareURL,
}: {
  platform: string;
  link: string;
  isShareURL?: boolean;
}) => {
  const getIcon = (platform: string): ReactElement | String => {
    switch (platform) {
      case "linkedin":
        return <Linkedin size={24} />;
      case "twitter":
        return <Twitter size={24} />;
      case "github":
        return <Github size={24} />;
      case "youtube":
        return <Youtube size={24} />;
      case "facebook":
        return <Facebook size={24} />;
      case "instagram":
        return <Instagram size={24} />;
      case "email":
        return <LucideMail size={24} />;
      default:
        return "logo";
    }
  };
  return (
    <Link href={link}>
      <div
        className={
          isShareURL
            ? "bg-neutral-200 hover:bg-neutral-900 hover:text-neutral-200 transition-all duration-300 hover:scale-110 text-neutral-700 py-2 px-3 rounded-md"
            : "hover:text-blue-primary hover:scale-105"
        }
      >
        {getIcon(platform)}
      </div>
    </Link>
  );
};

export default SocialLink;
