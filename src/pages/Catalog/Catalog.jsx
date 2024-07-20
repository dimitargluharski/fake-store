import { CatalogItem } from "../../components/CatalogItem/CatalogItem";
import { useFetch } from "../../hooks/useFetch"

export const Catalog = ({ theme }) => {
  const { data, loading } = useFetch("https://api.escuelajs.co/api/v1/products");

  return (
    <div className={`grid grid-cols-5 gap-2 p-5 ${theme === 'light' ? 'bg-slate-50 text-black' : 'bg-slate-500 text-white'}`}>
      {loading ? (
        <div>Loading...</div>
      ) : data &&
        data.length > 0 ? loading ? 'Loading' : data.map((item) => (
          <CatalogItem key={item.id} data={item} theme={theme} />
        )) : null
      }
    </div>
  )
}