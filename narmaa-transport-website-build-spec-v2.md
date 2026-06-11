# Narmaa Transport Website - Full Build Specification

**Updated version:** Includes Google Stitch to Antigravity workflow notes, mobile-responsive requirements, and performance/smooth-scrolling requirements.

## 0. Purpose of This Document
This document is the complete build specification for the Narmaa Transport website. It is intended to be used by Antigravity AI to generate the website with minimal assumptions.

The project must be built as a production-ready React + Vite frontend website hosted on Cloudflare Pages. The website is a marketing, lead-generation, and digital brochure platform for Narmaa Transport.

Do not add features that are not specified in this document. Do not create a backend, database, admin panel, authentication system, booking engine, payment system, or inventory management system unless explicitly requested in a future revision.

---

## 1. Project Identity

### Project Name
Narmaa Transport

### Domain
narmaatransport.com

### Website Type
Multi-page marketing website / lead-generation website / digital brochure.

### Business Offering
Narmaa Transport provides three main service categories in Malaysia:

1. Car rental
2. Homestays
3. Private chauffeur tours / travel packages

### Primary Goal
Convert visitors into leads through WhatsApp and a simple contact/lead form.

### Secondary Goals
- Present Narmaa Transport as trustworthy, clean, professional, and easy to contact.
- Explain the three main service categories clearly.
- Allow each service category to have its own dedicated page with more detailed information.
- Make the site easy to expand later with more cars, stays, tours, FAQs, testimonials, and destination pages.

---

## 2. Technology Stack

### Required Stack
Use the following stack:

- Framework: React with Vite
- Language: TypeScript
- Styling: Tailwind CSS
- Routing: react-router-dom
- Icons: lucide-react
- UI component base: shadcn/ui components where useful
- Low-level accessible primitives: Radix UI only where needed through shadcn/ui or directly for complex UI primitives
- Forms: HTML form submission to Formspree endpoint
- Hosting: Cloudflare Pages

### Do Not Use
Do not use:

- Next.js
- Backend database
- Express server
- Firebase
- Supabase
- Stripe or payment integration
- Authentication
- Admin dashboard
- Server-side rendering
- WordPress

---

## 3. Deployment Requirements

### Hosting Platform
Cloudflare Pages.

### Build Settings
Use these Cloudflare Pages settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `20`

### SPA Routing Requirement
Because the site uses React Router and Cloudflare Pages is static hosting, include a redirects file so direct visits and page refreshes work on nested routes.

Create this file:

```txt
public/_redirects
```

File content:

```txt
/* /index.html 200
```

This is required so routes like `/car-rental`, `/homestay`, `/tours`, and detail pages work correctly after deployment.

---

## 4. Required Pages and Routes

The website must use multiple pages.

### Required Routes
Create the following routes:

```txt
/                 Home page
/car-rental       Car Rental listing and overview page
/car-rental/:slug Individual car detail page
/homestay         Homestay listing and overview page
/homestay/:slug   Individual homestay detail page
/tours            Tours listing and overview page
/tours/:slug      Individual tour/package detail page
/contact          Contact page
/faq              FAQ page
/privacy-policy   Privacy Policy page
/terms            Terms / Booking Policy page
*                 404 Not Found page
```

### Important Route Behavior
- The home page must summarize all three main service categories.
- Each category page must contain more detail than the home page.
- Detail pages must be generated from static data arrays.
- If an invalid slug is visited, show the 404 page.
- All primary CTAs should either open WhatsApp or link to the relevant service page.

---

## 5. Global Layout

### Layout Components
Create a shared layout used across all pages:

```txt
Navbar
Main content wrapper
Footer
FloatingWhatsAppButton
```

### Navbar Requirements
The navbar must include:

- Logo or text logo: `Narmaa Transport`
- Navigation links:
  - Home
  - Car Rental
  - Homestay
  - Tours
  - FAQ
  - Contact
- Primary CTA button: `WhatsApp Us`
- Mobile hamburger menu
- Sticky behavior

Recommended navbar styling:

```txt
sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200
```

### Footer Requirements
Footer must include:

- Business name
- Short business description
- Quick links
- Service links
- Contact details placeholders
- WhatsApp CTA
- Legal links:
  - Privacy Policy
  - Terms / Booking Policy
- Copyright line

Footer must not include fake social links unless placeholders are clearly marked.

---

## 6. Home Page Structure

The home page is a long-scroll landing page that summarizes the whole business.

### Required Home Page Sections
Use this order:

1. Hero section
2. Trust / value proposition section
3. Services summary section
4. Featured fleet section
5. Featured homestays section
6. Featured tours section
7. How it works section
8. Testimonials / reviews section
9. FAQ preview section
10. Lead form / contact section
11. Final CTA section

---

## 7. Home Page Section Details

### 7.1 Hero Section

Purpose: Immediately explain what Narmaa Transport offers and push visitors toward WhatsApp.

Required copy:

```txt
Headline:
Explore Malaysia, Your Way.

Subheadline:
Car rentals, private chauffeur tours, airport pickup, and comfortable homestays — arranged in one simple WhatsApp conversation.
```

Required CTAs:

