import { useEffect, useState } from "react";
import Post from "./Post";

export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`);
            const result = await response.json();

            // Assuming 'id' is unique in the API response, use it for filtering
            setData(prevData => {
                // Create a set to track unique ids
                const idSet = new Set(prevData.map(item => item.id));

                // Filter out items that are already in idSet
                const filteredResult = result.filter(item => !idSet.has(item.id));

                // Concatenate previous data with filtered result
                return [...prevData, ...filteredResult];
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, [pageNo]);
  return <Post data={data} setPageNo={setPageNo} />;
}
