export type VimeoVideo = {
  id: string;
  title: string;
  description: string;
  date: string;
  thumbnailUrl: string;
  embedUrl: string;
};

export async function getLatestSermons(count = 5): Promise<VimeoVideo[]> {
  try {
    const res = await fetch("https://vimeo.com/churchinthevalley/videos/rss", {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; ChurchInTheValley/1.0)",
        Accept: "application/rss+xml, application/xml, text/xml",
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch Vimeo RSS:", res.status);
      return [];
    }

    const xml = await res.text();
    return parseRssFeed(xml, count);
  } catch (error) {
    console.error("Error fetching Vimeo sermons:", error);
    return [];
  }
}

function parseRssFeed(xml: string, count: number): VimeoVideo[] {
  const items: VimeoVideo[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null && items.length < count) {
    const itemXml = match[1];

    const title = extractTag(itemXml, "title") || "Untitled Sermon";
    const link = extractTag(itemXml, "link") || "";
    const description = extractTag(itemXml, "description") || "";
    const pubDate = extractTag(itemXml, "pubDate") || "";

    const idMatch = link.match(/vimeo\.com\/(\d+)/);
    const id = idMatch ? idMatch[1] : "";

    if (!id) continue;

    const thumbMatch = itemXml.match(/<media:thumbnail\s+[^>]*url="([^"]+)"/);
    const thumbnailUrl = thumbMatch ? thumbMatch[1] : "";

    const plainDescription = description
      .replace(/<[^>]+>/g, "")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .trim()
      .slice(0, 200);

    items.push({
      id,
      title: decodeHtmlEntities(title),
      description: plainDescription,
      date: pubDate ? formatDate(pubDate) : "",
      thumbnailUrl,
      embedUrl: `https://player.vimeo.com/video/${id}`,
    });
  }

  return items;
}

function extractTag(xml: string, tag: string): string | null {
  const cdataRegex = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`);
  const cdataMatch = xml.match(cdataRegex);
  if (cdataMatch) return cdataMatch[1].trim();

  const simpleRegex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`);
  const simpleMatch = xml.match(simpleRegex);
  return simpleMatch ? simpleMatch[1].trim() : null;
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}
