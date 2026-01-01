import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    // Get services and projects data
    const [services, projects] = await Promise.all([
      db.service.findMany({
        orderBy: {
          featured: 'desc'
        }
      }),
      db.project.findMany({
        orderBy: {
          createdAt: 'desc'
        },
        take: 6 // Limit to 6 recent projects for homepage
      })
    ])
    
    return NextResponse.json({
      services,
      projects,
      company: {
        name: "IDAM KHALID",
        tagline: "Konstruksi & Infrastruktur",
        address: "JL. ELANG NO 57, Kuala Kencana, Mimika, Papua Tengah",
        phone: "0823-8246-6214",
        email: "info@idamkhalid.co.id"
      }
    })
  } catch (error) {
    console.error('Error fetching homepage data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch homepage data' },
      { status: 500 }
    )
  }
}