import DraggableScrollContainer from "@/components/draggable-scroll-container"
import { Section } from "@/components/section"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Title } from "@/components/ui/title"
import { useViewportSize } from "@/hooks/use-viewport-size"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: HomeComponent,
})

function HomeComponent() {
  const viewportSize = useViewportSize()
  const padding =
    // viewportSize.width < 1328 ? 24 : (viewportSize.width - 1232) / 2
    viewportSize.width < 672 ? 24 : (viewportSize.width - 648) / 2
  return (
    <div className="flex flex-col gap-0">
      <Section
        spacer="p"
        className="w-full  border-x border-border border-dashed mx-auto max-w-2xl px-6"
      >
        <Title showAs={3} level={1} className="text-muted-foreground/70">
          <span className="text-primary">
            <Avatar className="inline-flex size-6 mr-2">
              <AvatarImage className="object-cover" src="/me.jpeg" />
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
            I'm Dan.
          </span>{" "}
          <br />i build{" "}
          <span className="text-primary italic">beautiful things</span> and make
          them <span className="text-primary italic">fast...</span>
        </Title>

        <Section side="t">
          <Title level={2} showAs={5}>
            Today <span>{}</span>
          </Title>
          <p>
            I work as a fullstack developer at WinWin. I care deeply about the
            user interface, how it looks, how it behaves and how it makes me
            feel.
            <br />
            <br />
            <p>
              Previously, I ran a startup that built corporate solutions to
              e-learning.{" "}
            </p>
          </p>
        </Section>
      </Section>
      <section className="w-full border-x  border-border border-dashed mx-auto max-w-2xl px-6">
        <Title level={2} showAs={6}>
          Experiments
        </Title>
      </section>
      <DraggableScrollContainer
        style={{
          scrollPaddingLeft: padding + "px",
          scrollPaddingRight: padding + "px",
        }}
        className="no-scrollbar mt-3.5 snap-x snap-mandatory"
      >
        <div
          style={{
            marginLeft: padding + "px",
            marginRight: padding + "px",
          }}
          className="no-scrollbar flex w-max items-start gap-6"
        >
          <Link
            className="flex w-[33vw] flex-col p-4 bg-muted/80"
            to="/experiments/02-layout"
          >
            <img
              src="/02.png"
              alt="experiment"
              className="w-full h-full object-cover"
            />
            <div className="flex pt-2.5 flex-col gap-2">
              <Title style={{ margin: 0 }} level={3} showAs={6}>
                Dashed Grid
              </Title>
              <div className="flex items-center gap-2">
                <a className="text-xs underline" href="https://x.com/01_hh_">
                  @01_hh_
                </a>
              </div>
            </div>
          </Link>
          <Link
            className="flex w-[33vw] flex-col p-4 bg-muted/80"
            to="/experiments/01-layout"
          >
            <img
              src="/01.jpeg"
              alt="experiment"
              className="w-full h-full object-cover"
            />
            <div className="flex pt-2.5 flex-col gap-2">
              <Title style={{ margin: 0 }} level={3} showAs={6}>
                Brutalist Layout
              </Title>
              <div className="flex items-center gap-2">
                <a
                  className="text-xs underline"
                  href="https://x.com/Marki_Tweet/status/1947246017071480915/photo/1"
                >
                  @Marki_Tweet
                </a>
              </div>
            </div>
          </Link>
        </div>
      </DraggableScrollContainer>

      <Section className="opacity-0">x</Section>
    </div>
  )
}
