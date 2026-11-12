import { describe, expect, it } from "vitest";
import { whatsappUrl } from "./contact";

describe("Official WhatsApp contact", () => {
  it("sends enquiries to the supplied (22) 98160-5225 number", () => {
    expect(new URL(whatsappUrl()).pathname).toBe("/5522981605225");
  });
});