
import { Service, Testimonial, FAQItem } from './types';

export const PHONE_NUMBER = "071 169 1676";
export const BOOKING_EMAIL = "ladydineo@gmail.com";
export const WHATSAPP_LINK = `https://wa.me/27711691676`;
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdowaga";

export const SERVICES: Service[] = [
  {
    id: 'maintenance',
    title: 'General Maintenance',
    description: 'Ongoing upkeep and minor repairs to keep your property safe, functional, and looking its best.',
    icon: 'fa-tools',
    image: 'https://picsum.photos/seed/maintenance/800/600'
  },
  {
    id: 'plumbing',
    title: 'Plumbing Services',
    description: 'Leak repairs, blocked drains, tap installations, geyser-related work, and general plumbing maintenance.',
    icon: 'fa-faucet',
    image: 'https://picsum.photos/seed/plumbing/800/600'
  },
  {
    id: 'electrical',
    title: 'Electrical Services',
    description: 'Fault finding, light fittings, plugs, switches, DB checks, and general electrical repairs.',
    icon: 'fa-bolt',
    image: 'https://picsum.photos/seed/electrical/800/600'
  },
  {
    id: 'painting',
    title: 'Painting',
    description: 'Interior and exterior painting for homes, offices, and rental properties using quality finishes.',
    icon: 'fa-paint-roller',
    image: 'https://picsum.photos/seed/painting/800/600'
  },
  {
    id: 'tiling',
    title: 'Tiling',
    description: 'Floor and wall tiling for bathrooms, kitchens, living areas, and renovations.',
    icon: 'fa-th-large',
    image: 'https://picsum.photos/seed/tiling/800/600'
  },
  {
    id: 'renovations',
    title: 'Renovations',
    description: 'Small to medium renovations including room upgrades, bathroom and kitchen improvements.',
    icon: 'fa-hammer',
    image: 'https://picsum.photos/seed/reno/800/600'
  },
  {
    id: 'roofing',
    title: 'Roofing & Waterproofing',
    description: 'Roof repairs, leak sealing, waterproofing, and general roof maintenance.',
    icon: 'fa-house-chimney',
    image: 'https://picsum.photos/seed/roof/800/600'
  },
  {
    id: 'carpentry',
    title: 'Carpentry',
    description: 'Doors, cupboards, shelving, minor woodwork repairs, and installations.',
    icon: 'fa-chair',
    image: 'https://picsum.photos/seed/wood/800/600'
  },
  {
    id: 'emergency',
    title: 'Emergency Repairs',
    description: 'Fast-response solutions for urgent property issues like burst pipes or electrical faults.',
    icon: 'fa-truck-medical',
    image: 'https://picsum.photos/seed/emergency/800/600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "John D.",
    role: "Homeowner",
    text: "Professional, reliable, and affordable. Abandance Property Maintenance handled our repairs efficiently."
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Property Manager",
    text: "Great workmanship and excellent communication. Highly recommended for any landlord."
  },
  {
    id: 3,
    name: "David K.",
    role: "Business Owner",
    text: "Our go-to maintenance team for rental properties. They never let us down."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you offer free quotes?",
    answer: "Yes, we provide free quotations based on on-site assessments or detailed photos/videos of the issue."
  },
  {
    question: "Which areas do you service?",
    answer: "We service local and surrounding areas within South Africa, focusing on major residential and business hubs."
  },
  {
    question: "Are you insured?",
    answer: "Yes, safety and professionalism are our priorities. We carry liability insurance for your peace of mind."
  },
  {
    question: "Do you handle emergency repairs?",
    answer: "Yes, we offer emergency call-out services for urgent plumbing, electrical, or structural issues."
  }
];
