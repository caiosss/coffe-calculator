// src/components/Footer.tsx
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>
          Feito com ☕ por Caio
        </span>

        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/caio-barross"
            target="_blank"
            className="hover:text-foreground"
          >
            <Linkedin size={18} />
          </Link>

          <Link
            href="https://github.com/caiosss"
            target="_blank"
            className="hover:text-foreground"
          >
            <Github size={18} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
