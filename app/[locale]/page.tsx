import HomeHero from "@/components/pages/home/HomeHero";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <HomeHero />
    </>
  );
}
