import Navbar from "../Components/Navbar";
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

export const TaskDetailPage = () => {
  const code = "class Test:\n    def __init__(self):\n        self.a = None"
  const description = "\nContrary to popular belief, Lorem Ipsum is not simply random text.\
  It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 \
  years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, \
  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,\
  and going through the cites of the word in classical literature, discovered the \
  undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \
  'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written \
  in 45 BC. This book is a treatise on the theory of ethics, very popular during the \
  Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', \
  comes from a line in section 1.10.32.\n\nContrary to popular belief, Lorem Ipsum is not simply random text.\
  It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 \
  years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, \
  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,\
  and going through the cites of the word in classical literature, discovered the \
  undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \
  'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written \
  in 45 BC. This book is a treatise on the theory of ethics, very popular during the \
  Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', \
  comes from a line in section 1.10.32.\n"
  const input = "\nYou can expect any lorem ipsum text.\n\n"
  const output ="\nRegarding the outputs we want the count of ipsum words in the text.\n"
  return (
    <div className="site-wrapper overflow-hidden bg-default-2">
      {/* Header start  */}
      {/* Navbar- */}
      <Navbar />
      {/* Header end */}
      <div className="row col-12" style={{ height:"91vh" ,marginTop:"9vh", maxHeight:"91vh"}}>
        <div className="col-3" style={{ backgroundColor:"#2E2E2E", overflow:"auto", maxHeight:"91vh"}}>
          <div className="h-10">
            <p className="ml-13 mt-4 font-size-7" style={{color:"#fff"}}>Question</p>
          </div>
          <div>
            <p className="ml-13 mt-4 font-size-5" style={{color:"#fff", whiteSpace: "pre-line"}}>
              <span className="font-size-5 semibold" style={{color:"#00b074"}}>Description:</span>
              {description}
              <span className="font-size-5 semibold" style={{color:"#00b074"}}>Input:</span>
              {input}
              <span className="font-size-5 semibold" style={{color:"#00b074"}}>Output:</span>
              {output}
            </p>
          </div>
          <button style={{ height:"6vh", fontSize:"1.5vh"}} className="ml-13 mb-20 btn btn-primary btn-submit w-20 text-uppercase mt-10">Submit</button>
        </div>
        <div className="col-9 pl-0" style={{ backgroundColor:"#2E2E2E"}}>
          <div className="h-10">
            <p className="ml-13 mt-4 font-size-7" style={{color:"#00b074"}}>Code <span style={{color:"#fff"}}>Editor</span><span style={{float:"right"}}>Python</span></p>
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
