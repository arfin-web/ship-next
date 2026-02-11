# ShipNext 🚀

ShipNext is a premium, high-performance SaaS platform built for founders to collect, manage, and prioritize product feedback via community-driven feature boards.

## ✨ Key Features
- **🚀 Founder Dashboard**: A powerful, centralized hub to manage multiple products and streamline your feedback workflow.
- **🗳️ Community Voting**: Let your users voice their needs with a high-performance, real-time voting system.
- **🗺️ Visual Roadmap**: Transparently communicate progress with automated roadmaps (Planned, In Progress, Shipped).
- **🔒 Public/Private Boards**: Full control over board visibility for internal refinement or public community engagement.
- **📈 Data-Driven Insights**: Actionable analytics on feature requests to help you prioritize what truly matters.
- **🛡️ Secure Auth**: Modern, session-based authentication layer ensuring a safe environment for both founders and users.

## 🏗️ Technical Architecture

ShipNext is built on a **Modern Monolith** architecture using **Next.js 16+**. This approach allows for tight coupling between the frontend and backend, ensuring high developer velocity while maintaining Type-Safety across the entire stack.

### 🔌 Core Infrastructure
- **Framework**: Next.js (App Router) with Turbopack for lightning-fast HMR and build times.
- **Database**: PostgreSQL hosted on **Neon**, leveraging serverless branching and autoscaling.
- **ORM**: **Prisma** for type-safe database access and automated migrations.
- **Authentication**: **Better-Auth** with Prisma adapter, providing a secure, session-based auth layer that integrates seamlessly with Next.js middleware.

## 🧠 Engineering Decisions: The "Why"

### 1. Prisma & Neon
Prisma was chosen for its exceptional Developer Experience (DX). The generated client provides end-to-end type safety, reducing runtime errors. Coupled with Neon's serverless PostgreSQL, we achieve high performance and ease of maintenance without the overhead of traditional DB management.
> [!NOTE]
> We use the `@prisma/nextjs-monorepo-workaround` logic (singleton pattern) to prevent connection exhaustion during HMR in development.

### 2. Better-Auth over traditional alternatives
Better-Auth offers a more modern, plugin-based approach to authentication. It handles everything from email/password verify to complex session management out of the box, allowing us to focus on core business logic rather than auth boilerplate.

### 3. Server Actions for Data Mutations
By utilizing `use server` actions, we eliminate the need for complex REST/GraphQL API setup. This reduces the network boundary to a single function call, improving performance and making the codebase easier to reason about.

## 💎 Clean Code & Performance Optimization

### 🧩 Atomic Component Architecture
Large views like the `DashboardOverview` or `PublicBoard` are broken down into granular, reusable components:
- **`components/ui`**: Base Shadcn components.
- **`components/dashboard`**: Founder-specific management tools.
- **`components/board`**: Public-facing interaction elements.

### 🧊 Centralized Type System
All core entities are defined in the `types/` directory. This ensures that a `FeatureRequest` or `Product` object has a consistent interface whether it's being used in a server-side query or a client-side prop.

### ⚡ Performance Benchmarks
- **Zero-Client footprint**: Most pages are Server Components by default, minimizing the JavaScript bundle sent to the browser.
- **Optimistic UI**: Voting and status updates are designed for responsiveness, leveraging Next.js's data revalidation strategies (`revalidatePath`).
- **Image Optimization**: Using `next/image` for automatic format conversion and lazy loading.

## 🛠️ Development

### Prerequisites
- Node.js 18+
- A PostgreSQL database (Neon recommended)

### Setup
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up your `.env` file (see `.env.example`).
4. Generate Prisma client: `npx prisma generate`.
5. Run migrations: `npx prisma db push`.
6. Start development: `npm run dev`.

---

**ShipNext** — *Stop guessing, start shipping what matters.*
