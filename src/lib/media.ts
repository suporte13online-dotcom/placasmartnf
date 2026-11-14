// Asset paths are served by Lovable, not by an external deployment's origin.
const mediaOrigin = "https://placasmartnf.lovable.app";

export function mediaUrl(asset: { url: string }): string {
  return new URL(asset.url, mediaOrigin).href;
}