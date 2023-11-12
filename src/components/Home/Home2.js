import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              ผมเป็นนักศึกษาปีที่4 ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ ที่ศึกษาอยู่ใน
              คณะวิทยาลัยเทคโนโลยีอุตสาหกรรม สาขาเทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์(คอมพิวเตอร์) 
              <br />
              <br />สาเหตุที่ผมเข้าศึกษาในสาขาวิชานี้ เพราะ
              <i>
                <b className="purple"> ผมนั้นมีความสนใจที่อยากสร้างโปรแกรมที่ทำใช้ชีวิตสบายขึ้น </b>
              </i>
              <br />
              <br />
              และเป้าหมายที่สนใจหลังจากเรียนจบนั้น คือ &nbsp;
              <i>
                <b className="purple">การทำงานในส่วน backend developer </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ThanawatBundasak"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
