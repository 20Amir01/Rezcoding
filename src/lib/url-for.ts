import { client } from "./sanity.client";
import ImageUrlBuilder from "@sanity/image-url";
const builder = ImageUrlBuilder(client);
const urlFor = (source: any) => {
  return builder.image(source);
};
export default urlFor;
