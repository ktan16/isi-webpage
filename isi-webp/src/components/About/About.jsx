import React from "react";
import "./About.css";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-what">
        <div className="about-what-left">
          <img src={about1} alt="" className="about-what-img" />
        </div>

        <div className="about-what-right">
          <h2>WHAT WE DO</h2>
          <h1>strength that lasts</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusantium natus sequi. Nostrum ratione error eum enim perferendis
            hic porro, facere blanditiis nihil repellendus necessitatibus optio
            esse saepe quo fugiat quisquam laborum obcaecati cupiditate non et
            neque. Consectetur ad excepturi incidunt distinctio molestias
            reprehenderit facere, iste error illo ab, quae ex aperiam illum
            assumenda, deserunt explicabo praesentium quo vero expedita
            provident? Omnis maiores, eaque dolor esse fuga reprehenderit, culpa
            quidem veritatis necessitatibus repellendus praesentium sapiente
            obcaecati id earum odit officiis nam? Nemo incidunt at deserunt vel
            molestiae! Suscipit sequi temporibus atque accusamus deleniti,
            minima alias assumenda excepturi totam quasi illo.
          </p>
        </div>
      </div>

      <div className="about-why">
        <div className="about-why-left">
          <h2>WHY WE DO IT</h2>
          <h1>support you can trust</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            tempora molestiae alias ipsum quibusdam expedita totam id eum
            facere, aliquid sunt autem provident quos, incidunt repudiandae
            suscipit corporis excepturi nam, inventore odit temporibus eaque.
            Perferendis delectus aliquid error ipsa unde, natus officiis
            expedita saepe, nostrum harum aperiam provident voluptates sed odio
            illo optio animi dolorem quia quam maxime voluptate eaque velit
            iusto. Non cupiditate qui minima consectetur sapiente impedit fugiat
            laborum dolores velit ipsam laudantium atque adipisci accusamus in
            earum nisi reiciendis esse, reprehenderit facere numquam ducimus!
            Alias, sapiente maxime? Deleniti aliquid blanditiis magni sed dolore
            voluptatem repudiandae obcaecati sapiente.
          </p>
        </div>

        <div className="about-why-right">
          <img src={about2} alt="" className="about-why-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
