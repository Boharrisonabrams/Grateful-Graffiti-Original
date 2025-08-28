import React, { Children } from 'react';
import { FacebookIcon, TwitterIcon } from 'lucide-react';
export function App() {
  return <div className="w-full min-h-full bg-[#fffff1] text-[#15041d] text-[15px] leading-normal font-['muliregular',Arial,sans-serif]">
      <div className="w-full relative pb-[368px] mx-[210.4px] bg-[#fffff1]">
        {/* Header */}
        <header className="block overflow-hidden px-[30px] m-0">
          <a href="https://gratefulgraffiti.com" className="text-[#ec2327] no-underline">
            <img src="https://gratefulgraffiti.com/wp-content/themes/gratefulgraffiti/images/logo.jpg" alt="Grateful Graffiti" className="float-left border-0 mt-[18px]" />
          </a>
          <ul className="float-right w-[137px] h-[42px] p-[10px] bg-[url('https://gratefulgraffiti.com/wp-content/themes/gratefulgraffiti/images/socialbg.png')] bg-no-repeat">
            <li className="float-left list-none mx-[5px]">
              <a href="https://www.facebook.com/grateful.graffiti" target="_blank" className="w-[34px] h-[32px] block text-[#ec2327] no-underline">
                <FacebookIcon className="w-[24px] h-[24px] text-white" />
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li className="float-left list-none mx-[5px]">
              <a href="http://www.twitter.com/getgrateful" target="_blank" className="w-[34px] h-[32px] block text-[#ec2327] no-underline">
                <TwitterIcon className="w-[24px] h-[24px] text-white" />
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li className="float-left list-none mx-[5px]">
              <a href="http://www.pinterest.com/gratefulgraffit/" target="_blank" className="w-[34px] h-[32px] block text-[#ec2327] no-underline">
                <div className="w-[24px] h-[24px] text-white" />
                <span className="sr-only">Pinterest</span>
              </a>
            </li>
          </ul>
        </header>
        {/* Navigation */}
        <nav className="block absolute right-[-23px] top-[110px] w-[593px] h-[27px] p-[20px] m-0 bg-[url('https://gratefulgraffiti.com/wp-content/themes/gratefulgraffiti/images/navbg.png')] bg-no-repeat">
          <div>
            <ul className="list-none p-0 m-0">
              <li className="float-left mt-[3px] mx-[17px]">
                <a href="https://gratefulgraffiti.com/about/" className="text-white text-[12px] no-underline">
                  ABOUT
                </a>
              </li>
              <li className="float-left mt-[3px] mx-[17px]">
                <a href="https://gratefulgraffiti.com/products/" className="text-white text-[12px] no-underline">
                  PRODUCTS
                </a>
              </li>
              <li className="float-left mt-[3px] mx-[17px]">
                <a href="https://gratefulgraffiti.com/artists/" aria-current="page" className="text-[#ec2327] text-[15px] no-underline">
                  ARTISTS
                </a>
              </li>
              <li className="float-left mt-[3px] mx-[17px]">
                <a href="https://gratefulgraffiti.com/grateful-gallery/" className="text-white text-[12px] no-underline">
                  GRATEFUL GALLERY
                </a>
              </li>
              <li className="float-left mt-[3px] mx-[17px]">
                <a href="https://gratefulgraffiti.com/press/" className="text-white text-[12px] no-underline">
                  PRESS
                </a>
              </li>
              <li className="float-left mt-[3px] ml-[17px]">
                <a href="https://gratefulgraffiti.com/contact/" className="text-white text-[12px] no-underline">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Content */}
        <div id="content" className="px-[30px] py-[10px]">
          <div id="artists-page">
            <div id="artists-top" className="shadow-[rgba(0,0,0,0.5)_1px_0px_13px_0px] w-[1007px] p-[10px_10px_10px_23px] mb-[40px]">
              <div className="w-[295px] float-left text-[18px] pt-[20px] pl-[15px]">
                <h1 className="font-['montserratbold'] text-[50px] font-normal capitalize block w-[218px] h-[37px] indent-[-9999px] p-0 mb-[15px] bg-[url('https://gratefulgraffiti.com/wp-content/themes/gratefulgraffiti/images/artists.png')] bg-no-repeat">
                  Artists
                </h1>
                <p className="p-0 m-0">
                  Learn about the artists behind our fabulous limited edition
                  car magnets. Watch this space as we add new, fresh collections
                  by emerging and well-known artists for you to discover!
                </p>
              </div>
              <div className="w-[650px] float-right">
                <img width="650" height="314" src="https://gratefulgraffiti.com/wp-content/uploads/2013/08/artistsfeatured-650x3141-650x314.jpg" alt="Artists - image of paint brushes" decoding="async" fetchpriority="high" srcSet="https://gratefulgraffiti.com/wp-content/uploads/2013/08/artistsfeatured-650x3141.jpg 650w, https://gratefulgraffiti.com/wp-content/uploads/2013/08/artistsfeatured-650x3141-465x224.jpg 465w, https://gratefulgraffiti.com/wp-content/uploads/2013/08/artistsfeatured-650x3141-632x305.jpg 632w" sizes="(max-width: 650px) 100vw, 650px" className="border-0" />
              </div>
              <div className="clear-both"></div>
            </div>
            <div id="artists-bottom">
              <div className="shadow-[rgba(0,0,0,0.5)_1px_0px_13px_0px] mb-[20px]">
                <img width="290" height="295" src="https://gratefulgraffiti.com/wp-content/uploads/2013/08/chuckanderson-290x295.jpg" alt="Picture of Chuck Anderson" decoding="async" className="border-0" />
                <div className="w-[680px] float-right text-[13px] py-[15px] pr-[20px]">
                  <h2 className="text-[28px] font-normal font-['montserratbold'] uppercase text-[#ec2327] float-left p-0 m-0">
                    Chuck Anderson
                  </h2>
                  <a href="http://www.nopattern.com" target="_blank" className="text-[#ec2327] underline float-right mt-[5px] mr-[5px]">
                    www.nopattern.com
                  </a>
                  <div className="clear-both"></div>
                  <p className="leading-[20px] my-[13px]">
                    Since 2003, a year after graduating high school, Chuck has
                    been collaborating with clients such as Microsoft, Nike,
                    Warner Bros., Reebok, Burton, Target, and more. In addition
                    to this work, Chuck also produces much of his own personal
                    art, design, & photography as well as collaborations with
                    non-profits such as Invisible Children, charity:water, and
                    WordMadeFlesh, among others. Chuck has also spoken about his
                    work & story at many universities & design conferences
                    around the world and was a judge at the annual Art
                    Director's Club Awards in NYC. In November 2010, Chuck was
                    named a "Design Icon" by Computer Arts Magazine.
                  </p>
                  <p className="leading-[20px] my-[13px]">
                    Chuck is our debut artist – see his limited-edition
                    exclusive designs for our limited edition car magnets
                    <a title="Products" href="http://www.gratefulgraffiti.com/product-artists/chuck-anderson/" className="text-[#ec2327] no-underline">
                      here
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}