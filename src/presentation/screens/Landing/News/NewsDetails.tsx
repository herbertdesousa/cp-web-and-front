import { useNavigate } from "react-router-dom";

export function NewsDetails() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <section className="flex flex-col gap-8 p-8">
      <button
        type="button"
        className="px-4 py-1 uppercase rounded transition self-start hover:-translate-y-2 font-medium"
        onClick={handleGoBack}
      >
        Voltar
      </button>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <img
            src="/news-1.png"
            alt="Corrida Vencida pela Mahindra"
            className="w-full h-full object-cover"
          />

          <h1 className="text-lg font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}
