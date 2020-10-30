import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

import ClickableLink from "./ClickableLink";

export default function ProjectPreview({ data: { title, description, link, image } }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener">
        <ImageContainer>
          <Image
            alt="Project preview"
            src={"/content/projects/" + image}
            loading="lazy"
            width={500}
            height={300}
          />
        </ImageContainer>
      </a>

      <Title>
        <ClickableLink newTab href={link}>
          {title}
        </ClickableLink>
      </Title>
      <p>{description}</p>
    </div>
  );
}

const ImageContainer = styled.div`
  margin-bottom: 16px;
  cursor: pointer;

  & img {
    width: 100%;
    border-radius: 8px;
  }
`;

const Title = styled.h3`
  margin-bottom: 0px;
`;
