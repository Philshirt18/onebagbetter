# One Bag Better 🌱

A community-driven environmental tracking app that encourages cleanup efforts by tracking trash collection and celebrating milestones.

## Features

- 🗑️ **Bag-based Collection Tracking** - Track cleanup efforts in bags (with decimal support)
- 📊 **Community Statistics** - See collective environmental impact
- 🏆 **Milestone System** - Celebrate achievements with progress tracking
- 📱 **Social Media Integration** - Share progress with #onebagbetter hashtag
- 🌍 **Environmental Impact** - Calculate bottles saved and garbage trucks filled
- 🔒 **Privacy-First** - No cookies, minimal data collection
- ⚖️ **Legal Compliance** - GDPR compliant with Spanish legal notices

## Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Database**: Prisma ORM with PostgreSQL (Vercel Postgres)
- **Deployment**: Vercel
- **Testing**: Jest, React Testing Library
- **Styling**: Adventure theme with lime-green accents

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Philshirt18/onebagbetter.git
   cd onebagbetter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run migrations (for local SQLite)
   npx prisma migrate dev
   
   # Seed the database (optional)
   npx prisma db seed
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## Deployment on Vercel

### Prerequisites
- Vercel account
- GitHub repository connected to Vercel

### Database Setup

1. **Add Vercel Postgres**
   - Go to your Vercel project dashboard
   - Navigate to "Storage" tab
   - Click "Create Database"
   - Select "Postgres"
   - Choose a database name (e.g., "onebagbetter-db")
   - Select region closest to your users

2. **Environment Variables**
   Vercel will automatically add these environment variables:
   - `DATABASE_URL` - PostgreSQL connection string
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`

3. **Deploy with Database Migration**
   - Push your code to GitHub
   - Vercel will automatically deploy
   - Run database migration in Vercel dashboard:
     ```bash
     npx prisma migrate deploy
     ```

### Manual Database Setup (Alternative)

If you prefer to set up the database manually:

1. **Create PostgreSQL database** (using Supabase, PlanetScale, or other provider)

2. **Add environment variable** in Vercel:
   ```
   DATABASE_URL="postgresql://username:password@host:port/database"
   ```

3. **Deploy and migrate**:
   ```bash
   # In Vercel dashboard terminal or locally
   npx prisma migrate deploy
   ```

## Environment Variables

### Required for Production
- `DATABASE_URL` - PostgreSQL connection string

### Optional
- `NODE_ENV` - Set to "production" for production builds

## Database Schema

The app uses two main models:

- **CollectionEntry** - Individual trash collection records
- **GlobalStats** - Aggregated statistics for the community

## API Endpoints

- `GET /api/entries` - Retrieve collection entries with pagination
- `POST /api/entries` - Create new collection entry
- `GET /api/entries/[id]` - Get specific entry
- `GET /api/stats` - Get global statistics
- `GET /api/health` - Health check endpoint

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Privacy & Legal

- **Privacy-First**: No cookies, minimal data collection
- **GDPR Compliant**: Transparent privacy policy
- **Spanish Legal Compliance**: Includes required legal notices for Spanish operations

## License

This project is open source and available under the MIT License.

## Contact

- **Instagram**: [@onebagbetter](https://www.instagram.com/onebagbetter/)
- **Email**: appfactorymalaga@gmail.com
- **Location**: Based in Almayate, Spain

---

**"We don't collect personal data or payments. We only collect rubbish—so together we can win time for what matters."** 🌱