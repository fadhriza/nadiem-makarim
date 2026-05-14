export type TimelineEntry = {
  id: string;
  monthLabel: string;
  monthShort: string;
  year: string;
  index: string;
  headline: string;
  lead: string;
  highlights: string[];
  image: {
    src: string;
    alt: string;
    credit: string;
  };
};

export const timeline: TimelineEntry[] = [
  {
    id: "okt-2019",
    monthLabel: "Oktober",
    monthShort: "Okt",
    year: "2019",
    index: "01",
    headline: "Transisi dari Gojek ke Istana",
    lead:
      "Nadiem mengakhiri perannya sebagai CEO Gojek dan dilantik menjadi Menteri Pendidikan dan Kebudayaan pada 23 Oktober 2019 di Istana Negara.",
    highlights: [
      "Masih menjabat CEO Gojek hingga sekitar 21 Oktober 2019.",
      "Dipanggil Presiden Joko Widodo ke Istana sebagai calon menteri kabinet baru.",
      "Mengundurkan diri dari Gojek setelah masuk Kabinet Indonesia Maju.",
      "Menyampaikan fokus pada kualitas guru serta pendidikan berbasis kompetensi dan karakter.",
    ],
    image: {
      src: "/images/oct-2019.jpg",
      alt: "Nadiem Makarim bersama Mira Lesmana di Festival Film Indonesia 2019.",
      credit: "Wikimedia Commons — Festival Film Indonesia 2019",
    },
  },
  {
    id: "nov-2019",
    monthLabel: "November",
    monthShort: "Nov",
    year: "2019",
    index: "02",
    headline: "Reformasi Kemendikbud dimulai",
    lead:
      "Bulan pertama aktif penuh: konsolidasi internal Kemendikbud dan menyiapkan kerangka kebijakan yang akan dikenal sebagai Merdeka Belajar.",
    highlights: [
      "Memulai konsolidasi dengan pejabat Kemendikbud menggantikan Muhadjir Effendy.",
      "Masuk daftar TIME 100 Next sebagai tokoh muda berpengaruh.",
      "Menyiapkan penyederhanaan RPP dan evaluasi Ujian Nasional.",
      "Mendorong digitalisasi pendidikan nasional dengan pendekatan gaya startup.",
    ],
    image: {
      src: "/images/nov-2019.jpg",
      alt: "Foto resmi Menteri Pendidikan dan Kebudayaan Nadiem Makarim.",
      credit: "Wikimedia Commons — Kemendikbud RI",
    },
  },
  {
    id: "des-2019",
    monthLabel: "Desember",
    monthShort: "Des",
    year: "2019",
    index: "03",
    headline: "Peluncuran Merdeka Belajar Episode 1",
    lead:
      "Pada 11 Desember 2019, Nadiem meluncurkan empat kebijakan besar yang menjadi fondasi era Merdeka Belajar.",
    highlights: [
      "USBN diserahkan lebih fleksibel ke sekolah.",
      "Ujian Nasional akan dihapus secara bertahap.",
      "Rencana Pelaksanaan Pembelajaran (RPP) disederhanakan.",
      "Sistem zonasi PPDB dibuat lebih fleksibel.",
    ],
    image: {
      src: "/images/dec-2019.jpg",
      alt: "Nadiem Makarim sebagai Menteri Pendidikan dan Kebudayaan.",
      credit: "Wikimedia Commons — Kemendikbud RI",
    },
  },
  {
    id: "jan-2020",
    monthLabel: "Januari",
    monthShort: "Jan",
    year: "2020",
    index: "04",
    headline: "Sosialisasi Merdeka Belajar",
    lead:
      "Sosialisasi gencar ke daerah dan pengenalan konsep Kampus Merdeka untuk perguruan tinggi.",
    highlights: [
      "Menjelaskan penghapusan UN dan pengganti AKM serta survei karakter.",
      "Mendorong RPP satu halaman untuk meringankan beban administrasi guru.",
      "Mulai membahas transformasi pendidikan tinggi: Kampus Merdeka.",
      "Menekankan literasi digital, kreativitas, dan kolaborasi sebagai inti pendidikan.",
    ],
    image: {
      src: "/images/jan-2020.jpg",
      alt: "Nadiem Makarim berbicara dalam forum Accelerating Inequality Reduction.",
      credit: "Wikimedia Commons — Accelerating Inequality Reduction",
    },
  },
  {
    id: "feb-2020",
    monthLabel: "Februari",
    monthShort: "Feb",
    year: "2020",
    index: "05",
    headline: "Empat Kebijakan Kampus Merdeka",
    lead:
      "Empat kebijakan Kampus Merdeka diluncurkan: pembukaan prodi baru, akreditasi PT, PTN-BH, dan hak belajar lintas prodi.",
    highlights: [
      "Pembukaan program studi baru di perguruan tinggi dipermudah.",
      "Sistem akreditasi perguruan tinggi dibuat lebih fleksibel.",
      "Pemberlakuan PTN Badan Hukum (PTN-BH) dipermudah.",
      "Mahasiswa boleh mengambil mata kuliah lintas prodi hingga 3 semester.",
    ],
    image: {
      src: "/images/feb-2020.jpg",
      alt: "Anggota Kabinet Indonesia Maju, termasuk Nadiem Makarim, dalam sesi resmi.",
      credit: "Wikimedia Commons — Kabinet Indonesia Maju",
    },
  },
  {
    id: "mar-2020",
    monthLabel: "Maret",
    monthShort: "Mar",
    year: "2020",
    index: "06",
    headline: "Pandemi & belajar dari rumah",
    lead:
      "Setelah kasus COVID-19 pertama diumumkan, Kemendikbud bergerak cepat menutup sekolah dan memindahkan pembelajaran ke ranah daring.",
    highlights: [
      "Kebijakan belajar dari rumah untuk seluruh jenjang pendidikan.",
      "Pembelajaran jarak jauh (PJJ) didorong di sekolah dan kampus.",
      "Surat edaran pencegahan COVID-19 di lingkungan pendidikan dikeluarkan.",
      "Ujian Nasional 2020 resmi dibatalkan pada 24 Maret 2020.",
    ],
    image: {
      src: "/images/mar-2020.jpg",
      alt: "Anggota Kabinet Indonesia Maju dalam rapat tertutup.",
      credit: "Wikimedia Commons — Kabinet Indonesia Maju",
    },
  },
  {
    id: "apr-2020",
    monthLabel: "April",
    monthShort: "Apr",
    year: "2020",
    index: "07",
    headline: "Skala penuh pembelajaran jarak jauh",
    lead:
      "Pedoman belajar dari rumah diperluas, fokus bergeser ke kesehatan mental dan pengalaman belajar yang bermakna.",
    highlights: [
      "Pedoman PJJ menekankan kesejahteraan siswa, bukan target kurikulum penuh.",
      "Kerja sama dengan TVRI lewat program Belajar dari Rumah.",
      "Fleksibilitas dana BOS untuk kebutuhan pembelajaran daring.",
      "Mendorong penggunaan platform pendidikan digital seperti Rumah Belajar.",
    ],
    image: {
      src: "/images/apr-2020.jpg",
      alt: "Rapat Kabinet Indonesia Maju di tengah masa pandemi.",
      credit: "Wikimedia Commons — Kabinet Indonesia Maju",
    },
  },
  {
    id: "mei-2020",
    monthLabel: "Mei",
    monthShort: "Mei",
    year: "2020",
    index: "08",
    headline: "Skenario tahun ajaran baru",
    lead:
      "Persiapan tahun ajaran 2020/2021 dengan prioritas keselamatan; sekolah masih ditutup, PJJ dilanjutkan.",
    highlights: [
      "Keselamatan siswa dan guru menjadi pijakan utama kebijakan.",
      "Program Belajar dari Rumah di TVRI diperluas.",
      "Dana BOS bisa untuk pembelian kuota, kebersihan, dan operasional PJJ.",
      "Diskusi ketimpangan akses digital antar daerah semakin intensif.",
    ],
    image: {
      src: "/images/may-2020.jpg",
      alt: "Foto resmi Nadiem Anwar Makarim dalam Kabinet Indonesia Maju.",
      credit: "Wikimedia Commons — Kabinet Indonesia Maju",
    },
  },
  {
    id: "jun-2020",
    monthLabel: "Juni",
    monthShort: "Jun",
    year: "2020",
    index: "09",
    headline: "Panduan pembukaan sekolah berbasis zona",
    lead:
      "Bersama kementerian lain, Kemendikbud merilis panduan pembukaan sekolah berdasarkan zona COVID-19 dengan persetujuan orang tua sebagai syarat mutlak.",
    highlights: [
      "Sekolah di zona merah belum boleh tatap muka.",
      "Keputusan tatap muka mempertimbangkan kondisi kesehatan daerah & izin orang tua.",
      "Kurikulum darurat mulai dibahas serius untuk meredam beban siswa.",
      "Diskusi awal isu learning loss dan kesenjangan pendidikan akibat pandemi.",
    ],
    image: {
      src: "/images/jun-2020.jpg",
      alt: "Nadiem Makarim dalam agenda kegiatan publik di tahun 2019–2020.",
      credit: "Wikimedia Commons — Festival Film Indonesia 2019",
    },
  },
  {
    id: "jul-2020",
    monthLabel: "Juli",
    monthShort: "Jul",
    year: "2020",
    index: "10",
    headline: "Tahun ajaran baru, dua kecepatan",
    lead:
      "Tahun ajaran 2020/2021 dimulai dengan kombinasi PJJ dan tatap muka terbatas di zona hijau yang siap.",
    highlights: [
      "Sebagian besar daerah tetap menjalankan pembelajaran jarak jauh.",
      "Zona hijau tertentu boleh mengadakan tatap muka terbatas.",
      "Penegasan protokol kesehatan ketat untuk sekolah yang dibuka.",
      "Pembahasan serius bantuan kuota internet untuk siswa dan guru.",
    ],
    image: {
      src: "/images/jul-2020.jpg",
      alt: "Nadiem Makarim sebagai Menteri Pendidikan dan Kebudayaan.",
      credit: "Wikimedia Commons — Kemendikbud RI",
    },
  },
  {
    id: "agu-2020",
    monthLabel: "Agustus",
    monthShort: "Agu",
    year: "2020",
    index: "11",
    headline: "Finalisasi bantuan kuota nasional",
    lead:
      "Skema bantuan kuota internet untuk siswa, guru, mahasiswa, dan dosen difinalkan bersama operator telekomunikasi.",
    highlights: [
      "Evaluasi PJJ: kuota, jaringan, dan beban tugas menjadi sorotan utama.",
      "Kerja sama nasional dengan operator seluler dimatangkan.",
      "Kurikulum darurat ditegaskan sebagai opsi resmi sekolah.",
      "Transformasi digital pendidikan dipercepat oleh tekanan pandemi.",
    ],
    image: {
      src: "/images/aug-2020.jpg",
      alt: "Foto resmi Menteri Pendidikan dan Kebudayaan Nadiem Makarim.",
      credit: "Wikimedia Commons — Kemendikbud RI",
    },
  },
  {
    id: "sep-2020",
    monthLabel: "September",
    monthShort: "Sep",
    year: "2020",
    index: "12",
    headline: "Kuota belajar masuk ke jutaan siswa",
    lead:
      "Bantuan kuota internet pendidikan resmi dijalankan dan dirasakan langsung oleh jutaan pelajar serta tenaga pendidik di seluruh Indonesia.",
    highlights: [
      "Kuota belajar didistribusikan ke siswa, guru, mahasiswa, dan dosen.",
      "Kerja sama dengan operator seluler diaktifkan secara nasional.",
      "Evaluasi PJJ tetap berjalan: jaringan, perangkat, dan kualitas materi.",
      "Tatap muka terbatas dibuka di sebagian zona aman dengan pengawasan ketat.",
    ],
    image: {
      src: "/images/sep-2020.jpg",
      alt: "Anggota Kabinet Indonesia Maju dalam sesi resmi pemerintahan.",
      credit: "Wikimedia Commons — Kabinet Indonesia Maju",
    },
  },
  {
    id: "okt-2020",
    monthLabel: "Oktober",
    monthShort: "Okt",
    year: "2020",
    index: "13",
    headline: "Adaptasi sistem pendidikan jangka panjang",
    lead:
      "Setahun di kursi menteri, narasi bergeser dari respons darurat ke transformasi pendidikan yang berkelanjutan.",
    highlights: [
      "Distribusi bantuan kuota pendidikan dilanjutkan.",
      "Sekolah tatap muka harus mengikuti protokol kesehatan ketat.",
      "Learning loss dan kesenjangan akses jadi tantangan jangka panjang.",
      "Pembahasan pembelajaran hybrid di perguruan tinggi mulai matang.",
    ],
    image: {
      src: "/images/oct-2020.jpg",
      alt: "Anggota Kabinet Indonesia Maju dalam pertemuan resmi.",
      credit: "Wikimedia Commons — Kabinet Indonesia Maju",
    },
  },
  {
    id: "nov-2020",
    monthLabel: "November",
    monthShort: "Nov",
    year: "2020",
    index: "14",
    headline: "Pemda dipercaya buka tatap muka",
    lead:
      "Pemerintah daerah diberi kewenangan lebih besar untuk membuka pembelajaran tatap muka mulai Januari 2021 dengan syarat ketat.",
    highlights: [
      "Pemda berwenang menentukan pembukaan sekolah dengan protokol kesehatan.",
      "Persetujuan orang tua tetap menjadi syarat mutlak tatap muka.",
      "Pengembangan Kampus Merdeka dilanjutkan paralel.",
      "Kesehatan mental siswa dan guru ditekankan setelah PJJ berkepanjangan.",
    ],
    image: {
      src: "/images/nov-2020.jpg",
      alt: "Anggota Kabinet Indonesia Maju dalam rapat resmi.",
      credit: "Wikimedia Commons — Kabinet Indonesia Maju",
    },
  },
  {
    id: "des-2020",
    monthLabel: "Desember",
    monthShort: "Des",
    year: "2020",
    index: "15",
    headline: "Bersiap masuk era hybrid 2021",
    lead:
      "Menutup 2020, fokus Kemendikbud berpindah pada persiapan tatap muka terbatas dan menjaga momentum reformasi pendidikan.",
    highlights: [
      "Pembelajaran tatap muka terbatas mulai Januari 2021 dipersiapkan.",
      "Keputusan tatap muka bergantung pada kondisi kesehatan dan kesiapan sekolah.",
      "Refleksi setahun Merdeka Belajar di tengah pandemi.",
      "Arah kebijakan 2021: pemulihan, digitalisasi, dan transformasi berkelanjutan.",
    ],
    image: {
      src: "/images/dec-2020.jpg",
      alt: "Foto resmi Nadiem Anwar Makarim dalam Kabinet Indonesia Maju.",
      credit: "Wikimedia Commons — Kabinet Indonesia Maju",
    },
  },
];
