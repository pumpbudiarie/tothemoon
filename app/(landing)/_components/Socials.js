import React from "react";
import LinkCardCircle from "@/components/LinkCardCircle";

const cards = [
  {
    link: "https://x.com/jailbudiarie",
    title: "X",
    icon: "X",
  },
  {
    link: "https://x.com/i/communities/1968492677957304627",
    title: "X Community",
    icon: "X",
  },
  {
    link: "#",
    title: "telegram",
    icon: "Telegram",
  },
  {
    link: "https://www.instagram.com/budiariesetiadi/",
    title: "Instagram",
    icon: "Instagram",
  },
  {
    link: "#",
    title: "Tiktok",
    icon: "Tiktok",
  },
];

const Socials = () => {
  return (
    <div>
      <div className="hidden">
        <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center">
          Socials
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, idx) => (
          <LinkCardCircle key={idx} props={card} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
