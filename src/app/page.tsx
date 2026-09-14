"use client";

import { useState } from "react";

const LINKS = [
  {
    label: "X",
    href: "https://x.com/priyanshu11_",
    handle: "@priyanshu11_",
  },
  {
    label: "GitHub",
    href: "https://github.com/priyanshusinha11",
    handle: "priyanshusinha11",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/priyanshusinha11/",
    handle: "priyanshusinha11",
  },
  {
    label: "Email",
    href: "mailto:hello@priyanshusinha.com",
    handle: "hello@priyanshusinha.com",
  },
];

// REPEAT 4 [FD 100 RT 90] - the square, drawn once, on load
function Turtle() {
  return (
    <svg
      viewBox="0 0 160 160"
      className="h-[7.5rem] w-[7.5rem] overflow-visible"
      aria-hidden
    >
      <path
        d="M 20 20 H 140 V 140 H 20 Z"
        fill="none"
        stroke="var(--pen)"
        strokeWidth={2}
        className="logo-path"
      />
      <path
        d="M 0 -5 L 4 4 L 0 2 L -4 4 Z"
        fill="var(--pen)"
        className="logo-turtle"
      />
    </svg>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="mx-auto flex min-h-screen max-w-[36rem] flex-col justify-center px-6 py-24">
      <h1 className="font-mono text-[1.75rem] font-medium leading-none tracking-tight sm:text-[2.125rem]">
        Priyanshu Sinha
        <span className="caret" />
      </h1>

      <p className="mt-6 max-w-[30rem] font-sans text-[1.0625rem] leading-relaxed text-muted">
        Building consumer brands that reach millions of people at{" "}
        <a
          href="https://triplespeed.com"
          target="_blank"
          rel="noreferrer"
          className="text-ink underline decoration-rule decoration-2 underline-offset-4 hover:decoration-pen"
        >
          Triplespeed
        </a>
        .
      </p>

      <div className="mt-16 flex items-center gap-6">
        <Turtle />
        <code className="font-mono text-xs tracking-wide text-muted">
          REPEAT 4 [FD 100 RT 90]
        </code>
      </div>

      <p className="mt-10 max-w-[32rem] font-sans text-[0.9375rem] leading-relaxed text-muted">
        I started coding at nine. By fifteen I had tech blogs about phones and
        gadgets, with AdSense and affiliate links on them. That was my first
        dollar made on the internet.
      </p>

      <div className="mt-14">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="connect-links"
          className="font-mono text-sm text-ink underline decoration-rule decoration-2 underline-offset-[6px] hover:decoration-pen focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pen"
        >
          Connect with me
        </button>

        <div
          id="connect-links"
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <ul className="overflow-hidden font-mono text-sm">
            {LINKS.map((link) => (
              <li key={link.label} className="first:mt-6">
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  tabIndex={open ? 0 : -1}
                  className="group flex gap-4 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pen"
                >
                  <span className="w-16 shrink-0 text-muted group-hover:text-pen">
                    {link.label}
                  </span>
                  <span className="text-ink">{link.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
