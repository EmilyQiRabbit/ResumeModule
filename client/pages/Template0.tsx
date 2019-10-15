import React from "react";
import "@style/template0.less";
import Avatar from "@images/avatar.jpeg";

const basicIntro = [
  {
    title: "基本信息",
    content: {
      experience: "工作经验",
      gender: "性别",
      birthday: "出生日期"
    }
  },
  {
    title: "联系方式",
    content: {
      phoneNumber: "号码",
      email: "Email"
    }
  },
  {
    title: "技能评价",
    content: {
      proficient: "熟练",
      skilled: "掌握",
      general: "了解"
    }
  }
];
const Templage0 = () => {
  return (
    <div className="wrapper">
      <header>
        <p>
          求职意向：<span contentEditable>web 前端</span>
        </p>
      </header>
      <div className="content">
        <aside className="aside basic-intro">
          <img src={Avatar} />
          <section className="name-info">
            <p contentEditable>Yuqi喵</p>
            <p contentEditable>Web前端攻城狮</p>
          </section>
          {basicIntro.map(info => {
            return (
              <section className="other-basic-info">
                <h4>{info.title}</h4>
                <div>
                  {Object.keys(info.content).map(key => {
                    return (
                      <p>
                        {info.content[key]}：<span contentEditable>...</span>
                      </p>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </aside>
        <div className="main-content experience-intro"></div>
      </div>
    </div>
  );
};

export default Templage0;
