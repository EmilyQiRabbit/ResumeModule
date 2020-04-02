import React from "react";
import "@style/template0.less";
import Avatar from "@images/avatar.jpeg";
// import AddIcon from "@images/add-icon.svg";

const basicIntro = [
  {
    title: "基本信息",
    key: "basic",
    content: {
      gender: { title: "性别", customInfo: "女" },
      age: { title: "年龄", customInfo: "28" },
      experience: { title: "工作资历", customInfo: "2年" }
    }
  },
  {
    title: "联系方式",
    key: "contact",
    content: {
      phoneNumber: { title: "电话", customInfo: "188****5610" },
      email: { title: "Email", customInfo: "L*****y@163.com" },
      wechat: { title: "微信号", customInfo: "188****5610" }
    }
  },
  {
    title: "个人简介",
    key: "evaluation",
    content: {
      proficient: {
        title: "技术评价",
        customInfo:
          "ES6，TS，jQuery，React，Redux，npm，Webpack，NodeJS，Express，KOA，Git"
      },
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
          <td contentEditable>2011 年 9 月 至 2015 年 6 月</td>
          <td contentEditable>北京邮电大学 通信工程 本科</td>
        </tr>
        <tr>
          <td contentEditable>2015 年 9 月 至 2018 年 6 月</td>
          <td contentEditable>北京邮电大学 通信工程 硕士</td>
        </tr>
      </table>
      {/* <button className="add-btn" title="添加教育背景">
        <AddIcon />
      </button> */}
    </>
  );
};

const ExperienceList = () => {
  return (
    <>
      <section className="experience-item">
        <h3>
          <span contentEditable>2018/5 至今</span>
          <span contentEditable>石墨文档</span>
          <span contentEditable>Web 前端研发</span>
        </h3>
        <p contentEditable>
          <span>石墨主站</span>
          <span>
            研发并维护石墨桌面、官网、广告、管理后台、内部销售工具和组件库等，对接各
            Office SDK。
            <br />
            参与前端微服务和 ssr 的研发。
          </span>
        </p>
        <p contentEditable>
          <span>技术栈：</span>
          <span>
            ES6，TS，jQuery，React，Redux，npm/yarn，Webpack，NodeJS，Express，KOA，Git
          </span>
        </p>
      </section>

      <section className="experience-item">
        <h3>
          <span contentEditable>2017/6 至 2018/5</span>
          <span contentEditable>贝壳金控</span>
          <span contentEditable>Web 前端实习</span>
        </h3>
        <p contentEditable>
          <span>装修分期系统 & 周报系统：</span>
          <span>
            “装修分期”后台管理系统 web 端开发，负责所有前端页面及交互功能。
            <br />
            内部孵化项目：周报系统负责人，完成周报系统需求分析、页面设计，以及前后端的研发工作。
          </span>
        </p>
        <p contentEditable>
          <span>技术栈：</span>
          <span>
            ES6，React（AntDesign），Redux，Webpack，NodeJS，Express，MongoDB(Mongoose)，Git
          </span>
        </p>
      </section>

      <section className="experience-item">
        <h3>
          <span contentEditable>2016/6 至 2017/1 </span>
          <span contentEditable>北京宏华兴业科技发展有限公司</span>
          <span contentEditable>Web 前端实习</span>
        </h3>
        <p contentEditable>
          <span>收费业务系统 & 制造执行系统：</span>
          <span>
            项目前端主要负责人。同时负责部分后端相关工作，参与 Java
            实体类的编写和调整，对数据的逻辑关系和表结构都有一定的了解。
          </span>
        </p>
        <p contentEditable>
          <span>技术栈：</span>
          <span>jQuery，Bootstrap 框架，JSP，SVN</span>
        </p>
      </section>
      {/* <button className="add-btn">
        <AddIcon />
      </button> */}
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
      <div id="pdf-target">
        {/* header */}
        <header>
          <p>
            求职意向：<span contentEditable>web 前端</span>
          </p>
        </header>
        <div className="content">
          {/* 左边栏 */}
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
          {/* 主要内容 */}
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
