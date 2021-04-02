import React from 'react';

const Submissions = (props) => {
  const dates = [
    "2018-01-01",

  ]
  return (
    <div className="pt-10 ml-5 mr-5">
      <table className="table table-hover" >
        <thead className="table-borderless font-size-6" style={{color:"#00b074"}}>
          <tr>
            <th className="font-weight-normal">Result</th>
            <th className="font-weight-normal">Submission</th>
            <th className="font-weight-normal"></th>
          </tr>
        </thead>
        <tbody className="font-size-5 font-weight-light">
          <tr>
            <td style={{color:"white"}}>Passed</td>
            <td style={{color:"white"}}>22.10.2021 15:30:21</td>
            <td className="font-weight-normal" style={{color:"#00b074"}}><a href="">Load</a></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Passed</td>
            <td style={{color:"white"}}>21.10.2021 16:30:21</td>
            <td style={{color:"#00b074"}}><a href="">Load</a></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Passed</td>
            <td style={{color:"white"}}>20.10.2021 15:30:21</td>
            <td style={{color:"#00b074"}}><a href="">Load</a></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Passed</td>
            <td style={{color:"white"}}>19.10.2021 15:30:21</td>
            <td style={{color:"#00b074"}}><a href="">Load</a></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Passed</td>
            <td style={{color:"white"}}>17.10.2021 15:30:21</td>
            <td style={{color:"#00b074"}}><a href="">Load</a></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Passed</td>
            <td style={{color:"white"}}>12.10.2021 15:30:21</td>
            <td style={{color:"#00b074"}}><a href="">Load</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Submissions;
