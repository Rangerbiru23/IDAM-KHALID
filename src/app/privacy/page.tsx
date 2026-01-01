'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, ArrowLeft, Shield, Eye, Database, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
            <Link href="/">
              <Button variant="outline" className="border-slate-300">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Kebijakan Privasi <span className="text-yellow-300">IDAM KHALID</span>
          </h1>
          <p className="text-xl text-blue-100">
            Perlindungan data Anda adalah prioritas utama kami
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-6 h-6 text-blue-600" />
                  <span>Pendahuluan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  Selamat datang di Kebijakan Privasi <strong>IDAM KHALID</strong>. 
                  Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                  melindungi, dan membagikan informasi pribadi Anda saat menggunakan 
                  website dan layanan kami.
                </p>
                <p>
                  <strong>IDAM KHALID</strong> berkomitmen untuk melindungi privasi 
                  dan keamanan data pribadi Anda sesuai dengan peraturan perundang-undangan 
                  yang berlaku di Indonesia.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="w-6 h-6 text-blue-600" />
                  <span>Informasi yang Kami Kumpulkan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat lengkap</li>
                    <li>Informasi perusahaan (jika berlaku)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Informasi Teknis</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Alamat IP</li>
                    <li>Jenis browser</li>
                    <li>Sistem operasi</li>
                    <li>Data penggunaan website</li>
                    <li>Cookie dan teknologi pelacakan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserCheck className="w-6 h-6 text-blue-600" />
                  <span>Penggunaan Informasi</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Memberikan Layanan:</strong> Merespons permintaan Anda tentang jasa konstruksi</li>
                  <li><strong>Komunikasi:</strong> Menghubungi Anda mengenai proyek dan penawaran</li>
                  <li><strong>Penyempurnaan Layanan:</strong> Menganalisis data untuk meningkatkan kualitas layanan</li>
                  <li><strong>Keamanan:</strong> Melindungi website dan pengguna dari penyalahgunaan</li>
                  <li><strong>Kepatuhan Hukum:</strong> Memenuhi kewajiban hukum dan peraturan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card>
              <CardHeader>
                <CardTitle>Keamanan Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  <strong>IDAM KHALID</strong> mengimplementasikan berbagai langkah keamanan untuk 
                  melindungi informasi pribadi Anda:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Enkripsi data saat transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>System keamanan yang terupdate secara berkala</li>
                  <li>Pelatihan staf tentang perlindungan data</li>
                  <li>Backup data yang aman</li>
                </ul>
              </CardContent>
            </Card>

            {/* Third Party Sharing */}
            <Card>
              <CardHeader>
                <CardTitle>Berbagi Informasi dengan Pihak Ketiga</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda 
                  kepada pihak ketiga untuk keperluan pemasaran, kecuali:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Dengan persetujuan Anda yang eksplisit</li>
                  <li>Kepada mitra bisnis yang membantu menyediakan layanan</li>
                  <li>Jika diwajibkan oleh hukum atau peraturan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card>
              <CardHeader>
                <CardTitle>Hak Anda sebagai Pengguna</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>Sebagai pengguna, Anda memiliki hak untuk:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Mengakses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                  <li><strong>Memperbaiki:</strong> Memperbarui informasi yang tidak akurat</li>
                  <li><strong>Menghapus:</strong> Meminta penghapusan data pribadi Anda</li>
                  <li><strong>Membatasi:</strong> Membatasi pemrosesan data Anda</li>
                  <li><strong>Menolak:</strong> Menolak pemrosesan data untuk tujuan tertentu</li>
                </ul>
                <p>
                  Untuk menggunakan hak ini, silakan hubungi kami melalui email 
                  <strong> privacy@idamkhalid.co.id</strong>
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>Kebijakan Cookie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Cookie Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                  <li><strong>Cookie Analitik:</strong> Membantu kami memahami cara pengguna menggunakan website</li>
                  <li><strong>Cookie Fungsional:</strong> Mengingat preferensi Anda</li>
                </ul>
                <p>
                  Anda dapat mengelola preferensi cookie melalui pengaturan browser Anda.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Perubahan Kebijakan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  <strong>IDAM KHALID</strong> dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                  Perubahan akan diberitahukan melalui website atau email. Penggunaan terus 
                  website kami setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau 
                  perlindungan data pribadi Anda, silakan hubungi:
                </p>
                <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                  <p><strong>Perusahaan:</strong> IDAM KHALID</p>
                  <p><strong>Alamat:</strong> JL. ELANG NO 57, Kuala Kencana, Mimika, Papua Tengah</p>
                  <p><strong>Email:</strong> privacy@idamkhalid.co.id</p>
                  <p><strong>Telepon:</strong> 0823-8246-6214</p>
                </div>
                <p className="text-sm text-slate-600">
                  Kebijakan Privasi ini berlaku efektif sejak tanggal 1 Januari 2024.
                </p>
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