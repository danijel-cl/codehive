import React, {useState} from 'react';

const RowPostTags = (props) => {
  const tags = ["Python","Django","React"]
  return (
    <ul className="d-flex list-unstyled mr-n3 flex-wrap">
      {tags.map((tag, index) => (
        <li>
          <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2" href="#">
            {tag}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RowPostTags;
