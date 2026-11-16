import { describe, expect, it } from "vitest";
import { purchaseConditions } from "./purchase";

describe("Approved purchase conditions", () => {
  it("charges R$ 100 per plaque", () => {
    expect(purchaseConditions.priceBrl).toBe(100);
  });
  it("includes personalization and configuration", () => {
    expect(purchaseConditions.includedServices).toEqual(["Personalização", "Configuração"]);
  });
  it("accepts Pix, cards and installments", () => {
    expect(purchaseConditions.paymentMethods).toEqual(["Pix", "Cartão", "Parcelamento"]);
  });
  it("delivers site orders within up to 3 business days", () => {
    expect(purchaseConditions.delivery.maxBusinessDays).toBe(3);
    expect(purchaseConditions.delivery.orderChannel).toBe("site");
  });
  it("serves Nova Friburgo and region", () => {
    expect(purchaseConditions.delivery.region).toBe("Nova Friburgo e região");
  });
});