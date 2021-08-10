import React, { FC } from "react";
//DESKTOP

import imageBdesktop from "../../assets/portfolio/desktop/image-228b.jpg";
import delsoldesktop from "../../assets/portfolio/desktop/image-del-sol.jpg";
import edeldesktop from "../../assets/portfolio/desktop/image-edelweiss.jpg";
import eeboxdesktop from "../../assets/portfolio/desktop/image-eebox.jpg";
import federaldesktop from "../../assets/portfolio/desktop/image-federal.jpg";
import hypersdesktop from "../../assets/portfolio/desktop/image-hypers.jpg";
import netdesktop from "../../assets/portfolio/desktop/image-netcry.jpg";
import paradesktop from "../../assets/portfolio/desktop/image-paramour.jpg";
import protodesktop from "../../assets/portfolio/desktop/image-prototype.jpg";
import serdesktop from "../../assets/portfolio/desktop/image-seraph.jpg";
import sxivdesktop from "../../assets/portfolio/desktop/image-sxiv.jpg";
import trinitydesktop from "../../assets/portfolio/desktop/image-trinity.jpg";

//Tablet
import imageBtablet from "../../assets/portfolio/tablet/image-228b.jpg";
import delsoltablet from "../../assets/portfolio/tablet/image-del-sol.jpg";
import edeltablet from "../../assets/portfolio/tablet/image-edelweiss.jpg";
import eeboxtablet from "../../assets/portfolio/tablet/image-eebox.jpg";
import federaltablet from "../../assets/portfolio/tablet/image-federal.jpg";
import hyperstablet from "../../assets/portfolio/tablet/image-hypers.jpg";
import nettablet from "../../assets/portfolio/tablet/image-netcry.jpg";
import paratablet from "../../assets/portfolio/tablet/image-paramour.jpg";
import prototablet from "../../assets/portfolio/tablet/image-prototype.jpg";
import sertablet from "../../assets/portfolio/tablet/image-seraph.jpg";
import sxivtablet from "../../assets/portfolio/tablet/image-sxiv.jpg";
import trinitytablet from "../../assets/portfolio/tablet/image-trinity.jpg";

//mobile
import imageBmobile from "../../assets/portfolio/mobile/image-228b.jpg";
import delsolmobile from "../../assets/portfolio/mobile/image-del-sol.jpg";
import edelmobile from "../../assets/portfolio/mobile/image-edelweiss.jpg";
import eeboxmobile from "../../assets/portfolio/mobile/image-eebox.jpg";
import federalmobile from "../../assets/portfolio/mobile/image-federal.jpg";
import hypersmobile from "../../assets/portfolio/mobile/image-hypers.jpg";
import netmobile from "../../assets/portfolio/mobile/image-netcry.jpg";
import paramobile from "../../assets/portfolio/mobile/image-paramour.jpg";
import protomobile from "../../assets/portfolio/mobile/image-prototype.jpg";
import sermobile from "../../assets/portfolio/mobile/image-seraph.jpg";
import sxivmobile from "../../assets/portfolio/mobile/image-sxiv.jpg";
import trinitymobile from "../../assets/portfolio/mobile/image-trinity.jpg";

interface iProps {}

