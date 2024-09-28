export const ROUTES = {
  landing: "/",
  news: "/noticias",
  newsDetails: (id = ":id") => `/noticias/${id}`,
};
