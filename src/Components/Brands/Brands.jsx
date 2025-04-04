import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import useBrands from './useBrands';

export default function Brands() {
 const { Brands , loading } = useBrands()

  if (loading) {
    return <Loader />;
  }

  return (<>
  <Link to={'/brands'} className="text-center text-5xl font-bold  mt-20 bg-white p-5 flex content-center justify-center ">
          <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
          <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
          <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
          <span className="mx-3">Brands</span>
          <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
          <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
          <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
        </Link>
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        
      {Brands?.map((brand) => 
        <Link
        to={`/specificItems/brand/${ brand._id}`}
          key={brand._id}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={brand.image}
            alt={brand.name}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {brand.name}
            </h5>
          </div>
        </Link>
      )}
    </div>
    </>
  );
}
