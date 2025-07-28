import { Grid } from "@/components/ui/grid"
import { Title } from "@/components/ui/title"
import { createFileRoute } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"

export const Route = createFileRoute("/experiments/03-layout")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-auto md:h-screen w-screen *:text-primary gap-24 scheme-only-dark dark bg-background flex flex-col relative p-8">
      <Grid gap="none" className="gap-4">
        <div className="col-span-3 pt-2">
          <p className="">Flux Design®</p>
        </div>
        <div className="hidden col-span-3 md:flex pt-2 items-center justify-between">
          <ul className="flex items-center w-full justify-between font-light text-primary/60">
            <li className="hover:text-primary cursor-pointer">Projects</li>
            <li className="hover:text-primary cursor-pointer text-primary">
              Services
            </li>
            <li className="hover:text-primary cursor-pointer">Process</li>
            <li className="hover:text-primary cursor-pointer">Archive</li>
          </ul>
        </div>
        <div className="col-span-9 md:col-span-6 pt-2 flex items-end justify-end font-light underline">
          <p>Start a project</p>
        </div>
      </Grid>
      <Grid gap="none" className="gap-4 w-full h-full">
        <div className="col-span-12 md:col-span-2 h-full">
          <Title
            style={{ marginTop: 0 }}
            className="font-light invisible opacity-0"
            level={2}
          >
            .
          </Title>
          <Title level={1} showAs={6} className="font-light">
            What We Do
          </Title>
          <p className="text-primary/60 font-light text-sm text-balance">
            Framing light, mood, and meaning to tell stories that linger. From
            portraits to compaigns, our photography turns vision inot lasting
            impact. We believe every image holds the power to reavel truth,
            evoke feelings and shape perception. Through careful composition and
            artful direction, we craft visuals that resonate, connect and
            endure.
          </p>
        </div>
        <div className="col-span-12 md:col-span-5 flex flex-col md:col-start-4 h-full">
          <Title style={{ marginTop: 0 }} className="font-light" level={2}>
            [01]
          </Title>
          <div className="w-full h-full grow aspect-video md:aspect-auto bg-accent relative overflow-hidden">
            <video
              src="https://dr.savee-cdn.com/things/6/8/81f2623c9caf25e4d83075.mp4"
              className="w-full h-full absolute top-0 left-0 object-cover"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 md:col-start-10 h-full flex flex-col justify-between">
          <div className="flex flex-col">
            <Title
              style={{ marginTop: 0 }}
              className="font-light invisible opacity-0"
              level={2}
            >
              .
            </Title>
            <div className="flex gap-6 flex-col">
              <Title style={{ margin: 0 }} level={3} className="font-light">
                Photography
              </Title>
              <Title
                level={3}
                style={{ margin: 0 }}
                className="font-light text-primary/50 cursor-pointer hover:text-primary transition-all"
              >
                Web Design
              </Title>
              <Title
                level={3}
                style={{ margin: 0 }}
                className="font-light text-primary/50 cursor-pointer hover:text-primary transition-all"
              >
                Web Development
              </Title>
              <Title
                level={3}
                style={{ margin: 0 }}
                className="font-light text-primary/50 cursor-pointer hover:text-primary transition-all"
              >
                UI/UX Design
              </Title>
              <Title
                level={3}
                style={{ margin: 0 }}
                className="font-light text-primary/50 cursor-pointer hover:text-primary transition-all"
              >
                Branding
              </Title>
              <Title
                level={3}
                style={{ margin: 0 }}
                className="font-light text-primary/50 cursor-pointer hover:text-primary transition-all"
              >
                Art Direction
              </Title>
              <Title
                level={3}
                style={{ margin: 0 }}
                className="font-light text-primary/50 cursor-pointer hover:text-primary transition-all"
              >
                Video Editing
              </Title>
              <Title
                level={3}
                style={{ margin: 0 }}
                className="font-light text-primary/50 cursor-pointer hover:text-primary transition-all"
              >
                Content Creation
              </Title>
            </div>
          </div>
          <div className="w-full flex items-end justify-end">
            <ArrowRight className="rotate-45 size-24 font-black" />
          </div>
        </div>
      </Grid>
    </div>
  )
}
