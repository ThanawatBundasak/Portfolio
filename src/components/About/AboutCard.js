import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            สวัสดี ทุกคน ผมชื่อ <span className="purple">ฐานวัฒน์ บรรดาศักดิ์ </span>
            จาก <span className="purple"> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</span>
            <br />ผมเป็นนักศึกษาปีที่4_<span className="purple">จากคณะวิทยาลัยเทคโนโลยีอุตสาหกรรม_สาขาเทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์(คอมพิวเตอร์)</span>
            <br />
            <br />
            นอกจากการเขียนโค้ดแล้ว ยังมีกิจกรรมอื่นๆ ที่ฉันชอบทำอีกด้วย!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> เล่นการ์ดเกม
            </li>
            <li className="about-activity">
              <ImPointRight /> ดูการ์ตูน
            </li>
            <li className="about-activity">
              <ImPointRight /> ท่องเที่ยวหาของกิน
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Try your imagination !"{" "}
          </p>
          <footer className="blockquote-footer">ฐานวัฒน์</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
