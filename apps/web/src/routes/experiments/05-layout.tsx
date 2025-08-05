import { Button } from "@/components/ui/button"
import { Grid } from "@/components/ui/grid"
import { Title } from "@/components/ui/title"
import { createFileRoute } from "@tanstack/react-router"
import { ArrowRight, DownloadIcon, Eye, Heart, Users } from "lucide-react"

export const Route = createFileRoute("/experiments/05-layout")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-accent w-screen h-full min-h-screen px-6 flex items-center justify-center">
      <Grid
        gap="xl"
        className="bg-background *:text-primary scheme-only-dark dark rounded-[76px] w-full max-w-7xl p-8 lg:p-16 xl:p-32 gap-10"
      >
        <div className="col-span-12 flex flex-col justify-between md:col-span-6">
          <Title level={1} showAs={4} className="font-light">
            We install the infrastructure that stops the leaks and scales with
            you.{" "}
            <span className="opacity-30">
              It's a transformation - guided by our team
            </span>
          </Title>
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-2">
              <span className="size-4 rounded-full bg-amber-400"></span>
              <p>Lauren M.</p>
            </div>
            <p className="text-sm bg-accent/70 text-white/70 p-4 rounded-[52px] lg:rounded-[28px] xl:rounded-[20px]">
              it felt like hiring a revops team, a sales coach, and a data
              analyst – without the bloat
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
          <div className="col-span-12 relative bg-accent p-6 flex flex-col gap-2 rounded-[52px] lg:rounded-[28px] xl:rounded-[20px]">
            <div className="flex items-start justify-between relative z-10 gap-5">
              <div className="flex flex-col h-full grow items-center pt-0.5">
                <div className="bg-blue-500 rounded-lg p-1.5">
                  <DownloadIcon className="size-3.5" />
                </div>
                <div className="w-px h-full grow mt-2 bg-foreground/10"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-light text-lg">Install the system</h3>
                <p className="text-foreground/50 pb-4 font-light text-sm">
                  CRM logic, dashboard, follow-up flows, accountability
                  structures.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-between relative z-10 gap-5">
              <div className="flex flex-col h-full grow items-center pt-0.5">
                <div className="bg-green-500 rounded-lg p-1.5">
                  <Users className="size-3.5 fill-white stroke-transparent" />
                </div>
                <div className="w-px h-full grow mt-2 bg-foreground/10"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-light text-lg">Train your team</h3>
                <p className="text-foreground/50 pb-4 font-light text-sm">
                  Setters, closers, and managers are onboarded and coached and
                  encouraged to be the best they can be
                </p>
              </div>
            </div>
            <div className="flex items-start justify-between relative z-10 gap-5">
              <div className="flex flex-col h-full grow items-center pt-0.5">
                <div className="bg-orange-500 rounded-lg p-1.5">
                  <Eye className="size-3.5" />
                </div>
                <div className="w-px h-full grow mt-2 bg-foreground/10"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-light text-lg">Show you what's broken</h3>
                <p className="text-foreground/50 pb-4 font-light text-sm">
                  Track replies, bookings, ghosted leads, and leak points - all
                  within one app
                </p>
              </div>
            </div>
            <div className="flex items-start justify-between relative z-10 gap-5">
              <div className="flex flex-col h-full grow items-center pt-0.5">
                <div className="bg-pink-500 rounded-lg p-1.5">
                  <Heart className="size-3.5 fill-white stroke-transparent" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-light text-lg">Stay with you</h3>
                <p className="text-foreground/50 pb-0 font-light text-sm">
                  Weekly reviews, live support, and ongoing optimization for all
                  your teams, users and people
                </p>
              </div>
            </div>
            <div className="absolute top-6 h-1/2 bg-gradient-to-b from-foreground/10 to-transparent left-[22px] rounded-t-[10px] z-0 w-[30px]"></div>
          </div>

          <Button className="rounded-full">
            Get started <ArrowRight className="size-4" />
          </Button>
        </div>
      </Grid>
    </div>
  )
}
