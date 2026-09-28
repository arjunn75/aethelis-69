import { createFileRoute } from "@tanstack/react-router";
import html from "../../public/technology-and-science.html?raw";

export const Route = createFileRoute("/technology-and-science")({
  server: {
    handlers: {
      GET: () =>
        new Response(html, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
    },
  },
});
