import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Link from "next/link"
import { Badge } from "../ui/badge"
import { projects } from "@/utils/projects"

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-muted">
            <section className="max-w-5xl mx-auto px-6 py-24">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-semibold tracking-tight">
                        🌟 Meus projetos
                    </h1>

                    <p className="text-muted-foreground mt-2">
                        Alguns projetos que desenvolvi/desenvolvendo com carinho — sempre focando em
                        simplicidade e boas práticas!
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Card key={project.name} className="shadow-sm hover:shadow-md transition">
                            <CardHeader>
                                <CardTitle>{project.name}</CardTitle>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardFooter className="flex gap-4">
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center gap-2 text-sm hover:underline"
                                >
                                    <Github size={16} />
                                    GitHub
                                </Link>

                                {project.status === "wip" && (
                                    <Badge className="bg-amber-100 text-amber-800">
                                        🚧 Em desenvolvimento
                                    </Badge>
                                )}

                                {project.status === "done" && (
                                    <Badge className="bg-emerald-100 text-emerald-800">
                                        ✅ Concluído
                                    </Badge>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    )
}