const PortfolioMain: FC<iProps> = () => {
  return (
    <main>
      <section className="portfolioSection">
        <div className="eachProject">
          <img alt="" className="desktop" src={serdesktop}></img>
          <img alt="" className="tablet" src={sertablet}></img>
          <img alt="" className="mobile" src={sermobile}></img>
          <div className="projectNameLink">
            <p className="projectName">Seraph Station</p>
            <p className="projectDate">September 2019</p>
          </div>
        </div>

        <div className="eachProject">
          <img alt="" className="desktop" src={eeboxdesktop}></img>
          <img alt="" className="tablet" src={eeboxtablet}></img>
          <img alt="" className="mobile" src={eeboxmobile}></img>
          <div className="projectNameLink">
            <p className="projectName">Eebox Building</p>
            <p className="projectDate">August 2017</p>
          </div>
        </div>
        <div className="eachProject">
          <img alt="" className="desktop" src={federaldesktop}></img>
          <img alt="" className="tablet" src={federaltablet}></img>
          <img alt="" className="mobile" src={federalmobile}></img>
          <div className="projectNameLink">
            <p className="projectName">Federal II Tower</p>
            <p className="projectDate">March 2017</p>
          </div>
        </div>
        <div className="eachProject">
          <img alt="" className="desktop" src={delsoldesktop}></img>
          <img alt="" className="tablet" src={delsoltablet}></img>
          <img alt="" className="mobile" src={delsolmobile}></img>
          <div className="projectNameLink">
            <p className="projectName">Project Del Sol</p>
            <p className="projectDate">January 2016</p>
          </div>
        </div>

        <div className="eachProject">
          <img alt="" className="desktop" src={protodesktop}></img>
          <img alt="" className="tablet" src={prototablet}></img>
          <img alt="" className="mobile" src={protomobile}></img>
          <div className="projectNameLink">
            <p className="projectName">Le Prototype</p>
            <p className="projectDate">October 2015</p>
          </div>
        </div>
        <div className="eachProject">
          <img alt="" className="desktop" src={imageBdesktop}></img>
          <img alt="" className="tablet" src={imageBtablet}></img>
          <img alt="" className="mobile" src={imageBmobile}></img>
          <div className="projectNameLink">
            <p className="projectName">228B Tower</p>
            <p className="projectDate">April 2015</p>
          </div>
        </div>
        <div className="eachProject">
          <img alt="" className="desktop" src={edeldesktop}></img>
          <img alt="" className="tablet" src={edeltablet}></img>
          <img alt="" className="mobile" src={edelmobile}></img>
          <div className="projectNameLink">
            <p className="projectName">Grand Edelweiss Hotel</p>
            <p className="projectDate">December 2013</p>
          </div>
        </div>
        <div className="eachProject">
          <img alt="" className="desktop" src={netdesktop}></img>
          <img alt="" className="tablet" src={nettablet}></img>
          <img alt="" className="mobile" src={netmobile}></img>
          <div className="projectNameLink">
            <p className="projectName">Netcry Tower</p>
            <p className="projectDate">August 2012</p>
          </div>
        </div>
        <div className="eachProject">
          <img alt="" className="desktop" src={hypersdesktop}></img>
          <img alt="" className="tablet" src={hyperstablet}></img>
          <img alt="" className="mobile" src={hypersmobile}></img>
          <div className="projectNameLink">
            <p className="projectName">Hypers</p>
            <p className="projectDate">January 2012</p>
          </div>
        </div>
        <div className="eachProject">
          <img alt="" className="desktop" src={sxivdesktop}></img>
          <img alt="" className="tablet" src={sxivtablet}></img>
          <img alt="" className="mobile" src={sxivmobile}></img>
          <div className="projectNameLink">
            <p className="projectName">SXIV Tower</p>
            <p className="projectDate">March 2011</p>
          </div>
        </div>
        <div className="eachProject">
          <img alt="" className="desktop" src={trinitydesktop}></img>
          <img alt="" className="tablet" src={trinitytablet}></img>
          <img alt="" className="mobile" src={trinitymobile}></img>
          <div className="projectNameLink">
            <p className="projectName">Trinity Bank Tower</p>
            <p className="projectDate">February 2010</p>
          </div>
        </div>
        <div className="eachProject">
          <img alt="" className="desktop" src={paradesktop}></img>
          <img alt="" className="tablet" src={paratablet}></img>
          <img alt="" className="mobile" src={paramobile}></img>
          <div className="projectNameLink">
            <p className="projectName">Project Paramour</p>
            <p className="projectDate">February 2008</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioMain;