```txt
Primary CTA: Plan My Trip on WhatsApp
Secondary CTA: View Services
```

Primary CTA behavior:
Open WhatsApp using the WhatsApp helper.

Secondary CTA behavior:
Scroll to or link to the services summary section.

Hero must include a strong image area. Use local placeholder images from `/public/images/` until real images are provided.

Do not use random remote images in production code.

---

### 7.2 Trust / Value Proposition Section

This section must appear before any detailed catalog/listing content.

Required trust points:

1. Airport pickup available
2. Clean, well-maintained vehicles
3. Local Malaysian travel support
4. Flexible car + stay + tour packages
5. Fast WhatsApp response
6. Transparent pricing

Also include a short statement:

```txt
Plan your transport, stay, and private tour with one trusted local team.
```

---

### 7.3 Services Summary Section

This section summarizes the three main services.

It must contain three service summaries:

1. Car Rental
2. Homestay
3. Private Tours

Each summary must include:

- Icon
- Title
- Short description
- Link to dedicated page

Required CTA labels:

```txt
Car Rental: Explore Cars
Homestay: View Homestays
Tours: See Tour Packages
```

---

### 7.4 Featured Fleet Section

Purpose: Show a small preview of cars on the home page.

Requirements:

- Display only featured cars from the static data array.
- Include no more than 3 to 4 items.
- Include a section CTA linking to `/car-rental`.
- Each item must have a WhatsApp availability CTA.

Section CTA label:

```txt
View All Cars
```

---

### 7.5 Featured Homestays Section

Purpose: Show a small preview of homestays on the home page.

Requirements:

- Display only featured homestays from the static data array.
- Include no more than 3 to 4 items.
- Include a section CTA linking to `/homestay`.
- Each item must have a WhatsApp booking CTA.

Section CTA label:

```txt
View All Homestays
```

---

### 7.6 Featured Tours Section

Purpose: Show a small preview of tours/packages on the home page.

Requirements:

- Display only featured tours from the static data array.
- Include no more than 3 to 4 items.
- Include a section CTA linking to `/tours`.
- Each item must have a WhatsApp enquiry CTA.

Section CTA label:

```txt
View All Tours
```

---

### 7.7 How It Works Section

Required steps:

```txt
1. Choose your service
2. Message us on WhatsApp or submit the form
3. Confirm availability, price, and travel details
4. Enjoy your trip in Malaysia
```

This section should be simple and reassuring.

---

### 7.8 Testimonials / Reviews Section

Use static mock testimonials until real testimonials are provided.

Rules:

- Mark testimonials as placeholders in the data file with `isPlaceholder: true`.
- Do not pretend placeholder reviews are real customer reviews.
- Use neutral placeholder names like `Customer from KL` or `Tourist Family`.

If real reviews are unavailable, show a section titled:

```txt
What Customers Can Expect
```

instead of implying real reviews exist.

---

### 7.9 FAQ Preview Section

Show 4 to 6 frequently asked questions on the home page.

Include a link to the full FAQ page.

CTA label:

```txt
View Full FAQ
```

---

### 7.10 Lead Form / Contact Section

Purpose: Allow visitors to send an enquiry without opening WhatsApp.

This does not require a custom backend.

Use Formspree by setting the form `action` attribute to the Formspree endpoint. Replace the placeholder endpoint before production.

Required form fields:

```txt
Name
Email address
WhatsApp number
Service needed: Car Rental / Homestay / Private Tour / Combo Package / Airport Pickup / Other
Travel date
Pickup location or preferred area
Message
```

Required form attributes:

```html
method="POST"
action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID"
```

The form should include client-side required fields:

- Name: required
- WhatsApp number or email: at least one should be requested. If validation is kept simple, make WhatsApp number required.
- Service needed: required
- Message: required

Do not create a backend API route for this form.

Add a visible note:

```txt
Prefer a faster response? Message us directly on WhatsApp.
```

---

### 7.11 Final CTA Section

Required copy:

```txt
Ready to plan your trip?
Tell us what you need and we’ll help arrange the right car, stay, or tour package.
```

CTA:

```txt
Message Narmaa Transport on WhatsApp
```

---

## 8. Car Rental Page Requirements

Route:

```txt
/car-rental
```

Purpose: Dedicated overview and listing page for car rental.

### Required Sections

1. Page hero
2. Trust / rental benefits
3. Car listing/catalog
4. Rental requirements
5. Optional chauffeur add-on note
6. FAQ specific to car rental
7. CTA section

### Required Page Hero Copy

```txt
Headline:
Car Rental in Malaysia

Subheadline:
Choose from comfortable, clean, and practical vehicles for city travel, airport pickup, family trips, and private journeys.
```

### Car Listing Requirements
Cars must be mapped from `cars` array in `src/lib/data.ts`.

Each car item must include:

- Image
- Name
- Category
- Seats
- Transmission
- Fuel type
- Luggage capacity if available
- Price from RM amount per day
- Badge if featured/popular
- CTA: `Check Availability`
- Link to detail page

### Rental Requirements Section
Include placeholder text that can be edited later:

```txt
Rental requirements, deposit amount, driving license rules, mileage limits, and delivery options will be confirmed by Narmaa Transport before booking.
```

