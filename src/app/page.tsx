import { dataPorcoes, dataLanches, dataBebidas, destaque, combos } from "@/db"
//import { ProducType } from "@/types/ProductTypes";
//import Image from "next/image";
import Card from "./componets/Card";

export default function Home() {

    return (
        <div className="flex flex-col ">
            {/*
            <div className="text-gray-100  w-full p-2 text-center justify-start items-center">
                <h1 className=" text-3xl"> BRASA BURGUER </h1>
                <span className=" text-xl ">A ROTA DO SABOR</span>
            </div>

            <div className=" flex flex-col gap-2 border-2 border-orange-500 m-1.5 p-1.5 ">

                <div className=" relative w-full h-full ">
                    <Image src='/bannershol.jpeg'
                        width={600}
                        height={700}
                        alt="destaque" />
                </div>
            </div> 
          
           
               
            <div className=" flex flex-col gap-2 border-2 border-orange-500 m-1.5 p-1.5 ">

                <div className=" relative w-full h-full ">
                    <Image src='/bannerchopp.png'
                        width={600}
                        height={700}
                        alt="destaque" />
                </div>
            </div>


            <div className=" flex flex-col gap-2 border-2 border-orange-500 m-1.5 p-1.5 ">
                <div className="p-2 w-full justify-center text-center text-xl  ">
                    <h2 className=" text-orange-500">OFERTA DO DIA </h2>
                </div>
                <div>
                    <div className=" relative w-full h-full ">
                        <Image src='/banerdestake.jpeg'
                            width={600}
                            height={700}
                            alt="destaque" />
                    </div>
                </div>
            </div>

*/}
            {
                destaque.map((items, index) => (
                    <div key={index} className=" flex flex-col gap-2 border-2 border-orange-500 m-1.5 p-1.5 ">
                        <div className="p-2  w-full justify-center text-center text-xl  ">
                            <h2 className=" text-orange-400">{items.tate}</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-1 
                                        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2 xl:gap-6 ">
                            {items.itens.map((item, index) => (
                                <Card key={index} product={item} />
                            ))}
                        </div>

                    </div>
                ))
            }

            {
                dataLanches.map((items, index) => (
                    <div key={index} className=" flex flex-col gap-2 border-2 border-orange-500 m-1.5 p-1.5 ">
                        <div className="p-2  w-full justify-center text-center text-xl  ">
                            <h2 className="text-gray-100  ">PEÇA O SEU</h2>

                            <h2 className=" text-orange-400">{items.tate}</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-1 
                                        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2 xl:gap-6 ">
                            {items.itens.map((item, index) => (
                                <Card key={index} product={item} />
                            ))}
                        </div>

                    </div>
                ))
            }
            <div className=" flex flex-col gap-2 border-2 border-orange-500 m-1.5 p-1.5 ">
                <div className="p-2  w-full justify-center text-center text-xl  ">
                    <h2 className="text-gray-100  ">PEÇA A SUA</h2>
                    <h2 className=" text-orange-400">PORÇÃO</h2>
                </div>
                {dataPorcoes.map((items, index) => (
                    <div key={index}>
                        <div className=" flex w-full justify-between text-base px-1.5">
                            <p className="text-orange-400  "> {items.tate}</p>
                            <p className="text-gray-100 flex gap-2 ">
                                <samp> inteira </samp>
                                <samp> meia </samp>
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-1 
                                        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2 xl:gap-6 ">
                            {items.itens.map((item, index) => (
                                <Card key={index} product={item} />
                            ))}
                        </div>
                    </div>
                ))
                }
            </div>
            {
                combos.map((items, index) => (
                    <div key={index} className=" flex flex-col gap-2 border-2 border-orange-500 m-1.5 p-1.5 ">
                        <div className="p-2  w-full justify-center text-center text-xl  ">
                            <h2 className=" text-orange-400">{items.tate}</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-1 
                                        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2 xl:gap-6 ">
                            {items.itens.map((item, index) => (
                                <Card key={index} product={item} />
                            ))}
                        </div>

                    </div>
                ))
            }{
                dataBebidas.map((items, index) => (
                    <div key={index} className=" flex flex-col gap-2 border-2 border-orange-500 m-1.5 p-1.5 ">
                        <div className="p-2  w-full justify-center text-center text-xl  ">
                            <h2 className=" text-orange-400">{items.tate}</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-1 
                                        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2 xl:gap-6 ">
                            {items.itens.map((item, index) => (
                                <Card key={index} product={item} />
                            ))}
                        </div>

                    </div>
                ))
            }
        </div>
    );
}
