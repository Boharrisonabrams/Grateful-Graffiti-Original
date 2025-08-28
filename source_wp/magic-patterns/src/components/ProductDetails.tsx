import React, { lazy } from 'react';
interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  detailImage: string;
  artist: string;
  specs: string;
}
interface ProductDetailsProps {
  product: Product;
  isActive: boolean;
}
export function ProductDetails({
  product,
  isActive
}: ProductDetailsProps) {
  if (!isActive) return null;
  return <div id={product.id} className="overflow-x-hidden overflow-y-hidden">
      <div className="float-left w-[465px] mr-5">
        <img width="465" height="465" src={product.detailImage} alt={product.title} decoding="async" loading="lazy" className="border-0" />
      </div>
      <div className="w-[300px] float-right m-[10px_10px_0px_0px]">
        <h2 className="text-[17px] font-[montserratbold] text-[#ec2327] m-0">
          {product.title}
        </h2>
        <h3 className="font-normal text-[13px] m-[0px_0px_10px_0px]">
          Limited-edition Artist Series: {product.artist}
        </h3>
        <div className="text-[16px] m-[0px_0px_15px_0px]">{product.price}</div>
        Limited edition car magnet is durable, flexible vinyl surface magnet is
        ideal for outdoor and indoor use. Great on your car, locker or fridge -
        or any metal surface compatible with magnets. This magnet is part of a
        limited-edition series designed by designer and illustrator, Chuck
        Anderson. Learn more about him{' '}
        <a title="Artists" href="/artists/" className="text-[#ec2327] no-underline">
          here
        </a>
        .
        <h4 className="text-[#ec2327] font-normal text-[14px] p-0 m-0">
          Specs:
        </h4>
        {product.specs}
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" className="border-0" />
      </div>
    </div>;
}