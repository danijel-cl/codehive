import React from 'react';
import {Link} from 'react-router-dom';

const taskDescription = (props) => {
  const {task} = props;
  const taskObjectives = [
    "Contribute new controls or design improvements to our site",
    "Take ownership of the successful delivery of features",
    "Help set and achieve quarterly goals"
  ]
  return (
    <div>
      <span className="font-size-4 font-weight-semibold text-black-2 mb-7">Task description:</span>
      <p className="font-size-4 text-black-2 mb-7" style={{ whiteSpace:"pre-line"}}>
      <div
                      className="font-size-4 mb-8 pt-4"
                      dangerouslySetInnerHTML={{__html: task?.description||"<p>Loading..</p>"}}
                    />
      </p>
      <span className="font-size-4 font-weight-semibold text-black-2 mb-7">What you will be doing:</span>
      <ul className="list-unstyled">
        {taskObjectives.map((objective, index) => (
          <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-2">
            <span className="d-inline-block mr-7">•</span>{objective}
          </li>
        ))}
      </ul>
      <Link to="/posts/id/tasks/id" className="btn btn_red text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6">Solve task</Link>
    </div>
  );
};

export default taskDescription;
