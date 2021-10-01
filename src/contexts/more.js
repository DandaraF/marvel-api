import { useCallback } from "react";

export function handleMore() {
  useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get("characters", {
        params: {
          offset,
        },
      });
      setCharacters([...characters, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  });
}

//  const handleMore = useCallback(async () => {
//   try {
//     const offset = characters.length;
//     const response = await api.get("characters", {
//       params: {
//         offset,
//       },
//     });
//     setCharacters([...characters, ...response.data.data.results]);
//   } catch (err) {
//     console.log(err);
//   }
// });
