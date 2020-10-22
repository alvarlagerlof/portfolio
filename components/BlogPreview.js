import styled from "styled-components";

import Link from "next/link";

import ClickableLink from "./ClickableLink";
import formatDate from "../api/utils/formatDate";

export default function BlogPreview({ data: { slug, title, description, date } }) {
  return (
    <Link href={"blog/" + slug}>
      <li>
        <Title>
          <ClickableLink href={"blog/" + slug}>{title}</ClickableLink>
        </Title>
        <Date>{formatDate(date)}</Date>
        <p>{description}</p>
      </li>
    </Link>
  );
}

const Title = styled.h3`
  margin-bottom: 4px;
`;

const Date = styled.h4`
  margin-bottom: 16px;
  color: grey;
  font-weight: 400;
`;
