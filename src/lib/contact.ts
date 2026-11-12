export const WHATSAPP_NUMBER = "5522981605225";

export function whatsappUrl(model?: string) {
  const message = model
    ? `Olá, Cássio! Tenho interesse na plaquinha ${model} da PlacaSmartNF.`
    : "Olá, Cássio! Gostaria de conhecer as plaquinhas inteligentes da PlacaSmartNF.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}