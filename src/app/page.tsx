import CoffeeForm from "@/components/coffe-form/CoffeeForm";
import { Fragment } from "react/jsx-runtime";

export default function Home() {
  return (
    <Fragment>

      <main className="min-h-screen bg-muted flex items-center justify-center px-4">
        <section className="w-full max-w-lg">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold tracking-tight">
              ☕ Bora calcular seu café!
            </h1>
            <p className="text-muted-foreground mt-2">
              Descubra o café ideal para acompanhar sua atividade
            </p>
          </div>

          <CoffeeForm />
        </section>
      </main>
        
    </Fragment>
  )
}
