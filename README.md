# Ajay & Asha – Premium Interactive Wedding Invitation Website

A luxury, cinematic, modern, and highly animated Indian Hindu wedding invitation website crafted for **Ajay & Asha**.

> **"Where Hope Meets Victory"**
> 
> *Asha – Symbol of Hope*  
> *Ajay – Symbol of Victory*

---

## 🌸 Wedding Information

- **Groom’s Family:** Goravanakoll Family
- **Bride’s Family:** Ratimani Family
- **Groom:** Ajay (Symbol of Victory)
- **Bride:** Asha (Symbol of Hope)
- **Wedding Date:** Sunday, 29 November 2026
- **Muhurtham:** 12:31 PM IST
- **Venue:** Vidyadhiraj Bhavan
- **Location:** Amargol, Behind Volkswagen Car Showroom, Hubballi – 580031, Karnataka

---

## ✨ Key Features & Experience

1. **Cinematic Opening Experience:**
   - Dark royal burgundy theme with floating gold ambient particles.
   - Traditional Lord Ganesha illustration and sacred shlokas.
   - Both **Goravanakoll Family & Ratimani Family** prominently showcased.
   - *"Open Wedding Invitation"* interactive button with auspicious opening temple chime and shehnai background music.

2. **Visually Spectacular Hero Section:**
   - Both families prominently honored.
   - Romantic typography (*Great Vibes* & *Playfair Display*).
   - Intricate South Indian Wedding Mandap vector illustration.
   - Organic falling marigold, rose, and jasmine flower petals.
   - Hanging traditional temple bells swaying with gentle physics.

3. **Real-Time Interactive Wedding Countdown:**
   - Countdown to **Sunday, 29 November 2026, 12:31 PM IST**.
   - Gold-bordered cards with animated number transitions.
   - Celebration state trigger when the auspicious date arrives.

4. **Couple Introduction Section:**
   - **Ajay** – Symbol of Victory.
   - **Asha** – Symbol of Hope.
   - Connecting golden heart & sacred thread animation uniting both names under the tagline *"Where Hope Meets Victory"*.

5. **Wedding Itinerary & Sacred Details:**
   - Kalyanam / Muhurtham ceremony card (12:31 PM).
   - Grand Reception & Feast card (7:00 PM).
   - Auspicious timings, venue information, and dress code recommendations.

6. **Interactive Venue & Google Maps:**
   - Vidyadhiraj Bhavan, Amargol, Hubballi.
   - Live embedded Google Maps preview.
   - *"Get Directions"* direct navigation button.
   - *"Copy Address"* button with instant clipboard feedback.

7. **RSVP – Wedding Attendance Confirmation:**
   - Validated form powered by **React Hook Form** + **Zod**.
   - Fields: Guest Name, Mobile Number, Number of Guests, Will you attend? (*Joyfully Accept / Regretfully Decline*), and Personal Message / Blessings.
   - Connected to **Firebase Firestore** with local backup redundancy.
   - Confetti celebration blast upon joyful acceptance.

8. **WhatsApp Invitation Sharing:**
   - Official WhatsApp click-to-chat URL with pre-formatted invitation message.
   - *"Copy Invitation Link"* button for direct sharing on messaging apps.

9. **Add to Calendar (.ics & Google Calendar):**
   - Direct *"Google Calendar"* creation link.
   - Downloadable `.ics` calendar file for Apple Calendar (iPhone/Mac) and Outlook.

10. **Auspicious Music Player:**
    - Ambient Indian classical wedding instrumental music (flute & sitar/shehnai).
    - Floating animated equalizer badge with play, pause, and mute controls.
    - Web Audio synthesizer fallback ensuring sound works on any device and even offline.

11. **Wedding Moments Gallery:**
    - High-resolution grid of traditional wedding photography & decor.
    - Responsive lightbox with next/previous image navigation.

12. **WhatsApp Rich Link Preview & SEO:**
    - High-resolution 1200×630 Open Graph card preview (`/og-wedding-invitation.jpg`).
    - Pre-configured Twitter cards and meta descriptions.

---

## 🛠️ Technology Stack

- **Framework:** React 18 + Vite + TypeScript
- **Styling:** Tailwind CSS + Custom CSS Keyframes
- **Animations:** Framer Motion, GSAP, GSAP ScrollTrigger, Lenis (Smooth Scroll)
- **Forms & Validation:** React Hook Form + Zod
- **Database:** Firebase Firestore (with offline fallback)
- **Audio:** Howler.js + Web Audio API
- **Icons:** Lucide React
- **Celebration Effects:** canvas-confetti
- **Deployment:** Vercel ready

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## ☁️ Firebase Firestore RSVP Setup

To connect your own Firebase Firestore database:
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com).
2. Enable Cloud Firestore in Test or Production mode.
3. Copy your project credentials into `.env.local`:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> **Note:** Even without Firebase environment variables, the RSVP form works out-of-the-box using reliable client-side storage, so the website is immediately functional.

---

## ⚙️ Customization

All wedding details, text, timings, coordinates, images, and messages can be customized in a single central file:
[`src/data/weddingData.ts`](file:///src/data/weddingData.ts)

---

With blessings and love,  
**Goravanakoll Family & Ratimani Family**  
*Ajay & Asha*

