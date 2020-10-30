import { formatDate } from "../libs/utils/date";

import ClickableLink from "./ClickableLink";
import InfoTag from "./InfoTag";
import { Subheading, Caption } from "./Headings";

export default function BlogPreview({ data: { slug, title, description, published, draft } }) {
  return (
    <div>
      {draft && <InfoTag>Draft</InfoTag>}
      <Subheading>
        <ClickableLink href={"blog/" + slug}>{title}</ClickableLink>
      </Subheading>
      <Caption>{formatDate(published)}</Caption>
      <p>{description}</p>
    </div>
  );
}
