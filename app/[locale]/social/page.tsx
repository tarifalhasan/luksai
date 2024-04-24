import SocialSession1 from "@/components/pages/social/Session1";
import SocialSession2 from "@/components/pages/social/Session2";
import SocialSession3 from "@/components/pages/social/Session3";
import SocialSession4 from "@/components/pages/social/Session4";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://luksai.vercel.app/"),
  title: {
    default: "Luksai | Social",
    template: `%s | Luksai | Social`,
  },
  description: "Description for you appplication",
  alternates: {
    canonical: `https://luksai.vercel.app/`,
    languages: {
      en: "en-US",
      th: "th-th",
    },
  },
};

const page = () => {
  return (
    <>
      <SocialSession1 />
      <SocialSession2 />
      <SocialSession3 />
      <SocialSession4 />
    </>
  );
};

export default page;
