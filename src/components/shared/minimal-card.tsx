import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card";

export function MinimalCardContainer() {
  const cards = [
    {
      title: "Mobile and Website Development",
      description:
        "Building fast, scalable, and user-friendly mobile apps and websites tailored to your business needs.",
      src: "https://pbs.twimg.com/media/GgMiuRpa4AAoW2y?format=jpg&name=medium",
    },
    {
      title: "Digital Marketing",
      description:
        "Boosting your presence with targeted strategies in SEO, social media, and performance marketing.",
      src: "https://pbs.twimg.com/media/GgHZJN0aoAA__92?format=jpg&name=medium",
    },
    {
      title: "UI/UX Design",
      description:
        "Crafting intuitive and visually appealing designs that deliver seamless user experiences.",
      src: "https://pbs.twimg.com/media/GgCPjsQacAAWvm3?format=jpg&name=medium",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center rounded-lg">
        <div className="flex flex-wrap items-center justify-between">
          {cards.map((card, index) => (
            <MinimalCard className="m-2 w-[380px] border shadow-md" key={index}>
              <MinimalCardImage
                className="h-[320px]"
                src={card.src}
                alt={card.title}
              />
              <MinimalCardTitle>{card.title}</MinimalCardTitle>
              <MinimalCardDescription>
                {card.description}
              </MinimalCardDescription>
            </MinimalCard>
          ))}
        </div>
      </div>
    </div>
  );
}
