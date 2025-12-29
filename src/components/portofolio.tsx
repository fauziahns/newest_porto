"use client";

import  { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { User, Calendar } from "lucide-react";

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
    <div className="
        relative
        bg-[url('/porto.png')]
        md:bg-[url('/porto.png')]
        bg-no-repeat
        bg-center
        bg-cover">

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[800px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {/* <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div> */}

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                        <motion.h3
                            layoutId={`title-${active.title}-${id}`}
                            className="font-medium text-neutral-200 text-lg"
                        >
                            {active.title}
                        </motion.h3>

                        <motion.p
                            layoutId={`description-${active.description}-${id}`}
                            className="text-neutral-400 text-sm mt-1"
                        >
                            {active.description}
                        </motion.p>

                        {/* ROLE & DATE */}
                        <div className="flex flex-col gap-2 mt-4 text-sm text-neutral-400">
                            <div className="flex items-center gap-2">
                                <User size={16} />
                                <span>{active.role}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
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
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4 pb-10">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base dark:text-neutral-400"
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
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:border rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
                <div className="flex flex-col">
                <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-center md:text-left text-base"
                >
                    {card.title}
                </motion.h3>

                {/* ROLE */}
                <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                    <User size={14} />
                    <span>{card.role}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                    <Calendar size={16} />
                    <span>{card.date}</span>
                </div>
                </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Analisis & Dokumentasi Sistem",
    title: "Register Aset Sarana dan Prasarana PT.X",
    role: "System Analyst",
    date: "Juli 2025 - Desember 2025",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Study Case",
    ctaLink: "https://ui.aceternity.com/templates",
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
          <p>
            Dalam studi kasus ini, saya berperan sebagai System Analyst yang bertanggung jawab dalam menganalisis kebutuhan bisnis serta menerjemahkannya ke dalam solusi sistem yang terstruktur dan terdokumentasi dengan baik. Peran ini mencakup proses penggalian kebutuhan pengguna, analisis proses bisnis, serta penyusunan dokumentasi sebagai acuan pengembangan sistem.
          </p>
          
          <p className="font-semibold">Dokumen utama yang dihasilkan:</p>
          
          <ul className="space-y-2">
            {cards[0].documents.map((doc, index) => (
              <li key={index}>
                <a 
                  href={doc.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                >
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
                  </svg>
                  <div className="flex-1">
                    <strong className="text-neutral-800 dark:text-neutral-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {doc.name}
                    </strong>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      {doc.description}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          
          <p>
           Dokumen pada studi kasus ini merupakan versi sanitized yang disesuaikan untuk keperluan portofolio. Seluruh data sensitif, identitas internal, dan informasi rahasia telah disamarkan tanpa mengurangi esensi proses analisis dan perancangan sistem
          </p>
        </div>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    role: "Backend Developer",
    date: "2019 - 2020",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    role: "Full Stack Developer",
    date: "2018 - 2019",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "Lord Himesh",
    title: "Aap Ka Suroor",
    role: "UI/UX Designer",
    date: "2017 - 2018",
    src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Himesh Reshammiya, a renowned Indian music composer, singer, and
          actor, is celebrated for his distinctive voice and innovative
          compositions. Born in Mumbai, India, he has become a prominent figure
          in the Bollywood music industry. <br /> <br /> His songs often feature
          a blend of contemporary and traditional Indian music, capturing the
          essence of modern Bollywood soundtracks. With a career spanning over
          two decades, Himesh Reshammiya has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },
];