Do not invent specific legal requirements unless provided later.

---

## 9. Individual Car Detail Page Requirements

Route:

```txt
/car-rental/:slug
```

Each detail page must use static car data by slug.

Required content:

- Car name
- Image gallery placeholder
- Price from
- Seats
- Transmission
- Fuel type
- Luggage capacity
- Suitable for
- Included items
- Important notes
- WhatsApp CTA
- Related cars

CTA text:

```txt
Check Availability on WhatsApp
```

WhatsApp message must include the car name.

---

## 10. Homestay Page Requirements

Route:

```txt
/homestay
```

Purpose: Dedicated overview and listing page for homestays.

### Required Sections

1. Page hero
2. Stay benefits
3. Homestay listing/catalog
4. Areas covered
5. Booking notes
6. Homestay FAQ
7. CTA section

### Required Page Hero Copy

```txt
Headline:
Comfortable Homestays for Your Malaysia Trip

Subheadline:
Find practical and comfortable stays for families, groups, and travelers who want convenience during their visit.
```

### Homestay Listing Requirements
Homestays must be mapped from `homestays` array in `src/lib/data.ts`.

Each homestay item must include:

- Image
- Name
- Location
- Guest capacity
- Bedrooms
- Bathrooms
- Key amenities
- Price from RM amount per night if provided
- CTA: `Request Booking`
- Link to detail page

---

## 11. Individual Homestay Detail Page Requirements

Route:

```txt
/homestay/:slug
```

Each detail page must use static homestay data by slug.

Required content:

- Homestay name
- Image gallery placeholder
- Location
- Guest capacity
- Bedrooms
- Bathrooms
- Amenities
- House notes
- Nearby attractions if provided
- Price from
- WhatsApp CTA
- Related homestays

CTA text:

```txt
Request Booking on WhatsApp
```

WhatsApp message must include the homestay name.

---

## 12. Tours Page Requirements

Route:

```txt
/tours
```

Purpose: Dedicated overview and listing page for private tours and packages.

### Required Sections

1. Page hero
2. Tour benefits
3. Tours/packages listing
4. Custom itinerary note
5. FAQ specific to tours
6. CTA section

### Required Page Hero Copy

```txt
Headline:
Private Chauffeur Tours in Malaysia

Subheadline:
Explore Malaysia with private transport, flexible routes, and local travel support arranged around your schedule.
```

### Tour Listing Requirements
Tours must be mapped from `tours` array in `src/lib/data.ts`.

Each tour item must include:

- Image
- Name
- Duration
- Pickup included status
- Highlights
- Price from RM amount if provided
- CTA: `Ask for Itinerary`
- Link to detail page

---

## 13. Individual Tour Detail Page Requirements

Route:

```txt
/tours/:slug
```

Each detail page must use static tour data by slug.

Required content:

- Tour/package name
- Image gallery placeholder
- Duration
- Pickup details
- Highlights
- Suggested itinerary
- Suitable for
- Price from
- Important notes
- WhatsApp CTA
- Related tours

CTA text:

```txt
Ask About This Tour on WhatsApp
```

WhatsApp message must include the tour name.

---

## 14. Contact Page Requirements

Route:

```txt
/contact
```

The contact page must include:

- WhatsApp CTA
- Lead form using Formspree
- Business contact placeholders
- Operating hours placeholder
- Service area summary

Required contact placeholders:

```txt
Phone / WhatsApp: +60 REPLACE_WITH_REAL_NUMBER
Email: REPLACE_WITH_REAL_EMAIL
Operating Hours: REPLACE_WITH_REAL_HOURS
Service Areas: Kuala Lumpur, Selangor, KLIA, and selected Malaysia destinations
```

Do not invent real business contact details.

---

## 15. FAQ Page Requirements

Route:

```txt
/faq
```

The FAQ page must group questions by category.

### Required FAQ Categories

1. General
2. Car Rental
3. Homestay
4. Tours
5. Booking & Payment

### Required Example Questions
Include these questions with safe placeholder answers where specific business policies are not yet known:

```txt
Do you provide airport pickup?
Can I book car rental, homestay, and tour together?
How do I check availability?
Is a deposit required?
What documents are needed for car rental?
Do you provide a driver or chauffeur?
Can tourists book your services?
How do I confirm the final price?
Can I customize a tour itinerary?
What areas do you cover?
```

Where exact business policies are unknown, answer with:

```txt
Please contact Narmaa Transport on WhatsApp to confirm the latest requirements and availability.
```

---

## 16. Privacy Policy Page Requirements

Route:

```txt
/privacy-policy
```

Include a simple privacy policy explaining:

- What information is collected through the form
- Why it is collected
- That submissions may be sent through Formspree
- That WhatsApp messages are handled through WhatsApp
- That the business may contact the user to respond to enquiries
- That no payment data is collected on the website

Do not claim legal compliance certifications unless provided later.

---

## 17. Terms / Booking Policy Page Requirements

Route:

```txt
/terms
```

Include a simple booking policy page explaining:

