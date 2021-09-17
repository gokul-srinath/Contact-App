import { Link } from "react-router-dom";
import React from 'react';


const deleteContact = (props)=>{
const id =props.location.state.id;

    return(
        <div className="ui container center aligned">
            <div className="ui card centered">
                <div className="content">
                    <div>Are you sure you want to delete this contact ? </div>
                    <div className="extra content">
                            
                                
                                        <Link to="/">
                                            <div className="ui red button" onClick={()=>(props.removeHandler(id))}>
                                                Yes
                                            </div>
                                        </Link>
                                
                                
                                    <Link to="/">
                                        <div className="ui button">
                                            No
                                        </div>
                                    </Link>
                                
                            
                    </div>
                </div>
            </div>

        </div>
    )

}
export default deleteContact;