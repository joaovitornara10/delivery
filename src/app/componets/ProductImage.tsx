'use client'
import { useState } from "react"
import Image from "next/image"
import { ProducType } from "@/types/ProductTypes"

type ProductImageProps ={
    product: ProducType;
    fill?: boolean;
};

export default function ProductImage({product,fill}:ProductImageProps){
    const [loading, setLoading] = useState(true);
    return fill ? (
        <Image
            src='/imglanche.jpeg'
            fill
            alt={product.name}
            className={`object-cover ${
                loading ? 'scale-110 blur-3xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
            }`}
            onLoadingComplete={ ()=> setLoading(false)}
        >
        </Image>
    ):(
        <Image
        src='/imglanche.jpeg'
        width={400}
            height={700}
            alt={product.name}
            className={`object-cover ${
                loading ? 'scale-110 blur-3xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
            }`}
            onLoadingComplete={ ()=> setLoading(false)}
        >
        </Image>
    )
}
