const { PrismaClient } = require('@prisma/client');

async function resetDatabase() {
  const prisma = new PrismaClient();
  
  try {
    console.log('🧹 Clearing all data...');
    
    // Delete all collection entries
    const deletedEntries = await prisma.collectionEntry.deleteMany();
    console.log(`✅ Deleted ${deletedEntries.count} collection entries`);
    
    // Reset global stats to 0
    await prisma.globalStats.deleteMany();
    await prisma.globalStats.create({
      data: {
        totalAmountKg: 0,
        totalEntries: 0,
      }
    });
    console.log('✅ Reset global stats to 0');
    
    console.log('🎉 Database reset complete! Everything is now at 0.');
    
  } catch (error) {
    console.error('❌ Error resetting database:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

resetDatabase();