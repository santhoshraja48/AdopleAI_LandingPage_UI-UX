# Adople AI Enterprise Assistant

## Overview

This is a modern full-stack web application for Adople AI, an enterprise AI assistant platform. The application provides a marketing website with customer testimonials, pricing information, and Stripe payment integration. Built with React, TypeScript, Express, and PostgreSQL using Drizzle ORM.

## Recent Changes (July 21, 2025)

- **Product Gallery Enhancement**: Moved from Hero to AIUseCases component with professional UI/UX transformation
- **Real Client Data Integration**: Updated with 28+ confirmed enterprise clients including T-Mobile, StoriBoard, SyraHealth and 14 additional logo assets
- **Stripe Integration Fixed**: Resolved authentication errors with valid API keys and confirmed payment processing functionality
- **Accurate Statistics**: Updated client count to 28+ based on actual client roster and logo assets
- **Enhanced Branding**: Changed to "Our Valuable Clients" branding to match company materials

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for development and bundling
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ESM modules
- **API**: RESTful API with Express routes (currently minimal implementation)
- **Development**: Hot reload with Vite integration in development mode

### Data Storage Solutions
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM for type-safe database interactions
- **Schema**: User management schema with username/password authentication
- **Development Storage**: In-memory storage implementation for development
- **Migrations**: Drizzle Kit for database schema management

### Authentication and Authorization
- **Current State**: Basic user schema defined but authentication not fully implemented
- **Schema**: Username/password based user model with Zod validation
- **Future**: Ready for session-based or JWT authentication implementation

### External Service Integrations
- **Payments**: Stripe integration for subscription payments
  - Stripe Elements for secure card collection
  - Payment intent creation and processing
  - Webhook handling for payment events
- **UI Components**: Comprehensive Radix UI component library
- **Development Tools**: Replit integration for cloud development

## Key Components

### Frontend Pages
1. **Home Page**: Hero section with features showcase and floating CTA
2. **Customers Page**: Customer testimonials and case studies
3. **Pricing Page**: Subscription plans with Stripe checkout integration
4. **404 Page**: Custom not-found page

### UI Component System
- Complete shadcn/ui component library
- Radix UI primitives for accessibility
- Custom design tokens and CSS variables
- Responsive design with mobile-first approach

### Backend Services
- Express server with middleware for logging and error handling
- Modular route registration system
- Abstract storage interface for easy database switching
- Development and production environment configurations

## Data Flow

1. **Client Requests**: React app makes API calls using TanStack Query
2. **Server Processing**: Express server handles requests with custom middleware
3. **Data Layer**: Storage interface abstracts database operations
4. **Response**: JSON responses with proper error handling and logging

### Payment Flow
1. User selects pricing plan on frontend
2. Stripe Elements collects payment information securely
3. Frontend creates payment intent via Stripe API
4. Payment processing handled by Stripe
5. Webhooks notify backend of payment events

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **Backend**: Express.js, Node.js types
- **Database**: Drizzle ORM, PostgreSQL driver (@neondatabase/serverless)
- **Payments**: Stripe JS SDK and React Stripe.js
- **UI/Styling**: Tailwind CSS, Radix UI components, Lucide icons

### Development Tools
- **Build**: Vite, ESBuild for production builds
- **TypeScript**: Full type safety across frontend and backend
- **Development**: Hot reload, error overlays, Replit integration

### Third-Party Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Stripe**: Payment processing and subscription management
- **Replit**: Cloud development environment

## Deployment Strategy

### Build Process
- Frontend: Vite builds optimized React bundle to `dist/public`
- Backend: ESBuild bundles Express server to `dist/index.js`
- Database: Drizzle migrations applied via `npm run db:push`

### Environment Configuration
- **Development**: Local development with Vite dev server and Express
- **Production**: Bundled Express server serves static frontend files
- **Database**: Environment-specific DATABASE_URL configuration

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (configured for Neon serverless)
- Environment variables for Stripe keys and database URL
- Static file serving capability for frontend assets

### Key Features for Deployment
- Server-side rendering preparation with Vite SSR setup
- Production error handling and logging
- Static asset optimization and caching
- Database connection pooling ready for production scale