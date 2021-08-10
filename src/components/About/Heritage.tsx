import React, { FC } from "react";

interface IProps {}

/*Heritage component */
const Heritage: FC<IProps> = () => {
  return (
    <section className="heritageSession">
      <div className="heritageTextDiv">
        <h3>Our Heritage</h3>
        <p>
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>
        <p>
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>
        <p>
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </div>
      <div className="heritageImageDiv"></div>
    </section>
  );
};

export default Heritage;
