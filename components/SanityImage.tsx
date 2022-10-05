import Image, { ImageProps } from "next/future/image";
import { sanityClient } from "lib/sanity/sanity.server";
import { useNextSanityImage } from "next-sanity-image";

import { SanityImage } from "types";

type ImagePropsWithoutSrc = Omit<ImageProps, "src">;

type SanityImageProps = {
  image: SanityImage;
} & ImagePropsWithoutSrc;

export default function NextSanityImage({
  image,
  placeholder = "blur",
  ...props
}: SanityImageProps) {
  const imageProps = useNextSanityImage(sanityClient, image);

  /* eslint-disable */
  return <Image {...imageProps} {...props} alt={image?.caption ?? ""} placeholder={placeholder} />;
}
