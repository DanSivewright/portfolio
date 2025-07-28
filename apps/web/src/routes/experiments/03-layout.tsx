import { Button } from "@/components/ui/button"
import { Grid } from "@/components/ui/grid"
import { Title } from "@/components/ui/title"
import { createFileRoute } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"

export const Route = createFileRoute("/experiments/03-layout")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-screen w-screen *:text-primary gap-24 scheme-only-dark dark bg-background flex flex-col relative px-8">
      <Grid gap="none" className="gap-4">
        <div className="col-span-3 pt-10">
          <p className="">Flux Design®</p>
        </div>
        <div className="col-span-3 flex pt-10 items-center justify-between">
          <ul className="flex items-center w-full justify-between font-light text-primary/60">
            <li className="hover:text-primary cursor-pointer">Projects</li>
            <li className="hover:text-primary cursor-pointer text-primary">
              Services
            </li>
            <li className="hover:text-primary cursor-pointer">Process</li>
            <li className="hover:text-primary cursor-pointer">Archive</li>
          </ul>
        </div>
        <div className="col-span-6 pt-10 flex items-end justify-end font-light underline">
          <p>Start a project</p>
        </div>
      </Grid>
      <Grid gap="none" className="gap-4 w-full h-full">
        <div className="col-span-2 h-full bg-red-50"></div>
        <div className="col-span-5 h-full bg-red-50"></div>
        <div className="col-span-2 h-full bg-red-50"></div>
      </Grid>
    </div>
  )
}
