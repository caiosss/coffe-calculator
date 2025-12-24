"use client"

import Link from "next/link"
import { Eye, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import { Button } from "../ui/button"
import PreviewCV from "../actions/preview-cv"

export default function About() {
  const [openModalPreviewCV, setOpenModalPreviewCV] = useState(false);

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold tracking-tight">
            Sobre mim
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Sou o Caio, desenvolvedor fullstack e que ama criar soluções que facilitem o dia a dia das pessoas.
            Apaixonado por café, decidi unir minhas duas paixões e criar esta calculadora de café para ajudar
            outros entusiastas a encontrar a xícara perfeita para suas atividades diárias.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Atualmente estou cursando o 7º período de Ciência da Computação na Universidade de Fortaleza (UNIFOR).
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Tenho experiência com Java a 2 anos utilizando Spring Boot e
            também com JavaScript/TypeScript utilizando Node.js e frameworks como Next.js, React e Angular!
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ultimamente tenho focado em aprimorar e estudar mais sobre DevOps focando principalmente em AWS e
            Docker para poder melhorar a manutenção e otimizar as aplicações que venho desenvolvendo.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Caso tenha gostado dessa previa do meu trabalho, aqui está meu currículo e redes sociais!
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-6 md:justify-start">
            <Link
              href="https://www.linkedin.com/in/caio-barross"
              target="_blank"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Linkedin size={18} />
              LinkedIn
            </Link>

            <Link
              href="https://github.com/caiosss"
              target="_blank"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Github size={18} />
              GitHub
            </Link>

            <Button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer bg-transparent hover:bg-transparent" onClick={() => setOpenModalPreviewCV(true)}>
              <Eye size={18} />
              Currículo
            </Button>
          </div>
        </div>

        <motion.div
          className="mx-auto md:mx-0 md:justify-self-end"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <Avatar className="size-60 border">
            <AvatarImage
              src="/caio-foto.jpeg"
              alt="Foto do Caio Barros"
              className="object-cover"
            />
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>

      <PreviewCV
        open={openModalPreviewCV}
        onOpenChange={setOpenModalPreviewCV}
        onClose={() => setOpenModalPreviewCV(false)}
      />
      
    </section>
  )
}
