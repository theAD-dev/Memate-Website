import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MemateWiki from "./memate-wiki";


const MemateWikiComponent = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MemateWiki />
    </QueryClientProvider>
  );
};

export default MemateWikiComponent;
