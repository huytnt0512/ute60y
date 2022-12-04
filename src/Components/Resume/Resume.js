import React from "react";
import "./Resume.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Data from "./Data";
import { FaGraduationCap, FaAws } from "react-icons/fa";
import img1 from "../../pic/ute1.jpg";
import img2 from "../../pic/ute2.jpg";
import img3 from "../../pic/ute3.jpg";
import img4 from "../../pic/ute4.jpg";
const Resume = () => {
  return (
    <section className="resume container mt" id="resume">
      <h2 className="section__title">CHẶNG ĐƯỜNG 60 NĂM</h2>
      <div className="resume__container">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            contentStyle={{ color: "#2196F3" }}
            date="1960-1976"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <div className="box">
              <div className="box_content">
                <h3 className="vertical-timeline-element-title">
                  TRƯỜNG KỸ THUẬT ĐÀ NẴNG
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Sự khởi đầu lịch sử đầy ấn tượng
                </h4>
                <img src={img1} alt="" />
                <p style={{ fontSize: "14px" }}>
                  Trường Kỹ Thuật Đà Nẵng được xây dựng từ năm 1960. Tháng 9 năm
                  1962, Trường khai giảng lớp đầu tiên. Ngay từ năm học đầu
                  tiên, Trường đã được trang bị Cơ sở vật chất thực hành và giáo
                  cụ đúng tiêu chuẩn quốc tế thời kỳ đó cho một Trường Kỹ thuật
                  Công nghiệp.
                </p>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: "#2196F3" }}
            date="1976 - 1994"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <div className="box">
              <div className="box_content">
                <h3 className="vertical-timeline-element-title">
                  TRƯỜNG KỸ THUẬT NGUYỄN VĂN TRỖI
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Dấu ấn phát huy truyền thống
                </h4>
                <img src={img2} alt="" />
                <p style={{ fontSize: "14px" }}>
                  Sau ngày đất nước hòa bình và thống nhất, trước yêu cầu cấp
                  bách về việc tiếp quản và khai thác các cơ sở Công nghiệp sau
                  chiến tranh vào công cuộc xây dựng đất nước, tiếp tục nhiệm vụ
                  đào tạo nguồn nhân lực Kỹ thuật Công nghệ. Năm 1987 được Liên
                  Xô viện trợ tái đầu tư nâng cấp trang thiết bị Công nghiệp qui
                  mô, trường mở rộng loại hình đào tạo trung cấp kỹ thuật nên
                  chuyến tên thành Trường Kỹ thuật Nguyễn Văn Trỗi.
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: "#2196F3" }}
            date="2008 - 2010"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <div className="box">
              <div className="box_content">
                <h3 className="vertical-timeline-element-title">
                  TRƯỜNG CAO ĐẲNG CÔNG NGHỆ
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Một chặng đường phát triển vẻ vang
                </h4>
                <img src={img3} alt="" />
                <p style={{ fontSize: "14px" }}>
                  Theo nghị định 32/CP ngày 04.4.1994 của Chính phủ, trường trở
                  thành một thành viên của Đại học Đà Nẵng mang tên Trường Cao
                  đẳng Công nghệ. Là một cơ sở đào tạo phục vụ cho nhu cầu phát
                  triển kinh tế - xã hội, trường Cao đẳng Công nghệ Đà Nẵng có
                  chức năng nhiệm vụ đào tạo cán bộ kỹ thuật và công nghệ có
                  trình độ cao đẳng, đồng thời cũng là trung tâm nghiên cứu khoa
                  học và chuyển giao công nghệ của khu vực miền Trung - Tây
                  Nguyên.
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: "#2196F3" }}
            date="2017 - ngày nay"
            // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <div className="box">
              <div className="box_content">
                <h3 className="vertical-timeline-element-title">
                  TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Một chặng đường phát triển vẻ vang
                </h4>
                <img src={img4} alt="" />
                <p style={{ fontSize: "14px" }}>
                  Trường Đại học Sư phạm Kỹ thuật là trường công lập, thành viên
                  của Đại học Đà Nẵng được thành lập năm 2017 theo quyết định số
                  1749/QĐ-TTg của Chính Phủ ngày 08/11/2017.Phát huy truyền
                  thống 60 năm xây dựng và phát triển, Trường Đại học Sư phạm Kỹ
                  thuật không ngừng cải tiến, nâng cao chất lượng đào tạo và
                  nghiên cứu khoa học để cung cấp nguồn nhân lực kỹ thuật công
                  nghệ cao ở khu vực miền Trung – Tây Nguyên và cả nước.
                </p>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaAws />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Resume;
