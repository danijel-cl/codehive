import React, {useState} from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const ReactSlider = () => {
  const [minvalue, setMinvalue] = useState(0)
  const [maxvalue, setMaxvalue] = useState(100)
  return (
    <div className="widgets mb-11 ">
      <div className="d-flex align-items-center pr-10 pr-xs-0 pr-md-0 pr-xl-15">
        <h4 className="font-size-6 font-weight-semibold mb-6 col-7 pl-0">Salary Range</h4>
        {/* Range Slider */}
        <div className="slider-price col-5 text-left pl-0">
          <p className="font-weight-bold">
            <span className="text-primary font-weight-semibold font-size-4 focus-reset">
              {minvalue}-{maxvalue} $
            </span>
          </p>
        </div>
      </div>
      <div className="range-slider col-7 pl-0">
        <Range
          railStyle={{
            height: 5,
          }}
          trackStyle={[{
            height: 5,
            backgroundColor:"#00b074"
          }]}
          handleStyle={[{
            borderLeftColor:"#00b074",
            borderRightColor:"#00b074",
            borderTopColor:"#00b074",
            borderBottomColor:"#00b074"
          },{
            borderLeftColor:"#00b074",
            borderRightColor:"#00b074",
            borderTopColor:"#00b074",
            borderBottomColor:"#00b074"
          }]}
          defaultValue={[minvalue,maxvalue]}
          onChange={(values)=>(setMinvalue(values[0]),setMaxvalue(values[1]))}
        />
      </div>
    </div>
  );
};

export default ReactSlider;
