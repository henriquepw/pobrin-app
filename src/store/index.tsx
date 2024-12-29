import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      gcTime: 1000 * 60 * 60 * 24, // 24 hour
      staleTime: 1000 * 60 * 5, // 5 min
    },
  },
});

const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

type Props = {
  children: React.ReactNode;
};
export function StoreProvider({ children }: Props) {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}
