import React from "react";
import "@style/template0.less";
import Avatar from "@images/avatar.jpeg";
// import AddIcon from "@images/add-icon.svg";

const basicIntro = [
  {
    title: "基本信息",
    key: "basic",
    content: {
      gender: { title: "🙋‍♀️ 性别", customInfo: "女" },
      age: { title: "🙈 年龄", customInfo: "27" },
      experience: { title: "👩‍💻 工作资历", customInfo: "2年" }
    }
  },
  {
    title: "联系方式",
    key: "contact",
    content: {
      phoneNumber: { title: "📲 电话", customInfo: "188****5610" },
      email: { title: "📮 邮箱", customInfo: "L*****y@163.com" },
      wechat: { title: "💚 微信", customInfo: "188****5610" }
    }
  },
  {
    title: "前端相关",
    key: "webdev",
    content: {
      proficient: {
        title: "⭐️ 技术评价",
        customInfo: (
          <span className="detail">
            <span>熟练</span>：ES6，TS，React，Redux，jQuery，Git
            <br />
            <span>熟悉</span>：Webpack，npm，SSR
            <br />
            <span>了解</span>：NodeJS，Express，KOA
          </span>
        )
      },
      homepage: {
        title: "🐱 Github",
        customInfo: <a href="https://github.com/EmilyQiRabbit">EmilyQiRabbit</a>
      }
    }
  },
  {
    title: "自我评价",
    key: "evaluation",
    content: {
      proficient: {
        title: "🌸 自我评价",
        customInfo: (
          <>
            <br />
            <span>乐于探索，主动学习，注重体验，热爱生活。</span>
          </>
        )
      }
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
            ①. 广告项目：前端主要负责人，研发并维护石墨文档中投放的第三方广告，
            负责广告频控、曝光等统计相关的前端工作。
            基于广告逻辑分散、广告之间或与 UI
            具有一定关联性等特性，完成广告相关组件库和管理后台的重构。
            <br />
            ②. 石墨官网：研发并维护石墨官网，可兼容移动端，支持 SSR。
            <br />
            ③.
            协同研发并维护石墨桌面、企业管理、管理后台、内部销售工具和组件库等，对接
            Office SDK。 项目基于 Redux 维护全局组件状态。
            <br />
            ④. 参与前端微服务和 SSR 的研发。
          </span>
        </p>
        <p contentEditable>
          <span>技术栈：</span>
          <span>
            ES6，TS，jQuery，React，Redux，npm/yarn，lerna，Webpack，NodeJS，Express，KOA，Git
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
            ①. 负责多个后台管理系统 web 端研发及维护。项目搭建之初即为 SPA
            微服务。 能很快上手 React、Redux、Webpack 等前端工具。
            <br />
            ②.
            内部孵化项目「周报系统」负责人，完成了该系统需求分析、页面设计，以及前后端研发工作。
          </span>
        </p>
        <p contentEditable>
          <span>技术栈：</span>
          <span>
            ES6，React(AntDesign)，Redux，Webpack，NodeJS，Express，MongoDB(Mongoose)，Git
          </span>
        </p>
      </section>

      <section className="experience-item">
        <h3>
          <span contentEditable>2015/9 至 2017/1 </span>
          <span contentEditable>北京宏华兴业科技发展有限公司</span>
          <span contentEditable>Web 前端实习</span>
        </h3>
        <p contentEditable>
          <span>收费业务系统 & 制造执行系统：</span>
          <span>
            ①. 负责项目前端主要研发和维护工作。同时负责部分后端相关工作，参与
            Java 实体类的编写和调整，对数据的逻辑关系和表结构都有一定的了解。
            <br />
            ②. 使用 canvas 以及 ECharts 组件库，完成项目中数据可视化部分的研发；
            针对浏览器兼容性和响应式布局两方面，对项目中页面做适配和优化。
          </span>
        </p>
        <p contentEditable>
          <span>技术栈：</span>
          <span>jQuery，Bootstrap 框架，canvas，JSP，SVN</span>
        </p>
      </section>
    </>
  );
};

const AboutContent = () => {
  return (
    <div contentEditable>
      学习能力强，能够很快学习并应用新知识；
      代码质量较高，乐于积极探索优化方式； 兴趣广泛，不局限于前端，最近在了解
      Rust 和机器学习；
      不足之处是对项目缺乏更高级别的把控，例如不熟悉部署的环境和原理，或可能忽略某些内在关联而导致项目估时不准等。
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
    title: "个人总结",
    key: "about",
    content: <AboutContent />
  }
];

const Templage0 = () => {
  console.log("render");
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
