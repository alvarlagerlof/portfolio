import { formatDate } from "../libs/utils/date";

import ClickableLink from "./ClickableLink";
import InfoTag from "./InfoTag";
import { Subheading, Caption } from "./Headings";

export default function BlogPreview({ data: { slug, title, description, date, draft } }) {
  return (
    <div>
      {draft && <InfoTag>Draft</InfoTag>}
      <Subheading as="h2">
        <ClickableLink href={"blog/" + slug}>{title}</ClickableLink>
      </Subheading>
      <Caption>{formatDate(date)}</Caption>
      <p>{description}</p>
    </div>
  );
}
