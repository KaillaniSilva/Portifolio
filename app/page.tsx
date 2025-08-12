"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Linkedin,
  Instagram,
  Palette,
  Phone,
  Mail,
} from "lucide-react";
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // se estiver usando shadcn ou algo similar
import { Menu, X } from "lucide-react"; // í
import { motion } from "framer-motion";

// Variantes de animação
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const slideInFromBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function KaillaniPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const projects = [
    {
      image: "/PROJETO (1).svg?height=200&width=300",
      title: "Dr. Jose Alberto",
      description:
        "Site para psicólogo, com foco em presença digital, agendamentos e credibilidade profissional.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://psicologo-landing-page.vercel.app",
    },
    {
      image: "/PROJETO (2).svg?height=200&width=300",
      title: "Landing Page",
      description:
        "Landing page para lançamento de curso, com foco em conversão, captura de leads e apresentação clara dos benefícios.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://pagina-de-vendas-omega.vercel.app",
    },
    {
      image: "/PROJETO (3).svg?height=200&width=300",
      title: "E-commerce Agencia",
      description:
        "Loja virtual para agência de viagens, com foco em reservas rápidas e visual imersivo dos destinos.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://exploremundo.vercel.app/",
    },
    {
      image: "/PROJETO (4).svg?height=200&width=300",
      title: "E-commerce Viagens",
      description:
        "Site para agência de viagens com foco em destinos, pacotes e atendimento personalizado.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://www.behance.net/gallery/231170883/E-commerce-para-Agencia-de-viagens-100-em-codigo",
    },
    {
      image: "/PROJETO (5).svg?height=200&width=300",
      title: "Portfólio Dev",
      description:
        "Site portfólio para desenvolvedor, com foco em apresentação de projetos, stack e identidade profissional.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://portifolio-five-kappa-96.vercel.app/",
    },
    {
      image: "/PROJETO (6).svg?height=200&width=300",
      title: "E-commerce Moda",
      description:
        "Loja virtual elegante e responsiva, com foco em estilo, navegação intuitiva e conversão.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://www.behance.net/gallery/227051299/E-commerce-Moda-Feminina-(Desenvolvida-em-codigo)",
    },
    {
      image: "/PROJETO (7).svg?height=200&width=300",
      title: "Advogado",
      description:
        "Site para Advogado, com foco em presença digital, agendamentos e credibilidade profissional.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://www.behance.net/gallery/231444487/Site-Institucional-Advogado",
    },
  ];

  const services = [
    {
      title: "UX/UI",
      description:
        "Planejamento e criação de interfaces que oferecem uma experiência intuitiva, acessível e visualmente alinhada à identidade da marca.",
    },
    {
      title: "Landing Page",
      description:
        "Criação de páginas estratégicas voltadas para conversão, como vendas, captura de leads ou objetivos específicos.",
    },
    {
      title: "Layouts para Sites",
      description:
        "Desenvolvimento do visual completo das páginas, com foco em estética, usabilidade e identidade da marca.",
    },
    {
      title: "Design Responsivo",
      description:
        "Adaptação do site para funcionar perfeitamente em diferentes dispositivos (desktop, tablet, mobile).",
    },
    {
      title: "Web Branding Visual",
      description:
        "Definição da identidade visual digital: cores, tipografia, ícones e elementos gráficos alinhados à marca.",
    },
    {
      title: "App Design",
      description:
        "Design de interfaces para aplicativos móveis (iOS e Android), com foco em usabilidade, estilo moderno e experiência fluida.",
    },
  ];

  const tools = [
    {
      icon: "/ferramentas (1).svg?height=64&width=64",
      name: "Figma",
    },
    {
      icon: "/ferramentas (2).svg?height=64&width=64",
      name: "Photoshop",
    },
    {
      icon: "/ferramentas (3).svg?height=64&width=64",
      name: "Illustrator",
    },
    {
      icon: "/ferramentas (4).svg?height=64&width=64",
      name: "Canva",
    },
    {
      icon: "/ferramentas (5).svg?height=64&width=64",
      name: "Elementor",
    },
    {
      icon: "/ferramentas (6).svg?height=64&width=64",
      name: "HTML",
    },
    {
      icon: "/ferramentas (7).svg?height=64&width=64",
      name: "CSS",
    },
    {
      icon: "/ferramentas (8).svg?height=64&width=64",
      name: "JavaScript",
    },
    {
      icon: "/ferramentas (9).svg?height=64&width=64",
      name: "Tailwind",
    },
    {
      icon: "/ferramentas (10).svg?height=64&width=64",
      name: "GitHub",
    },
    {
      icon: "/ferramentas (11).svg?height=64&width=64",
      name: "WordPress",
    },
  ];
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Handle responsive behavior on client side only
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setVisibleProjects(window.innerWidth < 768 ? 3 : 6);
    };

    // Set initial value
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleShowMore = () => {
  setVisibleProjects((prev) =>
    Math.min(prev + 3, projects.length) // soma 3 mas nunca ultrapassa o total
  );
};

  const handleProjectClick = (index: number) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  const handleProjectLinkClick = (e: React.MouseEvent, link: string) => {
    e.stopPropagation(); // Previne que o clique propague para o container
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen overflow-x-hidden text-white font-poppins">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-full absolute mt-10 z-50 bg-roxo flex items-center lg:h-[6vw] -translate-x-1/2 left-1/2 md:h-[8vw] xl:h-[4vw]"
      >
        <div className="font-quicksand hidden md:block text-4xl font-normal ml-10 text-white lg:text-[3vw] lg:ml-16 lg:mr-[16vw] md:mr-[18vw] md:text-[3vw] xl:text-[2vw] xl:ml-[5vw]">
          Kaillani
        </div>
        <nav className="hidden md:flex space-x-8 text-lg items-center lg:text-[1.5vw] md:text-[1.7vw] xl:text-[1vw]">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#home" className="hover:text-[#8A2BE2] transition-colors">
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#projetos"
              className="hover:text-[#8A2BE2] transition-colors"
            >
              Projetos
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#servicos"
              className="hover:text-[#8A2BE2] transition-colors"
            >
              Serviços
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#sobre"
              className="hover:text-[#8A2BE2] transition-colors"
            >
              Sobre
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#contato">
              <button className="bg-white hover:bg-[#eddcff] font-quicksand text-[#3000B4] font-normal rounded-full lg:px-12 items-center lg:text-lg lg:ml-[2vw] lg:mr-16 md:px-[2vw] md:py-0 md:h-[4vw] md:ml-[2vw] md:mr[8vw] md:text-[2vw] mr-10 lg:text-[1.7vw] xl:h-[2.3vw]  xl:text-[1.1vw]">
                Contato
              </button>
            </Link>
          </motion.div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-header pt-24 pb-16 lg:pt-30 lg:ml-16 lg:pb-24 px-8 md: flex flex-col lg:flex-row md:items-center md:justify-center min-h-screen"
      >
        <motion.div 
          variants={fadeInLeft}
          initial="initial"
          animate="animate"
          className="flex flex-col items-start text-left max-w-3xl z-10"
        >
          <motion.p 
            variants={fadeInUp}
            className=" md:text-lg text-gray-300 md:mb-12 lg:mt-[8rem] md:mt-[15vw] mb-[8vw]"
          >
            Olá, Seja Bem-vindo(a)
          </motion.p>
          <motion.h1 
            variants={fadeInUp}
            className="text-[8vw] font-quicksand md:text-5xl font-extrabold leading-tight mb-[10vw] lg:mb-6"
          >
            Sou a <span className="text-[#A06BEB]">Kaillani</span>, <br />
            WebDesigner & <br />
            Designer UX/UI
          </motion.h1>

          {/* IMAGEM - só aparece aqui no mobile/tablet */}
          <motion.div 
            variants={scaleIn}
            className="relative w-full flex justify-center mb-[10vw] mt-[5vw] lg:hidden"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/ICON_PRINCIPAL.svg"
                alt="Kaillani Avatar"
                width={400}
                height={300}
                className="object-cover z-10"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="font-quicksand flex justify-center gap-3 lg:gap-5 lg:mb-10 lg:mt-[5vw] 
                max-w-md mx-auto lg:max-w-none lg:mx-0 lg:justify-start"
          >
            <Link href="#projetos">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFFFFF] hover:bg-[#eddcff] text-[#3000B4] rounded-full w-30 py-2 md:px-12 md:w-40 md:py-2 text-lg shadow-lg"
              >
                Projetos
              </motion.button>
            </Link>
            <Link href="#sobre">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFFFFF] hover:bg-[#eddcff] text-[#3000B4] rounded-full w-30 py-2 md:px-12 md:w-40 md:py-2 text-lg shadow-lg"
              >
                Sobre
              </motion.button>
            </Link>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center lg:justify-start mt-[10vw] md:mt-[1vw] gap-4 p-4 w-full max-w-md mx-auto md:max-w-full md:mx-0"
          >
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="#https://www.linkedin.com/in/kaillani-silva-65b960247/" aria-label="LinkedIn">
                <Linkedin className="w-8 h-8" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://www.instagram.com/ka_bartholomeu" aria-label="Instagram">
                <Instagram className="w-8 h-8" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="#https://www.behance.net/Nebulacode_" aria-label="Behance">
                <img
                  src="/Behance.svg" // caminho da sua imagem
                  alt="Behance"
                  className="w-9 h-9 hover:[#A06BEB] transition-colors"
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Coluna da direita (imagem original) - só aparece no laptop+ */}
        <motion.div 
          variants={fadeInRight}
          initial="initial"
          animate="animate"
          className="relative hidden lg:flex xl:ml-[15vw] lg:w-[28rem] lg:h-[28rem] lg:mt-[8rem] md:mt-[20vw] md:mb-[10vw] mt-[15vw] mb-[20vw] items-center justify-center"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/ICON_PRINCIPAL.svg"
              alt="Kaillani Avatar"
              width={350}
              height={350}
              className=" z-10"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-quicksand overflow-hidden"
      >
        <div className="absolute rotate-2 min-w-full bg-[#3000B4] h-15"></div>
        {/* Camada normal por cima - palavras lado a lado */}
        <div className="relative bg-[#A06BEB] py-4 px-6 md:px-12 z-10 overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-8 text-lg text-gray-300 whitespace-nowrap"
            style={{
              width: "max-content"
            }}
          >
            {[
              "App Design",
              "Website Design", 
              "Prototipagem",
              "Design Responsivo",
              "Design",
              "App Design",
              "Website Design",
              "Prototipagem", 
              "Design Responsivo",
              "Design",
              "App Design",
              "Website Design",
              "Prototipagem",
              "Design Responsivo", 
              "Design"
            ].map((word, index) => (
              <span
                key={index}
                className="font-bold inline-block whitespace-nowrap"
              >
                {word}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="projetos" 
        className="xl:px-50 relative py-16 px-6 md:px-20"
      >
        <div className="absolute rounded-full w-96 h-96 -z-1 blur-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3000B4]"></div>
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex items-center justify-between mb-5"
        >
          <h2 className="font-quicksand xl:text-4xl text-2xl md:text-3xl font-bold">
            Meus Projetos
          </h2>
        </motion.div>
        <motion.p 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="font-quicksand md:text-xl text-[3.5vw] text-gray-300 mb-20"
        >
          WebDesigner & Design UX/UI
        </motion.p>

        <div className="flex justify-center">
          <div 
            key={visibleProjects}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
          >
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-roxo-claro border-none items-center justify-center rounded-[6vw] md:rounded-[2vw] w-full max-w-[320px] md:max-w-[380px] p-4 cursor-pointer"
              >
               
                   <div 
                     className="relative group cursor-pointer"
                     onClick={() => handleProjectClick(index)}
                   >
                     <Image
                       src={project.image || "/placeholder.svg"}
                       alt={project.title}
                       width={250}
                       height={150}
                       className="object-cover w-full rounded-lg mb-4"
                     />
                     {/* Overlay com botão "Abrir site" */}
                     <div className={`absolute inset-0 bg-black bg-opacity-70 lg:rounded-[2.3vw] sm:rounded-[4vw] rounded-[8.5vw] transition-opacity duration-300 flex items-center justify-center ${
                       selectedProject === index 
                         ? 'opacity-70' 
                         : 'opacity-0 group-hover:opacity-70 group-focus:opacity-70 group-active:opacity-70'
                     }`}>
                       <button 
                         onClick={(e) => handleProjectLinkClick(e, project.link)}
                         className="bg-white hover:bg-white text-gray-800 px-4 py-2 rounded-full flex items-center gap-2 transition-colors duration-200 shadow-lg cursor-pointer"
                       >
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                         </svg>
                         <span className="font-medium">Abrir site</span>
                       </button>
                     </div>
                   </div>

                 <div className="space-y-3">
                   <h3 className="font-quicksand xl:text-[1.5vw] text-lg font-semibold text-center mb-5">
                     {project.title}
                   </h3>
                  <p className="text-gray-300 text-xs xl:text-[1vw] text-center mb-7 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1 mt-4 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 text-xs rounded-full font-medium"
                        style={{
                          backgroundColor:
                            tech === "HTML"
                              ? "#FF5722"
                              : tech === "CSS"
                              ? "#2196F3"
                              : tech === "Bootstrap"
                              ? "#7B1FA2"
                              : tech === "JavaScript"
                              ? "#FFD600"
                              : "#333",
                          color: tech === "JavaScript" ? "#000" : "#fff",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {visibleProjects < projects.length && (
          <div className="font-quicksand text-center mt-12">
            <button
              onClick={handleShowMore}
              className="bg-white hover:bg-[#7A1BE1] text-[#3000B4] rounded-full px-8 py-2 md:px-12 md:py-3 shadow-lg transition-all duration-200 active:scale-95"
            >
              Ver mais
            </button>
          </div>
        )}
      </motion.section>

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="servicos" 
        className="relative py-16 px-6 md:px-18 xl:px-50 "
      >
        <div className="absolute rounded-full w-96 h-96 -z-1 blur-[400px] left-1 bg-[#3000B4]"></div>
        <div className="absolute rounded-full w-96 h-96 -z-1 blur-[400px] right-1 bg-[#3000B4]"></div>
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex items-center justify-between mb-5"
        >
          
          <h2 className="font-quicksand xl:text-4xl text-2xl md:text-3xl font-bold">
            Serviços
          </h2>
        </motion.div>
        <motion.p 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="font-quicksand md:text-xl text-[3.5vw] text-gray-300 mb-20"
        >
          Serviços e tecnologias
        </motion.p>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-grey border-none rounded-3xl lg:p-8 p-5 shadow-xl cursor-pointer"
            >
              <h3 className="font-quicksand md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] text-[4vw] font-semibold mb-6 mt-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 text-[3vw] lg:text-[1.2vw] xl:text-[1.1vw] md:text-[1.5vw] mb-6">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Tools & Technologies Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="xl:px-50 .bg-ferramenta py-16 px-6 md:px-20"
      >
        <motion.h2 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="font-quicksand s xl:text-4xl text-2xl md:text-3xl font-bold text-start mb-25"
        >
          Ferramentas e Tecnologias
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 p-3 lg:grid-cols-6 gap-10 mb-10 justify-items-center "
        >
          {tools.map((tool, index) => (
            <motion.div 
              key={index} 
              variants={scaleIn}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
              className="flex flex-col items-center text-center cursor-pointer"
            >
              <div className="relative lg:w-24 lg:h-24 w-13 h-8 flex items-center justify-center mb-8">
                <Image
                  src={tool.icon || "/placeholder.svg"}
                  alt={`${tool.name} icon`}
                  width={74}
                  height={74}
                  className="object-contain"
                />
              </div>
              <p className="font-quicksand md:text-[2vw] xl:text-[1.5vw] text-[3.5vw] font-medium mb-2">{tool.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="sobre"
        className="xl:px-50 xl:py-25 lg:py-15 px-6 md:px-18 bg-sobre" //
      >
        <motion.h2 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="font-quicksand xl:text-4xl text-2xl md:text-3xl px-10 py-15 lg:py-0 font-bold text-start mb-10 xl:mb-20"
        >
          Sobre mim
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-15">
          {/* Imagem à esquerda */}
          <motion.div 
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className=" relative lg:mt-20 xl:mt-0 w-72 h-72 md:w-96 md:h-96 flex-shrink-0 flex items-center justify-center"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/ICON KAI.svg?height=300&width=300"
                alt="Kaillani Thinking Avatar"
                width={400}
                height={300}
                className="rounded-full object-cover z-10"
              />
            </motion.div>
          </motion.div>

          {/* Texto à direita */}
          <motion.div 
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex-1 text-left mt-8 mb-15 lg:mt-0 px-10"
          >
            <motion.h3 
              variants={fadeInUp}
              className="font-quicksand lg:text-3x1 text-[6vw] text-center md:text-3xl font-bold mb-14"
            >
              Quem é a Kaillani?
            </motion.h3>
            <motion.div 
              variants={staggerContainer}
              className="space-y-4 md:text-base xl:text-lg lg:text-[1.5vw] text-[3.4vw] text-gray-300"
            >
              <motion.p variants={slideInFromBottom}>
                Eu sou a Kaillani, tenho 21 anos e moro em São Paulo. Atualmente
                estudo Web Design na FIAP, onde descobri um universo que tem
                tudo a ver comigo: criatividade, tecnologia e constante
                aprendizado.
              </motion.p>
              <motion.p variants={slideInFromBottom}>
                Sempre fui muito curiosa, daquelas que adoram entender como as
                coisas funcionam e estão sempre buscando aprender algo novo.
                Essa curiosidade me levou a me apaixonar pelo mundo da
                tecnologia – e com uma criatividade que nunca para, o Web Design
                acabou sendo um caminho super natural pra mim.
              </motion.p>
              <motion.p variants={slideInFromBottom}>
                Além disso, sou apaixonada por esportes! Eles fazem parte da
                minha rotina e também me ensinam muito sobre disciplina, foco e
                trabalho em equipe – habilidades que levo pra inclusive nos meus
                projetos como designer.
              </motion.p>
              <motion.p variants={slideInFromBottom}>
                Gosto de explorar ideias, testar coisas novas e transformar
                conceitos em soluções visuais que façam sentido e causem
                impacto. Estou sempre em movimento, seja aprendendo, criando ou
                praticando algum esporte.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="contato"
        className="xl:px-50 bg-header py-16 px-4 flex flex-col items-center justify-center
             md:px-28 md:items-start md:justify-start md:flex-row lg:px-40 lg:flex-row gap-12"
      >
        <motion.div 
          variants={fadeInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex-1 text-left"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-quicksand xl:text-4xl text-2xl md:text-3xl font-bold mb-6"
          >
            Contato
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="font-quicksand md:text-xl text-[4vw] text-gray-300 font-extralight mt-20 mb-10"
          >
            Fale comigo para fazer seus novos projetos!
          </motion.p>
          <motion.div 
            variants={staggerContainer}
            className="space-y-4 mb-8"
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              className="flex lg:items-center items-start justify-start gap-4 text-[4vw] md:text-lg"
            >
              <Phone className="w-6 h-6 text-[#8A2BE2]" />
              <span>(11) 94770-7950</span>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              className="flex items-center justify-start gap-4 text-[4vw] md:text-lg"
            >
              <Mail className="w-6 h-6 text-[#8A2BE2]" />
              <span>Contato.nebulacode@gmail.com</span>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              className="flex items-center justify-start gap-4 text-[4vw] md:text-lg"
            >
              <Instagram className="w-6 h-6 text-[#8A2BE2]" />
              <span>Ka Bartholomeu</span>
            </motion.div>
            {/* wrapper para centralizar só no mobile */}
            <motion.div 
              variants={fadeInUp}
              className="w-full flex justify-center md:justify-start"
            >
              <Link href="https://wa.me/5511947707950?text=Quero%20fazer%20meu%20site!">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="font-quicksand bg-white hover:bg-[#7A1BE1] text-[#3000B4] font-bold rounded-full px-20 py-2 text-[3vw] md:text-lg mt-10 shadow-lg"
                >
                  Enviar mensagem
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div 
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative md:mt-25 lg:mt-10 w-64 h-64 lg:w-96 lg:h-96 flex-shrink-0 flex items-center justify-center"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/ICON KAI 3.svg?height=300&width=300"
              alt="Kaillani Thumbs Up Avatar"
              width={500}
              height={300}
              className="rounded-full object-cover z-10"
            />
          </motion.div>
        </motion.div>
      </motion.section>
      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-6 px-6 md:px-12 bg-roxo text-center text-gray-400 text-[2vw] md:text-sm"
      >
        <p>Todos os direitos reservados 2025 - Kaillani</p>
      </motion.footer>
      
      {/* CSS customizado para hover em dispositivos touch */}
      <style jsx>{`
        @media (hover: none) and (pointer: coarse) {
          .group:active .group-active\\:opacity-70 {
            opacity: 0.7 !important;
          }
        }
        
        /* Garantir que o hover funcione em todos os dispositivos */
        .group:hover .group-hover\\:opacity-70,
        .group:focus .group-focus\\:opacity-70,
        .group:active .group-active\\:opacity-70 {
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}
