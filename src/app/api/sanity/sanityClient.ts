// sanity/sanityClient.ts

import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "dys4b966",
  dataset:"production",
  apiVersion: "2023-10-01",
  token: "sk1ShR9WivKDD7Iu5OzVnMpTn6p40KX9AVJGeWwBCMuehE7p4wv4RRUbKRa4q6GFt0I1Q5zFnrrDJdVEtfzitBtN8p3xyzuVO32e9KMvrxE5XBUwZ4UhvGp9UheRbeUe4w8DDQ24150k2q38t4TVxcwX9P3cDxYNNBvp0QT9kovFNDouY0W1",
  useCdn: false,  
});
