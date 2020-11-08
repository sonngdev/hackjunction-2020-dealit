import React from 'react';
import svgBackground from 'assets/svgs/background.svg';
import svgPinGray from 'assets/svgs/pin-gray.svg';
import svgCaretLeft from 'assets/svgs/caret-left.svg';
import svgTabs from 'assets/svgs/tabs.svg';

function MatchView({ setView }) {
  return (
    <div
      className="h-screen flex flex-col"
      style={{ backgroundImage: `url(${svgBackground})` }}
    >
      <div className="px-4 mt-16 mb-8 flex justify-center">
        <div className="text-white font-bold text-lg">My Deal List</div>
      </div>

      <button
        className="fixed"
        style={{ top: 70, left: 20 }}
        onclick={() => setView('list')}
      >
        <img src={svgCaretLeft} alt="" />
      </button>

      <div className="bg-pearl rounded-t-4xl flex-1 px-4 pb-8 pt-16 flex flex-col justify-between relative">
        <img
          src={svgTabs}
          alt=""
          className="absolute rounded-full"
          style={{ top: -20, boxShadow: '0px 3px 6px #00000029' }}
        />

        <div>
          <div
            className="bg-white rounded-xl w-full p-2 flex mb-3"
            onClick={() => setView('deal')}
          >
            <img
              src="https://i5.walmartimages.com/asr/50a0f02e-1ac5-4e6b-99b4-875ea13fbcee.f9970846adbf26acb9c7821b05cb0b27.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
              alt="Bamboo Toothbrush"
              style={{ width: 68, height: 60 }}
              className="rounded-xl object-contain"
            />
            <div className="w-full flex items-center ml-3 text-xs justify-between">
              <div>
                <h3 className="font-bold" style={{ lineHeight: 1.2 }}>
                  Walmart Helsinki
                </h3>
                <div
                  className="font-normal text-gray-600 flex items-center mt-1"
                  style={{ lineHeight: 1.2 }}
                >
                  <img src={svgPinGray} alt="" />
                  <span className="ml-1">3.7 km</span>
                </div>
              </div>

              <div className="bg-lightgreen text-green rounded-lg px-2 text-xs flex items-center ml-2 mr-1">
                <div>Save</div>
                <div className="text-xl ml-1">$17</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl w-full p-2 flex mb-3">
            <img
              src="https://i5.walmartimages.com/asr/50a0f02e-1ac5-4e6b-99b4-875ea13fbcee.f9970846adbf26acb9c7821b05cb0b27.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
              alt="Bamboo Toothbrush"
              style={{ width: 68, height: 60 }}
              className="rounded-xl object-contain"
            />
            <div className="w-full flex items-center ml-3 text-xs justify-between">
              <div>
                <h3 className="font-bold" style={{ lineHeight: 1.2 }}>
                  Walgreens
                </h3>
                <div
                  className="font-normal text-gray-600 flex items-center mt-1"
                  style={{ lineHeight: 1.2 }}
                >
                  <img src={svgPinGray} alt="" />
                  <span className="ml-1">2.6 km</span>
                </div>
              </div>

              <div className="bg-lightgreen text-green rounded-lg px-2 text-xs flex items-center ml-2 mr-1">
                <div>Save</div>
                <div className="text-xl ml-1">$16</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl w-full p-2 flex mb-3">
            <img
              src="https://i5.walmartimages.com/asr/50a0f02e-1ac5-4e6b-99b4-875ea13fbcee.f9970846adbf26acb9c7821b05cb0b27.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
              alt="Bamboo Toothbrush"
              style={{ width: 68, height: 60 }}
              className="rounded-xl object-contain"
            />
            <div className="w-full flex items-center ml-3 text-xs justify-between">
              <div>
                <h3 className="font-bold" style={{ lineHeight: 1.2 }}>
                  Kroger
                </h3>
                <div
                  className="font-normal text-gray-600 flex items-center mt-1"
                  style={{ lineHeight: 1.2 }}
                >
                  <img src={svgPinGray} alt="" />
                  <span className="ml-1">5.0 km</span>
                </div>
              </div>

              <div className="bg-lightgreen text-green rounded-lg px-2 text-xs flex items-center ml-2 mr-1">
                <div>Save</div>
                <div className="text-xl ml-1">$13</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchView;
