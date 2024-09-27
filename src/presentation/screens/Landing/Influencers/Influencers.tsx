import { InfluencerCard } from "./InfluencerCard";
import { InfluencersRow } from "./InfluencerRow";

export function Influencers() {
  return (
    <section className="w-full p-8 flex flex-col min-h-screen bg-highlight gap-8 md:flex-row">
      <InfluencersRow>
        <InfluencerCard
          img={{
            src: "influencer-russo.png",
            alt: "Influencer Russo",
          }}
        />
        <InfluencerCard
          img={{
            src: "influencer-inutilismo.png",
            alt: "Influencer Brasileiro",
          }}
        />
      </InfluencersRow>

      <div className="flex px-4 text-center text-white text-4xl font-semibold items-center">
        <span className="mx-auto">
          A <u>INTERNET</u> EM PESO <br />
          PROMOVENDO A <br />
          <u>FORMULA E</u> DA <u>MAHINDRA</u>
          <br />
          <br />
          VOTE E <u>GANHE</u>!!!
        </span>
      </div>

      <InfluencersRow>
        <InfluencerCard
          img={{
            src: "influencer-usa.png",
            alt: "Influencer EUA",
          }}
        />
        <InfluencerCard
          img={{
            src: "influencer-freddie.png",
            alt: "Influencer Freddie",
          }}
        />
      </InfluencersRow>
    </section>
  );
}
