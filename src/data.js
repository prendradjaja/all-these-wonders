import { rawData } from "./raw-data";

export const data = [];
let section;
for (const line of rawData.split("\n")) {
  if (line.trim() === "") {
    continue;
  }

  if (!line.startsWith("- ")) {
    section = line;
  } else {
    const chapter = line.substring(2);
    data.push({
      section,
      chapter,
    });
  }
}