- Website information is for enquiry purposes
- Prices shown are starting prices or placeholders unless confirmed
- Availability must be confirmed by Narmaa Transport
- Booking terms, deposits, cancellations, and refund details must be confirmed before booking
- No booking is final until confirmed directly by Narmaa Transport

Do not invent detailed cancellation, refund, deposit, or insurance policies.

---

## 18. Visual Direction

The website should feel like a modern travel concierge brand, not a generic car rental template.

### Desired Brand Feel

```txt
Premium
Clean
Trustworthy
Friendly
Travel-focused
Mobile-first
Easy to contact
```

### Recommended Visual Style

- Use a clean white and soft slate/gray base.
- Use deep navy or slate for headings.
- Use blue as the primary brand CTA color.
- Use WhatsApp green only for WhatsApp-specific CTAs.
- Use rounded cards and soft shadows.
- Use spacious layouts.
- Use large, high-quality imagery.
- Avoid cluttered layouts.
- Avoid excessive animation.

### Suggested Design Influences

Use these references as principles, not as exact copies:

1. shadcn/ui: for clean, customizable components.
2. Radix UI: for accessibility and behavior of complex components.
3. Tailwind Plus: for polished marketing layout inspiration only. Do not copy paid blocks unless the project owner has a license.
4. Apple Human Interface Guidelines: for clarity, hierarchy, spacing, and polished interaction details.
5. Material Design 3: for accessible components, clear states, and responsive layout principles.

---

## 19. UI Component Requirements

Create reusable components instead of repeating markup.

### Required UI Components

```txt
Button
Container
SectionHeader
ServiceSummary
CarCard
HomestayCard
TourCard
TrustBadge
FAQAccordion
LeadForm
FloatingWhatsAppButton
PageHero
DetailHero
ImageGalleryPlaceholder
CTASection
```

### Button Variants
Button component must support these variants:

```txt
primary
secondary
outline
ghost
whatsapp
```

### Accessibility Requirements

- Buttons must have accessible labels.
- Links must use meaningful text.
- Images must include alt text.
- Mobile menu must be keyboard accessible.
- Accordions must be accessible. Use shadcn/ui accordion or Radix accordion.
- Focus states must be visible.

---

## 20. Static Data Requirements

All business content must be stored in `src/lib/data.ts`.

### Required Data Arrays

```txt
cars
homestays
tours
faqs
testimonials
trustPoints
serviceAreas
```

### Car Data Shape

```ts
export type Car = {
  id: string;
  slug: string;
  name: string;
  category: string;
  seats: number;
  transmission: string;
  fuel: string;
  luggage?: string;
  priceFrom?: number;
  image: string;
  gallery?: string[];
  featured?: boolean;
  popular?: boolean;
  suitableFor: string[];
  included?: string[];
  notes?: string[];
};
```

### Homestay Data Shape

```ts
export type Homestay = {
  id: string;
  slug: string;
  name: string;
  location: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  priceFrom?: number;
  image: string;
  gallery?: string[];
  featured?: boolean;
  nearby?: string[];
  notes?: string[];
};
```

### Tour Data Shape

```ts
export type Tour = {
  id: string;
  slug: string;
  name: string;
  duration: string;
  pickupIncluded: boolean;
  highlights: string[];
  itinerary?: string[];
  suitableFor: string[];
  priceFrom?: number;
  image: string;
  gallery?: string[];
  featured?: boolean;
  notes?: string[];
};
```

### Placeholder Data Rule
Use realistic placeholder entries, but do not claim exact prices, availability, policies, or real reviews unless provided by the project owner.

Use labels like:

```txt
Price from RM XXX
Availability to be confirmed
```

when exact data is unknown.

---

## 21. WhatsApp Integration

WhatsApp is the primary conversion method.

Create utility file:

```txt
src/lib/whatsapp.ts
```

Required helper:

```ts
export type WhatsAppLinkOptions = {
  serviceType: string;
  itemName?: string;
  pageSource?: string;
  travelDate?: string;
  pickupLocation?: string;
};

export const generateWhatsAppLink = ({
  serviceType,
  itemName,
  pageSource,
  travelDate,
  pickupLocation,
}: WhatsAppLinkOptions) => {
  const phone = "60_REPLACE_WITH_REAL_NUMBER";

  const messageParts = [
    "Hi Narmaa Transport, I would like to make an enquiry.",
    `Service: ${serviceType}.`,
    itemName ? `Item/Package: ${itemName}.` : "",
    travelDate ? `Travel date: ${travelDate}.` : "",
    pickupLocation ? `Pickup location/area: ${pickupLocation}.` : "",
    pageSource ? `I clicked from: ${pageSource}.` : "",
    "Can you confirm availability and pricing?",
  ];

  const message = messageParts.filter(Boolean).join(" ");

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
```

### Floating WhatsApp Button
Add a floating WhatsApp button globally.

Requirements:

- Visible on all pages.
- Fixed bottom-right position.
- Must not cover important mobile content.
- Use WhatsApp-specific styling.
- CTA label on desktop: `WhatsApp Us`
- Icon-only or compact label on small screens is acceptable if accessible label exists.

---

## 22. Lead Form Explanation and Requirement

The lead form is a simple enquiry form for visitors who do not want to open WhatsApp immediately.

