/** Accept the theme's Markdown contact fields without nesting anchors. */
export function contactLink(value: string, protocol: "tel" | "mailto") {
  const match = value.trim().match(/^\[([^\]]+)\]\(([^)]+)\)$/);
  const label = match?.[1] ?? value.trim();
  const destination = match?.[2] ?? label;
  const raw = destination.replace(/^(tel:|mailto:)/, "");
  return {
    label,
    href: `${protocol}:${protocol === "tel" ? raw.replace(/\s+/g, "") : raw}`,
  };
}
