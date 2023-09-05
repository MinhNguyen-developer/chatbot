"use client";
import { FC } from "react";
import { Montserrat } from "next/font/google";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {};

const font = Montserrat({ weight: "600", subsets: ["latin"] });
const LandingNavbar: FC<Props> = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href={"/"} className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image src={"/logo.png"} alt={"Logo"} fill />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Genius
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
export default LandingNavbar;