It does not require a custom backend.

Formspree acts as the form backend. The frontend sends the form submission to Formspree using the form action URL. Formspree can then notify the site owner by email based on the Formspree project settings.

Required implementation:

```tsx
<form
  action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID"
  method="POST"
>
  <!-- fields here -->
</form>
```

Do not build a custom backend for form submissions.

Do not store form submissions in the frontend.

---

## 23. SEO Requirements

Even though this is a Vite SPA, add strong basic SEO.

### Required Per-Page Titles

```txt
Home: Narmaa Transport | Car Rental, Homestays & Private Tours in Malaysia
Car Rental: Car Rental in Malaysia | Narmaa Transport
Homestay: Homestays in Malaysia | Narmaa Transport
Tours: Private Chauffeur Tours in Malaysia | Narmaa Transport
Contact: Contact Narmaa Transport
FAQ: Frequently Asked Questions | Narmaa Transport
```

Use `react-helmet-async` for page-specific metadata.

### Required Meta Fields
Each page should have:

- title
- meta description
- canonical URL
- Open Graph title
- Open Graph description
- Open Graph image placeholder

### Required Static Files
Create:

```txt
public/robots.txt
public/sitemap.xml
public/favicon.ico or favicon.svg
public/images/og-image.jpg placeholder
```

### Local Business Schema
Add simple JSON-LD LocalBusiness schema to the home page.

Do not include fake address or exact coordinates unless provided later.

---

## 24. Image Requirements

### Image Storage
Use local images inside:

```txt
public/images/
```

Suggested folders:

```txt
public/images/brand/
public/images/fleet/
public/images/homestays/
public/images/tours/
public/images/general/
```

### Placeholder Images
Use neutral local placeholders if real images are not available.

Do not hotlink random remote images.

### Image Quality
- Compress all production images.
- Use descriptive filenames.
- Use meaningful alt text.
- Avoid huge uncompressed images.

---

## 25. Analytics and Tracking

Include placeholders only. Do not add analytics scripts unless IDs are provided.

Recommended future options:

- Cloudflare Web Analytics
- Google Analytics
- Meta Pixel only if business requests ads tracking later

Add a clearly marked TODO in code where analytics can be inserted later.

---

## 26. Small But Important Launch Additions

Before launch, make sure the following are included:

1. Real phone number, not placeholder.
2. Real business email.
3. Real Formspree endpoint.
4. WhatsApp links tested on mobile and desktop.
5. Image compression completed.
6. Alt text for all images.
7. Privacy Policy page.
8. Terms / Booking Policy page.
9. Google Maps link if there is an office or pickup point.
10. Cloudflare Web Analytics or Google Analytics added if tracking is required.
11. Form spam protection enabled through Formspree settings if available.
12. 404 page created.
13. Loading and empty states where relevant.
14. Mobile menu tested.
15. SPA fallback `_redirects` file added.
16. All route refreshes tested after Cloudflare deployment.
17. Domain connected to Cloudflare Pages.
18. SSL verified.
19. Favicon added.
20. Open Graph preview tested for WhatsApp sharing.

---

## 27. Recommended Directory Structure

Use this structure:

```txt
src/
├── app/
│   └── App.tsx
├── assets/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingWhatsAppButton.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustSection.tsx
│   │   ├── ServicesSummary.tsx
│   │   ├── FeaturedFleet.tsx
│   │   ├── FeaturedHomestays.tsx
│   │   ├── FeaturedTours.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQPreview.tsx
│   │   ├── LeadFormSection.tsx
│   │   └── FinalCTA.tsx
│   ├── cards/
│   │   ├── CarCard.tsx
│   │   ├── HomestayCard.tsx
│   │   └── TourCard.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Container.tsx
│       ├── SectionHeader.tsx
│       ├── PageHero.tsx
│       ├── DetailHero.tsx
│       ├── FAQAccordion.tsx
│       └── ImageGalleryPlaceholder.tsx
├── lib/
│   ├── data.ts
│   ├── whatsapp.ts
│   ├── seo.ts
│   └── utils.ts
├── pages/
│   ├── HomePage.tsx
│   ├── CarRentalPage.tsx
│   ├── CarDetailPage.tsx
│   ├── HomestayPage.tsx
│   ├── HomestayDetailPage.tsx
│   ├── ToursPage.tsx
│   ├── TourDetailPage.tsx
│   ├── ContactPage.tsx
│   ├── FAQPage.tsx
│   ├── PrivacyPolicyPage.tsx
│   ├── TermsPage.tsx
│   └── NotFoundPage.tsx
├── routes/
│   └── router.tsx
├── main.tsx
└── index.css

public/
├── _redirects
├── robots.txt
├── sitemap.xml
├── favicon.svg
└── images/
```

---

## 28. Required Packages

Install at minimum:

```bash
npm install react-router-dom lucide-react react-helmet-async clsx tailwind-merge
```

If using shadcn/ui, initialize it properly for Vite and add only the needed components.

Suggested shadcn components:

```txt
button
card
accordion
sheet
input
textarea
select
badge
```

Do not install unnecessary large UI frameworks.

---

## 29. Performance Requirements

