"use client";

import  { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { User, Calendar, X } from "lucide-react";

export function Portofolio() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
    <div
    className="
        relative
        bg-[url('/porto.png')]
        md:bg-[url('/porto.png')]
        bg-no-repeat
        bg-center
        bg-cover
        
    "
    >

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 md:top-6 md:right-[calc(50%-380px)] items-center justify-center bg-white shadow-md hover:bg-neutral-100 transition-colors rounded-full h-9 w-9 z-20"
              onClick={() => setActive(null)}
            >
              <X size={18} className="text-neutral-700" />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[760px] h-full md:h-fit md:max-h-[85%] flex flex-col bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 p-6 md:p-8 border-b border-neutral-100 bg-gradient-to-br from-emerald-50 to-white">
                  <div>
                        <motion.h3
                            layoutId={`title-${active.title}-${id}`}
                            className="font-semibold text-neutral-900 text-xl md:text-2xl"
                        >
                            {active.title}
                        </motion.h3>

                        <motion.p
                            layoutId={`description-${active.description}-${id}`}
                            className="text-neutral-500 text-sm mt-1.5"
                        >
                            {active.description}
                        </motion.p>

                        {/* ROLE & DATE */}
                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-neutral-600">
                            <div className="flex items-center gap-1.5">
                                <User size={16} className="text-emerald-600" />
                                <span>{active.role}</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <Calendar size={16} className="text-emerald-600" />
                                <span>{active.date}</span>
                            </div>
                        </div>
                    </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="shrink-0 px-4 py-2.5 text-sm rounded-full font-semibold bg-emerald-500 hover:bg-emerald-600 transition-colors text-white text-center"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="relative px-6 md:px-8 py-6">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-sm md:text-base leading-relaxed"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-5">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="flex flex-col bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <img
                width={100}
                height={100}
                src={card.src}
                alt={card.title}
                className="h-52 w-full object-cover object-top"
              />
            </motion.div>
            <div className="flex flex-col p-4">
                <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-semibold text-neutral-900 text-base"
                >
                    {card.title}
                </motion.h3>
                <p className="text-sm text-neutral-500 mt-1">{card.description}</p>

                <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-3">
                    <User size={14} className="text-emerald-600" />
                    <span>{card.role}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-1.5">
                    <Calendar size={14} className="text-emerald-600" />
                    <span>{card.date}</span>
                </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
    </>
  );
}

