import React from "react";
import "@style/template0.less";
import Avatar from "@images/avatar.jpeg";

// fixme: 使用 svg loader
const AddIcon = () => {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="plus-circle"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
    </svg>
  );
};

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
      <table>
        <tr>
          <td>xxxx 年 x 月 ~ xxxx 年 x 月</td>
          <td>某某某学校</td>
          <td>某某某专业</td>
        </tr>
      </table>
      <button className="add-btn">
        <AddIcon />
      </button>
    </>
  );
};

const ExperienceList = () => {
  return (
    <>
      <section>
        <h3>
          <span contentEditable></span>
          <span contentEditable></span>
          <span contentEditable></span>
        </h3>
        <p contentEditable>
          <span></span>
          <span></span>
        </p>
        <p contentEditable>
          <span></span>
          <span></span>
        </p>
      </section>
      <button className="add-btn">
        <AddIcon />
      </button>
    </>
  );
};

const AboutContent = () => {
  return <div contentEditable>...</div>;
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
              <section key={info.key}>
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
