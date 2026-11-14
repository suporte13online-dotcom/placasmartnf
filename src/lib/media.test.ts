import { describe, expect, it } from "vitest";
import { mediaUrl } from "./media";

describe("Portable media addresses", () => {
  it("serves relative asset paths from the public media host, not Vercel", () => {
    expect(mediaUrl({ url: "/__l5e/assets-v1/example/photo.jpg" })).toBe(
      "https://placasmartnf.lovable.app/__l5e/assets-v1/example/photo.jpg",
    );
  });

  it("preserves absolute asset addresses", () => {
    expect(mediaUrl({ url: "https://cdn.example.com/video.mp4" })).toBe(
      "https://cdn.example.com/video.mp4",
    );
  });
});