import { Cpu, Zap } from "lucide-react";
import Image from "next/image";

export function AboutCard() {
  return (
    <div className="mx-auto w-full space-y-8 md:space-y-16">
      <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
        The NexWebs ecosystem unifies our software solutions.
      </h2>
      <div className="relative">
        <div className="relative z-10 space-y-4 md:w-1/2">
          <p>
            NexWebs is evolving to be more than just solutions.{" "}
            <span className="font-medium">It supports an entire ecosystem</span>{" "}
            — where businesses innovate.
          </p>
          <p>
            It supports an entire ecosystem — from products to the APIs and
            platforms helping developers and businesses innovate
          </p>

          <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="size-4" />
                <h3 className="text-sm font-medium">Faaast</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                It supports an entire ecosystem empowering developers and
                businesses.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Cpu className="size-4" />
                <h3 className="text-sm font-medium">Powerful</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                It delivers a complete platform guiding developers and
                businesses.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
          <div
            aria-hidden
            className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"
          ></div>
          <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
            <Image
              src="/charts.png"
              className="hidden rounded-[12px] dark:block"
              alt="payments illustration dark"
              width={1207}
              height={929}
            />
            <Image
              src="/charts-light.png"
              className="rounded-[12px] shadow dark:hidden"
              alt="payments illustration light"
              width={1207}
              height={929}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
