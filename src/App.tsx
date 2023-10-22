import React from 'react';
import styled from 'styled-components';
import './App.css';
import cfg from "./config/cfg.json";

interface AllowClassName {
  className?: string;
}

interface HeaderProps extends AllowClassName {
  logo: ImgProps;
  navitems: AProps[];
  phone: string;
}

interface KeyPointProps extends AllowClassName {
  title: string;
  order: AProps;
  subtitle: string;
  img1: ImgProps;
  img2: ImgProps;
}

interface Info extends AllowClassName {
  text: string;
}

interface InfosProps extends AllowClassName {
  infolist: Info[];
}

interface FactProps extends AllowClassName {
  number: string;
  comment: string;
}

interface FactsProps extends AllowClassName {
  factlist: FactProps[];
}

interface DescriptionProps extends AllowClassName {
  title: string;
  info: InfosProps;
  facts: FactsProps;
}

interface ImgProps extends AllowClassName {
  src: string;
  width: number;
  height: number;
};

interface AProps extends AllowClassName {
  href: string;
  text: string;
};

interface Step extends AllowClassName {
  title: string;
  description: string;
}

interface WorkStepsProps extends AllowClassName {
  steplist: Step[];
}

interface WorkProcessProps extends AllowClassName {
  title: string;
  subtitle: string;
  steps: WorkStepsProps;
}

interface ProjectProps extends AllowClassName {
  img: ImgProps;
}

interface ProjectsProps extends AllowClassName {
  title: string;
  projectlist: ProjectProps[];
}

interface ReviewProps extends AllowClassName {
  author: string;
  text: string;
}

interface ReviewsProps extends AllowClassName {
  title: string;
  reviewlist: ReviewProps[];
}

interface OrderFormProps extends AllowClassName {
  image: ImgProps;
  title: string;
  comment: string;
  nametext: string;
  emailtext: string;
  phonetext: string;
  submittext: string;
  appstore: string;
  googleplay: string;
}

interface FooterProps extends AllowClassName {
  copyright: string;
  rights: string;
  confpolicy: AProps;
  paymentinfo: AProps;
  social: AProps[];
}

const quote: ImgProps = {
  src: "images/icon.svg",
  width: 40,
  height: 40
};

const google_play: ImgProps = {
  src: "images/GooglePlay.svg",
  width: 121,
  height: 36
};

const app_store: ImgProps = {
  src: "images/AppStore.svg",
  width: 121,
  height: 36
};

// function Header({logo, navitems, phone}: HeaderProps) {
function Header(props: HeaderProps) {
  return (
    <header className="text-large">
      <Img {...props.logo} />
      <ul>
        {props.navitems.map((item) => {
          return <li><A {...item} /></li>;
        })}
      </ul>
      <address>{props.phone}</address>
    </header>
  );
}

function Img(props: ImgProps) {
  return <img src={props.src} width={props.width} height={props.height} />;
}

function A(props: AProps) {
  return <a href={props.href}>{props.text}</a>;
}

function KeyPoint(props: KeyPointProps) {
  return (
    <section>
      <div className="block1">
        <h1>{props.title}</h1>
        <A {...props.order} />
      </div>
      <div className="block2">
        <div className="block2-1">
          <p className="subtitle-text">{props.subtitle}</p>
          <figure>
            <Img {...props.img2} />
          </figure>
        </div>
        <figure>
          <Img {...props.img1} />
        </figure>
      </div>
    </section>
  );
}

function InfoX(props: Info) {
  return (
    <p>{props.text}</p>
  );
}

function Infos(props: InfosProps) {
  return (
    <div className="block3-2_info">
      {props.infolist.map((info) => {
        return <InfoX {...info} />;
      })}
    </div>
  );
}

function Fact(props: FactProps) {
  return (
    <div>
      <p className="title-h3">{props.number}</p>
      <p>{props.comment}</p>
    </div>
  );
}

function Facts(props: FactsProps) {
  return (
    <div className="block3-2_numbers">
      {props.factlist.map((fact) => {
        return <Fact {...fact} />;
      })}
    </div>
  );
}

function Description(props: DescriptionProps) {
  return (
    <section className="block3">
      <h2>{props.title}</h2>
      <div className="block3-2">
        <Infos {...props.info} />
        <Facts {...props.facts} />
      </div>
    </section>
  );
}

function WorkSteps(props: WorkStepsProps) {
  return (
    <div className="block4-2_steps">
      {props.steplist.map((step) => {
        return (
          <div>
            <div className="block4-2_step">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

function WorkProcess(props: WorkProcessProps) {
  return (
    <section className="block4">
      <h2>{props.title}</h2>
      <div className="block4-2">
        <p>{props.subtitle}</p>
        <WorkSteps {...props.steps} />
      </div>
    </section>
  );
}

function Project(props: ProjectProps) {
  return (
    <figure className={props.className}>
      <Img {...props.img} />
    </figure>
  );
}

function Projects(props: ProjectsProps) {
  return (
    <section className="block5">
      <h2>{props.title}</h2>
      <div className="block5-img">
        {/* {props.projectlist.map((project) => {
          return <Project {...project} />;
        })} */}
        {props.projectlist.map((project, i) => {
          return <Project className={"project" + i.toString()} {...project} />
        })}
      </div>
    </section>
  );
}

function Review(props: ReviewProps) {
  return (
    <article>
      <header>
        <Img {...quote} />
      </header>
      <blockquote>
        <cite className="text-large-bold">{props.author}</cite>
        <p>{props.text}</p>
      </blockquote>
    </article>
  );
}

function Reviews(props: ReviewsProps) {
  return (
    <section className="block6">
      <h2>{props.title}</h2>
      <div className="block6-reviews">
        {props.reviewlist.map((review) => {
          return <Review {...review} />;
        })}
      </div>
    </section>
  );
}

function OrderForm(props: OrderFormProps) {
  return (
    <form className="order">
      <figure>
        <Img {...props.image} />
      </figure>

      <div className="order-form">
        <div>
          <h2>{props.title}</h2>
          <p>{props.comment}</p>
        </div>

        <input type="text" placeholder={props.nametext} />
        <input type="email" placeholder={props.emailtext} />
        <input type="text" placeholder={props.phonetext} pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" required />
        <button type="submit">{props.submittext}</button>

        <div className="download-apps">
          <a href={props.appstore}>
            <Img {...app_store} />
          </a>

          <a href={props.appstore}>
            <Img {...google_play} />
          </a>
        </div>
      </div>
    </form>
  );
}

function Footer(props: FooterProps) {
  return (
    <footer>
      <div>
        <p>{props.copyright}</p>
        <p>{props.rights}</p>
      </div>

      <p>
        <A {...props.confpolicy} />
        <span> / </span>
        <A {...props.paymentinfo} />
      </p>

      <address>
        {props.social.map((link) => {
          return (
            <span>
              <A {...link} />
              <span> </span>
            </span>
          );
        })}
      </address>
    </footer>
  );
}

// const PX = styled.p`
//   font-size: 16px;
//   font-family: "Roboto", sans-serif;
//   font-weight: 400;
//   line-height: 22.40px;
//   word-wrap: break-word;
// `

function App() {
  return (
    <div>
      <Header {...cfg.Header} />
      <main>
        <KeyPoint {...cfg.KeyPoint} />
        <Description {...cfg.Description} />
        <WorkProcess {...cfg.WorkProcess} />
        <Projects {...cfg.Projects} />
        <Reviews {...cfg.Reviews} />
        <OrderForm {...cfg.OrderForm} />
      </main>
      <Footer {...cfg.Footer} />
    </div>
  );
}

export default App;
