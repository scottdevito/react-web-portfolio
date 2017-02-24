import React from 'react';

export const Education = (props) => {
    return(
        <div style={props.visible ? {display: 'block'} : {display: 'none'}}>
            <h3 className="education header">Education</h3>
            <div className="education panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">New York Institute of Technology</h3>
                </div>
                <div className="panel-body">
                    <h4 className="degree">Bachelor's Degree of Science, Information Technology</h4>
                    <h5 className="dates">2008 - 2014</h5>
                    <p>Relevant courses:</p>
                    <p>Computer Programming, Internet Programming, Web Development, Database Management, Discrete Mathematics, Data Structures, Network and Internet Security, Computer Networks, Communication for Technical Professions, and Knowledge Management.</p>
                </div>
            </div>
        </div>
    );
};