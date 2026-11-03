export interface WeddingEvent {
  id: string;
  name: string;
  title: string;
  date: string;
  formattedDate: string;
  time: string;
  muhurthamTime?: string;
  venueName: string;
  venueAddress: string;
  description: string;
  iconName: string;
  dressCode?: string;
  customNote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export const WEDDING_DATA = {
  groom: {
    firstName: "AJAY",
    fullName: "Ajay Goravanakoll",
    title: "Groom",
    symbolMeaning: "Symbol of Victory",
    description: "Strength, integrity, and warmth. A visionary embarking on the greatest journey of love and togetherness.",
    family: "GORAVANAKOLL FAMILY",
    parents: "Sri & Smt. Goravanakoll",
    image: "/images/ajay.jpg",
  },
  bride: {
    firstName: "ASHA",
    fullName: "Asha Ratimani",
    title: "Bride",
    symbolMeaning: "Symbol of Hope",
    description: "Grace, radiance, and compassion. Bringing boundless hope and joy into this sacred bond of eternity.",
    family: "RATIMANI FAMILY",
    parents: "Sri & Smt. Ratimani",
    image: "/images/asha.jpg",
  },
  couplesNames: "Ajay & Asha",
  tagline: "Where Hope Meets Victory",
  auspiciousDate: "Sunday, 29 November 2026",
  muhurthamTime: "12:31 PM IST",
  
  // Date ISO string for real-time countdown (IST is UTC+5:30)
  targetDateISO: "2026-11-29T12:31:00+05:30",

  venue: {
    name: "Vidyadhiraj Bhavan",
    landmark: "Behind Volkswagen Car Showroom",
    area: "Amargol",
    city: "Hubballi",
    pincode: "580031",
    fullAddress: "Amargol, Behind Volkswagen Car Showroom, Hubballi – 580031, Karnataka, India",
    googleMapsUrl: "https://maps.google.com/?q=Vidyadhiraj+Bhavan+Amargol+Hubballi+580031",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15386.345863264627!2d75.1054784!3d15.3941424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d2b27d4c0627%3A0x6b4f71a06788b7da!2sAmargol%2C%20Hubballi%2C%20Karnataka%20580025!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    phone: "+91 98765 43210"
  },

  invitationMessage: 
    "With the blessings of Almighty and our beloved elders, the Ratimani Family and Goravanakoll Family joyfully invite you to celebrate the wedding of Ajay & Asha.",

  closingMessage:
    "We warmly invite you and your family to grace this auspicious occasion with your presence, blessings and good wishes.",

  quote: 
    "Two hearts, One dream,\nTwo souls, One life.",

  signatures: {
    salutation: "With love and blessings,",
    families: "Ratimani Family & Goravanakoll Family",
    couple: "Ajay & Asha"
  },

  shloka: {
    sanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    english: "Vakratunda Mahakaya Suryakoti Samaprabha |\nNirvighnam Kuru Me Deva Sarvakaryeshu Sarvada ||",
    meaning: "O Lord with the curved trunk and massive body, whose brilliance equals that of millions of suns, please lead our endeavors free of all obstacles, always."
  },

  events: [
    {
      id: "muhurtham",
      name: "Kalyanam / Muhurtham",
      title: "Sacred Wedding Ceremony",
      date: "Sunday, 29 November 2026",
      formattedDate: "29 Nov 2026",
      time: "12:31 PM onwards",
      muhurthamTime: "Auspicious Muhurtham at 12:31 PM",
      venueName: "Vidyadhiraj Bhavan",
      venueAddress: "Amargol, Behind Volkswagen Car Showroom, Hubballi – 580031",
      description: "The sacred saat phere and mangalsutra dharana rituals uniting two loving souls with the blessings of fire and elders.",
      iconName: "Flame",
      customNote: "Your Presence, Our Happiness"
    },
    {
      id: "reception",
      name: "Grand Reception & Feast",
      title: "Wedding Reception & Dinner",
      date: "Sunday, 29 November 2026",
      formattedDate: "29 Nov 2026",
      time: "7:00 PM onwards",
      venueName: "Vidyadhiraj Bhavan",
      venueAddress: "Amargol, Behind Volkswagen Car Showroom, Hubballi – 580031",
      description: "An evening of celebration, traditional feasts, melodies, and joyous blessings with both families.",
      iconName: "Sparkles",
      customNote: "Your Presence, Our Happiness"
    }
  ],

  gallery: [
    {
      id: "g1",
      title: "Sacred Mandap Setup",
      category: "Tradition",
      imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "g2",
      title: "Traditional South Indian Decor",
      category: "Decor",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "g3",
      title: "Golden Garlands & Bells",
      category: "Auspicious",
      imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "g4",
      title: "Royal Haldi Moments",
      category: "Celebration",
      imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "g5",
      title: "Jasmine & Marigold Elegance",
      category: "Floral",
      imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "g6",
      title: "Forever Together",
      category: "Couple",
      imageUrl: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80",
    }
  ],

  whatsappShare: {
    rawMessage: `With immense joy, the Ratimani Family and Goravanakoll Family invite you to celebrate the wedding of Ajay & Asha.

Date: Sunday, 29 November 2026
Muhurtham: 12:31 PM
Venue: Vidyadhiraj Bhavan, Hubballi.

We would be delighted to have your presence and blessings.

View Wedding Invitation: `
  },

  calendarDetails: {
    title: "Wedding of Ajay & Asha",
    description: "Ratimani Family & Goravanakoll Family joyfully invite you to the auspicious wedding celebration of Ajay & Asha at Vidyadhiraj Bhavan, Hubballi.",
    location: "Vidyadhiraj Bhavan, Amargol, Behind Volkswagen Car Showroom, Hubballi – 580031",
    // 29 Nov 2026 12:31 PM IST is 07:01 AM UTC
    startTimeUTC: "20261129T070100Z",
    endTimeUTC: "20261129T163000Z"
  }
};

