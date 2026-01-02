# Trash Collection Tracker

A modern, adventure-themed web application that motivates environmental action through community engagement. Users can document and share their trash collection efforts, creating an inspiring platform for environmental activism.

## Features

- **Collection Entry**: Log trash collection activities with amounts and photos
- **Global Counter**: See community-wide impact with animated counters
- **Photo Upload**: Visual documentation with drag-and-drop functionality
- **Activity Feed**: Chronological display of all collection activities
- **Responsive Design**: Optimized for mobile and desktop
- **Adventure Theme**: Bold outdoor aesthetics with lime-green accents

## Tech Stack

- **Frontend**: Next.js 16 with React 19 and TypeScript
- **Styling**: Tailwind CSS 4 with custom adventure theme
- **Database**: PostgreSQL with Prisma ORM
- **File Storage**: Cloud storage (Cloudinary/AWS S3)
- **Testing**: Jest, React Testing Library, fast-check for property-based testing
- **Code Quality**: ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
├── lib/                 # Utility functions and configurations
├── types/               # TypeScript type definitions
└── __tests__/           # Test files
```

## Design System

### Colors
- **Primary Green**: #84CC16 (lime-600)
- **Text Primary**: #1F2937 (gray-800)
- **Text Secondary**: #6B7280 (gray-500)
- **Background**: #FFFFFF

### Typography
- **Headlines**: Oswald (bold, condensed, uppercase)
- **Body Text**: Inter (clean, readable)

### Components
- **Hero Section**: Full-bleed environmental photography
- **Pill Navigation**: Rounded, centered navigation bar
- **Adventure Cards**: Elevated cards with hover effects
- **CTA Buttons**: Bold, lime-green with hover animations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.