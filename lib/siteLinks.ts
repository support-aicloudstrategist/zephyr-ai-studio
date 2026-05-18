export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const homeUrl = `${basePath}/`;
export const contactAnchorUrl = `${basePath}/#contact`;

export function whatsappProjectUrl(message = 'Hi Zephyr AI Studio, I want premium AI ads for my brand.') {
  return `https://wa.me/918796302608?text=${encodeURIComponent(message)}`;
}
