import React from 'react';
import "./lottoStyle.css"

function Lotto ({lottoNumber ,extraNumber}){
    return (
      <div
        className="lotto"
        style={{
          backgroundColor: extraNumber ? "hsl(195deg 53% 79%)" : undefined,
        }}
      >
        {lottoNumber}
      </div>
    );
}

export default Lotto;
