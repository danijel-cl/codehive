import React from 'react';
import ProfileTagList from './ProfileTagList';
import ProfileDetailList from './ProfileDetailList';

const sectionClassName = "pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5"
const sectionTextClassName = "font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold"

const Profile = (props) => {

  const userAbout = "A talented professional with an academic background in IT and proven\
    commercial development experience as C++ developer since 1999. Has a sound knowledge \
    of the software development life cycle. Was involved in more than 140 software \
    development outsourcing projects."

  return (
    <div className="tab-content">
      <div className="tab-pane active">
        <div className={sectionClassName}>
          <h4 className={sectionTextClassName}>About</h4>
          <p className="font-size-4 mb-8">{userAbout}</p>
        </div>
        <div className={sectionClassName+" border-top"}>
          <h4 className={sectionTextClassName}>Programming Skills</h4>
          <ProfileTagList />
        </div>
        <div className={sectionClassName+" border-top"}>
          <h4 className={sectionTextClassName}>Soft Skills</h4>
          <ProfileTagList />
        </div>
        <div className={sectionClassName+" border-top"}>
          <h4 className={sectionTextClassName}>Work Exprerience</h4>
          <ProfileDetailList />
        </div>
        <div className={sectionClassName+" border-top"}>
          <h4 className={sectionTextClassName}>Education</h4>
          <ProfileDetailList />
        </div>
      </div>
    </div>
  );
};

export default Profile;
