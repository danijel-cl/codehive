import React, { useState } from 'react';
import CompanyForm from './Components/CompanyForm';

export const CompanyCreatePage = (props) => {
  return (
    <div className="site-wrapper" >
      <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <CompanyForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
