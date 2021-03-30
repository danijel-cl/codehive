import React, {useState, useEffect} from 'react';

export const Task = (props) => {
  const [activeClass, setActiveClass] = useState(false)

  useEffect(() => {
    if(props.index==props.activeTask){
      setActiveClass(true)
    }else{
      setActiveClass(false)
    }
  });

  const tags = [
    "Python",
    "Django",
    "Rest",
    "Docker"
  ]

  const taskDescription = "Gubagoo is a fast growing provider of messaging and commerce solutions for automotive dealers changing the future of how people find, buy and service their vehicles."
  const taskCompany = "AirBnb"

  return (
    <a className={`mb-8 p-0 w-100 ${activeClass ? 'active':''}`} style={{cursor: 'pointer'}} key={props.index}>
      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 hover-border-green" onClick={() => props.action(props.index)}>
        <div className="row">
          <div className="col-md-6">
            <div className="media align-items-center">
              <div>
                <h3 className="mb-0 font-size-6 heading-default-color">{props.task.name}</h3>
                <span  style={{color:"#00b074"}} className="font-size-3 line-height-2 d-block">{taskCompany}</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-right pt-7 pt-md-5">
            <div className="media justify-content-md-end">
              <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                {tags.map((tag, index) => (
                  <li>
                    <span className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2 d-inline-block">{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row pt-8">
          <div className="col-md-12 pr-30">
            <p>
              <span className="heading-default-color" style={{whiteSpace: "pre-wrap", fontWeight: 500}}>Task summary: </span>
              {taskDescription}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Task
