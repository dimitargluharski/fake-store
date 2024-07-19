import { Button } from "../Button/Button";
import { Image } from "../Image/Image";

import { CgDetailsMore } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { Price } from "../Price/Price";
import { Title } from "../Title/Title";


export const CatalogItem = ({ data }) => {
  if (!data) {
    console.log('No data provided');
    return null;
  }

  return (
    <div className="p-2 bg-slate-300">
      <div className="relative transition-transform transform group gap-5">
        <Image image={data.category.image} />

        <div className="absolute inset-0 flex items-center justify-center bg-transparent hover:bg-gray-600/70">
          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button styles="p-2 bg-slate-50 text-gray-900 hover:bg-slate-500 hover:text-slate-50 text-white italic rounded-md flex items-center">
              <CgDetailsMore className="mr-1" />
              view details
            </Button>

            <Button styles="p-2 bg-green-600 hover:bg-green-700 text-white italic rounded-md flex items-center">
              <FaPlus className="mr-1" />
              add to cart
            </Button>
          </div>
        </div>
      </div>


      <div className="bg-slate-50 flex justify-between items-center">
        <Title title={data.title} />
        <Price price={data.price} />
      </div>
    </div>
  );
};
