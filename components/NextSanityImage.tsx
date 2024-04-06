"use client";

import { config } from "lib/sanity/config";
import { useNextSanityImage } from "next-sanity-image";
import Image, { ImageProps } from "next/image";
import { SanityImage } from "types";

type ImagePropsWithoutSrc = Omit<ImageProps, "src">;

type SanityImageProps = {
  image: SanityImage;
} & ImagePropsWithoutSrc;

export function NextSanityImage({ image, placeholder = "blur", ...props }: SanityImageProps) {
  const imageProps = useNextSanityImage({ config: () => config }, image);

  return (
    <Image
      {...imageProps}
      {...props}
      alt={image?.caption ?? ""}
      placeholder={placeholder}
      blurDataURL={image.asset.metadata.lqip}
    />
  );
}
