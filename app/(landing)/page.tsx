import { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LandingNavbar from "@/components/LandingNavbar";
import LandingHero from "@/components/LandingHero";
import LandingContent from "@/components/LandingContent";

type Props = {};
const LandingPage: FC<Props> = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};
export default LandingPage;
