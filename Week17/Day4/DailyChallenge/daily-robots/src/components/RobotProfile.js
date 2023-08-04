import React, { useState } from "react";

const RobotProfile = ({ users }) => {
  const [detailedProfileVisible, setDetailedProfileVisible] = useState({});

  const handleProfileClick = (id) => {
    setDetailedProfileVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="flex flex-wrap justify-center">
      {users.map((user) => (
        <div key={user.id} className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
          <img alt="robot" src={`https://robohash.org/${user.id}?200x200`} />
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button onClick={() => handleProfileClick(user.id)}>
              {detailedProfileVisible[user.id] ? "Hide Profile" : "View Profile"}
            </button>
            {detailedProfileVisible[user.id] && (
              <div>
                <p>Username: {user.username}</p>
                <p>Address: {user.address.city}, {user.address.street}, {user.address.suite}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RobotProfile;
