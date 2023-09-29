export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: {
    instagram: string;
    linkedin: string;
    github: string;
    email:string
  };
}
const siteConfig: SiteConfig = {
  siteName: "وبلاگ من",
  description:
    "در این وبلاگ مطالب و مقالات مربوط به حوزه کامپیوتر و برنامه نویسی و... قرار داده می شود .",
  currentlyAt: "Iran",
  socialLinks: {
    instagram: "https://www.instagram.com/20amirmohammad01/",
    linkedin: "https://www.linkedin.com/in/amir-mohammad-hemmati/",
    github: "https://github.com/20Amir01",
    email:"mailto:20amhs00@gmail.com"
  },
};
export default siteConfig;
