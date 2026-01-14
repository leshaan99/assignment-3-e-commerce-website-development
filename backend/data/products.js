// iPhone products for iPhone Hub - with Apple official specs
const products = [
  // iPhone 17 Series
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    description: "iPhone 17 Pro Max. The most advanced iPhone ever. Featuring breakthrough A19 Pro chip, revolutionary camera system with 8K video, and stunning titanium design.",
    price: 1399.99,
    image: "https://luxuryx.lk/storage/product/2025-09/3781757478784.webp",
    category: "iPhone 17",
    stock: 20,
    specs: {
      display: "6.9-inch Super Retina XDR display with ProMotion (1-120Hz)",
      chip: "A19 Pro chip with 8-core CPU, 8-core GPU, 20-core Neural Engine",
      camera: "108MP Fusion | 48MP Ultra Wide | 24MP 5x Telephoto",
      frontCamera: "16MP TrueDepth front camera",
      battery: "Up to 38 hours video playback",
      storage: "256GB, 512GB, 1TB, 2TB",
      colors: "Natural Titanium, Blue Titanium, Black Titanium, Rose Titanium",
      features: "Camera Control, Action button, USB-C, Face ID, Apple Intelligence Pro, 8K Video"
    }
  },
  {
    id: 2,
    name: "iPhone 17 Pro",
    description: "iPhone 17 Pro. Pro-level performance meets stunning design. A19 Pro chip with advanced AI capabilities and pro camera system.",
    price: 1199.99,
    image: "https://luxuryx.lk/storage/product/2025-09/3771757476605.webp",
    category: "iPhone 17",
    stock: 25,
    specs: {
      display: "6.3-inch Super Retina XDR display with ProMotion (1-120Hz)",
      chip: "A19 Pro chip with 8-core CPU, 8-core GPU, 20-core Neural Engine",
      camera: "108MP Fusion | 48MP Ultra Wide | 24MP 5x Telephoto",
      frontCamera: "16MP TrueDepth front camera",
      battery: "Up to 32 hours video playback",
      storage: "256GB, 512GB, 1TB",
      colors: "Natural Titanium, Blue Titanium, Black Titanium, Rose Titanium",
      features: "Camera Control, Action button, USB-C, Face ID, Apple Intelligence Pro, 8K Video"
    }
  },
  {
    id: 3,
    name: "iPhone 17",
    description: "iPhone 17. Next generation performance. A19 chip with Apple Intelligence, advanced dual-camera system, and all-day battery.",
    price: 899.99,
    image: "https://luxuryx.lk/storage/product/2025-09/1757474047.webp",
    category: "iPhone 17",
    stock: 35,
    specs: {
      display: "6.1-inch Super Retina XDR display",
      chip: "A19 chip with 6-core CPU, 6-core GPU, 18-core Neural Engine",
      camera: "48MP Fusion | 24MP Ultra Wide",
      frontCamera: "16MP TrueDepth front camera",
      battery: "Up to 26 hours video playback",
      storage: "128GB, 256GB, 512GB",
      colors: "Ultramarine, Teal, Pink, White, Black",
      features: "Camera Control, Action button, USB-C, Face ID, Apple Intelligence"
    }
  },
  {
    id: 4,
    name: "iPhone 17 Air",
    description: "iPhone 17 Air. Impossibly thin. Incredibly powerful. The thinnest iPhone ever with A19 chip and stunning edge-to-edge display.",
    price: 1099.99,
    image: "https://luxuryx.lk/storage/product/2025-09/3791757606316.webp",
    category: "iPhone 17",
    stock: 30,
    specs: {
      display: "6.6-inch Super Retina XDR display",
      chip: "A19 chip with 6-core CPU, 6-core GPU, 18-core Neural Engine",
      camera: "48MP Fusion | 24MP Ultra Wide",
      frontCamera: "16MP TrueDepth front camera",
      battery: "Up to 24 hours video playback",
      storage: "256GB, 512GB",
      colors: "Starlight, Midnight, Silver, Rose Gold",
      features: "Ultra-thin 5.5mm design, Camera Control, USB-C, Face ID, Apple Intelligence"
    }
  },
  // iPhone 16 Series
  {
    id: 5,
    name: "iPhone 16 Pro Max",
    description: "iPhone 16 Pro Max. Built for Apple Intelligence. Featuring a stunning titanium design, the most advanced iPhone camera system ever, and the powerful A18 Pro chip.",
    price: 1199.99,
    image: "https://luxuryx.lk/storage/product/202411/iphone-16-pro-Black-Titanium-600x600.webp",
    category: "iPhone 16",
    stock: 25,
    specs: {
      display: "6.9-inch Super Retina XDR display with ProMotion (1-120Hz)",
      chip: "A18 Pro chip with 6-core CPU, 6-core GPU, 16-core Neural Engine",
      camera: "48MP Fusion | 48MP Ultra Wide | 12MP 5x Telephoto",
      frontCamera: "12MP TrueDepth front camera",
      battery: "Up to 33 hours video playback",
      storage: "256GB, 512GB, 1TB",
      colors: "Desert Titanium, Natural Titanium, White Titanium, Black Titanium",
      features: "Camera Control, Action button, USB-C, Face ID, Apple Intelligence"
    }
  },
  {
    id: 6,
    name: "iPhone 16 Pro",
    description: "iPhone 16 Pro. Built for Apple Intelligence. Titanium design with advanced pro camera system and A18 Pro chip for unprecedented performance.",
    price: 999.99,
    image: "https://luxuryx.lk/storage/product/2024-12/411733365472.webp",
    category: "iPhone 16",
    stock: 30,
    specs: {
      display: "6.3-inch Super Retina XDR display with ProMotion (1-120Hz)",
      chip: "A18 Pro chip with 6-core CPU, 6-core GPU, 16-core Neural Engine",
      camera: "48MP Fusion | 48MP Ultra Wide | 12MP 5x Telephoto",
      frontCamera: "12MP TrueDepth front camera",
      battery: "Up to 27 hours video playback",
      storage: "128GB, 256GB, 512GB, 1TB",
      colors: "Desert Titanium, Natural Titanium, White Titanium, Black Titanium",
      features: "Camera Control, Action button, USB-C, Face ID, Apple Intelligence"
    }
  },
  {
    id: 7,
    name: "iPhone 16",
    description: "iPhone 16. Built for Apple Intelligence. Advanced dual-camera system, A18 chip, Camera Control, and all-day battery life.",
    price: 799.99,
    image: "https://luxuryx.lk/storage/product/2024-12/1734325119.webp",
    category: "iPhone 16",
    stock: 40,
    specs: {
      display: "6.1-inch Super Retina XDR display",
      chip: "A18 chip with 6-core CPU, 5-core GPU, 16-core Neural Engine",
      camera: "48MP Fusion | 12MP Ultra Wide",
      frontCamera: "12MP TrueDepth front camera",
      battery: "Up to 22 hours video playback",
      storage: "128GB, 256GB, 512GB",
      colors: "Ultramarine, Teal, Pink, White, Black",
      features: "Camera Control, Action button, USB-C, Face ID, Apple Intelligence"
    }
  },
  // iPhone 15 Series
  {
    id: 8,
    name: "iPhone 15 Pro Max",
    description: "iPhone 15 Pro Max. Forged in titanium with A17 Pro chip, the most powerful iPhone chip ever. Features 5x optical zoom telephoto camera.",
    price: 1099.99,
    image: "https://luxuryx.lk/storage/product/2024-12/1734324794.webp",
    category: "iPhone 15",
    stock: 20,
    specs: {
      display: "6.7-inch Super Retina XDR display with ProMotion (1-120Hz)",
      chip: "A17 Pro chip with 6-core CPU, 6-core GPU, 16-core Neural Engine",
      camera: "48MP Main | 12MP Ultra Wide | 12MP 5x Telephoto",
      frontCamera: "12MP TrueDepth front camera",
      battery: "Up to 29 hours video playback",
      storage: "256GB, 512GB, 1TB",
      colors: "Natural Titanium, Blue Titanium, White Titanium, Black Titanium",
      features: "Action button, USB-C, Face ID, Emergency SOS via satellite"
    }
  },
  {
    id: 9,
    name: "iPhone 15 Pro",
    description: "iPhone 15 Pro. Titanium design, A17 Pro chip, and pro camera system with 3x optical zoom. Lightweight yet incredibly durable.",
    price: 899.99,
    image: "https://luxuryx.lk/storage/product/2024-12/1734324920.webp",
    category: "iPhone 15",
    stock: 25,
    specs: {
      display: "6.1-inch Super Retina XDR display with ProMotion (1-120Hz)",
      chip: "A17 Pro chip with 6-core CPU, 6-core GPU, 16-core Neural Engine",
      camera: "48MP Main | 12MP Ultra Wide | 12MP 3x Telephoto",
      frontCamera: "12MP TrueDepth front camera",
      battery: "Up to 23 hours video playback",
      storage: "128GB, 256GB, 512GB, 1TB",
      colors: "Natural Titanium, Blue Titanium, White Titanium, Black Titanium",
      features: "Action button, USB-C, Face ID, Emergency SOS via satellite"
    }
  },
  {
    id: 10,
    name: "iPhone 15",
    description: "iPhone 15. Dynamic Island, 48MP camera, A16 Bionic, and USB-C. A total breakthrough in design and capability.",
    price: 699.99,
    image: "https://luxuryx.lk/storage/product/2024-12/1734325303.webp",
    category: "iPhone 15",
    stock: 40,
    specs: {
      display: "6.1-inch Super Retina XDR display",
      chip: "A16 Bionic chip with 6-core CPU, 5-core GPU, 16-core Neural Engine",
      camera: "48MP Main | 12MP Ultra Wide",
      frontCamera: "12MP TrueDepth front camera",
      battery: "Up to 20 hours video playback",
      storage: "128GB, 256GB, 512GB",
      colors: "Blue, Pink, Yellow, Green, Black",
      features: "Dynamic Island, USB-C, Face ID, Emergency SOS via satellite"
    }
  },
  // iPhone 14 Series
  {
    id: 11,
    name: "iPhone 14",
    description: "iPhone 14. A15 Bionic chip, improved dual-camera system, Crash Detection.",
    price: 599.99,
    image: "https://luxuryx.lk/storage/product/2024-12/1734325605.webp",
    category: "iPhone 14",
    stock: 35,
    specs: {
      display: "6.1-inch Super Retina XDR display",
      chip: "A15 Bionic chip with 6-core CPU, 5-core GPU, 16-core Neural Engine",
      camera: "12MP Main | 12MP Ultra Wide",
      frontCamera: "12MP TrueDepth front camera",
      battery: "Up to 20 hours video playback",
      storage: "128GB, 256GB, 512GB",
      colors: "Blue, Purple, Yellow, Midnight, Starlight, (PRODUCT)RED",
      features: "Face ID, Crash Detection, Emergency SOS via satellite"
    }
  },
  // iPhone 13 Series
  {
    id: 12,
    name: "iPhone 13",
    description: "iPhone 13. A15 Bionic chip, advanced dual-camera system, Cinematic mode.",
    price: 499.99,
    image: "https://luxuryx.lk/storage/product/2024-12/1734325743.webp",
    category: "iPhone 13",
    stock: 30,
    specs: {
      display: "6.1-inch Super Retina XDR display",
      chip: "A15 Bionic chip with 6-core CPU, 4-core GPU, 16-core Neural Engine",
      camera: "12MP Main | 12MP Ultra Wide",
      frontCamera: "12MP TrueDepth front camera",
      battery: "Up to 19 hours video playback",
      storage: "128GB, 256GB, 512GB",
      colors: "Blue, Pink, Midnight, Starlight, (PRODUCT)RED, Green",
      features: "Ceramic Shield, Face ID, Cinematic mode, MagSafe"
    }
  },
  // iPhone 11 Series
  {
    id: 13,
    name: "iPhone 11",
    description: "iPhone 11. Dual camera system with Night mode. A13 Bionic chip.",
    price: 299.99,
    image: "https://luxuryx.lk/storage/product/2024-12/511733168921.webp",
    category: "iPhone 11",
    stock: 35,
    specs: {
      display: "6.1-inch Liquid Retina HD display",
      chip: "A13 Bionic chip with 6-core CPU, 4-core GPU, 8-core Neural Engine",
      camera: "12MP Main | 12MP Ultra Wide",
      frontCamera: "12MP TrueDepth front camera",
      battery: "Up to 17 hours video playback",
      storage: "64GB, 128GB, 256GB",
      colors: "Black, Green, Yellow, Purple, (PRODUCT)RED, White",
      features: "Face ID, Night mode, Spatial Audio, Water resistant (IP68)"
    }
  }
];

module.exports = products;
