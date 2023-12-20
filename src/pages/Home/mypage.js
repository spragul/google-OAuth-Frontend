import React from "react";
import axios from 'axios'
import { mainUrl } from "../../Backendurl";

function Mypage(mydata) {
  const userdata = mydata.user;
	const logout = () => {
		window.open(`${mainUrl}/auth/logout`, "_self");
	};
  const getdata =async()=>{
    const res = await axios.get(`${mainUrl}/authenticated`);
    console.log(res);
  }
  return (
    <div className="card-container">
      <div className="mycard">
        <div className="card-header" >
          <img className="img" src={userdata.picture} />
        </div>
        <div className="card-body">
          <h1>
            EMAIL ID:<span>{userdata.email}</span>
          </h1>
          <h1>
            NAME:<span>{userdata.name}</span>
          </h1>
          <h1>
            EMAIL Verified or NOT:<span>{userdata.email_verified===true ? "true":"false"}</span>
          </h1>
          <h1>
            GIVEN NAME:<span>{userdata.given_name}</span>
          </h1>
          <button onClick={logout}>
						Log Out
					</button>

        <div>
          <button onClick={getdata}>data</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