Performance is a core project requirement, not an optional cleanup step. The site must feel smooth while scrolling and interacting on desktop and mobile.

High-level rules:

- Keep the initial bundle small.
- Avoid unnecessary animation libraries.
- Use lazy loading for route pages if useful.
- Use responsive images when possible.
- Avoid loading large unused assets.
- Avoid heavy scroll effects, parallax, excessive blur, and unnecessary animations.
- Keep Lighthouse performance, accessibility, SEO, and best practices strong.

Detailed performance rules are defined in Sections 33, 34, and 37.

---

## 30. Development Rules for Antigravity AI

1. Follow this document exactly.
2. Do not add backend functionality.
3. Do not create fake business policies.
4. Do not invent exact prices unless clearly marked as placeholder.
5. Do not invent real reviews.
6. Do not remove multi-page routing.
7. Do not use Next.js.
8. Do not use `.next` as output.
9. Do not skip the Cloudflare `_redirects` file.
10. Do not hardcode repeated content in components when it belongs in `data.ts`.
11. Keep components modular and reusable.
12. Keep the design clean, responsive, and mobile-first.
13. Use WhatsApp as the primary CTA.
14. Use Formspree as the secondary enquiry method.
15. Clearly mark placeholders that must be replaced before launch.


---

## 31. Stitch / Google Design Export to Antigravity Requirements

The visual design may be imported from Google Stitch into Google Antigravity through Stitch export, MCP, Figma, HTML/CSS, or another available Stitch export workflow.

### Design Import Principle

The Stitch design is a visual reference, not the final production implementation.

Antigravity AI must recreate the visual design in a clean React + Vite + TypeScript codebase while following this specification. Do not blindly preserve inefficient exported HTML, excessive wrappers, duplicate inline styles, oversized images, unnecessary animations, or non-semantic markup from the exported design.

### Required Conversion Rules

When converting the Stitch design to production code:

1. Rebuild the design as reusable React components.
2. Use Tailwind CSS utility classes instead of large blocks of inline CSS.
3. Keep component markup semantic and accessible.
4. Replace repeated design structures with reusable components.
5. Replace placeholder copy only where this document provides approved copy.
6. Do not invent final business policies, exact prices, contact details, testimonials, or legal claims.
7. Preserve the approved visual direction but optimize the implementation for speed, accessibility, and maintainability.
8. Use the Stitch design as the design source of truth for spacing, hierarchy, visual mood, and page composition, but this specification is the source of truth for functionality and constraints.

### Important Warning

If the exported Stitch HTML feels slow, clunky, or laggy, do not assume the final production website should behave the same way. Exported design previews can contain inefficient layout code, excessive effects, unoptimized images, repeated DOM nodes, heavy shadows/blurs, or animation choices that are acceptable for a prototype but not acceptable for production.

The final React implementation must be optimized separately.

---

## 32. Mobile and Responsive Design Requirements

The website must be designed and implemented for mobile, tablet, and desktop from the start. Do not build desktop first and leave mobile as an afterthought.

### Required Breakpoints

Use Tailwind's default responsive breakpoints unless there is a strong reason not to:

