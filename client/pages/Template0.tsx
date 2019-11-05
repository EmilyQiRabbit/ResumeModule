import React from "react";
import "@style/template0.less";
import Avatar from "@images/avatar.jpeg";
import AddIcon from "@images/add-icon.svg";

const basicIntro = [
  {
    title: "基本信息",
    key: "basic",
    content: {
      experience: "工作经验",
      gender: "性别",
      birthday: "出生日期"
    }
  },
  {
    title: "联系方式",
    key: "contact",
    content: {
      phoneNumber: "号码",
      email: "Email"
    }
  },
  {
    title: "技能评价",
    key: "evaluation",
    content: {
      proficient: "熟练",
      skilled: "掌握",
      general: "了解"
    }
  }
];

const EducationTable = () => {
  return (
    <>
      <table className="edu-table">
        <tr>
          <td>xxxx 年 x 月 ~ xxxx 年 x 月</td>
          <td>北京邮电大学</td>
          <td>专业：通信工程</td>
          <td>学历：本科/硕士</td>
        </tr>
      </table>
      <button className="add-btn" title="添加教育背景">
        <AddIcon />
      </button>
    </>
  );
};

const ExperienceList = () => {
  return (
    <>
      <section className="experience-item">
        <h3>
          <span contentEditable>xxxx 年 x 月 ~ xxxx 年 x 月</span>
          <span contentEditable>xxx 公司</span>
          <span contentEditable>Web 前端研发</span>
        </h3>
        <p contentEditable>
          <span>(项目名称)：</span>
          <span>...</span>
        </p>
        <p contentEditable>
          <span>技术栈：</span>
          <span>TypeScript React Webpack ... </span>
        </p>
      </section>
      <button className="add-btn">
        <AddIcon />
      </button>
    </>
  );
};

const AboutContent = () => {
  return (
    <div contentEditable>
      ...我的 GitHub 主页：https://github.com/EmilyQiRabbit
    </div>
  );
};

const experienceIntro = [
  {
    title: "教育背景",
    key: "education",
    content: <EducationTable />
  },
  {
    title: "工作经历",
    key: "experience",
    content: <ExperienceList />
  },
  {
    title: "自我评价",
    key: "about",
    content: <AboutContent />
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
              <section className="other-basic-info" key={info.key}>
                <h4 className="title triangle">{info.title}</h4>
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
        <div className="main-content experience-intro">
          {experienceIntro.map(info => {
            return (
              <section key={info.key} className={info.key}>
                <h4 className="title triangle">
                  {info.title}
                  <span className="affix-icon triangle"></span>
                </h4>
                {info.content}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Templage0;
