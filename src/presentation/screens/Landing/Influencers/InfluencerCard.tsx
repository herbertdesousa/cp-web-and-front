import classNames from "classnames";
import { useState } from "react";

type Props = {
  votes: number;
  img: {
    src: string;
    alt: string;
  };
};

export function InfluencerCard({ img, votes }: Props) {
  const [currentVotes, setCurrentVotes] = useState(votes);

  function handleIncreaseVotes() {
    setCurrentVotes((prev) => prev + 1);
  }

  return (
    <div className="flex flex-col items-center gap-y-4 relative mx-auto max-w-[256px]">
      <img src={img.src} alt={img.alt} className="aspect-square" />

      <span className="text-white">{currentVotes} Votos</span>

      <button
        type="button"
        onClick={handleIncreaseVotes}
        className={classNames(
          "absolute bottom-6 right-0 px-4 py-2 bg-white text-black font-medium",
          "border-4 border-highlight rounded-lg overflow-hidden text-lg",
          "hover:-translate-y-1 transition"
        )}
      >
        VOTAR
      </button>
    </div>
  );
}
