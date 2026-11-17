# QUIET BATTLES™ — Official Storefront & CMS Engine
> **"WEAR YOUR BATTLES"**  
> A premium, story-driven streetwear platform built around unseen battles, healing, and transformation.

---

## 🏛️ Brand Architecture Implementation

The website strictly follows the brand structure outlined in the specification:
```
QUIET BATTLES™ 
   └── THE THRESHOLD (Cinematic Entry Portal)
        └── THE ARCHIVE (Central Universe of all Collections)
             └── SERIES (e.g. Series 01 – The Gentle Armor™)
                  └── CHAPTERS (1 to 5 Story Progression)
                       └── CHAPTER CHAMBER (Dedicated Immersive Storytelling Environment)
                            └── ARTIFACT (Physical Heavyweight Clothing Product)
                                 └── ACQUISITION (Cart & Razorpay Checkout)
```

---

## 🚀 Key Features Built

1. **The Threshold & Hero Experience**:
   - Dark, atmospheric, cinematic aesthetic (`#08080a` obsidian palette).
   - Brand manifesto quote and tagline *"WEAR YOUR BATTLES"*.
   - Ambient sound toggle simulation.
   - Smooth transition into The Archive.

2. **The Archive**:
   - Central storytelling index of all collections.
   - **Series 01 — THE GENTLE ARMOR™** (Published / Available).
   - **Series 02 — SHIFT CHANGE™** (Coming Soon).
   - **Series 03 — THE WEIGHT OF BECOMING™** (Coming Soon).

3. **Series 01 Dedicated Page**:
   - Five complete Chapter entries:
     1. *The One Who Stayed*
     2. *Soft Strength*
     3. *Built to Heal*
     4. *The Protector Within*
     5. *Still Becoming*
   - Interactive chapter cards linking directly to the respective Chamber.

4. **Chapter Chamber**:
   - Dedicated storytelling environment for each individual chapter.
   - Multi-paragraph literary narrative, visual artwork, callout quotes, and smooth prev/next chapter navigation.
   - Direct connection to the associated wearable artifact.

5. **Artifact 01 (Product Detail)**:
   - 280 GSM Single Jersey combed compact cotton.
   - Boxy oversized drop-shoulder cut specifications.
   - Size selector (`S`, `M`, `L`, `XL`, `XXL`) with live reserve indicators.
   - Interactive measurement chart modal.
   - Express shipping and 7-day fit exchange details.

6. **Acquisition (Cart & Razorpay Checkout)**:
   - Slide-out Bag drawer with live quantity adjustments and promotional code support (`BATTLE10`).
   - Free express transit threshold calculation (above ₹2,499).
   - Comprehensive checkout modal with delivery details.
   - Razorpay payment simulation supporting **UPI (GPay/PhonePe)**, **Credit/Debit Cards**, and **Net Banking**.
   - Verified Order Confirmation with tracking docket number generation.

7. **Admin CMS Dashboard (`/admin`)**:
   - **Series Management**: Add, edit, publish/draft/archive, reorder series.
   - **Chapter Story Management**: Edit stories, chapter titles, quotes, artwork URLs, and linked products.
   - **Product Management**: Configure GSM, fabric, fit, pricing, and size stock allocations.
   - **Orders & Acquisitions**: Live order logging, customer addresses, Razorpay payment verification status.
   - **Global Settings**: Customize brand taglines, announcement banners, shipping thresholds, and Razorpay API keys.
   - **LocalStorage Persistence**: All edits made in the admin CMS persist automatically across page reloads.

---

## 💻 How to View & Run the Project

### Method 1: Instant Interactive Preview (Zero Setup Needed)
Simply open the standalone file in any modern web browser (Chrome, Edge, Safari, Firefox):
```
standalone-preview.html
```

### Method 2: Running via Node / Vite (Development Server)
```bash
npm install
npm run dev
```

---

## 📦 Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Typography (Cinzel, Inter, JetBrains Mono)
- **CMS & State**: Modular Context Architecture with LocalStorage Persistence
- **Payment Gateway Ready**: Razorpay Standard & Webhook Verification Architecture
