import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function TestimonialCards() {
  return (
    <div className="mx-auto w-full space-y-8 md:space-y-16">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
        <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
          <CardContent className="pt-6">
            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
              <div className="space-y-4">
                <Link
                  href="https://www.thecardoctors.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block w-full overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20"
                >
                  <Image
                    src="/work/tcd.png"
                    alt="The Car Doctors Website"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg transition-all duration-500 group-hover:brightness-75"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className="flex flex-col items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="flex items-center gap-2 text-white font-semibold text-lg md:text-xl">
                        <span>View Live Project</span>
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                      <div className="w-12 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 delay-100" />
                    </div>
                  </div>
                </Link>
                <p className="text-xl font-medium">
                  Running a car detailing and modification shop means we're
                  always juggling customer bookings, showcasing our work, and
                  keeping our brand sharp. NexWebs built us a website that
                  actually works for our business—it's fast, looks professional,
                  and makes it super easy for customers to see what we do and
                  book services. The site showcases our detailing work beautifully
                  and helps us stand out in a competitive market. Since going
                  live, we've seen more inquiries and bookings, and honestly, it
                  just makes us look more legit. The team understood our vibe and
                  delivered something that fits our brand perfectly.
                </p>
              </div>

              <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                <Avatar className="size-12">
                  <AvatarImage
                    src="/work/logo.png"
                    alt="The Car Doctors"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                  <AvatarFallback>TCD</AvatarFallback>
                </Avatar>

                <div>
                  <cite className="text-sm font-medium">
                    The Car Doctors
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
