import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./screens/Landing/Landing";
import { News } from "./screens/News/News";
import { ROUTES } from "./screens/ROUTES";
import { NewsDetails } from "./screens/Landing/News/NewsDetails";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={ROUTES.landing} element={<Landing />} />
        <Route path={ROUTES.news} element={<News />} />
        <Route path={ROUTES.newsDetails()} element={<NewsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
