import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./screens/Landing/Landing";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
