import axios from "axios";

export type Person = {
  id: number;
  name: string;
  imageUrl: string;
  birthPlace: string;
};

export async function fetchData(options: {
  pageIndex: number;
  pageSize: number;
}): Promise<{ rows: Person[]; pageCount: number }> {
  // Fetch data from the API
  const response = await axios.get(
    "https://api.ganjoor.net/api/ganjoor/poets",
    {
      params: {
        page: options.pageIndex + 1,
        count: options.pageSize,
      },
    },
  );

  // Extract the data from the response
  const data = response.data;

  return {
    rows: data._embedded.poets,
    pageCount: data.pageCount,
  };
}

// // Example usage with react-query
// function MyComponent() {
//   const { data, isLoading } = useQuery<{ rows: Person[]; pageCount: number }>(
//     ["poets", pageIndex, pageSize],
//     () => fetchData({ pageIndex, pageSize }),
//   );

//   // ...
// }
