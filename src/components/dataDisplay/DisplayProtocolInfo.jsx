import React from "react";
const DisplayProtocolInfo = ({ protocolData, field }) => {
  return protocolData.map((protocol, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", protocol.title)}
        {field("URL", protocol.url)}
      </div>
    );
  });
};

export default DisplayProtocolInfo;
