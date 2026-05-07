# 📊 Sales CRM Dashboard

> A modern, full-featured Customer Relationship Management platform built for sales teams and supervisors.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)

---

## ✨ Features

### 🏠 Dashboard

Real-time sales performance overview at a glance — track monthly revenue, active customers, pending orders, and conversion rates. Includes alerts for **overdue payments** and **delivery issues** so nothing falls through the cracks.

### 👥 Customer Management

Full customer lifecycle management with contact details, preferred contact times, interaction history, and personal notes. One-click **call** and **email** actions keep your team moving fast.

### 📦 Products Catalog

Browse and search your entire product inventory in a clean grid layout. Direct links to your e-commerce storefront keep product information synced between channels.

### 📣 Campaigns

Create and manage sales campaigns with advanced filtering by product category, date range, and status. Track lead generation across campaigns to see what's driving growth.

### 🧾 Orders

Full order management with customer attribution, itemized breakdowns, status tracking, and document access — all searchable in one place.

### 🧑‍💼 Supervisor View

Team performance command center with individual seller metrics (sales, customers, satisfaction, tickets), online status indicators, and a full **support ticket** management system with priority and status filtering.

---

## 🛠️ Tech Stack

| Layer           | Technology                                                                                           |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| ⚛️ UI Framework | [React 19](https://react.dev/)                                                                       |
| 🔷 Language     | [TypeScript 6](https://www.typescriptlang.org/)                                                      |
| ⚡ Build Tool   | [Vite 8](https://vite.dev/)                                                                          |
| 🎨 Styling      | [Tailwind CSS 4](https://tailwindcss.com/)                                                           |
| 🗄️ Backend      | [Supabase](https://supabase.com/)                                                                    |
| 🔀 Routing      | [React Router v7](https://reactrouter.com/)                                                          |
| 🖼️ Icons        | [Lucide React](https://lucide.dev/)                                                                  |
| 📅 Dates        | [date-fns v4](https://date-fns.org/)                                                                 |
| 🔗 CSS Utils    | [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/crm-dashboard.git
cd crm-dashboard

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Type-check and build for production
npm run build

# Preview the production build locally
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 📁 Project Structure

```text
src/
├── pages/
│   ├── Dashboard.tsx     # 🏠 KPIs, pending payments, delivery alerts
│   ├── Customers.tsx     # 👥 Customer list & detail modal
│   ├── Products.tsx      # 📦 Product catalog & search
│   ├── Campaigns.tsx     # 📣 Campaign management & filters
│   ├── Orders.tsx        # 🧾 Order tracking & documents
│   └── Supervisor.tsx    # 🧑‍💼 Team metrics & support tickets
├── lib/
│   └── utils.ts          # cn() helper for class merging
├── App.tsx               # Root layout, sidebar navigation & routing
├── main.tsx              # React entry point
└── index.css             # Global Tailwind import
```

---

## 🗺️ Navigation

| Route         | Page          | Description              |
| ------------- | ------------- | ------------------------ |
| `/`           | 🏠 Dashboard  | Sales overview & alerts  |
| `/customers`  | 👥 Customers  | Customer management      |
| `/products`   | 📦 Products   | Product catalog          |
| `/campaigns`  | 📣 Campaigns  | Campaign tracking        |
| `/orders`     | 🧾 Orders     | Order history            |
| `/supervisor` | 🧑‍💼 Supervisor | Team & ticket management |

---

## 🧩 Key Design Decisions

- **No global state library** — component-local `useState` keeps things simple and predictable
- **Utility-first CSS** — Tailwind CSS v4 with `@tailwindcss/postcss` for zero-runtime styling
- **Supabase-ready** — the SDK is installed and configured; connect your project by setting the environment variables below
- **Type-safe throughout** — strict TypeScript with well-typed data models for every entity

---

## 🔐 Environment Variables

Create a `.env.local` file at the project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

Built with ❤️ using React, Vite, and Tailwind CSS
