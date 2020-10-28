import styled from "styled-components";

import Link from "next/link";
import Image from "next/image";

import ClickableLink from "./ClickableLink";

export default function ProjectPreview({ data: { title, description, link, image } }) {
  return (
    <Link href={link} passHref>
      <StyledProjectPreview target="_blank" rel="noopener">
        <ImageContainer>
          <Image
            alt="Project preview"
            src={"/content/projects/" + image}
            loading="lazy"
            width={500}
            height={300}
          />
        </ImageContainer>

        <Title>
          <ClickableLink newTab href={link}>
            {title}
          </ClickableLink>
        </Title>
        <p>{description}</p>
      </StyledProjectPreview>
    </Link>
  );
}

const StyledProjectPreview = styled.a`
  cursor: pointer;
  color: black;
  text-decoration: none;
`;

const ImageContainer = styled.div`
  margin-bottom: 8px;

  & img {
    width: 100%;
    border-radius: 8px;
  }
`;

const Title = styled.h3`
  margin-bottom: 4px;
`;
