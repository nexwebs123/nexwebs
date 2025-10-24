import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialCards() {
  return (
    <div className="mx-auto w-full space-y-8 md:space-y-16">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
        <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
          <CardHeader>
            <img
              className="h-6 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/nike.svg"
              alt="Nike Logo"
              height="24"
              width="auto"
            />
          </CardHeader>
          <CardContent>
            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
              <p className="text-xl font-medium">
                We partnered with Stayvia Business Consultancy to diagnose and
                remove critical operational bottlenecks. Through focused
                analysis and tailored recommendations, we streamlined their
                processes, improved cross-team coordination, and accelerated
                delivery of key initiatives. The outcome was measurable: higher
                efficiency, faster time-to-market, and better customer
                outcomes—showing how NexWebs' platform and consulting deliver
                practical, business-first impact.
              </p>

              <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                <Avatar className="size-12">
                  <AvatarImage
                    src=""
                    alt="Stayvia Business Consultancy"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                  <AvatarFallback>STB</AvatarFallback>
                </Avatar>

                <div>
                  <cite className="text-sm font-medium">
                    Stayvia Business Consultancy
                  </cite>
                </div>
              </div>
            </blockquote>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardContent className="h-full pt-6">
            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
              <p className="text-xl font-medium">
                We built SoftCrop IT LLP's website, delivering a modern,
                responsive platform that highlights their services, improves
                site performance, and streamlines lead capture. The new site
                strengthened their online presence and helped accelerate client
                acquisition for SoftCrop.
              </p>

              <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                <Avatar className="size-12">
                  <AvatarImage
                    src=""
                    alt="SoftCrop IT LLP"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                  <AvatarFallback>SIL</AvatarFallback>
                </Avatar>
                <div>
                  <cite className="text-sm font-medium">SoftCrop IT LLP</cite>
                </div>
              </div>
            </blockquote>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="h-full pt-6">
            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
              <p>
                We built the website for CodeWar 6.0 — the annual hackathon
                event of the Assam Engineering College Coding Club. The site
                provided fast registration, clear schedules, and real-time
                updates, helping organizers manage participants seamlessly and
                deliver a smoother event experience.
              </p>

              <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                <Avatar className="size-12">
                  <AvatarImage
                    src=""
                    alt="AEC Coding Club"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                  <AvatarFallback>ACC</AvatarFallback>
                </Avatar>
                <div>
                  <cite className="text-sm font-medium">AEC Coding Club</cite>
                </div>
              </div>
            </blockquote>
          </CardContent>
        </Card>
        <Card className="card variant-mixed">
          <CardContent className="h-full pt-6">
            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
              <p>
                We built the AEC Robo Club website, creating a dynamic,
                responsive showcase for their projects and events. The site
                improved team collaboration, simplified event management, and
                made it easier for the club to attract participants and
                sponsors.
              </p>

              <div className="grid grid-cols-[auto_1fr] gap-3">
                <Avatar className="size-12">
                  <AvatarImage
                    src=""
                    alt="AEC Robo Club"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                  <AvatarFallback>ARC</AvatarFallback>
                </Avatar>
                <div className="flex itmes-center h-full flex-col justify-center">
                  <cite className="text-sm font-medium w-fit h-fit">AEC Robo Club</cite>
                </div>
              </div>
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
