import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Liên hệ 24/7</h5>
            <p>(+84)83 221 1203</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>184 Lê Đại Hành</h5>
            <p>Quận 10, TP.HCM</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-envelope"></i>
            </div>
            <h5>Email</h5>
            <p>khoingoc456@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-12 contact-Box">
        <div className="box-info">
          <div className="info-image">
            <i className="fas fa-user"></i>
          </div>
          <h5>Nhóm bán sách gồm: </h5>
          <p>Phạm Ngọc Khôi</p>
          <p>Cao Quốc Việt</p>
          <p>Trần Khải Trí</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
