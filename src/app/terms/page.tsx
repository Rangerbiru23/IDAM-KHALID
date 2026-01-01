'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, ArrowLeft, FileText, Gavel, Users, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
            <Gavel className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Syarat & Ketentuan <span className="text-yellow-300">IDAM KHALID</span>
          </h1>
          <p className="text-xl text-blue-100">
            Aturan penggunaan layanan dan website kami
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
                  <FileText className="w-6 h-6 text-blue-600" />
                  <span>Pendahuluan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  Selamat datang di Syarat & Ketentuan <strong>IDAM KHALID</strong>. 
                  Dokumen ini mengatur penggunaan website, layanan, dan semua interaksi 
                  dengan perusahaan kami.
                </p>
                <p>
                  Dengan mengakses atau menggunakan website dan layanan <strong>IDAM KHALID</strong>, 
                  Anda setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak 
                  setuju dengan bagian mana pun dari syarat ini, jangan gunakan website kami.
                </p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  <span>Layanan Kami</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  <strong>IDAM KHALID</strong> menyediakan layanan konstruksi meliputi:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Konstruksi Bangunan Sipil:</strong> Pembangunan gedung, jembatan, dan infrastruktur sipil</li>
                  <li><strong>Pembangunan Jalan:</strong> Konstruksi jalan raya, jalan desa, dan infrastruktur jalan</li>
                  <li><strong>Pemeliharaan Infrastruktur:</strong> Perawatan dan perbaikan bangunan dan jalan</li>
                  <li><strong>Konsultasi Konstruksi:</strong> Konsultasi teknis dan perencanaan proyek</li>
                </ul>
                <p>
                  Semua layanan dilaksanakan sesuai dengan standar nasional Indonesia 
                  dan peraturan perundang-undangan yang berlaku.
                </p>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  <span>Kewajiban Pengguna</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>Sebagai pengguna layanan kami, Anda setuju untuk:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Mematuhi semua perjanjian dan jadwal yang telah disepakati</li>
                  <li>Melakukan pembayaran sesuai dengan kesepakatan</li>
                  <li>Tidak menggunakan layanan untuk kegiatan ilegal</li>
                  <li>Menghormati hak milik dan keamanan lokasi proyek</li>
                  <li>Memberikan akses yang diperlukan untuk pelaksanaan proyek</li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card>
              <CardHeader>
                <CardTitle>Ketentuan Pembayaran</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  Pembayaran untuk layanan <strong>IDAM KHALID</strong> mengikuti ketentuan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Uang Muka (DP):</strong> Minimal 30% dari total nilai kontrak</li>
                  <li><strong>Pembayaran Progresif:</strong> Sesuai dengan tahapan penyelesaian proyek</li>
                  <li><strong>Pelunasan:</strong> Sebelum serah terima proyek</li>
                  <li><strong>Metode Pembayaran:</strong> Transfer bank atau tunai dengan bukti resmi</li>
                  <li><strong>Keterlambatan:</strong> Dikenakan denda 0.5% per hari dari total nilai</li>
                </ul>
                <p>
                  Semua pembayaran akan diberikan bukti transaksi yang sah dan dapat 
                  dipertanggungjawabkan untuk keperluan akuntansi.
                </p>
              </CardContent>
            </Card>

            {/* Project Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Jadwal dan Waktu Pengerjaan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  Jadwal proyek ditentukan berdasarkan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Kompleksitas dan skala proyek</li>
                  <li>Ketersediaan material dan peralatan</li>
                  <li>Kondisi cuaca dan lokasi</li>
                  <li>Perizinan dan regulasi setempat</li>
                </ul>
                <p>
                  <strong>IDAM KHALID</strong> berkomitmen untuk menyelesaikan proyek 
                  tepat waktu sesuai dengan kontrak. Keterlambatan karena force majeure 
                  akan diselesaikan melalui musyawarah.
                </p>
              </CardContent>
            </Card>

            {/* Warranty */}
            <Card>
              <CardHeader>
                <CardTitle>Garansi dan Jaminan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  <strong>IDAM KHALID</strong> memberikan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Garansi Konstruksi:</strong> 6-12 bulan tergantung jenis pekerjaan</li>
                  <li><strong>Garansi Material:</strong> Sesuai dengan garansi pabrikan</li>
                  <li><strong>Perbaikan Gratis:</strong> Untuk kerusakan bukan karena kesalahan penggunaan</li>
                  <li><strong>Maintenance:</strong> Layanan perawatan berkelanjutan dengan biaya terjangkau</li>
                </ul>
                <p>
                  Klaim garansi harus disertai dengan bukti transaksi dan dokumentasi 
                  kerusakan yang valid.
                </p>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle>Hak Kekayaan Intelektual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  Semua konten, desain, dan materi di website <strong>IDAM KHALID</strong> 
                  dilindungi oleh hak cipta dan merupakan milik perusahaan.
                </p>
                <p>
                  Anda tidak diperbolehkan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Menggunakan ulang konten tanpa izin tertulis</li>
                  <li>Menyalin desain atau rencana teknis</li>
                  <li>Mendistribusikan materi milik kami</li>
                  <li>Menggunakan nama dan logo <strong>IDAM KHALID</strong> tanpa izin</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="w-6 h-6 text-blue-600" />
                  <span>Pembatasan Tanggung Jawab</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  <strong>IDAM KHALID</strong> tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Kerugian tidak langsung atau konsekuensial</li>
                  <li>Keterlambatan karena force majeure (bencana alam, kerusuhan, dll)</li>
                  <li>Kerusakan akibat kesalahan penggunaan atau perawatan</li>
                  <li>Keterlambatan perizinan dari pihak berwenang</li>
                  <li>Kenaikan harga material di luar kendali kami</li>
                </ul>
                <p>
                  Tanggung jawab kami maksimal sebesar nilai kontrak proyek yang bersangkutan.
                </p>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card>
              <CardHeader>
                <CardTitle>Penyelesaian Sengketa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  Sengketa yang timbul dari penggunaan layanan kami akan diselesaikan melalui:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li><strong>Musyawarah:</strong> Perundingan damai antara kedua belah pihak</li>
                  <li><strong>Mediasi:</strong> Melalui pihak ketiga yang netral</li>
                  <li><strong>Arbitrase:</strong> Melalui lembaga arbitrase terpercaya</li>
                  <li><strong>Pengadilan:</strong> Pengadilan Negeri di Kabupaten Mimika</li>
                </ol>
                <p>
                  Hukum yang berlaku adalah hukum Republik Indonesia.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card>
              <CardHeader>
                <CardTitle>Perubahan Syarat & Ketentuan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  <strong>IDAM KHALID</strong> berhak mengubah syarat dan ketentuan ini 
                  kapan saja. Perubahan akan diberitahukan melalui website atau 
                  komunikasi langsung.
                </p>
                <p>
                  Penggunaan terus layanan kami setelah perubahan berarti Anda 
                  menerima dan menyetujui syarat yang diperbarui.
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
                  Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, 
                  silakan hubungi:
                </p>
                <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                  <p><strong>Perusahaan:</strong> IDAM KHALID</p>
                  <p><strong>Alamat:</strong> JL. ELANG NO 57, Kuala Kencana, Mimika, Papua Tengah</p>
                  <p><strong>Email:</strong> legal@idamkhalid.co.id</p>
                  <p><strong>Telepon:</strong> 0823-8246-6214</p>
                </div>
                <p className="text-sm text-slate-600">
                  Syarat & Ketentuan ini berlaku efektif sejak tanggal 1 Januari 2024.
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