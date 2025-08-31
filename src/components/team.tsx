import Link from "next/link";

const members = [
  {
    name: "Shayan Dutta",
    role: "Founder & CEO",
    avatar:
      "https://ik.imagekit.io/nexwebs/WhatsApp%20Image%202025-08-31%20at%2011.58.30%20AM.jpeg?updatedAt=1756622010969",
    link: "https://www.linkedin.com/in/shayandutta10/",
  },
  {
    name: "Suksham Upamanyu",
    role: "Co-Founder and COO",
    avatar:
      "https://ik.imagekit.io/nexwebs/WhatsApp%20Image%202025-08-31%20at%2011.58.46%20AM.jpeg?updatedAt=1756622009585",
    link: "https://www.linkedin.com/in/suksham-upamanyu-58b930258/",
  },
  {
    name: "Nilav Talukdar",
    role: "Software Engineer",
    avatar:
      "https://ik.imagekit.io/nexwebs/WhatsApp%20Image%202025-08-31%20at%2011.59.46%20AM.jpeg?updatedAt=1756622009640",
    link: "https://www.linkedin.com/in/nilav-talukdar/",
  },
  {
    name: "Krititta Deka",
    role: "PR Head",
    avatar:
      "https://ik.imagekit.io/nexwebs/WhatsApp%20Image%202025-08-31%20at%207.10.43%20PM%20(1).jpeg?updatedAt=1756650921894",
    link: "#",
  },
  {
    name: "Chinmoy Das",
    role: "Marketing Head",
    avatar:
      "https://ik.imagekit.io/nexwebs/WhatsApp%20Image%202025-08-31%20at%207.06.01%20PM%20(1).jpeg?updatedAt=1756650922250",
    link: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="dark:bg-transparent">
      <div className="mx-auto max-w-7xl border-t">
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
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
        <div className="mt-12 md:mt-24">
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
                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
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
