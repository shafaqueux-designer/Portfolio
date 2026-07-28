// --- App Eyesetu ---
import eyesetucover from "@/assets/App/Eye Setu/1.png"
import eyesetu1 from "@/assets/App/Eye Setu/2.png"
import eyesetu2 from "@/assets/App/Eye Setu/3.png"
import eyesetu3 from "@/assets/App/Eye Setu/4.png"
import eyesetu4 from "@/assets/App/Eye Setu/5.png"

// --- App OYN ---
import oyn1 from "@/assets/App/OYN/1.png"
import oyn2 from "@/assets/App/OYN/2.png"
import oyn3 from "@/assets/App/OYN/3.png"
import oyn4 from "@/assets/App/OYN/4.png"
import oyn5 from "@/assets/App/OYN/5.png"
import oyn6 from "@/assets/App/OYN/6.png"

// --- App OYN ---
import pulse1 from "@/assets/App/Pulse/1.png"
import pulse2 from "@/assets/App/Pulse/2.png"
import pulse3 from "@/assets/App/Pulse/3.png"
import pulse4 from "@/assets/App/Pulse/4.png"
import pulse5 from "@/assets/App/Pulse/5.png"
import pulse6 from "@/assets/App/Pulse/6.png"

// --- App 42Kicks ---
import kick1 from "@/assets/App/42Kicks/1.png"
import kick2 from "@/assets/App/42Kicks/2.png"
import kick3 from "@/assets/App/42Kicks/3.png"
import kick4 from "@/assets/App/42Kicks/4.png"
import kick5 from "@/assets/App/42Kicks/5.png"
import kick6 from "@/assets/App/42Kicks/6.png"

// --- App Sauda ---
import sauda1 from "@/assets/App/Sauda/1.png"
import sauda2 from "@/assets/App/Sauda/2.png"
import sauda3 from "@/assets/App/Sauda/3.png"
import sauda4 from "@/assets/App/Sauda/4.png"
import sauda5 from "@/assets/App/Sauda/5.png"
import sauda6 from "@/assets/App/Sauda/6.png"

// --- App Cub care ---
import cub1 from "@/assets/App/cub care/1.png"
import cub2 from "@/assets/App/cub care/2.png"
import cub3 from "@/assets/App/cub care/3.png"
import cub4 from "@/assets/App/cub care/4.png"
import cub5 from "@/assets/App/cub care/5.png"

// --- App pronod ---
import pro1 from "@/assets/App/Pronod/1.png"
import pro2 from "@/assets/App/Pronod/2.png"
import pro3 from "@/assets/App/Pronod/3.png"
import pro4 from "@/assets/App/Pronod/4.png"
import pro5 from "@/assets/App/Pronod/5.png"

// --- App homie ---
import homie1 from "@/assets/App/homie/1.png"
import homie2 from "@/assets/App/homie/2.png"
import homie3 from "@/assets/App/homie/3.png"
import homie4 from "@/assets/App/homie/4.png"
import homie5 from "@/assets/App/homie/5.png"
import homie6 from "@/assets/App/homie/6.png"

// --- App vsb ---
import vsb1 from "@/assets/App/VSB/1.png"
import vsb2 from "@/assets/App/VSB/2.png"
import vsb3 from "@/assets/App/VSB/3.png"
import vsb4 from "@/assets/App/VSB/4.png"
import vsb5 from "@/assets/App/VSB/5.png"

// --- App bkd ---
import bkd1 from "@/assets/App/BKD/1.png"
import bkd2 from "@/assets/App/BKD/2.png"
import bkd3 from "@/assets/App/BKD/3.png"
import bkd4 from "@/assets/App/BKD/4.png"
import bkd5 from "@/assets/App/BKD/5.png"
import bkd6 from "@/assets/App/BKD/6.png"

// --- App 4Way ---
import way1 from "@/assets/App/4way/1.png"
import way2 from "@/assets/App/4way/2.png"
import way3 from "@/assets/App/4way/3.png"
import way4 from "@/assets/App/4way/4.png"
import way5 from "@/assets/App/4way/5.png"
import way6 from "@/assets/App/4way/6.png"

