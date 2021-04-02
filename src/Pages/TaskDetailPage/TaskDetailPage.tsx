import AceEditor from 'react-ace';
import {Link} from "react-router-dom";
import LinkButton from "./Components/LinkButton"
import Question from "./Components/Question"
import Submissions from "./Components/Submissions"
import React, {useState} from 'react';
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

export const TaskDetailPage = () => {
  const [menu, setMenu] = useState(false)
  const code = "class Test:\n    def __init__(self):\n        self.a = None"
  return (
    <div className="site-wrapper overflow-hidden bg-default-2">
      <div className="row col-12" style={{ height:"91vh" ,marginTop:"9vh", maxHeight:"91vh"}}>
        <div className="col-3" style={{ backgroundColor:"#2E2E2E", overflow:"auto", maxHeight:"91vh"}}>
          <div className="row mt-5 ml-5 mr-5 h-10">
            <LinkButton to="/posts"><i className="fa fa-angle-left" aria-hidden="true"></i></LinkButton>
            <button className={"col-5 font-size-6 task-button "+(!menu ? "task-active" : "")} onClick={()=>setMenu(false)}>Question</button>
            <button className={"col-6 font-size-6 task-button "+(menu ? "task-active" : "")} onClick={()=>setMenu(true)}>Submissions</button>
          </div>
          {
            (() =>{
              if (menu===false){
                return <Question />
              }else{
                return <Submissions />
              }
            })()
          }
        </div>
        <div className="col-9 pl-0" style={{ backgroundColor:"#2E2E2E"}}>
          <div className="h-10">
            <p className="ml-13 mt-4 font-size-7" style={{color:"#00b074"}}>Code <span style={{color:"#fff"}}>Editor</span><span style={{float:"right"}}>Python <i className="fa fa-genderless" aria-hidden="true"></i>
            </span></p>
          </div>
          <AceEditor
            className="w-100"
            mode="python"
            theme="monokai"
            fontSize="25px"
            value	= {code}
            height="91vh"
          />
        </div>
      </div>
    </div>
  )
}
