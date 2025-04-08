
import { Publication } from "../types/publication";
import { journalPublications } from "./publications/journal";
import { conferencePublications } from "./publications/conference";
import { preparationPublications } from "./publications/preparation";

export const publications: Publication[] = [
  ...journalPublications,
  ...conferencePublications,
  ...preparationPublications
];
