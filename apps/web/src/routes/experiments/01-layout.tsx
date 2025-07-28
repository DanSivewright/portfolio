import { Grid } from "@/components/ui/grid"
import { createFileRoute } from "@tanstack/react-router"
import { ArrowLeft } from "lucide-react"

export const Route = createFileRoute("/experiments/01-layout")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Grid gap="none" className="w-screen p-4 gap-4 h-screen bg-background">
      <div className="col-span-7 h-full flex flex-col gap-32 items-center justify-between">
        <header className="flex w-full items-center justify-between">
          <h1 className="font-black font-mono">01 Experiment</h1>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground font-light">
              OUR WORK
            </span>
            <div className="w-px h-4 bg-muted-foreground rotate-12"></div>
            <span className="text-sm text-muted-foreground font-light">
              AWARDS
            </span>
            <div className="w-px h-4 bg-muted-foreground rotate-12"></div>
            <span className="text-sm text-muted-foreground font-light">
              MIXED-USE DEVELOPMENT
            </span>
          </div>
        </header>
        <div className="w-full h-full grow flex items-start justify-between">
          <div className="flex flex-col w-full h-full">
            <div className="flex flex-col gap-1">
              <h2 className="text-muted-foreground font-light text-sm">
                MIXED-USE DEVELOPMENT
              </h2>
              <p className="text-2xl font-medium">54L OFFICE</p>
            </div>
            <div className="h-full grow w-full flex flex-col justify-center">
              <p className="w-3/4 text-pretty text-primary/70 ">
                lorem maiores, quos nulla sint tenetur excepturi voluptatem a
                laborum voluptatum, enim beatae repudiandae cum, ipsum iure nam
                veniam! Ipsa, aliquam. Earum. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aut maiores, quos nulla sint
                tenetur excepturi voluptatem a laborum voluptatum, enim beatae
                repudiandae cum, ipsum iure nam veniam! Ipsa, aliquam. Earum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                maiores, quos nulla sint tenetur excepturi voluptatem a laborum
                voluptatum, enim beatae repudiandae cum, ipsum iure nam veniam!
                Ipsa, aliquam. Earum.
              </p>
            </div>
          </div>
          <div className="h-full flex flex-col gap-4">
            <div className="aspect-square h-1/3 grow relative">
              <img
                src="/01-02.webp"
                alt="experiment"
                className="w-full h-full absolute inset-0 object-cover"
              />
            </div>
            <div className="aspect-square h-1/3 grow relative">
              <img
                src="/01-03.webp"
                alt="experiment"
                className="w-full h-full absolute inset-0 object-cover"
              />
            </div>
            <div className="aspect-square h-1/3 grow relative">
              <img
                src="/01-04.webp"
                alt="experiment"
                className="w-full h-full absolute inset-0 object-cover"
              />
            </div>
          </div>
        </div>
        <footer className="flex items-start  w-full  flex-col justify-between gap-10">
          <div className="flex items-start gap-5">
            <div className="flex flex-col">
              <p className="text-muted-foreground font-light text-xs">
                Year of launch
              </p>
              <p className="text-lg font-medium">2025</p>
            </div>
            <div className="flex flex-col">
              <p className="text-muted-foreground font-light text-xs">
                Lead Architect
              </p>
              <p className="text-lg font-medium">Danny boy</p>
            </div>
          </div>
          <div className="w-full flex items-end justify-between">
            <h4 className="text-6xl font-bold">54L OFFICE</h4>
            <p className="underline flex items-center gap-1.5 text-sm">
              <ArrowLeft className="size-4" /> BACK TO ALL PROJECTS
            </p>
          </div>
        </footer>
      </div>
      <div className="col-span-5 h-full relative">
        <img
          src="/01-01.png"
          alt="experiment"
          className="w-full h-full absolute inset-0 object-cover"
        />
      </div>
    </Grid>
  )
}
