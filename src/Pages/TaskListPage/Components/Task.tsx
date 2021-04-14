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

  const taskCompany = "AirBnb"
  const taskLastSubmission = "2021-03-01"
  const taskSolved = 0

  return (
    <a className={`mb-8 p-0 w-100 ${activeClass ? 'active':''}`} style={{cursor: 'pointer'}} key={props.index}>
      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white hover-shadow-3 hover-border-green" onClick={() => props.action(props.index)}>
        <div className="row">
          <div className="col-md-4">
            <div className="media align-items-center">
              <div>
                <h3 className="mb-0 font-size-6 heading-default-color">{props.task.name}</h3>
                {
                  (() =>{
                    if (taskSolved===0){
                      return <span  style={{color:"#00b074"}} className="font-size-3 line-height-2 d-block"> Solved <i className="pl-4 fa  fa-check fa-xs" aria-hidden="true"></i></span>
                    }else if (taskSolved!==0){
                      return <span  style={{color:"#00b074"}} className="font-size-3 line-height-2 d-block"> Continue solving <i className="pl-4 fa  fa-spinner fa-xs" aria-hidden="true"></i></span>
                    }else{
                      return <span  style={{color:"#00b074"}} className="font-size-3 line-height-2 d-block"> Solve <i className="pl-4 fa  fa-coffee fa-xs" aria-hidden="true"></i></span>
                    }
                  })()
                }
              </div>
            </div>
          </div>
          <div className="col-md-8 text-right pt-7 pt-md-5">
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
      </div>
    </a>
  );
};

export default Task
