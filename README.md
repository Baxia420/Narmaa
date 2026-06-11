# Narmaa Transport - Premium Travel & Transport Platform

Welcome to the **Narmaa Transport** repository. This is a premium, modern, and highly interactive React + TypeScript + Vite + Tailwind CSS web application built to facilitate premium travel, private chauffeur tours, car rentals, airport shuttles, and homestay bookings in Malaysia.

All communications, inquiries, and bookings are seamlessly integrated with **WhatsApp** and **Formspree** to provide a direct, frictionless booking experience.

---

## 🌟 Key Features

- **Airport Shuttle Service**: Premium airport transfers with customized quotes and dynamic pickup scheduling.
- **Signature Car Rental**: Sleek browsing of premium vehicles (e.g., Toyota Alphard, Hyundai Starex) with detailed specs.
- **Private Chauffeur Tours**: Curated tour packages (e.g., Kuala Lumpur, Malacca, Genting Highlands) with interactive itineraries.
- **Premium Homestay Bookings**: Comfortable stays in prime locations (e.g., Axon Residence Bukit Bintang) with visual lists of amenities.
- **Comprehensive FAQ Section**: Category-filtered accordion to answer common travel questions.
- **Dynamic Booking & Lead Capture**: A modern lead generation form that sends bookings to Formspree and redirects to WhatsApp for immediate confirmation.
- **Responsive & Premium UI**: Fluid animations, rich gradients, sticky navbar, mobile drawer, and a floating WhatsApp CTA.

---

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Metadata**: [React Helmet Async](https://github.com/staylor/react-helmet-async) for dynamic titles, meta descriptions, and OpenGraph tags
- **Routing**: [React Router DOM](https://reactrouter.com/) (Single Page Application configuration)

---

## 📁 Repository Structure

```text
├── public/
│   ├── favicon.svg         # Tab favicon
│   ├── icons.svg           # Vector icon sprites
│   └── images/             # Image directory
│       └── brand/
│           └── logo.svg     # Core Narmaa Transport logo (preserved)
├── src/
│   ├── app/                # App entry shell and routing configuration
│   ├── assets/             # Global stylesheets and fonts
│   ├── components/         # Reusable UI components
│   │   ├── cards/          # Dynamic display cards (Car, Homestay, Tour, etc.)
│   │   ├── layout/         # Layout modules (Navbar, Footer, Floating WhatsApp)
│   │   ├── sections/       # Landing page sections
│   │   └── ui/             # Core UI components (Buttons, Accordions, Containers)
│   ├── lib/                # Shared utilities, static data, and SEO configs
│   ├── pages/              # Page views (Home, Rental, Homestay, Tours, FAQ, etc.)
│   └── routes/             # Client-side router definition
```

---

## 📷 Note on Images

To allow full customization of website assets, **all placeholder imagery has been removed** from the repository.
- The website features robust, styled fallback wrappers (`onError` handlers) that display clean placeholder boxes with corresponding Lucide icons if an image is missing, keeping the UI completely intact.
- To add your own custom photos, place your images in `public/images/` under the corresponding folders (`fleet/`, `homestays/`, `tours/`, `general/`) matching the filenames defined in `src/lib/data.ts`.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18+) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Baxia420/Narmaa.git
   cd Narmaa
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the application.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to Vercel

This is a single-page application (SPA) using client-side routing. When deploying to Vercel, ensure you configure the routing fallback to avoid `404` errors on subpages:

1. Connect this GitHub repository to your **Vercel** account.
2. Vercel will automatically detect **Vite** and configure the build settings (`npm run build`, output directory: `dist`).
3. To support routing fallbacks on subpages (like `/car-rental` or `/tours`), add a `vercel.json` file in the root of the project with the following configuration:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```
   *(Note: The `vercel.json` rewrite rule has already been added to the root directory for your convenience).*

---

© 2026 Narmaa Transport. Built with premium care and precision.
