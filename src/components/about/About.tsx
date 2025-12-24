import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl px-6 py-24 text-center"
    >
      <h2 className="text-2xl font-semibold tracking-tight">
        Sobre mim
      </h2>

      <p className="mt-4 text-muted-foreground leading-relaxed">
        Sou o Caio, desenvolvedor frontend focado em criar interfaces
        simples, bem pensadas e agradáveis de usar.  
        Este projeto nasceu como uma forma divertida de praticar
        React, TypeScript e boas práticas de UI.
      </p>

      <div className="mt-6 flex justify-center gap-6">
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
      </div>
    </section>
  )
}
