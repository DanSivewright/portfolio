import { Toaster } from "@/components/ui/sonner"

import type { QueryClient } from "@tanstack/react-query"
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router"
import { Analytics } from "@vercel/analytics/react"
import appCss from "../index.css?url"

import type { TRPCOptionsProxy } from "@trpc/tanstack-react-query"
import type { AppRouter } from "../../../server/src/routers"
export interface RouterAppContext {
  trpc: TRPCOptionsProxy<AppRouter>
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "buildmore.studio",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  component: RootDocument,
})

function RootDocument() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Analytics />
        <Outlet />
        <Toaster richColors />
        {/* <TanStackRouterDevtools position="bottom-left" /> */}
        {/* <ReactQueryDevtools position="bottom" buttonPosition="bottom-right" /> */}
        <Scripts />
      </body>
    </html>
  )
}
