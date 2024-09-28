import { Link } from "react-router-dom";
import { ROUTES } from "../screens/ROUTES";

/*
  poderia usar a tipagem de news? podia, motivos:
  
  Pode se notar que há duas separações por 'pastas' de presentation
  e domain vinda de um conceito de Layered Architecture, cada camada
  tem seu "formato de dado".
  Então, vincular o "formato do dado" da camada de dominio com a de 
  view/presentation é ingessar e acoplar, o melhor dos casos seria fazer
  uma serialização para o formato, mas como estamos em um projeto simples,
  uma tipagem local basta :D
*/
type Props = {
  id: string;
  thumbnailUrl: string;
  title: string;
};

export function NewsItem({ id, thumbnailUrl, title }: Props) {
  return (
    <li>
      <Link to={ROUTES.newsDetails(id)} className="flex items-center flex-col">
        <img
          src={thumbnailUrl}
          alt={title}
          className="border-8 border-white h-[228px] w-[408px] object-cover rounded-lg"
        />

        <strong className="text-center">{title}</strong>
      </Link>
    </li>
  );
}
