import React from 'react';

const Slider = () => {
  return (
    <div className="widgets mb-11 ">
      <div className="d-flex align-items-center pr-15 pr-xs-0 pr-md-0 pr-xl-22">
        <h4 className="font-size-6 font-weight-semibold mb-6 w-75">Salary Range</h4>
        {/* Range Slider */}
        <div className="slider-price w-25 text-right mr-7">
          <p className="font-weight-bold">
            <input className="text-primary font-weight-semibold font-size-4 focus-reset" type="text" id="amount" readOnly />
          </p>
        </div>
      </div>
      <div className="graph text-center mx-0 mt-5 position-relative chart-postion">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="range-slider">
        <div className="pm-range-slider" />
      </div>
    </div>
  );
};

export default Slider;
