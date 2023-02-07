import { createContext, useMemo, useState } from "react";

export let CarContext = createContext<any>({});

let PageSize = 24;
export default function CarProvider({ children }: any) {
  const [minValue, setminValue] = useState(10);
  const [maxValue, setmaxValue] = useState(100);

  const [slug, setslug] = useState("electric-car");
  const [brand, setbrand] = useState("suv");
  const [transmission, settransmission] = useState("suv");

  const [carsData, setcarsData] = useState([]);
  const [totalLength, settotalLength] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  const [firstIndex, setfirstIndex] = useState(0);
  const [lastIndex, setlasIndex] = useState(9);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    setfirstIndex(firstPageIndex);
    const lastPageIndex = firstPageIndex + PageSize;
    setlasIndex(lastPageIndex);
    return carsData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, carsData]);

  return (
    <CarContext.Provider
      value={{
        minValue,
        setminValue,

        maxValue,
        setmaxValue,

        carsData,
        setcarsData,

        currentPage,
        setCurrentPage,

        PageSize,
        currentData,

        totalLength,
        settotalLength,

        slug,
        setslug,

        transmission,
        settransmission,

        brand,
        setbrand,

        firstIndex,
        lastIndex
      }}
    >
      {children}
    </CarContext.Provider>
  );
}