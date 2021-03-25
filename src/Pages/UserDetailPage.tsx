import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

export const UserDetailPage = () => {
  return (
    <div className="site-wrapper overflow-hidden ">
     {/* Header start  */}
     {/* Navbar- */}
     <Navbar />
     {/* Header end */}
     {/* Main Content Start */}
     <div className="bg-default-2 pt-22 pt-lg-25 pb-13 pb-xxl-32">
       <div className="container">
         {/* back Button */}
         <div className="row justify-content-center">
           <div className="col-12 dark-mode-texts">
             <div className="mb-9">
               <a className="d-flex align-items-center ml-4" href="dashboard-main.html"> <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8">
                 </i><span className="text-uppercase font-size-3 font-weight-bold text-gray">Back</span></a>
             </div>
           </div>
         </div>
         {/* back Button End */}
         <div className="row">
           {/* Left Sidebar Start */}
           <div className="col-12 col-xxl-3 col-lg-4 col-md-5 mb-11 mb-lg-0">
             <div className="pl-lg-5">
               {/* Top Start */}
               <div className="bg-white shadow-9 rounded-4">
                 <div className="px-5 py-11 text-center border-bottom border-mercury">
                   <a className="mb-4" href="#"><img className="circle-54" src="./image/l3/png/pro-img.png" alt="" /></a>
                   <h4 className="mb-0"><a className="text-black-2 font-size-6 font-weight-semibold" href="#">David Henricks</a></h4>
                   <p className="mb-8"><a className="text-gray font-size-4" href="#">Product Designer</a></p>
                   <div className="icon-link d-flex align-items-center justify-content-center flex-wrap">
                     <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#"><i className="fab fa-linkedin-in" /></a>
                     <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#"><i className="fab fa-facebook-f" /></a>
                     <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#"><i className="fab fa-twitter" /></a>
                     <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#"><i className="fab fa-dribbble" /></a>
                     <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#"><i className="fab fa-behance" /></a>
                   </div>
                 </div>
                 {/* Top End */}
                 {/* Bottom Start */}
                 <div className="px-9 pt-lg-5 pt-9 pt-xl-9 pb-5">
                   <h5 className="text-black-2 mb-8 font-size-5">Contact Info</h5>
                   {/* Single List */}
                   <div className="mb-7">
                     <p className="font-size-4 mb-0">Location</p>
                     <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">New York , USA</h5>
                   </div>
                   {/* Single List */}
                   {/* Single List */}
                   <div className="mb-7">
                     <p className="font-size-4 mb-0">E-mail</p>
                     <h5 className="font-size-4 font-weight-semibold mb-0"><a className="text-black-2 text-break" href="mailto:name_ac@gmail.com">name_ac@gmail.com</a></h5>
                   </div>
                   {/* Single List */}
                   {/* Single List */}
                   <div className="mb-7">
                     <p className="font-size-4 mb-0">Phone</p>
                     <h5 className="font-size-4 font-weight-semibold mb-0"><a className="text-black-2 text-break" href="tel:+999565562">+999 565 562</a></h5>
                   </div>
                   {/* Single List */}
                   {/* Single List */}
                   <div className="mb-7">
                     <p className="font-size-4 mb-0">Website Linked</p>
                     <h5 className="font-size-4 font-weight-semibold mb-0"><a className="text-break" href="#">www.nameac.com</a></h5>
                   </div>
                   {/* Single List */}
                 </div>
                 {/* Bottom End */}
               </div>
             </div>
           </div>
           {/* Left Sidebar End */}
           {/* Middle Content */}
           <div className="col-12 col-xxl-8 col-lg-8 col-md-7 order-2 order-xl-1">
             <div className="bg-white rounded-4 shadow-9">
               {/* Tab Content */}
               <div className="tab-content" id="myTabContent">
                 <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                   {/* Excerpt Start */}
                   <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                     <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">About</h4>
                     <p className="font-size-4 mb-8">A talented professional with an academic background in IT and proven
                       commercial development experience as C++ developer since 1999. Has a sound knowledge of the software
                       development life cycle. Was involved in more than 140 software development outsourcing projects.</p>
                     <p className="font-size-4 mb-8">Programming Languages: C/C++, .NET C++, Python, Bash, Shell, PERL, Regular
                       expressions, Python, Active-script.</p>
                   </div>
                   {/* Excerpt End */}
                   {/* Skills */}
                   <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                     <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">Skills</h4>
                     <ul className="list-unstyled d-flex align-items-center flex-wrap">
                       <li>
                         <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Agile</a>
                       </li>
                       <li>
                         <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Wireframing</a>
                       </li>
                       <li>
                         <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Prototyping</a>
                       </li>
                       <li>
                         <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Information</a>
                       </li>
                       <li>
                         <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Waterfall Model</a>
                       </li>
                       <li>
                         <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">New Layout</a>
                       </li>
                       <li>
                         <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Browsing</a>
                       </li>
                     </ul>
                   </div>
                   {/* Skills End */}
                   {/* Card Section Start */}
                   <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
                     <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">Work Exprerience</h4>
                     {/* Single Card */}
                     <div className="w-100">
                       <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                         <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                           <img src="./image/l2/png/featured-job-logo-1.png" alt="" />
                         </div>
                         <div className="w-100 mt-n2">
                           <h3 className="mb-0">
                             <a className="font-size-6 text-black-2 font-weight-semibold" href="#">Lead Product Designer</a>
                           </h3>
                           <a href="#" className="font-size-4 text-default-color line-height-2">Airabnb</a>
                           <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                             <a className="font-size-4 text-gray mr-5">Jun 2017 - April 2020- 3 years</a>
                             <a className="font-size-3 text-gray">
                               <span className="mr-4" style={{marginTop: '-2px'}}><img src="./image/svg/icon-loaction-pin-black.svg" alt="" /></span>New York, USA</a>
                           </div>
                         </div>
                       </div>
                     </div>
                     {/* Single Card End */}
                     {/* Single Card */}
                     <div className="w-100">
                       <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                         <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                           <img src="./image/l1/png/feature-brand-1.png" alt="" />
                         </div>
                         <div className="w-100 mt-n2">
                           <h3 className="mb-0">
                             <a className="font-size-6 text-black-2 font-weight-semibold" href="#">Senior UI/UX Designer</a>
                           </h3>
                           <a href="#" className="font-size-4 text-default-color line-height-2">Google Inc</a>
                           <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                             <a className="font-size-3 text-gray mr-5">Jun 2017 - April 2020- 3 years</a>
                             <a className="font-size-3 text-gray">
                               <span className="mr-4" style={{marginTop: '-2px'}}><img src="./image/svg/icon-loaction-pin-black.svg" alt="" /></span>New York, USA</a>
                           </div>
                         </div>
                       </div>
                     </div>
                     {/* Single Card End */}
                   </div>
                   {/* Card Section End */}
                   {/* Card Section Start */}
                   <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
                     <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">Education</h4>
                     {/* Single Card */}
                     <div className="w-100">
                       <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                         <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                           <img src="./image/svg/harvard.svg" alt="" />
                         </div>
                         <div className="w-100 mt-n2">
                           <h3 className="mb-0">
                             <a className="font-size-6 text-black-2" href="#">Masters in Art Design</a>
                           </h3>
                           <a href="#" className="font-size-4 text-default-color line-height-2">Harvard University</a>
                           <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                             <a className="font-size-3 text-gray mr-5">Jun 2017 - April 2020- 3 years</a>
                             <a className="font-size-3 text-gray">
                               <span className="mr-4" style={{marginTop: '-2px'}}><img src="./image/svg/icon-loaction-pin-black.svg" alt="" /></span>Brylin, USA</a>
                           </div>
                         </div>
                       </div>
                     </div>
                     {/* Single Card End */}
                     {/* Single Card */}
                     <div className="w-100">
                       <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                         <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                           <img src="./image/svg/mit.svg" alt="" />
                         </div>
                         <div className="w-100 mt-n2">
                           <h3 className="mb-0">
                             <a className="font-size-6 text-black-2" href="#">Bachelor in Software Engineering </a>
                           </h3>
                           <a href="#" className="font-size-4 text-default-color line-height-2">Manipal Institute of Technology</a>
                           <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                             <a className="font-size-3 text-gray mr-5">Fed 2012 - April 2016 - 4 years</a>
                             <a className="font-size-3 text-gray">
                               <span className="mr-4" style={{marginTop: '-2px'}}><img src="./image/svg/icon-loaction-pin-black.svg" alt="" /></span>New York, USA</a>
                           </div>
                         </div>
                       </div>
                     </div>
                     {/* Single Card End */}
                   </div>
                   {/* Card Section End */}
                 </div>
                 <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                   {/* Excerpt Start */}
                   <div className="pr-xl-11 p-5 pl-xs-12 pt-9 pb-11">
                     <form action="/">
                       <div className="row">
                         <div className="col-12 mb-7">
                           <label htmlFor="name3" className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset">Your Name</label>
                           <input id="name3" type="text" className="form-control" placeholder="Jhon Doe" />
                         </div>
                         <div className="col-lg-6 mb-7">
                           <label htmlFor="email3" className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset">E-mail</label>
                           <input id="email3" type="email" className="form-control" placeholder="example@gmail.com" />
                         </div>
                         <div className="col-lg-6 mb-7">
                           <label htmlFor="subject3" className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset">Subject</label>
                           <input id="subject3" type="text" className="form-control" placeholder="Special contract" />
                         </div>
                         <div className="col-lg-12 mb-7">
                           <label htmlFor="message3" className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset">Message</label>
                           <textarea name="message" id="message3" placeholder="Type your message" className="form-control h-px-144" defaultValue={""} />
                         </div>
                         <div className="col-lg-12 pt-4">
                           <button className="btn btn-primary text-uppercase w-100 h-px-48">Send Now</button>
                         </div>
                       </div>
                     </form>
                   </div>
                   {/* Excerpt End */}
                 </div>
               </div>
               {/* Tab Content End */}
               {/* Tab Section End */}
             </div>
           </div>
           {/* Middle Content */}
         </div>
       </div>
     </div>
     {/* Main Content end */}
     {/* footer area function start */}
     <Footer />
     {/* footer area function end */}
   </div>
  )
}
