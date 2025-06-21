import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { CategoryCardProps } from "./types";

export default function CategoryCard({
  title,
  icon,
  image,
  description,
  primaryButton,
  secondaryButton,
  backgroundGradient,
}: CategoryCardProps) {
  return (
    <div
      className={`rounded-xl relative p-6 h-[408px] text-white w-full bg-gradient-to-br ${backgroundGradient} shadow-md flex flex-col justify-between`}
    >
      <div className="flex flex-col gap-4">
        {/* Top Illustration */}
        <div className=" w-full h-full overflow-hidden  rounded-md">
          <Image src={image} alt={title} fill className="object-center " />
        </div>

        {/* Title & Description */}
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            {icon} {title}
          </h2>
          <p className="text-base mb- text-white/80 mt-2 leading-relaxed">
            {description}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <Button
              onClick={primaryButton.onClick}
              variant={primaryButton.variant ?? "greenLight"}
              size="md"
              className="flex-1 h-11 flex items-center justify-center gap-2"
            >
              {primaryButton.icon} {primaryButton.label}
            </Button>

            {secondaryButton && (
              <Button
                onClick={secondaryButton.onClick}
                variant={secondaryButton.variant ?? "pink"}
                size="md"
                className="flex-1 h-11 flex items-center justify-center gap-2"
              >
                {secondaryButton.icon} {secondaryButton.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
