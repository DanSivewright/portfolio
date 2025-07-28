import { Button } from "@/components/ui/button"
import { Grid } from "@/components/ui/grid"
import { Title } from "@/components/ui/title"
import { createFileRoute } from "@tanstack/react-router"
import { House, LockIcon } from "lucide-react"

export const Route = createFileRoute("/experiments/04-layout")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-screen h-screen bg-accent p-3 flex flex-col gap-3">
      <Grid gap="none" className="gap-3">
        <div className="col-span-12 sm:col-span-6 xl:col-span-3 aspect-video lg:aspect-square p-5 flex flex-col justify-between bg-background rounded-md">
          <p className="text-xs text-muted-foreground/80">001</p>
          <div className="flex flex-col">
            <h2 className="text-lg font-normal">Setup and customize</h2>
            <p className="text-sm font-light text-muted-foreground/60">
              Monitor category balances so you always know how much is left to
              spend.
            </p>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3 aspect-video lg:aspect-square p-5 flex flex-col justify-between bg-background rounded-md">
          <p className="text-xs text-muted-foreground/80">002</p>
          <div className="flex flex-col">
            <h2 className="text-lg font-normal">Track Spending</h2>
            <p className="text-sm font-light text-muted-foreground/60">
              Monitor overages, compare spending trends, and adjust as needed
            </p>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3 aspect-video lg:aspect-square p-5 flex flex-col justify-between bg-background rounded-md">
          <p className="text-xs text-muted-foreground/80">003</p>
          <div className="flex flex-col">
            <h2 className="text-lg font-normal">Optimized Budget</h2>
            <p className="text-sm font-light text-muted-foreground/60">
              Setup smart allocations and make smarter financial decisions.
            </p>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3 aspect-video lg:aspect-square p-5 flex flex-col justify-between bg-background rounded-md">
          <p className="text-xs text-muted-foreground/80">004</p>
          <div className="flex flex-col">
            <h2 className="text-lg font-normal">Open Source</h2>
            <p className="text-sm font-light text-muted-foreground/60">
              We believe financial tools should be transparent. Woss is
              open-source, Built for public.
            </p>
          </div>
        </div>
      </Grid>
      <Grid className="gap-3 bg-background p-3 rounded-md" gap="none">
        <div className="col-span-12 aspect-video md:col-span-6 md:aspect-square relative overflow-hidden rounded-md">
          <video
            src="https://dr.savee-cdn.com/things/6/8/803f2a3c9caf25dac911f4.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="col-span-12 md:col-span-6 gap-10 md:gap-0 flex flex-col justify-between">
          <header className="flex flex-col pt-2">
            <button className="rounded-full border-border/60 border w-fit text-orange-400 text-xs px-2 py-0.5">
              WOSS Perks
            </button>
            <Title level={1} showAs={2} className="font-light">
              Security, <br /> Reinforced
            </Title>
            <p className="w-3/4 font-light text-sm text-muted-foreground/60">
              Maybe is secure, open-source, and built in public. Designed for
              transparency, control and community trust.
            </p>
            <Button className="rounded-full font-light drop-shadow-xl  w-fit mt-4">
              Start Contributing
            </Button>
          </header>
          <div className="flex flex-col gap-4">
            <button className="rounded-full border-border/60 border w-fit  text-xs px-2 py-0.5">
              More details
            </button>
            <Grid gap="none" className="gap-3">
              <div className="col-span-6 aspect-[16/11] bg-accent p-5 flex flex-col justify-between rounded-md">
                <button className="bg-background text-orange-400 rounded-full flex items-center justify-center size-8">
                  <LockIcon className="size-4" />
                </button>
                <div className="flex flex-col">
                  <h2 className="text-lg font-normal">Highly Secure</h2>
                  <p className="text-sm font-light text-muted-foreground/60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum alias id quasi consequatur eos quisquam sint ratione
                    exercitationem.
                  </p>
                </div>
              </div>
              <div className="col-span-6 aspect-[16/11] bg-accent p-5 flex flex-col justify-between rounded-md">
                <button className="bg-background text-orange-400 rounded-full flex items-center justify-center size-8">
                  <House className="size-4" />
                </button>
                <div className="flex flex-col">
                  <h2 className="text-lg font-normal">Built in public</h2>
                  <p className="text-sm font-light text-muted-foreground/60">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis cumque odio, sequi sed soluta fugit repellat dicta
                    voluptates!
                  </p>
                </div>
              </div>
            </Grid>
          </div>
        </div>
      </Grid>
    </div>
  )
}
