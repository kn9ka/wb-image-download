import { HomePage } from "@/pages/home";

import { AppProviders } from "./providers/AppProviders";

export const App = () => {
  return (
    <AppProviders>
      <HomePage />
    </AppProviders>
  );
};
