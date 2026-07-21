// --- App Eyesetu ---
import eyesetucover from "@/assets/App/Eye Setu/1.png"
import eyesetu1 from "@/assets/App/Eye Setu/2.png"
import eyesetu2 from "@/assets/App/Eye Setu/3.png"
import eyesetu3 from "@/assets/App/Eye Setu/4.png"
import eyesetu4 from "@/assets/App/Eye Setu/5.png"

// --- App OYN ---
import oyn1 from "@/assets/App/OYN/1.png"

// --- App Eyesetu ---
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

  //App temp
  // ------------------------------------------
  {
    id: "App",
    title: "Eye Setu",
    description: "This project is a comprehensive eye care platform designed to streamline the entire patient journey—from appointment booking to consultation, diagnosis, and product purchase. It integrates telemedicine, OPD management, and an e-commerce store into one seamless experience. The platform supports multiple user roles including patients, doctors, optometrists, and administrators, enabling efficient healthcare delivery while maintaining a user-friendly interface.",
    image: eyesetucover, 
    images: [eyesetu1, eyesetu2, eyesetu3, eyesetu4],
    category: "Mobile App",
  },
    {
    id: "App",
    title: "OYN - Own Your Nutritionist",
    description: "Own Your Nutritionist is a unified platform that connects users with certified nutritionists, personalized diet plans, and easy consultation booking. It also offers healthy food ordering from home kitchens, creating a simple and complete wellness experience. I designed Own Your Nutritionist, a comprehensive wellness and food-tech platform with a clean, intuitive interface and scalable architecture. The platform enables seamless nutritionist discovery along with instant and scheduled consultations through chat, voice, and video. It also supports personalized diet plans and subscription-based nutrition programs, helping users manage their health more effectively.",
    image: oyn1,
    images: [dragonimage],
    category: "Mobile App",
  },
    //Web temp
  // ------------------------------------------
    {
    id: "branding-premium-credit-card",
    title: "Premium Credit Card Branding",
    description: "Sleek and modern packaging/branding design tailored for high-end financial products.",
    image: dragonimage,
    images: [dragonimage],
    category: "Website",
  },
  //Dashboard temp
  // ------------------------------------------
    {
    id: "branding-premium-credit-card",
    title: "Premium Credit Card Branding",
    description: "Sleek and modern packaging/branding design tailored for high-end financial products.",
    image: dragonimage,
    images: [dragonimage],
    category: "Dashboard",
  },
  //Social Media temp
  // ------------------------------------------
    {
    id: "branding-premium-credit-card",
    title: "Premium Credit Card Branding",
    description: "Sleek and modern packaging/branding design tailored for high-end financial products.",
    image: dragonimage,
    images: [dragonimage],
    category: "Social Media",
  },
  //Magazines temp
  // ------------------------------------------
    {
    id: "branding-premium-credit-card",
    title: "Premium Credit Card Branding",
    description: "Sleek and modern packaging/branding design tailored for high-end financial products.",
    image: dragonimage,
    images: [dragonimage],
    category: "Magazine",
  },
  //eBook temp
  // ------------------------------------------
    {
    id: "branding-premium-credit-card",
    title: "Premium Credit Card Branding",
    description: "Sleek and modern packaging/branding design tailored for high-end financial products.",
    image: dragonimage,
    images: [dragonimage],
    category: "eBooks",
  },
  //Presentation temp
  // ------------------------------------------
    {
    id: "branding-premium-credit-card",
    title: "Premium Credit Card Branding",
    description: "Sleek and modern packaging/branding design tailored for high-end financial products.",
    image: dragonimage,
    images: [dragonimage],
    category: "Presentations",
  },

];