// --- App sanesa ---
import san1 from "@/assets/App/sanesa/1.png"
import san2 from "@/assets/App/sanesa/2.png"
import san3 from "@/assets/App/sanesa/3.png"
import san4 from "@/assets/App/sanesa/4.png"
import san5 from "@/assets/App/sanesa/5.png"
import san6 from "@/assets/App/sanesa/6.png"

// --- App devalaya ---
import dev1 from "@/assets/App/Devalaya/1.png"
import dev2 from "@/assets/App/Devalaya/2.png"
import dev3 from "@/assets/App/Devalaya/3.png"
import dev4 from "@/assets/App/Devalaya/4.png"
import dev5 from "@/assets/App/Devalaya/5.png"
import dev6 from "@/assets/App/Devalaya/6.png"

// --- App ICS ---
import ics1 from "@/assets/App/ics/1.png"
import ics2 from "@/assets/App/ics/2.png"
import ics3 from "@/assets/App/ics/3.png"
import ics4 from "@/assets/App/ics/4.png"
import ics5 from "@/assets/App/ics/5.png"
import ics6 from "@/assets/App/ics/6.png"




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
    id: "1",
    title: "OYN - Own Your Nutritionist",
    description: "Own Your Nutritionist is a unified platform that connects users with certified nutritionists, personalized diet plans, and easy consultation booking. It also offers healthy food ordering from home kitchens, creating a simple and complete wellness experience. I designed Own Your Nutritionist, a comprehensive wellness and food-tech platform with a clean, intuitive interface and scalable architecture. The platform enables seamless nutritionist discovery along with instant and scheduled consultations through chat, voice, and video. It also supports personalized diet plans and subscription-based nutrition programs, helping users manage their health more effectively.",
    image: oyn1,
    images: [oyn2, oyn3, oyn4, oyn5, oyn6],
    category: "Mobile App",
  },  

  {
    id: "2",
    title: "Eye Setu",
    description: "This project is a comprehensive eye care platform designed to streamline the entire patient journey—from appointment booking to consultation, diagnosis, and product purchase. It integrates telemedicine, OPD management, and an e-commerce store into one seamless experience. The platform supports multiple user roles including patients, doctors, optometrists, and administrators, enabling efficient healthcare delivery while maintaining a user-friendly interface.",
    image: eyesetucover, 
    images: [eyesetu1, eyesetu2, eyesetu3, eyesetu4],
    category: "Mobile App",
  },

  {
    id: "3",
    title: "Pulse - Dietitian",
    description: "This project focuses on building a complete nutrition consultation ecosystem that bridges the gap between clients and certified dietitians. It enables users to book consultations, track health progress, and receive personalized nutrition plans while ensuring a smooth and secure experience across mobile and web platforms. The platform supports multiple user roles including clients, dietitians, and administrators, ensuring efficient management of appointments, payments, and content.",
    image: pulse1,
    images: [pulse2, pulse3, pulse4, pulse5, pulse6],
    category: "Mobile App",
  },
  
  {
    id: "4",
    title: "42Kicks - Running App",
    description: "42Kicks is a comprehensive fitness and marathon companion app designed to enhance how users track, train, and stay motivated. It combines activity tracking, performance analytics, and community-driven challenges into a single seamless experience. The platform empowers users to monitor their fitness journey, participate in competitions, and discover events, while providing admins with powerful tools to manage users, content, and analytics efficiently.",
    image: kick1,
    images: [kick2, kick3, kick4, kick5, kick6],
    category: "Mobile App",
  },

  {
    id: "5",
    title: "Sauda - IPO",
    description: "This project is a comprehensive auction discovery platform that enables users to browse categorized items, apply advanced filters, and track auctions in real time. It simplifies the auction experience by providing detailed listings, live updates, and an intuitive interface. The platform ensures users can easily discover valuable items, monitor bidding activity, and make informed decisions with complete transparency.",
    image: sauda1,
    images: [sauda2, sauda3, sauda3, sauda4, sauda5, sauda6],
    category: "Mobile App",
  },

  {
    id: "6",
    title: "Cub Care",
    description: "CubCare is a comprehensive daycare management platform built to simplify and digitize daily childcare operations. It connects parents, teachers, and administrators through a single system, enabling real-time communication, activity tracking, and efficient management. The platform ensures transparency, improves coordination, and creates a safe, engaging environment for children while reducing operational complexity for daycare centers.",
    image: cub1,
    images: [cub2, cub3, cub4, cub5],
    category: "Mobile App",
  },

  {
    id: "7",
    title: "Pronod",
    description: "Pronod is a smart dash cam companion app designed to enhance driving safety and provide complete control over in-car camera systems. It allows users to connect with their dash cam, view live footage, manage recordings, and access important driving data in real time. The platform ensures users never miss critical moments on the road while offering a seamless and secure video management experience.",
    image: pro1,
    images: [pro2, pro3, pro4, pro5],
    category: "Mobile App",
  },
  
  {
    id: "8",
    title: "Homiestays",
    description: "Homiestay is a community-driven accommodation platform that allows users to discover, book, and host unique stays. It bridges the gap between travelers and local hosts by offering personalized experiences beyond traditional hotels. The platform enables seamless booking for guests while empowering hosts to list properties, manage bookings, and connect with travelers—all within one unified ecosystem.",
    image: homie1,
    images: [homie2, homie3, homie4, homie5, homie6],
    category: "Mobile App",
  },

  {
    id: "9",
    title: "Galleria VSB",
    description: "This project is a comprehensive auction discovery platform that enables users to browse categorized items, apply advanced filters, and track auctions in real time. It simplifies the auction experience by providing detailed listings, live updates, and an intuitive interface. The platform ensures users can easily discover valuable items, monitor bidding activity, and make informed decisions with complete transparency.",
    image: vsb1,
    images: [vsb2, vsb3, vsb4, vsb5],
    category: "Mobile App",
  },
  
  {
    id: "10",
    title: "BKD - Baniya Ki Dukaan",
    description: "BKD – Baniya Ki Dukan is a quick commerce grocery platform inspired by the traditional neighborhood store experience. It enables users to browse, order, and receive groceries and daily essentials in minutes. The app combines speed, simplicity, and familiarity, offering a digital version of the trusted local “baniya” shop with modern features like real-time tracking and seamless payments.",
    image: bkd1,
    images: [bkd2, bkd3, bkd4, bkd5, bkd6],
    category: "Mobile App",
  },

  {
    id: "11",
    title: "4 Way",
    description: "4Way is a social fitness networking platform designed to bring people together through shared fitness interests. It enables users to discover nearby events, connect with like-minded individuals, and participate in real-world activities using an interactive map-based experience. The platform combines location intelligence, social engagement, and event management to create a seamless and engaging fitness community ecosystem.",
    image: way1,
    images: [way2, way3, way4, way5, way6],
    category: "Mobile App",
  },

  {
    id: "12",
    title: "Devalaya",
    description: "Devalaya is a spiritual and astrology platform designed to provide users with instant access to astrologers, devotional experiences, and personalized spiritual guidance. The app combines astrology consultations, chat and call features, puja services, and spiritual content into one connected ecosystem—making traditional guidance more accessible in the digital age.",
    image: dev1,
    images: [dev2, dev3, dev4, dev6, dev5],
    category: "Mobile App",
  },

  {
    id: "13",
    title: "Sanesa",
    description: "Sanesa is a farm-to-home organic grocery platform designed to make healthy eating simple and accessible. It allows users to order fresh, organically grown fruits and vegetables directly from trusted sources. The platform focuses on quality, transparency, and convenience—bringing chemical-free produce to everyday consumers through a seamless digital experience.",
    image: san1,
    images: [san2, san3, san4, san5, san6],
    category: "Mobile App",
  },

  {
    id: "14",
    title: "Indian Cancer Society",
    description: "Rise Against Cancer is a comprehensive cancer awareness and support platform developed to bridge the gap between information and accessibility. It provides reliable, easy-to-understand content about cancer, helping users make informed decisions about prevention, detection, and care. The app is designed for patients, caregivers, and the general public, offering a centralized space for education, guidance, and emotional support.",
    image: ics1,
    images: [ics2, ics3, ics4, ics5, ics6],
    category: "Mobile App",
  },

];
