import React from 'react';
import { Link } from 'react-router-dom';

const tdClassName = "table-y-middle py-7 pl-10"
const textClassName = "font-size-4 font-weight-normal text-black-2 mb-0"

const ApplicationTaskRow = (props) => {
  return (
    <tr className="border border-color-2">
      <td className={tdClassName}>
        <h3 className={textClassName}>1</h3>
      </td>
      <td className={tdClassName}>
        <h3 className={textClassName}>74%</h3>
      </td>
      <td className={tdClassName}>
        <h3 className={textClassName}>82%</h3>
      </td>
      <td className={tdClassName}>
        <h3 className={textClassName}>92%</h3>
      </td>
      <td className={tdClassName}>
        <h3 className={textClassName}>85%</h3>
      </td>
      <td className={tdClassName}>
        <div>
          <Link
            to="posts/id/tasks/id"
            className="font-size-3 font-weight-bold text-black-2 text-uppercase">
            View Task
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ApplicationTaskRow;
