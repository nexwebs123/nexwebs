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
                NexWebs has transformed the way we build enterprise solutions.
                Their comprehensive suite of platforms and services has
                significantly accelerated our digital workflow. The flexibility
                to adapt every solution allows us to deliver unique business
                experiences. NexWebs is truly a game-changer for modern
                enterprises.
              </p>

              <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                <Avatar className="size-12">
                  <AvatarImage
                    src="https://tailus.io/images/reviews/shekinah.webp"
                    alt="Shekinah Tshiokufila"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>

                <div>
                  <cite className="text-sm font-medium">
                    Shekinah Tshiokufila
                  </cite>
                  <span className="text-muted-foreground block text-sm">
                    Software Ingineer
                  </span>
                </div>
              </div>
            </blockquote>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardContent className="h-full pt-6">
            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
              <p className="text-xl font-medium">
                NexWebs is truly extraordinary and highly practical, no need to
                overthink. A real gold mine.
              </p>

              <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                <Avatar className="size-12">
                  <AvatarImage
                    src="https://tailus.io/images/reviews/jonathan.webp"
                    alt="Jonathan Yombo"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                  <AvatarFallback>JY</AvatarFallback>
                </Avatar>
                <div>
                  <cite className="text-sm font-medium">Jonathan Yombo</cite>
                  <span className="text-muted-foreground block text-sm">
                    Software Ingineer
                  </span>
                </div>
              </div>
            </blockquote>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="h-full pt-6">
            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
              <p>
                Great work on NexWebs solutions. This is one of the best
                enterprise platforms I have experienced so far!
              </p>

              <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                <Avatar className="size-12">
                  <AvatarImage
                    src="https://tailus.io/images/reviews/yucel.webp"
                    alt="Yucel Faruksahan"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                  <AvatarFallback>YF</AvatarFallback>
                </Avatar>
                <div>
                  <cite className="text-sm font-medium">Yucel Faruksahan</cite>
                  <span className="text-muted-foreground block text-sm">
                    Creator, Tailkits
                  </span>
                </div>
              </div>
            </blockquote>
          </CardContent>
        </Card>
        <Card className="card variant-mixed">
          <CardContent className="h-full pt-6">
            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
              <p>
                Outstanding work by NexWebs. Their platform stands among the
                most impressive business solutions I&apos;ve come across!
              </p>

              <div className="grid grid-cols-[auto_1fr] gap-3">
                <Avatar className="size-12">
                  <AvatarImage
                    src="https://tailus.io/images/reviews/rodrigo.webp"
                    alt="Rodrigo Aguilar"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                  <AvatarFallback>YF</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Rodrigo Aguilar</p>
                  <span className="text-muted-foreground block text-sm">
                    Creator, TailwindAwesome
                  </span>
                </div>
              </div>
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
