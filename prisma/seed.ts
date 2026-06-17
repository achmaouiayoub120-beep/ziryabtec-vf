const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // Create Instructor
  const instructor = await prisma.user.create({
    data: {
      name: "Pr. Ahmed Benali",
      email: "ahmed.benali@ziryabtec.com",
      password: "hashed_password",
      role: "instructor"
    }
  });

  const instructor2 = await prisma.user.create({
    data: {
      name: "Sara El Mansouri",
      email: "sara@ziryabtec.com",
      password: "hashed_password",
      role: "instructor"
    }
  });

  // Create Courses
  const coursesToCreate = [
      {
        title: "Python Avancé & Data Science",
        category: "Développement",
        instructorId: instructor.id,
        rating: 4.8,
        students: 1240,
        duration: "18h 30min",
        price: 299,
        badge: "bestseller",
        color: "from-blue-600/20 to-cyan-600/20",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "React & Next.js — De Zéro au Déploiement",
        category: "Frontend",
        instructorId: instructor2.id,
        rating: 4.9,
        students: 890,
        duration: "24h 15min",
        price: 399,
        badge: "new",
        color: "from-cyan-600/20 to-emerald-600/20",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Intelligence Artificielle Pratique",
        category: "IA & Machine Learning",
        instructorId: instructor.id,
        rating: 4.7,
        students: 2100,
        duration: "32h",
        price: 499,
        badge: "ai",
        color: "from-purple-600/20 to-blue-600/20",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "DevOps & Cloud — AWS + Docker",
        category: "Infrastructure",
        instructorId: instructor2.id,
        rating: 4.6,
        students: 650,
        duration: "20h",
        price: 349,
        color: "from-emerald-600/20 to-yellow-600/20",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80",
      }
  ];

  for (const c of coursesToCreate) {
    await prisma.course.create({ data: c });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
