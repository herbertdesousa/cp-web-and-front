import { controllers } from "../../../domain/Controllers";

const greatestPlayer = controllers.standing.GetGreatestPlayer();

export function LandingStanding() {
  return (
    <section
      id="podio"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="pt-16 flex gap-y-16 flex-col items-center">
        <h2 className="font-bold text-4xl uppercase text-center">
          Pódio da Mahindra
        </h2>

        <div className="flex flex-col flex-1 gap-y-2">
          <img
            src={greatestPlayer.imgUrl}
            alt="Primeiro Lugar da Mahindra"
            className="h-64"
          />

          <div className="flex flex-col items-center py-1">
            <strong className="font-bold text-lg uppercase">
              {greatestPlayer.name}
            </strong>
            <strong className="text-highlight uppercase">Top 1</strong>
          </div>
        </div>
      </div>

      <span className="absolute top-0 right-16 bg-highlight opacity-20 h-screen w-8"></span>
      <span className="absolute top-0 right-10 bg-highlight opacity-20 h-screen w-4"></span>
    </section>
  );
}
