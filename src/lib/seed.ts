/**
 * Database seeding script
 */
import { seedDatabase } from './database';

async function main() {
  try {
    console.log('Starting database seed...');
    await seedDatabase();
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}