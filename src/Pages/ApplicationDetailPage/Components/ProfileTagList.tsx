import React from 'react';

const liClassName = "bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
const ulClassName = "list-unstyled d-flex align-items-center flex-wrap"

const ProfileTagList = (props) => {
  const tags = ["C++","Python","Django",".NET","Docker"]

  return (
    <ul className={ulClassName}>
      {tags.map((tag, index) => (
        <li key={index}>
          <a className={liClassName}>{tag}</a>
        </li>
      ))}
    </ul>
  );
};

export default ProfileTagList;
