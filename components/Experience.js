import { DateTime } from "luxon";
import styled from "styled-components";

export default function Experience({
  data: { title, company, type, startDate, endDate, content },
}) {
  const formatDate = dateString => {
    return DateTime.fromMillis(dateString).toFormat("MMM yyyy");
  };

  const getDate = () => {
    if (startDate == endDate) {
      return <p>{formatDate(startDate)}</p>;
    }
    return (
      <p>
        {formatDate(startDate)} - {formatDate(endDate)}
      </p>
    );
  };

  return (
    <StyledExperience>
      <Title>
        {title} at {company}
      </Title>
      <em>{type}</em>
      <p>{getDate()}</p>
      <Description>{content}</Description>
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
