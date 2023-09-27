import {
  Linkedin,
  Instagram,
  Twitter,
  Github,
  Youtube,
  Facebook,
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
        return <Linkedin size={16} />;
      case "twitter":
        return <Twitter size={16} />;
      case "github":
        return <Github size={16} />;
      case "youtube":
        return <Youtube size={16} />;
      case "facebook":
        return <Facebook size={16} />;
      case "instagram":
        return <Instagram size={16} />;
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
            : ""
        }
      >
        {getIcon(platform)}
      </div>
    </Link>
  );
};

export default SocialLink;
