import React from 'react';

const Question = (props) => {
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
    <div>
      <div>
        <p className="ml-5 mr-5 mt-4 font-size-4" style={{color:"#fff", whiteSpace: "pre-line"}}>
          <span className="font-size-6 semibold pb-6" style={{color:"#00b074"}}>Description:</span>
          {description}
          <span className="font-size-5 semibold pb-2 pt-8" style={{color:"#00b074"}}>Input:</span>
          {input}
          <span className="font-size-5 semibold pb-2" style={{color:"#00b074"}}>Output:</span>
          {output}
        </p>
      </div>
      <button style={{ height:"6vh", fontSize:"1.5vh"}} className="ml-5 mb-20 btn btn-primary btn-submit w-20 text-uppercase mt-10">Submit</button>
    </div>
  );
};

export default Question;