const cards = [
  {
    description: "Analisis, Perancangan GIS & BIM",
    title: "Asset Register System",
    role: "System Analyst",
    date: "2025",
    src: "/bim.png",
    documents: [
      {
        name: "Product Requirement Document (PRD)",
        description: "Berisi kebutuhan produk dari sisi bisnis dan pengguna",
        pdfUrl: "/documents/prd-aset.pdf"
      },
      {
        name: "Functional Specification Document (FSD)",
        description: "Mendefinisikan fungsi sistem secara rinci berdasarkan kebutuhan yang telah disepakati",
        pdfUrl: "/documents/fsd-aset.pdf"
      },
      {
        name: "Change Request (CR)",
        description: "Mendokumentasikan perubahan kebutuhan atau penyesuaian sistem selama proses pengembangan",
        pdfUrl: "/documents/cr-aset.pdf"
      },
      {
        name: "User Acceptance Test (UAT)",
        description: "Menjadi dasar pengujian penerimaan sistem oleh pengguna untuk memastikan sistem telah sesuai dengan kebutuhan bisnis",
        pdfUrl: "/documents/uat-aset.pdf"
      }
    ],
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-justify">
            Asset Register System adalah aplikasi web enterprise yang dikembangkan untuk mensentralisasi informasi aset ke dalam satu platform digital. Dalam proyek ini saya berperan sebagai System Analyst yang bertanggung jawab menganalisis kebutuhan bisnis serta menerjemahkannya ke dalam solusi sistem yang terstruktur dan terdokumentasi dengan baik. Sistem ini memungkinkan pengguna untuk mengelola dan memvisualisasikan aset melalui data tabular, peta GIS 2D interaktif, dan model 3D BIM — pengguna dapat memilih aset langsung dari model 3D untuk mengakses spesifikasi, lokasi, dan dokumentasi terkait.
          </p>
          <p className="text-justify">
            Lebih dari sekadar aplikasi berdiri sendiri, Asset Register System menjadi fondasi digital untuk strategi manajemen aset jangka panjang organisasi, membuka jalan menuju ekosistem Enterprise Asset Management (EAM) yang terintegrasi penuh.
          </p>

          <p className="font-semibold text-neutral-900">Problem</p>
          <p className="text-justify">
            Pengelolaan informasi aset yang tersebar di berbagai lokasi dan sumber data yang terputus membuat organisasi kesulitan menjaga satu sumber data yang akurat (single source of truth) untuk aset perusahaan. Tanpa data yang tersentralisasi, organisasi menghadapi tantangan dalam visibilitas aset, pelacakan spasial, dan persiapan menuju inisiatif manajemen aset yang lebih matang.
          </p>

          <p className="font-semibold text-neutral-900">Solusi</p>
          <p className="text-justify">
            Untuk menjawab tantangan tersebut, Asset Register System mengintegrasikan data aset yang terstruktur dengan peta GIS 2D interaktif dan visualisasi 3D BIM dalam satu platform terpadu. Hal ini memungkinkan pengguna untuk dengan cepat menemukan lokasi aset, mengakses informasi detail, serta membangun fondasi data yang andal untuk manajemen siklus hidup aset ke depannya.
          </p>

          <p className="font-semibold text-neutral-900">Tantangan</p>
          <p className="text-justify">
            Salah satu tantangan terbesar adalah beradaptasi dengan teknologi yang sepenuhnya baru bagi saya, terutama alur kerja GIS dan BIM menggunakan Autodesk Revit. Saya meluangkan waktu untuk memahami bagaimana data geospasial, model 3D, dan informasi aset diintegrasikan ke dalam satu sistem, sehingga saya dapat menerjemahkan kebutuhan bisnis menjadi spesifikasi fungsional secara efektif.
          </p>

          <p className="font-semibold text-neutral-900">Di Luar Peran Saya</p>
          <p className="text-justify" >
            Meskipun tanggung jawab utama saya adalah sebagai System Analyst, saya juga turut berkontribusi dalam proses pemodelan 3D BIM. Keluar dari peran inti ini memberi saya pemahaman yang lebih dalam tentang bagaimana data engineering diubah menjadi aset digital interaktif, mencerminkan kemauan saya untuk terus belajar teknologi baru dan berkolaborasi lintas disiplin ilmu. Saya membuat parametric Revit families yang secara otomatis menyesuaikan dimensi host-nya, sehingga sangat reusable, konsisten, dan efisien digunakan di berbagai model aset.
          </p>
        </div>
      );
    },
  },
  {
    description: "Sistem Manajemen Dokumen Perusahaan",
    title: "Document Management System (DMS)",
    role: "System Analyst",
    date: "2026",
    src: "/wise.png",
    ctaText: "Lihat Detail",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-justify" >
            Document Management System (DMS) adalah aplikasi web enterprise yang dikembangkan untuk mensentralisasi penyimpanan dokumen, menyederhanakan alur kerja dokumen, dan meningkatkan aksesibilitas informasi di seluruh organisasi. Platform ini memungkinkan pengguna untuk mengunggah, mengorganisir, mencari, dan mengelola dokumen secara aman, dengan dukungan struktur folder, manajemen metadata, kontrol versi, dan hak akses berbasis peran.
          </p>
          <p className="text-justify">
            Dibandingkan sekadar menjadi repositori digital biasa, DMS membangun ekosistem dokumen terpusat yang meningkatkan kolaborasi, tata kelola, dan efisiensi operasional di sepanjang siklus hidup dokumen.
          </p>

          <p className="font-semibold text-neutral-900">Problem</p>
          <p className="text-justify">
            Pengelolaan dokumen organisasi yang tersebar di berbagai lokasi penyimpanan membuat kolaborasi, pencarian dokumen, dan kontrol versi menjadi tidak efisien. Penanganan dokumen secara manual juga meningkatkan risiko duplikasi file, struktur dokumen yang tidak konsisten, serta kesulitan dalam melacak riwayat dokumen dan akses pengguna.
          </p>

          <p className="font-semibold text-neutral-900">Solusi</p>
          <p className="text-justify">
            DMS menyediakan platform terpusat di mana dokumen dapat disimpan, diklasifikasikan, dan dikelola secara aman melalui struktur folder dan metadata. Fitur seperti kontrol akses berbasis peran, versioning dokumen, pencarian lanjutan, alur persetujuan (approval workflow), dan activity log memungkinkan pengguna mengakses informasi yang tepat secara efisien sambil menjaga keamanan dan integritas dokumen.
          </p>

          <p className="font-semibold text-neutral-900">Fitur Enterprise</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Large File Upload (hingga 5 GB)</li>
            <li>Chunk &amp; Resume Upload</li>
            <li>Document Versioning</li>
            <li>Advanced Search &amp; Filtering</li>
            <li>Automated Retention Schedule (JRA)</li>
            <li>Automated Document Disposal Workflow</li>
            <li>Bulk Document Import</li>
            <li>Custom Metadata Classification</li>
            <li>Document Sharing with Expiration</li>
            <li>Document Lifecycle Management</li>
          </ul>

          <p className="font-semibold text-neutral-900">Tantangan</p>
          <p className="text-justify">
            Salah satu tantangan terbesar adalah menyelesaikan sistem dalam tenggat pengembangan yang ketat, yaitu tiga bulan, sambil menerjemahkan proses manajemen dokumen yang kompleks ke dalam kebutuhan sistem yang fungsional.
          </p>
          <p className="text-justify">
            Sistem harus mengakomodasi berbagai skenario siklus hidup dokumen, termasuk kebijakan retensi, pemusnahan dokumen berdasarkan Jadwal Retensi Arsip (JRA), alur persetujuan, hingga penanganan pengecualian akibat tindakan pengguna. Setiap alur kerja membutuhkan diskusi mendalam bersama pemangku kepentingan agar sistem benar-benar mencerminkan proses bisnis dan kebijakan organisasi tanpa menimbulkan risiko operasional.
          </p>
          <p className="text-justify">
            Pengalaman ini memperkuat kemampuan analitis saya dan menegaskan pentingnya memahami proses bisnis secara menyeluruh sebelum menerjemahkannya menjadi fungsionalitas sistem.
          </p>
        </div>
      );
    },
  },
  {
    description: "Sistem Informasi Sumber Daya Manusia",
    title: "Human Resource Information System (HRIS)",
    role: "UI/UX Designer & Frontend Developer",
    date: "2025",
    src: "/hris.png",
    ctaText: "Lihat Detail",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-justify">
            Human Resource Information System (HRIS) adalah aplikasi web internal yang dikembangkan untuk mendigitalisasi dan mensentralisasi proses operasional harian perusahaan. Platform ini menggabungkan berbagai modul — termasuk manajemen karyawan, absensi, pengajuan cuti, lembur, manajemen proyek, manajemen aset, dan pengumuman internal — ke dalam satu sistem terintegrasi.
          </p>
          <p className="text-justify">
            Dirancang dengan pendekatan user-centered, aplikasi ini berfokus pada penyederhanaan alur kerja harian melalui antarmuka yang bersih, modern, dan intuitif, sehingga memudahkan karyawan maupun administrator dalam mengelola tugas mereka secara lebih efisien.
          </p>

          <p className="font-semibold text-neutral-900">Problem</p>
          <p className="text-justify">
            Perusahaan sebelumnya mengandalkan berbagai proses manual dan tools yang terpisah untuk mengelola administrasi karyawan, pelacakan proyek, dan aktivitas operasional harian. Hal ini seringkali menghasilkan informasi yang terfragmentasi, pekerjaan administratif yang repetitif, dan kolaborasi antar tim yang kurang efisien.
          </p>

          <p className="font-semibold text-neutral-900">Solusi</p>
          <p className="text-justify">
            HRIS mengonsolidasikan operasional bisnis penting ke dalam satu platform terpusat dengan pengalaman pengguna yang intuitif. Peran saya berfokus pada perancangan antarmuka yang ramah pengguna serta implementasi komponen frontend yang responsif, memastikan setiap modul memberikan pengalaman yang konsisten, mudah diakses, dan mulus sambil tetap mendukung kebutuhan operasional perusahaan.
          </p>

          <p className="font-semibold text-neutral-900">Fitur Utama</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Employee Management</li>
            <li>Attendance Tracking</li>
            <li>Leave &amp; Time-Off Management</li>
            <li>Overtime Requests</li>
            <li>Daily Activity Reports</li>
            <li>Kanban Project Management</li>
            <li>Asset Management</li>
            <li>Company Announcements</li>
            <li>Master Data Management</li>
          </ul>

          <p className="font-semibold text-neutral-900">Tantangan</p>
          <p className="text-justify">
            Salah satu tantangan terbesar adalah merancang antarmuka untuk berbagai modul bisnis sambil menjaga konsistensi pengalaman pengguna di seluruh aplikasi. Karena setiap modul melayani alur kerja dan peran pengguna yang berbeda, saya berfokus pada pembuatan komponen UI yang reusable serta menetapkan pola desain yang konsisten demi skalabilitas, kemudahan pemeliharaan, dan kemudahan penggunaan.
          </p>

          <p className="font-semibold text-neutral-900">Di Luar Peran Saya</p>
          <p className="text-justify">
            Proyek ini memberi saya kesempatan untuk menjembatani desain dan pengembangan dengan mengubah konsep UI menjadi pengalaman frontend yang sepenuhnya fungsional. Saya menikmati proses berkolaborasi dengan tim untuk menyempurnakan interaksi pengguna, membangun komponen yang reusable, serta memastikan implementasi antarmuka sesuai dengan desain sambil tetap memberikan pengalaman pengguna yang halus dan responsif.
          </p>
        </div>
      );
    },
  },
    {
    description: "Analisis & Implementasi Sistem Maintenance Aset",
    title: "Asset Registry & Maintenance System",
    role: "System Analyst",
    date: "2025",
    src: "/hal.png",
    ctaText: "Lihat Detail",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            Asset Registry & Maintenance System adalah platform manajemen maintenance terintegrasi yang dikembangkan untuk PT Haleyora Powerindo, bertujuan mensentralisasi registrasi aset dan proses pemeliharaan dalam satu sistem yang terstruktur, guna meningkatkan traceability dan efisiensi operasional.
          </p>

          <p className="font-semibold text-neutral-900">Peran & Tanggung Jawab</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Memimpin proses requirement elicitation dan analisis proses bisnis bersama stakeholder lintas fungsi untuk mendefinisikan alur kerja maintenance secara end-to-end.</li>
            <li>Menyusun dokumentasi functional specification, proses bisnis, dan diagram UML sebagai acuan implementasi sistem yang efisien.</li>
            <li>Berkolaborasi dengan tim development dan QA di sepanjang siklus pengembangan iteratif, memastikan kebutuhan yang terus berkembang tetap terefleksikan dengan akurat pada sistem.</li>
            <li>Menjalankan sesi System Integration Testing (SIT) dan User Acceptance Testing (UAT) untuk memvalidasi proses bisnis sebelum sistem diimplementasikan.</li>
            <li>Membantu mengimplementasikan platform manajemen maintenance terintegrasi yang meningkatkan traceability dan efisiensi operasional.</li>
          </ul>

          <p className="font-semibold text-neutral-900">Fitur Utama</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Registrasi dan manajemen maintenance aset secara terpusat dalam satu platform</li>
            <li>Penjadwalan maintenance (maintenance scheduling)</li>
            <li>Riwayat maintenance (maintenance history)</li>
            <li>Alur peninjauan (review workflow)</li>
            <li>Monitoring aset</li>
            <li>Pelacakan siklus hidup aset (asset lifecycle tracking)</li>
          </ul>

          <p className="font-semibold text-neutral-900">Tools & Teknologi</p>
          <p>
            Jira, Draw.io, Microsoft Visio, Figma, PostgreSQL, Agile Scrum
          </p>
        </div>
      );
    },
  },
];
