import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-lg">
          <Link href="/">
            ☕ Calculadora de Café
          </Link>
        </span>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/sobre"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre mim
          </Link>
          
          <Link
            href="/projetos"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projetos
          </Link>

          <Link
            href="https://www.linkedin.com/in/caio-barross"
            target="_blank"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin size={18} />
          </Link>

          <Link
            href="https://github.com/caiosss"
            target="_blank"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github size={18} />
          </Link>
        </nav>
      </div>
    </header>
  )
}