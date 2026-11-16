export const purchaseConditions = {
  priceBrl: 100,
  includedServices: ["Personalização", "Configuração"],
  paymentMethods: ["Pix", "Cartão", "Parcelamento"],
  delivery: {
    region: "Nova Friburgo e região",
    note: "Entregas combinadas diretamente com o cliente, conforme disponibilidade do produto e programação de entrega.",
  },
} as const;

export const plaquePrice = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
}).format(purchaseConditions.priceBrl);