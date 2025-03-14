//import ProductImage from "@/app/componets/ProductImage";
import { ProducType } from "@/types/ProductTypes";

type productProps = {
    product: ProducType
}
export default function Card({ product }: productProps) {
    return (
        <div className=" flex flex-col text-gray-300  sm:items-center cursor-pointer ">

            <div >
                {(product.category === 'bebidas') ? (
                   <div className=" text-gray-300 w-full justify-between cursor-pointer" >
                    
                   <div className=" font-bold w-full items-center ">
                       <div className="flex items-center justify-between text-xs">
                           <p className="    ">
                               {product.name}
                           </p>                            
                               <samp className=" text-gray-300 w-16 bg-orange-500 text-sm font-bold  p-1">
                                   R${product.price}
                               </samp>
                       
                       </div>
                   </div>
           </div>
                ) : (
                    <div className=" flex sm:flex-col sm:h-60 sm:w-60  sm:items-center sm:justify-center">

                        <div className="relative flex-1 basis-1/6 min-h-10 min-w-10 m-1
                                sm:h-56 sm:w-56 sm:basis-5/6 ">
                                    {                            

                                        //<ProductImage product={product} fill />
                                    }
                        </div>
                        <div className=" basis-5/6 font-bold items-center justify-center my-auto sm:basis-1/6">
                            {(product.category === 'porcao') ? (
                                <div className="flex flex-col text-xs sm:gap-1 sm:p-3">

                                    <div className="flex items-center justify-between text-xs">
                                        <p className=" ">
                                            {product.name}
                                        </p>
                                        <div className=" flex gap-0.5">
                                            <samp className=" text-gray-300 bg-orange-500 text-sm font-bold text-center py-0.5">
                                                R${product.price}
                                            </samp>
                                            <samp className=" text-gray-300 bg-orange-500 text-sm font-bold text-center py-0.5">
                                                R${product.price1}
                                            </samp>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex text-xs items-center justify-between sm:gap-3.5 sm:p-3">
                                    <div>
                                        {(product.category === 'lancheCombo') ? (
                                            <div className=" flex flex-col items-start">
                                                <p className="   ">
                                                    {product.name}
                                                </p>
                                                <p className=" text-xs  text-orange-400">
                                                    1+coca ks +1batata combo
                                                </p>
                                            </div>
                                        ) : (
                                            <div>
                                                <p className="  ">
                                                    {product.name}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <div >
                                        <samp className=" text-gray-300 bg-orange-500 text-sm font-bold text-center p-1">
                                            R${product.price}
                                        </samp>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                )}
            </div>
            {(product.category === 'lanche' || 'lancheCombo') && (
                <div className=" text-xs sm:w-60 sm:p-1">
                    <p >
                        {product.description}
                    </p>
                </div>
            )}

        </div>

    )
}

