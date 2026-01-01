'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  ArrowRight,
  HardHat,
  Truck,
  Wrench,
  Shield,
  Clock,
  Award
} from 'lucide-react'

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        alert('Maaf, terjadi kesalahan. Silakan coba lagi.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Maaf, terjadi kesalahan. Silakan coba lagi.')
    }
  }

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Konstruksi Bangunan Sipil",
      description: "Pembangunan gedung, jembatan, dan infrastruktur sipil lainnya dengan standar kualitas tertinggi."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Pembangunan Jalan",
      description: "Konstruksi jalan raya, jalan desa, dan infrastruktur jalan dengan material berkualitas."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Pemeliharaan Infrastruktur",
      description: "Perawatan dan perbaikan jalan serta bangunan sipil untuk masa pakai yang lebih panjang."
    }
  ]

  const features = [
    "Berpengalaman 10+ Tahun",
    "Material Berkualitas Tinggi", 
    "Tim Profesional Terlatih",
    "Harga Kompetitif",
    "Garansi Pekerjaan",
    "Sesuai Standar Nasional"
  ]

  const projects = [
    {
      title: "Pembangunan Jalan Utama Kuala Kencana",
      category: "Jalan Raya",
      status: "Completed"
    },
    {
      title: "Jembatan Penghubung Desa",
      category: "Jembatan",
      status: "Completed"
    },
    {
      title: "Perbaikan Jalan Provinsi",
      category: "Pemeliharaan",
      status: "In Progress"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">IDAM KHALID</h1>
                <p className="text-xs text-slate-600">Konstruksi & Infrastruktur</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#projects" className="text-slate-700 hover:text-blue-600 transition-colors">Proyek</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Kontak</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/images/construction-hero.jpg)' }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                🏆 Terpercaya Sejak 2014
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-yellow-300">IDAM KHALID</span> - Ahlinya Konstruksi Bangunan Sipil & Jalan
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Solusi terpercaya untuk pembangunan infrastruktur berkualitas di Papua Tengah. 
                Berpengalaman dalam konstruksi jalan, jembatan, dan bangunan sipil dengan standar nasional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                  Lihat Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100+</div>
                    <div className="text-sm text-blue-100">Proyek Selesai</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">10+</div>
                    <div className="text-sm text-blue-100">Tahun Pengalaman</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">50+</div>
                    <div className="text-sm text-blue-100">Tim Profesional</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">98%</div>
                    <div className="text-sm text-blue-100">Kepuasan Klien</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Mengapa Memilih <span className="text-blue-600">IDAM KHALID</span>?
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                IDAM KHALID adalah perusahaan konstruksi terkemuka di Papua Tengah yang berfokus pada 
                pembangunan infrastruktur sipil dan jalan. Dengan pengalaman lebih dari 10 tahun, 
                kami telah mengerjakan berbagai proyek penting di wilayah tersebut.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Kami berkomitmen untuk memberikan hasil kerja terbaik dengan menggunakan material 
                berkualitas tinggi, tim profesional, dan teknologi konstruksi modern.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Alamat</h3>
                    <p className="text-slate-600">JL. ELANG NO 57, Kuala Kencana, Mimika, Papua Tengah</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Telepon</h3>
                    <p className="text-slate-600">0823-8246-6214</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">info@idamkhalid.co.id</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Layanan <span className="text-blue-600">Unggulan Kami</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Solusi konstruksi komprehensif untuk kebutuhan infrastruktur Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 text-blue-600 hover:text-blue-700 p-0">
                    Pelajari lebih lanjut <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Proyek <span className="text-blue-600">Terbaru</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hasil kerja kami yang telah dipercaya oleh berbagai klien
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg relative overflow-hidden">
                  <img 
                    src={index === 0 ? "/images/road-construction.jpg" : index === 1 ? "/images/bridge-construction.jpg" : "/images/construction-hero.jpg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-slate-900">{project.title}</CardTitle>
                    <Badge variant={project.status === 'completed' ? 'default' : 'secondary'}>
                      {project.status === 'completed' ? 'Selesai' : 'Berjalan'}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-600">{project.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Hubungi <span className="text-yellow-300">IDAM KHALID</span> Sekarang
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Siap untuk memulai proyek konstruksi Anda? Tim kami siap memberikan konsultasi gratis 
                dan solusi terbaik untuk kebutuhan infrastruktur Anda.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-300" />
                  <span>0823-8246-6214</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-300" />
                  <span>info@idamkhalid.co.id</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-300" />
                  <span>JL. ELANG NO 57, Kuala Kencana, Mimika, Papua Tengah</span>
                </div>
              </div>
            </div>
            <Card className="bg-white text-slate-900">
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>Tim kami akan segera menghubungi Anda</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Nama Lengkap"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Nomor Telepon"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <Textarea
                    placeholder="Pesan Anda"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">IDAM KHALID</h3>
                  <p className="text-xs text-slate-400">Konstruksi & Infrastruktur</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Ahlinya konstruksi bangunan sipil dan jalan di Papua Tengah.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Konstruksi Bangunan Sipil</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pembangunan Jalan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pemeliharaan Infrastruktur</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Proyek</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>0823-8246-6214</li>
                <li>info@idamkhalid.co.id</li>
                <li>JL. ELANG NO 57, Kuala Kencana</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 IDAM KHALID. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}