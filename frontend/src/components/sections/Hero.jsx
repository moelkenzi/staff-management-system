import { RiArrowRightUpLine } from "@remixicon/react";
import { FadeContainer, FadeDiv, FadeSpan } from "../custom/Fade";
import HeroBackground from "../custom/HeroBackground";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section aria-label="hero" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <FadeContainer className="relative flex flex-col items-center justify-center pt-20">
        <FadeDiv className="mx-auto">
          <a
            aria-label="View latest update the changelog page"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-full">
            <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-white/5 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 ring-1 shadow-lg shadow-indigo-400/20 ring-black/10 filter backdrop-blur-[1px] transition-colors hover:bg-indigo-500/[2.5%] focus:outline-hidden sm:text-sm">
              <span className="shrink-0 truncate rounded-full border bg-gray-50 px-2.5 py-1 text-sm text-gray-600 sm:text-xs">
                News
              </span>
              <span className="flex items-center gap-1 truncate">
                <span className="w-full truncate">Staff MS v1.0 Released</span>
                <RiArrowRightUpLine className="size-4 shrink-0 text-gray-700" />
              </span>
            </div>
          </a>
        </FadeDiv>

        <h1 className="mt-8 text-center text-5xl font-semibold tracking-tighter text-gray-900 sm:text-8xl sm:leading-[5.5rem]">
          <FadeSpan>Manage</FadeSpan> <FadeSpan>your</FadeSpan>
          <br />
          <FadeSpan>Team/Staff</FadeSpan> <FadeSpan>Effortlessly</FadeSpan>
        </h1>

        <p className="mt-5 max-w-xl text-center text-base text-gray-700 sm:mt-8 sm:text-xl">
          <FadeSpan>Track attendance, shifts, and performance</FadeSpan>{" "}
          <FadeSpan>in one smart platform. Streamline workflows</FadeSpan>{" "}
          <FadeSpan>and empower your staff to succeed.</FadeSpan>
        </p>

        <FadeDiv>
          {/* <a
            className="mt-6 inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md border-b-[1.5px] border-indigo-700 bg-gradient-to-b from-indigo-500 to-indigo-600 px-5 py-3 leading-4 font-medium tracking-wide text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 ease-in-out hover:shadow-indigo-300"
            href="#">
            Get Started
          </a> */}
          <Button variant={"primary"} className="mt-6">
            {" "}
            Get Start For Free
          </Button>
        </FadeDiv>

        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-40">
          <HeroBackground />
        </div>
      </FadeContainer>
    </section>
  );
}
