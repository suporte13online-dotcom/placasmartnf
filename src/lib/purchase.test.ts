import { describe, expect, it } from "vitest";
import { plaquePrice, purchaseConditions } from "./purchase";

describe("Approved purchase conditions", () => {
  it("charges R$ 100 per plaque", () => {
    expect(purchaseConditions.priceBrl).toBe(100);
  });
  it("shows the price as R$ 100 on every plaque card", () => {
    // pt-BR currency formatting joins the symbol with a non-breaking space.
    expect(plaquePrice.replace(/\u00a0/g, " ")).toBe("R$ 100");
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