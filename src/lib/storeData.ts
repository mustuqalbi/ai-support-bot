export const storeInfo = {
  name: "TechGear Store",
  tagline: "Premium Tech Accessories for Modern Professionals",

  products: [
    {
      name: "ProSound Wireless Earbuds",
      price: "$49",
      description:
        "True wireless earbuds with 30hr battery, active noise cancellation, IPX5 waterproof. Pairs in 3 seconds. Includes charging case.",
      category: "Audio",
      image: "/images/earbuds.jpg",
    },
    {
      name: "MechType Pro Keyboard",
      price: "$89",
      description:
        "Compact 75% mechanical keyboard, Cherry MX switches, RGB backlight, USB-C + Bluetooth dual mode. Mac & Windows compatible.",
      category: "Keyboards",
      image: "/images/keyboard.jpg",
    },
    {
      name: "HubMax 7-in-1 USB-C Hub",
      price: "$35",
      description:
        "7 ports: 4K HDMI, 3x USB-A, SD card, microSD, 100W PD charging passthrough. Works with MacBook, iPad, Windows laptops.",
      category: "Accessories",
      image: "/images/hub.jpg",
    },
    {
      name: "FitTrack Smart Watch",
      price: "$129",
      description:
        "Health & fitness tracker with heart rate, SpO2, sleep tracking, GPS, 7-day battery. 50+ workout modes. iOS & Android.",
      category: "Wearables",
      image: "/images/watch.jpg",
    },
    {
      name: "DeskPad XXL Mouse Pad",
      price: "$24",
      description:
        "900x400mm full desk coverage, anti-slip base, water-resistant surface, stitched edges. Available in Black and Navy.",
      category: "Accessories",
      image: "/images/mousepad.jpg",
    },
  ],

  policies: {
    shipping:
      "Free shipping on orders over $50. Standard delivery 3-5 business days. Express 1-2 days available for $9.99. International shipping available to 40+ countries.",
    returns:
      "30-day hassle-free returns. Items must be unused in original packaging. Free return label provided. Refund processed in 3-5 business days.",
    warranty:
      "All products include 1-year manufacturer warranty. Extended 2-year warranty available for $9.99 at checkout.",
    payment:
      "We accept Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, and Shop Pay installments.",
    support:
      "Customer support available Mon-Fri 9am-6pm EST via chat, email (support@techgearstore.com), or phone.",
  },
};

export const systemPrompt = `You are a helpful customer support AI for ${storeInfo.name} — ${storeInfo.tagline}.

Your job is to help customers with questions about products, orders, shipping, returns, and store policies.

PRODUCTS WE SELL:
${storeInfo.products
  .map((p) => `- ${p.name} (${p.price}): ${p.description}`)
  .join("\n")}

STORE POLICIES:
- Shipping: ${storeInfo.policies.shipping}
- Returns: ${storeInfo.policies.returns}
- Warranty: ${storeInfo.policies.warranty}
- Payment: ${storeInfo.policies.payment}
- Support: ${storeInfo.policies.support}

INSTRUCTIONS:
- Be friendly, helpful, and concise. Keep replies under 3 sentences unless listing items.
- If asked about a product, mention the price and key feature.
- If you don't know something, say "Let me connect you with our team at support@techgearstore.com"
- Never make up information not provided above.
- Always end with a helpful follow-up question or offer.`;
