import React from "react";
import "@style/template0.less";
import Avatar from "@images/avatar.jpeg";
import AddIcon from "@images/add-icon.svg";

const basicIntro = [
  {
    title: "基本信息",
    key: "basic",
    content: {
      gender: { title: "性别", customInfo: "女" },
      age: { title: "年龄", customInfo: "27" },
      experience: { title: "工作资历", customInfo: "1年" }
    }
  },
  {
    title: "联系方式",
    key: "contact",
    content: {
      phoneNumber: { title: "电话", customInfo: "188****5610" },
      email: { title: "Email", customInfo: "LiuYQEmily@163.com" }
    }
  },
  {
    title: "个人简介",
    key: "evaluation",
    content: {
      proficient: { title: "技术评价", customInfo: "..." },
      homepage: {
        title: "Github",
        customInfo: <a href="https://github.com/EmilyQiRabbit">EmilyQiRabbit</a>
      },
      motto: { title: "Motto", customInfo: "芝士就是力量" }
    }
  }
];

const EducationTable = () => {
  return (
    <>
      <table className="edu-table">
        <tr>
          <td contentEditable> 2011 年 9 月 ~ 2015 年 6 月</td>
          <td contentEditable>北京邮电大学</td>
          <td contentEditable>专业：通信工程</td>
          <td contentEditable>学历：本科</td>
        </tr>
        <tr>
          <td contentEditable>2015 年 9 月 ~ 2018 年 6 月</td>
          <td contentEditable>北京邮电大学</td>
          <td contentEditable>专业：通信工程</td>
          <td contentEditable>学历：硕士</td>
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
  return <div contentEditable>乐于探索，信仰知识，注重体验。</div>;
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
      <div>
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
                          <span>{info.content[key].title}：</span>
                          <span contentEditable>
                            {info.content[key].customInfo}
                          </span>
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
    </div>
  );
};

export default Templage0;
