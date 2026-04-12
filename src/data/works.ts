// --- Web ---
import dragonimage from "@/assets/web/Gemini_Generated_Image_6wvcbn6wvcbn6wvc.png"

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: any;
  images?: any[];
  category: string;
  link?: string;
}

export const works: WorkItem[] = [

  // 11. Web temp
  // ------------------------------------------
  {
    id: "branding-premium-credit-card",
    title: "Premium Credit Card Branding",
    description: "Sleek and modern packaging/branding design tailored for high-end financial products.",
    image: dragonimage,
    //images: [dragonimage],
    category: "Webbbbb",
  },
];
