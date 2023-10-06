import PaddingContainer from "./padding-container";
import SocialLink from "../elements/social-link";
import siteConfig from "@/config/site";
const Footer = () => {
  return (
    <footer className="py-8 from-white via-white to-neutral-50 mt-10 bg-gradient-to-b">
      <PaddingContainer>
        {/* social links */}
        <div className="flex flex-col items-center justify-center gap-4 text-neutral-600 font-semibold">
          {/* <div className="text-lg font-medium">#explore the world</div> */}
          <div className="space-y-2">
            <div className="flex flex-col items-center gap-1">
              <p className="text-[0.7rem] sm:text-[1rem]">طراحی و توسعه</p>
              <div className="w-full text-center">
                <span className="text-[0.7rem] sm:text-[1rem]">
                  امیرمحمدهمتی{" "}
                </span>
                <span className="text-[0.7rem] sm:text-[1rem]"> | </span>
                <span className="text-[0.6rem] sm:text-[0.9rem]">
                  Amir Mohammad Hemmati
                </span>
              </div>
            </div>
            <div className="text-center flex flex-col items-center">
              {/* <ChevronDown className="animate-pulse" /> */}
            </div>
            <div className="flex justify-center gap-2 text-sm sm:text-md items-center">
              <p>راه های ارتباط با من :</p>
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
        <div className="py-3 border-t text-center mt-2">
          <div>
            <p className="text-neutral-400 mx-auto text-[0.7rem] sm:text-[0.8rem]">
              all rights are reserved | Copyright {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </PaddingContainer>
    </footer>
  );
};

export default Footer;
