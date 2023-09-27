import React from "react";
import PaddingContainer from "../layout/PaddingContainer";

import SocialLink from "../elements/SocialLink";
import siteConfig from "@/config/site";
import Logo from "../elements/Logo";

const Footer = () => {
  return (
    <div className="py-8 mt-10 from-white via-neutral-50 to-neutral-100 bg-gradient-to-b">
      <PaddingContainer>
        <div>
          <p className="text-md text-neutral-700">{siteConfig.description}</p>
        </div>
        {/* social links */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div>
            {/* <div className="text-lg font-medium">#explore the world</div> */}
            <div className="flex gap-2.5 items-center my-2 text-neutral-600">
              <div>
                <p>توسعه و طراحی : امیرمحمدهمتی</p>
              </div>
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
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="py-3 border-t flex items-center gap-4 flex-wrap justify-center mt-2">
          <div className="text-sm text-neutral-400">
            <p>
              All rights are reseeved | Copyright {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
