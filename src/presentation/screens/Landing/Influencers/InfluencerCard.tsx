import classNames from "classnames";

type Props = {
  img: {
    src: string;
    alt: string;
  };
};

export function InfluencerCard({ img }: Props) {
  return (
    <div className="relative mx-auto max-h-[256px] max-w-[256px]">
      <img src={img.src} alt={img.alt} className="aspect-square" />

      <button
        type="button"
        className={classNames(
          "absolute bottom-0 right-0 px-4 py-2 bg-white text-black font-medium",
          "border-4 border-highlight rounded-lg overflow-hidden text-lg",
          "hover:-translate-y-1 transition"
        )}
      >
        VOTAR
      </button>
    </div>
  );
}
