import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect( () => {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
        
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;

// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

//     fetch(url)
//      .then((res) => res.json())
//      .then((res) => {
//         setData(res[currency]);
//         console.log(data);
//       })
//      .catch((error) => {
//         console.error("Error fetching currency data:", error);
//       });
//   }, [currency]);

//   console.log(data);

//   return data;
// }

// export default useCurrencyInfo;