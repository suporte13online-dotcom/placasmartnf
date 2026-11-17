export const WHATSAPP_NUMBER = "5522981605225";

export const INSTAGRAM_HANDLE = "consultorgoogle_";

export function instagramUrl() {
  return `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
}

export function whatsappUrl(model?: string) {
  const message = model
    ? `Olá, Cássio! Tenho interesse na plaquinha ${model} da PlacaSmartNF.`
    : "Olá, Cássio! Gostaria de conhecer as plaquinhas inteligentes da PlacaSmartNF.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}