```txt
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Required Testing Viewports

Every required page must be checked at these viewport widths:

```txt
375px  - small mobile
390px  - common iPhone mobile width
430px  - large mobile
768px  - tablet
1024px - small laptop/tablet landscape
1280px - desktop
1440px - large desktop
```

### Global Mobile Rules

1. No horizontal scrolling on any page.
2. Body width must never exceed viewport width.
3. Images must scale down correctly on mobile.
4. Buttons must be easy to tap.
5. Primary tap targets should be at least 44px tall.
6. Text must remain readable without zooming.
7. Avoid tiny icon-only buttons unless they have accessible labels.
8. The floating WhatsApp button must not cover important content.
9. Sticky header must not take too much vertical space on mobile.
10. Mobile menu must be keyboard-accessible and easy to close.
11. Forms must be comfortable to use on mobile.
12. Cards should stack cleanly in one column on mobile.
13. Multi-column sections must collapse into one column on mobile.
14. Large hero sections must adapt to mobile height and not push all content too far below the fold.
15. Avoid placing important CTAs only inside desktop-only layouts.

### Responsive Layout Rules by Page Type

#### Home Page

Mobile layout:

- Hero becomes a single-column layout.
- Hero image appears below or behind the hero copy depending on the chosen design.
- Trust badges use a 2-column or horizontal scroll layout only if it remains readable.
- Services summary stacks vertically.
- Featured cars, homestays, and tours display as one-column cards.
- FAQ preview remains easy to tap.
- Lead form fields stack vertically.

Desktop layout:

- Hero may use a split visual composition or large immersive background.
- Services can use a 3-column layout.
- Featured items can use 3 or 4 columns.

#### Listing Pages

Mobile layout:

- Page hero is compact and clear.
- Filter/sort controls, if added later, must stack or become a sheet/drawer.
- Listing cards display one per row.
- Card CTA must be visible without requiring hover.

Desktop layout:

- Listing cards may use a 2, 3, or 4-column grid depending on content density.

#### Detail Pages

Mobile layout:

- Gallery appears first or immediately after title.
- Key details appear as compact chips or rows.
- WhatsApp CTA must be visible near the top and repeated near the bottom.
- Avoid long text sections.
- Related items appear as a horizontal scroll or stacked cards.

Desktop layout:

- Gallery can be larger and more immersive.
- Key information can sit beside the gallery or below it in a premium product-page style.

#### Contact Page

Mobile layout:

- WhatsApp CTA appears before the form.
- Form fields stack vertically.
- Contact details appear below the form.

#### FAQ Page

Mobile layout:

- FAQ categories stack vertically.
- Accordions must be comfortable to tap.
- Do not use tiny tabs that are hard to interact with.

### Mobile Navigation Requirements

The mobile navigation must use an accessible menu pattern.

Required behavior:

- Hamburger button opens the menu.
- Close button is visible.
- Menu closes when a navigation link is selected.
- Menu closes when Escape is pressed.
- Focus should not become lost behind the menu.
- Navigation links must be large enough to tap.
- WhatsApp CTA must be visible inside the mobile menu.

Suggested implementation:

Use shadcn/ui Sheet or Radix Dialog/Sheet pattern for the mobile menu.

---

## 33. Performance and Smooth Scrolling Requirements

The website must feel smooth and responsive. It should not feel clunky, heavy, or laggy when scrolling.

### Performance Goal

Target a smooth 60 FPS feel during normal scrolling and interaction on modern phones and laptops.

### Why Prototypes May Feel Slow

If the exported Stitch HTML feels slow when opened directly, likely causes include:

1. Oversized images loaded at full resolution.
2. Too many large shadows, blurs, gradients, or backdrop filters.
3. Heavy fixed backgrounds or parallax-style effects.
4. Too many animated elements running at once.
5. Animations using expensive CSS properties.
6. Large DOM structure from exported design code.
7. Inline styles repeated across many elements.
8. Layout shifts caused by images without fixed dimensions.
9. Browser rendering too many large translucent layers.
10. Preview/export code not optimized like a production React build.

The final production build must avoid these issues.

### Animation Rules

Animations must be subtle and performance-safe.

Allowed animation properties:

```txt
transform
opacity
```

Avoid animating these properties unless absolutely necessary:

```txt
width
height
top
right
bottom
left
margin
padding
box-shadow
filter
backdrop-filter
background-position
border-radius on large elements
```

Do not add heavy scroll-linked animations, parallax, or constant motion effects unless explicitly requested later.

### Motion Design Rules

Use motion sparingly:

- Button hover: subtle transform or opacity change.
- Card hover: subtle lift using transform only.
- Menu open/close: transform and opacity only.
- Accordion open/close: use proven accessible component behavior.
- Avoid continuous animations.
- Respect `prefers-reduced-motion`.

Required CSS behavior:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Blurs, Shadows, and Glass Effects

Apple-style does not mean overusing glassmorphism.

Allowed:

- Light navbar blur.
- Soft card shadows.
- Subtle gradient backgrounds.

Avoid:

- Multiple nested backdrop blurs.
- Large full-page blur layers.
- Heavy shadows on many cards.
- Animated blur effects.
- Large fixed overlays with blur.

If the design uses a translucent sticky navbar, keep it simple:

```txt
bg-white/85 backdrop-blur-md border-b border-slate-200
```

Do not apply `backdrop-blur` to many sections or cards.

### DOM and Component Rules

1. Avoid unnecessary nested wrappers.
2. Keep sections clean and semantic.
3. Do not render hidden desktop and mobile versions of the same large section unless necessary.
4. Prefer responsive CSS over duplicate markup.
5. Use reusable components to avoid repeated heavy structures.
6. Do not create huge pages with hundreds of unnecessary decorative elements.

### JavaScript Rules

1. Avoid heavy animation libraries unless explicitly approved.
2. Do not install Framer Motion unless specifically requested later.
3. Do not use scroll event listeners for visual effects unless throttled and necessary.
4. Do not calculate layout repeatedly during scroll.
5. Lazy-load route pages where practical.
6. Keep state minimal.
7. Do not add unnecessary carousels.

### Carousel Rule

Avoid autoplay carousels. They often hurt usability and performance.

If a carousel is used:

- It must not autoplay by default.
- It must be keyboard accessible.
- It must not block page scrolling on mobile.
- Images must be lazy-loaded.

### Performance Testing Requirements

Before final delivery, test using:

1. Chrome Lighthouse.
2. Chrome DevTools Performance panel if scrolling feels slow.
3. Mobile viewport testing in browser dev tools.
4. Real mobile device testing if possible.

Target Lighthouse scores:

```txt
Performance: 90+
Accessibility: 90+
Best Practices: 90+
SEO: 90+
```

These are goals, not excuses to remove important content. If scores are lower, optimize images, JavaScript, CSS, and layout first.

---

## 34. Image Optimization Requirements

Images are the most likely source of slowness for this website because the design is photo-heavy.

### Image Format Rules

Use optimized local images.

Preferred formats:

```txt
.webp for most photos
.jpg only when needed
.svg for simple logos/icons
png only when transparency is required
```

Do not use huge uncompressed phone photos in production.

### Image Size Targets

Use these approximate targets:

```txt
Hero images: 150 KB to 450 KB each when possible
Card images: 60 KB to 180 KB each when possible
Gallery images: 100 KB to 300 KB each when possible
Open Graph image: under 300 KB when possible
```

Avoid images above 1 MB unless there is a very strong reason.

### Dimension Rules

All image elements must include width and height attributes where practical or use containers that preserve aspect ratio. This prevents layout shift.

Recommended aspect ratios:

```txt
Hero: 16:9, 21:9, or 4:3 depending on layout
Card images: 4:3 or 16:10
Gallery thumbnails: 1:1, 4:3, or 16:10
Detail hero/gallery: 16:9 or 4:3
```

### Loading Rules

1. Above-the-fold hero images should load eagerly only when they are the main LCP image.
2. Below-the-fold images must use lazy loading.
3. Do not load every gallery image at maximum resolution immediately.
4. Use responsive image sizes where possible.

Example:

```tsx
<img
  src="/images/fleet/honda-city.webp"
  alt="Honda City rental car in Malaysia"
  width="800"
  height="600"
  loading="lazy"
  className="h-full w-full object-cover"
