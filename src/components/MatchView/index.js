import React, { useState } from 'react';
import svgBackground from 'assets/svgs/background.svg';
import svgPinGray from 'assets/svgs/pin-gray.svg';
import svgCaretLeft from 'assets/svgs/caret-left.svg';
import pngWalmart from 'assets/images/walmart-2000@2x.png';
import pngWalgreen from 'assets/images/walgreens@2x.png';
import pngKroger from 'assets/images/Kroger@2x.png';

function MatchView({ setView }) {
  const [tab, setTab] = useState('saving');

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
        onClick={() => setView('list')}
      >
        <img src={svgCaretLeft} alt="" />
      </button>

      <div className="bg-pearl rounded-t-4xl flex-1 px-4 pb-8 pt-16 flex flex-col justify-between relative">
        <div
          className="bg-white rounded-full absolute flex justify-between p-1"
          style={{ top: -20, left: 55, boxShadow: '0px 3px 6px #00000029' }}
        >
          <button
            className={`rounded-full ${
              tab === 'saving'
                ? 'bg-purple text-white px-6 py-2'
                : 'bg-white px-4 py-2 text-gray-600'
            }`}
            onClick={() => setTab('saving')}
          >
            Saving amount
          </button>
          <button
            className={`rounded-full ${
              tab === 'near'
                ? 'bg-purple text-white px-6 py-2'
                : 'bg-white px-4 py-2 text-gray-600'
            }`}
            onClick={() => setTab('near')}
          >
            Near me
          </button>
        </div>

        {tab === 'saving' ? (
          <div>
            <div
              className="bg-white rounded-xl w-full p-2 flex mb-3"
              onClick={() => setView('deal')}
            >
              <img
                src={pngWalmart}
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
                src={pngWalgreen}
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
                src={pngKroger}
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
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default MatchView;
