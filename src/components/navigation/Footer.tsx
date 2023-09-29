import React from "react";
import PaddingContainer from "../layout/PaddingContainer";

import SocialLink from "../elements/SocialLink";
import siteConfig from "@/config/site";
import { ChevronDown } from "lucide-react";

const Footer = () => {
  return (
    <div className="py-8 mt-10 from-white via-neutral-50 to-neutral-100 bg-gradient-to-b">
      <PaddingContainer>
        {/* social links */}
        <div className="flex flex-col items-center justify-center gap-4 text-neutral-600 font-semibold">
          {/* <div className="text-lg font-medium">#explore the world</div> */}
          <div className="space-y-2">
            <div className="flex flex-col items-center gap-1">
              <p>توسعه و طراحی :</p>
              <p>
                امیرمحمدهمتی /{" "}
                <span className="text-sm">Amir Mohammad Hemmati</span>
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <p>راه های ارتباط با من</p>
              <ChevronDown />
            </div>
            <div className="flex justify-center gap-2">
              <SocialLink
                platform="github"
                link={siteConfig.socialLinks.github}
              />
              <SocialLink
                platform="linkedin"
                link={siteConfig.socialLinks.linkedin}
              />
              <SocialLink
                platform="instagram"
                link={siteConfig.socialLinks.instagram}
              />
              <SocialLink
                platform="email"
                link={siteConfig.socialLinks.email}
              />
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="py-3 border-t flex items-center gap-4 flex-wrap justify-center mt-2">
          <div className="text-sm text-neutral-400">
            <p>
              All rights are reserved | Copyright {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