/>
```

### Image Content Rules

Use Malaysia-relevant images only:

- Malaysian cars or cars commonly available in Malaysia.
- Malaysian city and destination imagery.
- Malaysia-relevant homestay and travel context.

Do not use random European-looking cars, European city streets, or unrelated destinations.

---

## 35. Accessibility and Button Functionality Requirements

Every visible interactive element must work or clearly be a placeholder before launch.

### Button Behavior Rules

1. Buttons that look clickable must perform an action.
2. WhatsApp buttons must open the generated WhatsApp URL.
3. Service page buttons must navigate to the correct route.
4. Detail buttons must include the specific item name in the WhatsApp message.
5. Form submit button must submit to the Formspree endpoint.
6. Placeholder buttons must not remain in production.

### Link Rules

Use actual links for navigation:

```tsx
<Link to="/car-rental">Explore Cars</Link>
```

Use anchor tags for external links:

```tsx
<a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
```

### Focus and Keyboard Rules

1. All links and buttons must be reachable by keyboard.
2. Focus states must be visible.
3. Dialogs, sheets, accordions, and menus must be accessible.
4. Do not remove outlines globally.
5. Use semantic HTML whenever possible.

### Form Accessibility Rules

1. Each input must have a visible label.
2. Required fields must be clear.
3. Error/help text must be readable.
4. The form must work on mobile.
5. The form must not require a backend.
6. The Formspree endpoint remains a placeholder until replaced.

---

## 36. Mobile-First Implementation Acceptance Checklist

The build is not acceptable until the following are true:

1. Every required page works at 375px width.
2. Every required page works at 390px width.
3. Every required page works at 430px width.
4. Every required page works at 768px width.
5. Every required page works at 1024px width.
6. Every required page works at 1280px width.
7. No horizontal scrolling exists.
8. Navbar works on mobile and desktop.
9. Floating WhatsApp button does not block important content.
10. Forms are easy to use on mobile.
11. Cards stack correctly on mobile.
12. Detail pages remain photo-heavy but readable on mobile.
13. Images do not overflow their containers.
14. CTAs remain visible and usable on mobile.
15. FAQ accordions are easy to tap.
16. Footer is readable on mobile.
17. Page spacing does not feel cramped on mobile.
18. Page spacing does not feel empty or stretched on desktop.

---

## 37. Smoothness and Performance Acceptance Checklist

The build is not acceptable until the following are true:

1. Scrolling feels smooth on desktop.
2. Scrolling feels smooth in mobile viewport testing.
3. No heavy parallax effect exists.
4. No autoplay carousel exists unless explicitly approved later.
5. No excessive blur or glass effects exist.
6. No large uncompressed images remain.
7. No image above 1 MB remains unless explicitly justified.
8. Below-the-fold images use lazy loading.
9. Images have dimensions or stable aspect-ratio containers.
10. Hover effects use transform/opacity only.
11. Animations respect `prefers-reduced-motion`.
12. Lighthouse Performance score should target 90+.
13. Lighthouse Accessibility score should target 90+.
14. Lighthouse SEO score should target 90+.
15. Production build must be tested with `npm run build` and local preview.
16. The final site must feel smoother than the raw Stitch HTML prototype.

---

## 38. Final Acceptance Checklist

The build is acceptable only if:

- The project runs with `npm run dev`.
- The project builds with `npm run build`.
- The production output is generated in `dist`.
- All required routes exist.
- Refreshing nested routes works through `_redirects` after deployment.
- Navbar and footer appear across all pages.
- Floating WhatsApp button appears across all pages.
- Home page summarizes car rental, homestay, and tours.
- Each service has its own listing page.
- Each service item has its own detail page.
- Lead form exists and uses a Formspree action placeholder.
- FAQ page exists.
- Privacy Policy page exists.
- Terms / Booking Policy page exists.
- 404 page exists.
- Static data is stored in `src/lib/data.ts`.
- WhatsApp helper is implemented in `src/lib/whatsapp.ts`.
- No backend is created.
- No fake final business details are presented as real.

