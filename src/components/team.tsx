import Link from "next/link";
import { Button } from "./ui/button";
import { Home } from "lucide-react";

const members = [
  {
    name: "Shayan Dutta",
    role: "Founder & CEO",
    avatar:
      "https://ik.imagekit.io/nexwebs/WhatsApp%20Image%202025-08-31%20at%2011.58.30%20AM.jpeg?updatedAt=1756622010969",
    link: "https://www.linkedin.com/in/shayandutta10/",
  },
  {
    name: "Chinmoy Das",
    role: "Co-Founder & CMO",
    avatar:
      "https://ik.imagekit.io/nexwebs/WhatsApp%20Image%202025-08-31%20at%207.06.01%20PM%20(1).jpeg?updatedAt=1756650922250",
    link: "http://www.linkedin.com/in/chinmoy-jyoti-das-634884379",
  },
];

export default function TeamSection() {
  return (
    <section className="dark:bg-transparent">
      <Link href="/">
        <Button variant="secondary" className="mb-4 mt-6">
          Back to Home <Home />
        </Button>
      </Link>
      <div className="mx-auto max-w-7xl border-t">
        <div className="mt-6 gap-4 sm:grid sm:grid-cols-2 md:mt-12">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">Our dream team</h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              During the working process, we perform regular fitting with the
              client because he is the only person who can feel whether a new
              suit fits or not.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar}
                  alt="team member"
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                    <span className="text-xs">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-0 text-sm opacity-100 transition duration-300 sm:translate-y-6 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-0 text-sm tracking-wide opacity-100 transition-all duration-500 hover:underline sm:translate-y-8 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                    >
                      {" "}
                      Linkedin
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
