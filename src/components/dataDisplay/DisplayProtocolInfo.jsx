import React from "react";
const DisplayProtocolInfo = ({ protocolData, field }) => {
  return protocolData.map((protocol, index) => {
    return (
      <div key={index} className="Results__List">
        {field("Title", protocol.protocolTitle)}
        {field("URL", protocol.protocolURL)}
      </div>
    );
  });
};

export default DisplayProtocolInfo;
