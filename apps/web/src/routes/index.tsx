import { Section } from "@/components/section"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Title } from "@/components/ui/title"
import { createFileRoute, Link } from "@tanstack/react-router"

// Import images as modules
import experiment01Image from "/01.jpeg"
import experiment02Image from "/02.png"
import experiment03Image from "/03.png"
import experiment04Image from "/04.png"
import profileImage from "/me.jpeg"

export const Route = createFileRoute("/")({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="flex flex-col gap-0">
      <Section
        spacer="p"
        className="w-full  border-x border-border border-dashed mx-auto max-w-2xl px-6"
      >
        <Title showAs={3} level={1} className="text-muted-foreground/70">
          <span className="text-primary">
            <Avatar className="inline-flex size-6 mr-2">
              <AvatarImage className="object-cover" src={profileImage} />
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
      <Section
        className="columns-1 gap-1.5 px-1.5 md:columns-2 lg:columns-3 xl:columns-4"
        side="b"
      >
        <Link
          className="flex mb-1.5 w-full break-inside-avoid  flex-col p-4 bg-muted/80"
          to="/experiments/04-layout"
        >
          <img
            src={experiment04Image}
            alt="experiment"
            className="w-full h-full object-cover"
          />
          <div className="flex pt-2.5 flex-col gap-2">
            <Title style={{ margin: 0 }} level={3} showAs={6}>
              Bento Grid
            </Title>
            <div className="flex items-center gap-2">
              <a
                className="text-xs underline"
                href="https://x.com/basit_designs"
              >
                @basit_designs
              </a>
            </div>
          </div>
        </Link>
        <Link
          className="flex mb-1.5 w-full break-inside-avoid  flex-col p-4 bg-muted/80"
          to="/experiments/03-layout"
        >
          <img
            src={experiment03Image}
            alt="experiment"
            className="w-full h-full object-cover"
          />
          <div className="flex pt-2.5 flex-col gap-2">
            <Title style={{ margin: 0 }} level={3} showAs={6}>
              Drak Mode Grid Layout
            </Title>
            <div className="flex items-center gap-2">
              <a
                className="text-xs underline"
                href="https://x.com/GotinGeorgiG"
              >
                @GotinGeorgiG
              </a>
            </div>
          </div>
        </Link>
        <Link
          className="flex mb-1.5 w-full break-inside-avoid  flex-col p-4 bg-muted/80"
          to="/experiments/02-layout"
        >
          <img
            src={experiment02Image}
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
          className="flex mb-1.5 w-full break-inside-avoid  flex-col p-4 bg-muted/80"
          to="/experiments/01-layout"
        >
          <img
            src={experiment01Image}
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
      </Section>
    </div>
  )
}
