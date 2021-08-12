import React, { FC } from "react";
import iconArrow from "../../assets/icons/icon-arrow.svg";

interface IProps {}

const Details: FC<IProps> = () => {
  return (
    <section className="contactDetailsContainer">
      <div className="contactHeading">
        <h3>Contact Details</h3>
      </div>
      <div className="contactDetails">
        <div className="mainOffice">
          <div className="officemaindetails">
            <div className="officeTitle">Main Office</div>
            <div className="officeAddress">
              <p className="contactPara">Mail:archone@mail.com</p>
              <p className="contactPara">
                Address: 1892 Chenoweth Drive BERLIN
              </p>
              <p className="contactPara">Phone: 123-456-3451</p>
            </div>
          </div>
          <div className="viewOnmap">
            <div className="viewText">View on map</div>
            <div className="iconDiv">
              <img className="viewIcon" src={iconArrow} alt="clickIcon"></img>
            </div>
          </div>
        </div>
        <div className="mainOffice">
          <div className="officemaindetails">
            <div className="officeTitle">Office II</div>
            <div className="officeAddress">
              <p className="contactPara">Mail: archtwo@mail.com</p>
              <p className="contactPara">Address: 3399 Wines Lane DESSAU</p>
              <p className="contactPara">Phone: 832-123-4321</p>
            </div>
          </div>
          <div className="viewOnmap">
            <div className="viewText">View on map</div>
            <div className="iconDiv">
              <img className="viewIcon" src={iconArrow} alt="clickIcon"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
