import { lazy } from "solid-js";
import { RouteDefinition } from "@solidjs/router";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./pages/home")),
  },
  {
    path: "/gpt4",
    component: lazy(() => import("./pages/bot/gpt4")),
  },
  {
    path: "/bard",
    component: lazy(() => import("./pages/bot/bard")),
  },
  {
    path: "/bing",
    component: lazy(() => import("./pages/bot/bing")),
  },
  {
    path: "/gemini",
    component: lazy(() => import("./pages/bot/gemini")),
  },
  {
    path: "/changelogs",
    component: lazy(() => import("./pages/changelogs")),
  },
  {
    path: "/*all",
    component: lazy(() => import("./pages/errors/404")),
  },
];
