"use client";

import { useState } from "react";

import { AudioPlayer } from "@/components/ui/audio-player";
import { BackgroundBeams } from "@/components/ui/background-beams";

const LINKS = [
  {
    label: "X",
    href: "https://x.com/priyanshu11_",
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/priyanshusinha11/",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
  {
    label: "Email",
    href: "mailto:hello@priyanshusinha.com",
    icon: "M1.5 5.25A2.25 2.25 0 0 1 3.75 3h16.5a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 20.25 21H3.75a2.25 2.25 0 0 1-2.25-2.25zm2.03-.53a.75.75 0 0 0-.53 1.28l8.47 8.47a.75.75 0 0 0 1.06 0l8.47-8.47a.75.75 0 0 0-.53-1.28z",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundBeams />
      <AudioPlayer />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[38rem] flex-col justify-center px-6 py-24">
      <h1 className="text-[1.75rem] font-medium leading-none tracking-tight sm:text-[2.125rem]">
        Priyanshu Sinha
        <span className="caret" />
      </h1>

      <p className="mt-4 text-[0.9375rem] text-muted">
        Retried with exponential backoff.
      </p>

      <p className="mt-10 text-[0.9375rem] leading-[1.85] text-muted">
        I wrote my first line of code at nine. At fifteen I was running tech
        blogs about phones and gadgets, and made my first dollar on the
        internet.
      </p>

      <p className="mt-6 text-[0.9375rem] leading-[1.85] text-muted">
        Currently at{" "}
        <a
          href="https://triplespeed.com"
          target="_blank"
          rel="noreferrer"
          className="text-ink underline decoration-rule decoration-2 underline-offset-4 hover:decoration-pen"
        >
          Triplespeed
        </a>
        , a consumer app studio that takes ideas from zero to millions of users.
        Spending my days building a 50+ engineer team and the products 100M+
        people use.
      </p>

      <div className="mt-14">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="connect-links"
          className="text-[0.9375rem] text-ink underline decoration-rule decoration-2 underline-offset-[6px] hover:decoration-pen focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pen"
        >
          Connect with me
        </button>

        <div
          id="connect-links"
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <ul className="overflow-hidden text-[0.9375rem]">
            {LINKS.map((link) => (
              <li key={link.label} className="first:mt-6">
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  tabIndex={open ? 0 : -1}
                  className="group flex items-center gap-3 py-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pen"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                    className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-pen"
                  >
                    <path d={link.icon} />
                  </svg>
                  <span className="text-ink">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </main>
  );
}
