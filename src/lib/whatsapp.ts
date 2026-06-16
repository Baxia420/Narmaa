export type WhatsAppLinkOptions = {
  serviceType: string;
  itemName?: string;
  pageSource?: string;
  travelDate?: string;
  pickupLocation?: string;
};

const WHATSAPP_PHONE = "60163092782";

export const generateWhatsAppLink = ({
  serviceType,
  itemName,
  pageSource,
  travelDate,
  pickupLocation,
}: WhatsAppLinkOptions): string => {
  const messageParts = [
    "Hi Narmaa Transport, I would like to make an enquiry.",
    `Service: ${serviceType}.`,
    itemName ? `Item/Package: ${itemName}.` : "",
    travelDate ? `Travel date: ${travelDate}.` : "",
    pickupLocation ? `Pickup location/area: ${pickupLocation}.` : "",
    pageSource ? `I clicked from: ${pageSource}.` : "",
    "Can you confirm availability and pricing?",
  ];

  const message = messageParts.filter(Boolean).join(" ");

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

export const getGeneralWhatsAppLink = (): string => {
  return generateWhatsAppLink({
    serviceType: "General Enquiry",
    pageSource: "Website",
  });
};
