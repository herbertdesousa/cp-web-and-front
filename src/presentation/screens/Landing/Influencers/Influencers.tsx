import { controllers } from "../../../../domain/Controllers";
import { InfluencerCard } from "./InfluencerCard";
import { InfluencersRow } from "./InfluencerRow";

const INFLUENCER_UK = controllers.influencer.GetUK();
const INFLUENCER_BRAZILIAN = controllers.influencer.GetBrazilian();
const INFLUENCER_RUSSIAN = controllers.influencer.GetRussian();
const INFLUENCER_USA = controllers.influencer.GetUSA();

export function Influencers() {
  return (
    <section className="w-full p-8 flex flex-col justify-center min-h-screen bg-highlight gap-8 md:flex-row">
      <InfluencersRow>
        <InfluencerCard
          img={{
            src: INFLUENCER_UK.imgUrl,
            alt: INFLUENCER_UK.imgAlt,
          }}
        />
        <InfluencerCard
          img={{
            src: INFLUENCER_BRAZILIAN.imgUrl,
            alt: INFLUENCER_BRAZILIAN.imgAlt,
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
            src: INFLUENCER_RUSSIAN.imgUrl,
            alt: INFLUENCER_RUSSIAN.imgAlt,
          }}
        />
        <InfluencerCard
          img={{
            src: INFLUENCER_USA.imgUrl,
            alt: INFLUENCER_USA.imgAlt,
          }}
        />
      </InfluencersRow>
    </section>
  );
}
