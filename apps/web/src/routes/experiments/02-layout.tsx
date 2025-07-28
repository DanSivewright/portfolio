import { Button } from "@/components/ui/button"
import { Grid } from "@/components/ui/grid"
import { Title } from "@/components/ui/title"
import { createFileRoute } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"

export const Route = createFileRoute("/experiments/02-layout")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-screen w-screen flex flex-col  relative px-24">
      <Grid
        gap="none"
        className="w-full h-24 border-b border-border border-dashed"
      >
        <div className="col-span-2 h-full flex pb-4 border-l border-border border-dashed items-end">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="size-2 rounded-full bg-foreground"></span>
            <p className="font-light text-sm">Our Services</p>
          </div>
        </div>
        <div className="col-span-2 h-full border-l border-border border-dashed"></div>
        <div className="col-span-2 h-full border-l border-border border-dashed"></div>
        <div className="col-span-2 h-full border-l border-border border-dashed"></div>
        <div className="col-span-2 h-full border-l border-border border-dashed"></div>
        <div className="col-span-2 h-full border-x border-border border-dashed"></div>
      </Grid>
      <div className="flex flex-col items-start justify-between h-full">
        <div className="w-full relative py-12 h-full grow">
          <div className="flex absolute bottom-4 left-0.5 items-center gap-2 text-muted-foreground">
            <span className="size-2 rounded-full bg-foreground"></span>
            <p className="font-light text-sm">Our Impact</p>
          </div>
          <Grid gap="none" className="w-full h-full absolute inset-0 z-0 ">
            <div className="col-span-2 h-full border-l border-border border-dashed"></div>
            <div className="col-span-2 h-full border-l border-border border-dashed"></div>
            <div className="col-span-2 h-full border-l border-border border-dashed"></div>
            <div className="col-span-2 h-full border-l border-border border-dashed"></div>
            <div className="col-span-2 h-full border-l border-border border-dashed"></div>
            <div className="col-span-2 h-full border-x border-border border-dashed"></div>
          </Grid>
          <Grid gap="none" className="w-full grow relative z-10">
            <div className="col-span-4 flex flex-col items-start justify-between">
              <div className="flex flex-col">
                <Title
                  style={{ marginTop: 0 }}
                  showAs={3}
                  className="font-light"
                >
                  We conduct impactful research <br /> on AI safety.
                </Title>
                <p className="flex items-end gap-2">
                  All Research{" "}
                  <ArrowRight className="size-4 mb-0.5 rotate-45" />
                </p>
              </div>
              <Grid className="pr-4">
                <div className="col-span-6 flex flex-col gap-3">
                  <p className="font-light">AI Safety, Ethics, and Society</p>
                  <p className="line-clamp-4 font-light text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, corrupti itaque blanditiis ducimus inventore
                    recusandae.
                  </p>
                  <Button variant="secondary" className="w-fit h-8 font-light">
                    View Project
                    <ArrowRight className="size-4 rotate-45" />
                  </Button>
                </div>
                <div className="col-span-6 pl-4 flex flex-col gap-3">
                  <p className="font-light">Field-building</p>
                  <p className="line-clamp-4 font-light text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, corrupti itaque blanditiis ducimus inventore
                    recusandae.
                  </p>
                  <Button variant="secondary" className="w-fit h-8 font-light">
                    View Project
                    <ArrowRight className="size-4 rotate-45" />
                  </Button>
                </div>
              </Grid>
            </div>
            <div className="col-span-8  pl-12 aspect-video">
              <div className="relative overflow-hidden h-full w-full">
                <img
                  src="/01-01.png"
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
            </div>
          </Grid>
        </div>
        <Grid
          gap="none"
          className="w-full border-t border-border border-dashed"
        >
          <div className="col-span-2 h-full border-l border-border flex flex-col border-dashed pb-12">
            <Title level={4} showAs={1} className="font-light">
              1
            </Title>
            <p className="text-xs font-light text-pretty text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus ex vitae perspiciatis aspernatur tempore.
            </p>
          </div>
          <div className="col-span-2 h-full border-l border-border flex flex-col border-dashed pb-12">
            <Title level={4} showAs={1} className="font-light">
              100
            </Title>
            <p className="text-xs font-light text-pretty text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus ex vitae perspiciatis aspernatur tempore.
            </p>
          </div>
          <div className="col-span-2 h-full border-l border-border flex flex-col border-dashed pb-12">
            <Title level={4} showAs={1} className="font-light">
              170
            </Title>
            <p className="text-xs font-light text-pretty text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus ex vitae perspiciatis aspernatur tempore.
            </p>
          </div>
          <div className="col-span-2 h-full border-l border-border flex flex-col border-dashed pb-12">
            <Title level={4} showAs={1} className="font-light">
              500
            </Title>
            <p className="text-xs font-light text-pretty text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus ex vitae perspiciatis aspernatur tempore.
            </p>
          </div>
          <div className="col-span-2 h-full border-l border-border flex flex-col border-dashed pb-12">
            <Title level={4} showAs={1} className="font-light">
              20%
            </Title>
            <p className="text-xs font-light text-pretty text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus ex vitae perspiciatis aspernatur tempore.
            </p>
          </div>
          <div className="col-span-2 h-full border-x border-border flex flex-col border-dashed pb-12">
            <Title level={4} showAs={1} className="font-light">
              1200
            </Title>
            <p className="text-xs font-light text-pretty text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus ex vitae perspiciatis aspernatur tempore.
            </p>
          </div>
        </Grid>
      </div>
    </div>
  )
}
