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
  it("serves Nova Friburgo and region with deliveries arranged with the client", () => {
    expect(purchaseConditions.delivery.region).toBe("Nova Friburgo e região");
    expect(purchaseConditions.delivery.note).toBe(
      "Entregas combinadas diretamente com o cliente, conforme disponibilidade do produto e programação de entrega.",
    );
  });
});