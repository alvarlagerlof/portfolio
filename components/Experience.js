import { DateTime } from "luxon";
import styled from "styled-components";
import CtaLink from "./CtaLink";

export default function Experience({
  data: { title, company, type, link, startDate, endDate, content },
}) {
  const formatDate = dateString => {
    return DateTime.fromMillis(dateString).toFormat("MMM yyyy");
  };

  const getDate = () => {
    if (startDate == endDate) {
      return `${formatDate(startDate)}`;
    }
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  return (
    <StyledExperience key={content}>
      <Title>
        {title} at {company}
      </Title>
      <em>{type}</em>
      <p>{getDate()}</p>
      <Description>{content}</Description>
      <LearnMore>{link && <CtaLink href={link}>Learn more</CtaLink>}</LearnMore>
    </StyledExperience>
  );
}

const StyledExperience = styled.li`
  list-style-type: none;
`;

const Title = styled.h3`
  margin-bottom: 4px;
`;

const Description = styled.p`
  margin-top: 16px;
`;

const LearnMore = styled.p`
  margin-top: 4px;
`;
