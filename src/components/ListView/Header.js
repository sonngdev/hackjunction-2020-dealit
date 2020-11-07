import React from 'react';
import junctionBlack from 'assets/images/junction-black.jpeg';

function Header() {
  return (
    <div className="text-white flex justify-between items-center px-4 mt-16 mb-8">
      <div>
        <div style={{ color: '#FFFFFF80' }} className="text-sm">
          Good morning,
        </div>
        <div className="text-xl">Junction Connected</div>
      </div>
      <img
        src={junctionBlack}
        alt="Avatar"
        className="rounded-full h-14 w-14 justify-center"
      />
    </div>
  );
}

export default Header;
