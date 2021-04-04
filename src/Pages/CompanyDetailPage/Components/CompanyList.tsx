import React from 'react';
import CompanyRow from "./CompanyRow"

const CompanyList = (props) => {
  const companies = [
    {
      name:"Uber",
      label:"Software company"
    },
    {
      name:"Google",
      label:"Software company"
    },
    {
      name:"Facebook",
      label:"Software company"
    },
    {
      name:"Instagram",
      label:"Software company"
    },
    {
      name:"Twitter",
      label:"Software company"
    },
  ]
  return (
    <ul className="list-unstyled">
      {companies.map((company, index) => (
        <CompanyRow id={index} key={index} company={company} />
      ))}
    </ul>
  );
};

export default CompanyList;
