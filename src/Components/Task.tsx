import React, {useState, useEffect} from 'react';

export const Task = (props) => {
  const [activeClass, setActiveClass] = useState(false)
  useEffect(() => {
    console.log("changed")
    if(props.index==props.activeTask){
      setActiveClass(true)
    }else{
      setActiveClass(false)
    }
  });
  return (
    <a className={`mb-8 p-0 w-100 ${activeClass ? 'active':''}`} key={props.index}>
      {/* Single Featured Job */}
      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 hover-border-green" onClick={() => props.action(props.index)}>
        <div className="row">
          <div className="col-md-6">
            <div className="media align-items-center">
              <div>
                <h3 className="mb-0 font-size-6 heading-default-color">{props.task.name}</h3>
                <span className="font-size-3 text-default-color line-height-2 d-block">AirBnb</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-right pt-7 pt-md-5">
            <div className="media justify-content-md-end">
              <div className="image mr-5 mt-2">
                <img src="./image/svg/icon-fire-rounded.svg" alt="" />
              </div>
              <p className="font-weight-bold font-size-7 text-hit-gray mb-0"><span className="text-black-2">50 min</span></p>
            </div>
          </div>
        </div>
        <div className="row pt-8">
          <div className="col-md-7">
            <ul className="d-flex list-unstyled mr-n3 flex-wrap">
              <li>
                <span className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2 d-inline-block">Agile</span>
              </li>
              <li>
                <span className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2 d-inline-block">Wireframing</span>
              </li>
              <li>
                <span className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2 d-inline-block">Prototyping</span>
              </li>
            </ul>
          </div>
          <div className="col-md-5">
            <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                <span className="mr-4" style={{marginTop: '-2px'}}><img src="./image/svg/icon-loaction-pin-black.svg" alt="" /></span>
                <span className="font-weight-semibold">Berlyn, UK</span>
              </li>
              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                <span className="mr-4" style={{marginTop: '-2px'}}><img src="./image/svg/icon-suitecase.svg" alt="" /></span>
                <span className="font-weight-semibold">Full-time</span>
              </li>
              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                <span className="mr-4" style={{marginTop: '-2px'}}><img src="./image/svg/icon-clock.svg" alt="" /></span>
                <span className="font-weight-semibold">9d ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Single Featured Job */}
    </a>
  );
};

export default Task
