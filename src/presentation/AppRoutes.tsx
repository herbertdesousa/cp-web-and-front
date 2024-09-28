import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./screens/Landing/Landing";
import { News } from "./screens/News/News";
import { ROUTES } from "./screens/ROUTES";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={ROUTES.landing} element={<Landing />} />
        <Route path={ROUTES.news} element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}
