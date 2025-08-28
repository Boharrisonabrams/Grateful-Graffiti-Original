import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductDetails } from './ProductDetails';
import { SearchIcon } from 'lucide-react';
export function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const handleProductClick = (productId: string) => {
    setActiveProduct(productId);
  };
  const products = [{
    id: 'product-125',
    title: 'Om-Small',
    price: '$14.99',
    image: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/OM-210x235.jpg',
    detailImage: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/OM-465x465.jpg',
    artist: 'Chuck Anderson',
    specs: 'Item #: OM Size: 5.25" W Material: Vinyl Use: Indoor/Outdoor Care: Remove prior to car wash. Made in the USA FREE SHIPPING'
  }, {
    id: 'product-123',
    title: 'World – Small',
    price: '$14.99',
    image: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/World-210x235.jpg',
    detailImage: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/World-465x465.jpg',
    artist: 'Chuck Anderson',
    specs: 'Item #: WORLD-SM Size: 5.25" Material: Vinyl Use: Indoor/Outdoor Care: Remove prior to car wash. Made in the USA FREE SHIPPING'
  }, {
    id: 'product-121',
    title: 'Peace Word',
    price: '$19.99',
    image: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/PeaceWord-465x4651-210x235.jpg',
    detailImage: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/PeaceWord-465x4651.jpg',
    artist: 'Chuck Anderson',
    specs: 'Item #: PEACE-W Size: 8" W Material: Vinyl Use: Indoor/Outdoor Care: Remove prior to car wash. Made in the USA FREE SHIPPING'
  }, {
    id: 'product-119',
    title: 'Love',
    price: '$19.99',
    image: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/LoveWord-210x235.jpg',
    detailImage: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/LoveWord-465x465.jpg',
    artist: 'Chuck Anderson',
    specs: 'Item #: LOVE Size: 6.75" W Material: Vinyl Use: Indoor/Outdoor Care: Remove prior to car wash. Made in the USA FREE SHIPING'
  }, {
    id: 'product-117',
    title: 'Peace Sign – Large',
    price: '$24.99',
    image: 'https://gratefulgraffiti.com/wp-content/uploads/2016/02/peace-sign-large-1-210x235.png',
    detailImage: 'https://gratefulgraffiti.com/wp-content/uploads/2016/02/peace-sign-large-1-465x465.png',
    artist: 'Chuck Anderson',
    specs: 'Item #: PEACESIGN-LG Size: 10" Material: Vinyl Use: Indoor/Outdoor Care: Remove prior to car wash. Made in the USA FREE SHIPPING'
  }, {
    id: 'product-115',
    title: 'Peace Sign – Small',
    price: '$14.99',
    image: 'https://gratefulgraffiti.com/wp-content/uploads/2016/02/peace-sign-small-1-210x235.png',
    detailImage: 'https://gratefulgraffiti.com/wp-content/uploads/2016/02/peace-sign-small-1-465x465.png',
    artist: 'Chuck Anderson',
    specs: 'Item #: PEACESIGN-SM Size: 5.25" Material: Vinyl Use: Indoor/Outdoor Care: Remove prior to car wash. Made in the USA FREE SHIPPING'
  }, {
    id: 'product-113',
    title: 'Heart',
    price: '$14.99',
    image: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/Heart-210x235.jpg',
    detailImage: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/Heart-465x465.jpg',
    artist: 'Chuck Anderson',
    specs: 'Item #: HEART-SM Size: 5.25" H Material: Vinyl Use: Indoor/Outdoor Care: Remove prior to car wash. Made in the USA FREE SHIPPING'
  }, {
    id: 'product-98',
    title: 'Green',
    price: '$19.99',
    image: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/GreenWord-465x4651-210x235.jpg',
    detailImage: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/GreenWord-465x4651.jpg',
    artist: 'Chuck Anderson',
    specs: 'Item #: GREEN Size: 8" W Material: Vinyl Use: Indoor/Outdoor Care: Remove prior to car wash. Made in the USA FREE SHIPPING'
  }, {
    id: 'product-79',
    title: 'Skull',
    price: '$14.99',
    image: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/Skull-210x235.jpg',
    detailImage: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/Skull-465x465.jpg',
    artist: 'Chuck Anderson',
    specs: 'Item #: SKULL Size: 8.25" H Material: Vinyl Use: Indoor/Outdoor Care: Remove prior to car wash. Made in the USA FREE SHIPPING'
  }, {
    id: 'product-69',
    title: 'Peace Sign Hand',
    price: '$14.99',
    image: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/PeaceHandMagnet-210x235.jpg',
    detailImage: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/PeaceHandMagnet-465x465.jpg',
    artist: 'Chuck Anderson',
    specs: 'Item #: PEACEHAND Size: 5" H Material: Vinyl Use: Indoor/Outdoor Care: Remove prior to car wash. Made in the USA FREE SHIPPING'
  }, {
    id: 'product-66',
    title: 'Four Leaf Clover',
    price: '$14.99',
    image: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/FourLeafClover-210x235.jpg',
    detailImage: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/FourLeafClover-465x465.jpg',
    artist: 'Chuck Anderson',
    specs: 'Item #: CLOVER Size: 5" H Material: Vinyl Use: Indoor/Outdoor Care: Remove prior to car wash. Made in the USA FREE SHIPPING'
  }, {
    id: 'product-63',
    title: 'California',
    price: '$14.99',
    image: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/CaliforniaMagnet-210x235.jpg',
    detailImage: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/CaliforniaMagnet-465x465.jpg',
    artist: 'Chuck Anderson',
    specs: 'Item #: CALI Size: 5" H Material: Vinyl Use: Indoor/Outdoor Care: Remove prior to car wash. Made in the USA FREE SHIPPING'
  }, {
    id: 'product-60',
    title: 'Big Apple',
    price: '$14.99',
    image: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/BigAppleMagnet-210x235.jpg',
    detailImage: 'https://gratefulgraffiti.com/wp-content/uploads/2013/08/BigAppleMagnet-465x465.jpg',
    artist: 'Chuck Anderson',
    specs: 'Item #: BIGAPPLE Size: 5" H Material: Vinyl Use: Indoor/Outdoor Care: Remove prior to car wash. Made in the USA FREE SHIPPING'
  }];
  return <div className="w-full p-[10px_30px_10px_30px] bg-[#fffff1] text-[#15041d] text-[15px] leading-normal font-[muliregular,Arial,sans-serif]">
      <div>
        <div className="w-[1007px] p-[10px_10px_10px_23px] mb-5 shadow-[rgba(0,0,0,0.5)_1px_0px_13px_0px]">
          <div className="w-[295px] float-left text-[18px] p-[20px_0px_0px_15px]">
            <h1 className="font-[montserratbold] text-[50px] font-normal uppercase text-[#ec2327] leading-[50px] p-0 m-[0px_0px_10px_0px]">
              Products
            </h1>
            <p>
              Browse and shop limited edition car magnets created by artists.
              Featuring the work of Chuck Anderson. More artists coming soon –
              see the{' '}
              <a title="Artists" href="/artists/" className="text-black underline decoration-black">
                Artists
              </a>{' '}
              page to find out more.
            </p>
          </div>
          <div className="w-[650px] float-right">
            <img width="650" height="314" src="https://gratefulgraffiti.com/wp-content/uploads/2013/08/productsfeatured-650x314.jpg" alt="Featured Grateful Graffiti products" decoding="async" fetchPriority="high" srcSet="https://gratefulgraffiti.com/wp-content/uploads/2013/08/productsfeatured.jpg 650w, https://gratefulgraffiti.com/wp-content/uploads/2013/08/productsfeatured-465x224.jpg 465w, https://gratefulgraffiti.com/wp-content/uploads/2013/08/productsfeatured-632x305.jpg 632w" sizes="(max-width: 650px) 100vw, 650px" className="border-0" />
          </div>
          <div className="clear-both"></div>
        </div>
        <div>
          <div className="w-[225px] float-left">
            <h3 className="text-[#ec2327] text-[16px] m-0">CATEGORIES</h3>
            <ul className="box-border p-0 m-[0px_0px_15px_0px]">
              <li className="list-none">
                <a href="https://gratefulgraffiti.com/product-categories/car-magnets/" title="View all posts in Car Magnets" className="text-black no-underline">
                  Car Magnets
                </a>
              </li>
              <li className="list-none">
                <a href="https://gratefulgraffiti.com/product-categories/new/" title="View all posts in New" className="text-black no-underline">
                  New
                </a>
              </li>
            </ul>
            <h3 className="text-[#ec2327] text-[16px] m-0">ARTISTS</h3>
            <ul className="box-border p-0 m-[0px_0px_15px_0px]">
              <li className="list-none">
                <a href="https://gratefulgraffiti.com/product-artists/chuck-anderson/" title="View all posts in Chuck Anderson" className="text-black no-underline">
                  Chuck Anderson
                </a>
              </li>
            </ul>
            <h3 className="text-[#ec2327] text-[16px] m-0">
              <a href="https://gratefulgraffiti.com/products/" className="text-[#ec2327] no-underline">
                SHOW ALL
              </a>
            </h3>
            <br />
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" className="m-0">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
              <input type="image" src="https://gratefulgraffiti.com/wp-content/themes/gratefulgraffiti/images/cartbtn.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" className="border-0" />
            </form>
            <div className="bg-black text-white text-[12px] p-[10px] mt-10">
              <p>
                Browse our products and purchase securely online with our
                PayPal-powered cart system. Fast and easy check-out with PayPal.
                PayPal account not required.
              </p>
            </div>
          </div>
          <div className="float-right w-[790px]">
            {products.map(product => <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product.id)} />)}
          </div>
          <div className="clear-both"></div>
          <div className="hidden">
            {products.map(product => <ProductDetails key={product.id} product={product} isActive={activeProduct === product.id} />)}
          </div>
        </div>
      </div>
    </div>;
}