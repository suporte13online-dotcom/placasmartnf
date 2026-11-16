export const purchaseConditions = {
  priceBrl: 100,
  includedServices: ["Personalização", "Configuração"],
  paymentMethods: ["Pix", "Cartão", "Parcelamento"],
  delivery: {
    maxBusinessDays: 3,
    orderChannel: "site",
    region: "Nova Friburgo e região",
  },
} as const;

export const plaquePrice = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
}).format(purchaseConditions.priceBrl);