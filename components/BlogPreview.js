import styled from "styled-components";

import Link from "next/link";

import { formatDate } from "../libs/utils/date";

import ClickableLink from "./ClickableLink";

export default function BlogPreview({ data: { slug, title, description, date } }) {
  return (
    <div>
      <Title>
        <ClickableLink href={"blog/" + slug}>{title}</ClickableLink>
      </Title>
      <Date>{formatDate(date)}</Date>
      <p>{description}</p>
    </div>
  );
}

const Title = styled.h3`
  margin-bottom: 4px;
`;

const Date = styled.h4`
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 400;
`;
