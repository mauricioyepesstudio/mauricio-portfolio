/** Derives readable alt text from an asset filename, e.g. "/projects/x/Kitchen-Remodeling-1.png" -> "Kitchen Remodeling 1". */
export function altFromPath(filePath: string, fallback: string): string {
  const fileName = filePath.split("/").pop() ?? "";
  const nameOnly = fileName.replace(/\.[a-zA-Z0-9]+$/, "");

  const cleaned = decodeURIComponent(nameOnly)
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return cleaned.length > 2 ? cleaned : fallback;
}
