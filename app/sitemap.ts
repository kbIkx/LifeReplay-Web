import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/technology", "/development", "/about", "/privacy"].map(path => ({ url: `${site.url}${path}`, changeFrequency: "monthly" as const, priority: path ? 0.6 : 1 }));
}
