import { Toaster } from "@/components/ui/sonner"

import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouterState,
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import Header from "../components/header"
import appCss from "../index.css?url"
import type { QueryClient } from "@tanstack/react-query"
import Loader from "@/components/loader"

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
        <Outlet />
        <Toaster richColors />
        {/* <TanStackRouterDevtools position="bottom-left" /> */}
        {/* <ReactQueryDevtools position="bottom" buttonPosition="bottom-right" /> */}
        <Scripts />
      </body>
    </html>
  )
}
