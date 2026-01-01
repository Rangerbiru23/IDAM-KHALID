import { db } from '@/lib/db'

async function main() {
  // Sample Services
  const services = [
    {
      title: "Konstruksi Bangunan Sipil",
      description: "Pembangunan gedung, jembatan, dan infrastruktur sipil lainnya dengan standar kualitas tertinggi dan material terbaik.",
      icon: "building",
      price: "Mulai dari 500 Juta",
      featured: true
    },
    {
      title: "Pembangunan Jalan",
      description: "Konstruksi jalan raya, jalan desa, dan infrastruktur jalan dengan material berkualitas dan teknik termodern.",
      icon: "truck",
      price: "Mulai dari 200 Juta/Km",
      featured: true
    },
    {
      title: "Pemeliharaan Infrastruktur",
      description: "Perawatan dan perbaikan jalan serta bangunan sipil untuk masa pakai yang lebih panjang dan keamanan terjamin.",
      icon: "wrench",
      price: "Disesuaikan",
      featured: false
    },
    {
      title: "Konsultasi Teknis",
      description: "Konsultasi perencanaan dan desain infrastruktur dengan tim ahli berpengalaman.",
      icon: "clipboard",
      price: "Mulai dari 50 Juta",
      featured: false
    }
  ]

  for (const service of services) {
    await db.service.upsert({
      where: { title: service.title },
      update: service,
      create: service
    })
  }

  // Sample Projects
  const projects = [
    {
      title: "Pembangunan Jalan Utama Kuala Kencana",
      description: "Proyek pembangunan jalan utama sepanjang 5 km dengan spesifikasi jalan provinsi, dilengkapi drainase dan marka jalan.",
      imageUrl: "/api/placeholder/400/300",
      category: "Jalan Raya",
      status: "completed"
    },
    {
      title: "Jembatan Penghubung Desa",
      description: "Konstruksi jembatan beton bentang panjang 50 meter untuk menghubungkan dua desa terpencil di wilayah Mimika.",
      imageUrl: "/api/placeholder/400/300",
      category: "Jembatan",
      status: "completed"
    },
    {
      title: "Perbaikan Jalan Provinsi",
      description: "Rekonstruksi dan perbaikan jalan provinsi yang rusak akibat banjir dengan sistem drainase yang diperbaiki.",
      imageUrl: "/api/placeholder/400/300",
      category: "Pemeliharaan",
      status: "in_progress"
    },
    {
      title: "Gedung Kantor Pemerintah",
      description: "Pembangunan gedung kantor pemerintah 3 lantai dengan fasilitas lengkap dan desain modern.",
      imageUrl: "/api/placeholder/400/300",
      category: "Bangunan",
      status: "completed"
    },
    {
      title: "Jalan Akses Tambang",
      description: "Pembangunan jalan khusus untuk akses tambang dengan kapasitas beban berat dan sistem keamanan tinggi.",
      imageUrl: "/api/placeholder/400/300",
      category: "Jalan Khusus",
      status: "in_progress"
    },
    {
      title: "Normalisasi Sungai",
      description: "Proyek normalisasi dan pengerukan sungai untuk mencegah banjir dan meningkatkan kapasitas aliran air.",
      imageUrl: "/api/placeholder/400/300",
      category: "Sumber Daya Air",
      status: "completed"
    }
  ]

  for (const project of projects) {
    await db.project.upsert({
      where: { title: project.title },
      update: project,
      create: project
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })