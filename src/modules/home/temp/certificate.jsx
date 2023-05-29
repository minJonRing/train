import * as React from "react";
import "./certificate.scss";
const CertificateTemp = (props) => {
  const { historyTrain } = props;
  // const []
  return (
    <div className="page">
      <div className="layout">
        <div className="row">
          <div className="col">
            <span className="title">职业卫生技术服务机构</span>
            <span className="title">专业技术人员</span>
            <span className="title sub-title">培训合格证</span>
            <div className="photo">
              <img alt="照片" className="photo-img" src={historyTrain.photo} />
            </div>
            <div className="form">
              <div className="form-item">
                <div className="form-item-title">培训类别：</div>
                <div className="form-item-text">
                  {historyTrain.courseType || ""}
                </div>
              </div>
              <div className="form-item">
                <div className="form-item-title">姓 名：</div>
                <div className="form-item-text">{historyTrain.name || ""}</div>
              </div>
              <div className="form-item">
                <div className="form-item-title">身份证号：</div>
                <div className="form-item-text">
                  {historyTrain.idCard || ""}
                </div>
              </div>
              <div className="form-item">
                <div className="form-item-title">工作单位：</div>
                <div className="form-item-text">
                  {historyTrain.orgName || ""}
                </div>
              </div>
              <div className="form-item">
                <div className="form-item-title">证书编号：</div>
                <div className="form-item-text">
                  {historyTrain.certificateNo || ""}
                </div>
              </div>
              <div className="form-item">
                <div className="form-item-title">发证日期：</div>
                <div className="form-item-text">
                  {historyTrain.issueDate || ""}
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="sign-table-title">培训记录</div>
            <table className="sign-table">
              <thead>
                <tr>
                  <th className="score time-line" colSpan="2">
                    序号
                  </th>
                  <th className="score time-line" colSpan="6">
                    培训时间
                  </th>
                  <th className="score time-line" colSpan="3">
                    学时
                  </th>
                  <th className="score time-line" colSpan="3">
                    成绩
                  </th>
                  <th className="score time-line" colSpan="3">
                    备注
                  </th>
                </tr>
              </thead>
              <tbody>
                {(historyTrain.dateList || []).map((item) => {
                  return (
                    <tr key={item.no}>
                      <th className="score time-line" colSpan="2">
                        {item.no}
                      </th>
                      <th className="score time-line" colSpan="6">
                        {item.time}
                      </th>
                      <th className="score time-line" colSpan="3">
                        {item.credit}
                      </th>
                      <th className="score time-line" colSpan="3">
                        {item.score}
                      </th>
                      <th className="score time-line" colSpan="3"></th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div
              style={{
                outline: "3px dashed #333",
                display: "inline-block",
                margin: "20px",
                padding: "5px 10px",
              }}
            >
              <p>遵守法律法规 诚信公正执业</p>
              <p>服务执业健康 承担法律责任</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateTemp;
