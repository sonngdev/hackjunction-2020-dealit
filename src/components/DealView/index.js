import React from 'react';
import Button from 'components/Shared/Button';
import PinSvg from 'assets/svgs/pin.svg';
import BackButtonSvg from 'assets/svgs/back-button.svg';
import CaretRightSvg from 'assets/svgs/caret-right.svg';

function DealView() {
  return (
    <div className="h-screen">
      <img
        src="https://res.cloudinary.com/nguyen-thanhson/image/upload/v1604811710/walmart-2000_awyzy6.jpg"
        alt="Walmart"
        className="w-full object-cover"
        style={{ height: 171 }}
      />
      <button className="fixed" style={{ top: '1rem', left: '1rem' }}>
        <img src={BackButtonSvg} alt="" />
      </button>
      <div
        className="bg-pearl p-5 relative"
        style={{ height: 'calc(100vh - 171px)' }}
      >
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Walmart</h1>

          <div className="bg-lightgreen text-green rounded-lg px-2 text-xs flex items-center">
            <div>Save</div>
            <div className="text-xl ml-1">$17</div>
          </div>
        </div>
        <div className="text-xs font-normal text-gray-600">
          Sale until 8/11/2020
        </div>

        <h2 className="font-bold text-lg mt-6 mb-2">Address</h2>
        <div className="flex">
          <img src={PinSvg} alt="Pin icon" />
          <div
            className="text-xs font-normal text-gray-600 ml-2"
            style={{ lineHeight: 1.2 }}
          >
            11400 W Broad St Rd, Glen Allen, VA 23060, United States
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/nguyen-thanhson/image/upload/v1604811556/walmart_suyprd.png"
          alt="Google Map location of Walmart"
          className="w-full object-cover mt-3"
          style={{ height: 93 }}
        />

        <h2 className="font-bold text-lg mt-6 mb-2">Your need list</h2>
        <div className="bg-white rounded-xl w-full p-2 flex mb-3">
          <img
            src="https://i5.walmartimages.com/asr/50a0f02e-1ac5-4e6b-99b4-875ea13fbcee.f9970846adbf26acb9c7821b05cb0b27.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
            alt="Bamboo Toothbrush"
            style={{ width: 68, height: 60 }}
            className="rounded-xl object-contain"
          />
          <div className="w-full flex items-center ml-3 text-xs">
            <div>
              <h3 className="font-bold" style={{ lineHeight: 1.2 }}>
                Seventh Generation Liquid Laundry Detergent
              </h3>
              <div
                className="font-normal text-gray-600"
                style={{ lineHeight: 1.2 }}
              >
                Fresh Lavender Scent, 150 oz
              </div>
            </div>

            <div className="mx-2">
              <del className="font-light text-gray-600">$37</del>
              <span className="font-bold text-green text-lg ml-1">$31</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl w-full p-2 flex mb-3">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51OlOY1pdQL.jpg"
            alt="Bamboo Toothbrush"
            style={{ width: 68, height: 60 }}
            className="rounded-xl object-contain"
          />
          <div className="w-full flex items-center ml-3 text-xs">
            <div>
              <h3 className="font-bold" style={{ lineHeight: 1.2 }}>
                Head & Shoulder Citrus Fresh
              </h3>
              <div
                className="font-normal text-gray-600"
                style={{ lineHeight: 1.2 }}
              >
                Anti Dandruff Hydrating Shampoo 400ml
              </div>
            </div>

            <div className="mx-2">
              <del className="font-light text-gray-600">$26</del>
              <span className="font-bold text-green text-lg ml-1">$19</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl w-full p-2 flex mb-3">
          <img
            src="https://i5.walmartimages.com/asr/8c34568c-4b2f-40f3-a695-f4adfe577856_1.bd3222a5c08027769097fef2379183a2.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
            alt="Bamboo Toothbrush"
            style={{ width: 68, height: 60 }}
            className="rounded-xl object-contain"
          />
          <div className="w-full flex items-center ml-3 text-xs">
            <div>
              <h3 className="font-bold" style={{ lineHeight: 1.2 }}>
                ArtNaturals Clarifying Face Wash
              </h3>
              <div
                className="font-normal text-gray-600"
                style={{ lineHeight: 1.2 }}
              >
                8 Fl Oz / 236ml
              </div>
            </div>

            <div className="mx-2">
              <del className="font-light text-gray-600">$14</del>
              <span className="font-bold text-green text-lg ml-1">$10</span>
            </div>
          </div>
        </div>

        <div className="bg-pearl pt-4 pb-8 w-full sticky" style={{ bottom: 0 }}>
          <Button className="flex justify-center items-center">
            <span className="mr-3">Place your order</span>
            <img src={CaretRightSvg} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DealView;
