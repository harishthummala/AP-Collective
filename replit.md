# Anant Parinay Collective - Wedding Photography & Videography Platform

## Overview

A luxury wedding photography and videography showcase website for Anant Parinay Collective. The platform features a sophisticated design with portfolio galleries, contact forms for couples and wedding planners, moodboard displays, and comprehensive information about the company's services. Built as a full-stack TypeScript application with a modern React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing instead of React Router
- TanStack Query (React Query) for server state management and API communication

**UI Component System**
- Shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Design system uses three primary font families: EB Garamond (headings), Libre Baskerville (body), and Overpass Mono (meta text)
- Custom color palette focused on luxury aesthetics with warm neutrals and gold accents
- CSS variables for theming with light/dark mode support

**State & Form Management**
- React Hook Form with Zod validation for type-safe form handling
- Separate inquiry forms for couples and wedding planners with different validation schemas
- Client-side validation before submission to backend

**User Experience Features**
- Custom scroll animation hook for progressive content reveal
- Lightbox component for image viewing
- Responsive navigation with mobile hamburger menu
- Toast notifications for user feedback
- Portfolio filtering system (photography/videography/destination)

### Backend Architecture

**Server Framework**
- Express.js with TypeScript running in ESM (ES Module) mode
- RESTful API design with JSON request/response format
- Custom logging middleware for API request tracking

**Data Layer**
- In-memory storage implementation (MemStorage class) for development
- Interface-based storage design (IStorage) allows easy swapping to database implementation
- Drizzle ORM configured for PostgreSQL with schema definitions in shared folder
- Neon Database serverless PostgreSQL configured but not actively used with current memory storage

**API Endpoints**
- `POST /api/inquiries/couple` - Create couple inquiry
- `GET /api/inquiries/couple` - Retrieve all couple inquiries
- `POST /api/inquiries/planner` - Create planner inquiry
- `GET /api/inquiries/planner` - Retrieve all planner inquiries

**Validation & Type Safety**
- Zod schemas defined in shared folder for runtime validation
- Drizzle-zod integration for automatic schema generation from database definitions
- Type inference ensures frontend and backend share identical data types

**Development Setup**
- Custom Vite integration for SSR-like development experience
- Middleware mode allows Express to serve Vite dev server
- Production build bundles frontend (Vite) and backend (esbuild) separately

### Data Models

**Database Schema (PostgreSQL)**
- `users` table: id, username, password (authentication ready but not implemented)
- `couple_inquiries` table: id, names, email, phone, weddingDate, location, message, createdAt
- `planner_inquiries` table: id, name, company, email, phone, service, message, createdAt

**In-Memory Storage**
- Map-based storage for users, couple inquiries, and planner inquiries
- UUID generation for unique identifiers
- Async interface matches future database implementation

### External Dependencies

**UI & Styling**
- Radix UI primitives for accessible components (accordion, dialog, dropdown, tooltip, etc.)
- Tailwind CSS with PostCSS for processing
- Embla Carousel for image carousels
- Lucide React for icons

**Data & Validation**
- Drizzle ORM (v0.39.1) for database operations
- Drizzle-zod for schema validation
- Zod for runtime type validation
- @hookform/resolvers for form validation integration

**Database**
- @neondatabase/serverless for PostgreSQL connection
- Configured to use Neon's serverless driver
- DATABASE_URL environment variable required for production

**Development Tools**
- Replit-specific plugins for development environment
- @replit/vite-plugin-runtime-error-modal for error overlays
- @replit/vite-plugin-cartographer for code navigation
- @replit/vite-plugin-dev-banner for development indicators

**Build & Runtime**
- tsx for TypeScript execution in development
- esbuild for production backend bundling
- Vite for frontend building and optimization
- Express for HTTP server