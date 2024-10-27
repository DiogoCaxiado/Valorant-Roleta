import { useQuery } from "@tanstack/react-query";

export default function useCallAgents() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["datakey"],
    queryFn: async () => {
      const response = await fetch(process.env.VITE_API_URL);
      const result = await response.json();
      return result.data;
    },
  });

  return { agents: data || [], isLoading, error };
}
