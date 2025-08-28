import React, { lazy } from 'react';
import { SearchIcon } from 'lucide-react';
interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  detailImage: string;
  artist: string;
  specs: string;
}
interface ProductCardProps {
  product: Product;
  onClick: () => void;
}
export function ProductCard({
  product,
  onClick
}: ProductCardProps) {
  return <div className="shadow-[rgba(0,0,0,0.5)_1px_0px_13px_0px] w-[210px] text-center float-left relative p-[10px] m-[0px_0px_33px_33px]">
      <a href={`#${product.id}`} className="text-black no-underline" onClick={onClick}>
        <img width="210" height="235" src={product.image} alt={product.title} decoding="async" loading="lazy" className="mb-[5px] border-t-0 border-l-0 border-r-0 border-b-[0.8px] border-b-[#e8e8e9]" />
      </a>
      <a href={`#${product.id}`} className="text-black absolute top-[10px] right-[10px] block text-indent-[-9999px] capitalize bg-[url('https://gratefulgraffiti.com/wp-content/themes/gratefulgraffiti/images/enlarge.png')] bg-no-repeat w-[20px] h-[20px] no-underline" onClick={onClick}>
        <SearchIcon className="hidden" />
        Enlarge
      </a>
      <h2 className="text-[13px] uppercase m-[0px_0px_2px_0px] font-normal">
        <a href={`#${product.id}`} className="text-black no-underline" onClick={onClick}>
          {product.title}
        </a>
      </h2>
      <a href={`#${product.id}`} className="text-black no-underline" onClick={onClick}>
        {product.price}
      </a>
    </div>;
}