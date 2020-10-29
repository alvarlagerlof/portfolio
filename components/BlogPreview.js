import styled from "styled-components";

import { formatDate } from "../libs/utils/date";

import ClickableLink from "./ClickableLink";
import { Subheading, Caption } from "./Headings";

export default function BlogPreview({ data: { slug, title, description, date } }) {
  return (
    <div>
      <Subheading as="h2" spacing>
        <ClickableLink href={"blog/" + slug}>{title}</ClickableLink>
      </Subheading>
      <Caption>{formatDate(date)}</Caption>
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
