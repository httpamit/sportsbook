import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

export default function HeroBanner() {
  return (
    <section className="text-white px-4 md:px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="w-full p-6 pt-10 text-center md:text-left">
          <h2 className="text-2xl md:text-xl font-bannertext font-extralight uppercase tracking-wide mb-4">
            Sign up & get reward
          </h2>
          <h1 className="text-4xl md:text-5xl font-bannertext font-black mb-12">
            UP TO <span className="text-[#1BB96B]">$ 20,000</span>
          </h1>
          <Button
            variant="pink"
            className="px-8 py-3 text-base font-semibold md:mb-10"
          >
            Create Account
          </Button>
        </div>

        {/* Right Image */}
        <div className="relative w-full max-w-[750px] aspect-[75/33]">
          <Image
            src="/assets/player-image.png"
            alt="Players"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
