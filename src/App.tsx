import React from "react";
import "./App.css";
import { Layout, Row, Col, Button, BackTop } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Countdown from "react-countdown";

// import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import { Carousel } from "react-responsive-carousel";
const { Header, Content, Footer } = Layout;
// Random component

interface TypeProps {
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  completed: any;
}
const App: React.FC = () => {
  const countDate = new Date("12/22/2021");
  // Renderer callback with condition
  const renderer = (time: TypeProps) => {
    if (time.completed) {
      // Render a completed state
      return <span>You are good to go!</span>;
    } else {
      // Render a countdown
      // return <span>{time.hours}:{time.minutes}:{time.seconds}</span>;
      return (
        <Row>
          <Col span={24}>
            <div className="countdownwrap">
              <div>
                <ul className="react-countdown">
                  <li
                    style={{
                      backgroundImage: `url('/assets/images/vector.png')`,
                    }}
                  >
                    <p className="digit">{time.days}</p>
                    <p className="text">days</p>
                  </li>
                  <li
                    style={{
                      backgroundImage: `url('/assets/images/vector.png')`,
                    }}
                  >
                    <p className="digit">{time.hours}</p>
                    <p className="text">hours</p>
                  </li>
                  <li
                    style={{
                      backgroundImage: `url('/assets/images/vector.png')`,
                    }}
                  >
                    <p className="digit">{time.minutes}</p>
                    <p className="text">min</p>
                  </li>
                  <li
                    style={{
                      backgroundImage: `url('/assets/images/vector.png')`,
                    }}
                  >
                    <p className="digit">{time.seconds}</p>
                    <p className="text">Sec</p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      );
    }
  };
  return (
    <Layout>
      <BackTop />
      <Header id="Home" className="header">
        <Row justify="center" className="header-row">
          <Col className="logo">
            <h2>
              <a href="#Home">Thành Nhân & Thu Thảo</a>
            </h2>
          </Col>
          <Col>
            <a href="#Home">Home</a>
          </Col>
          <Col>
            <a href="#Couple">Couple</a>
          </Col>
          <Col>
            <a href="#Story">Story</a>
          </Col>
          <Col>
            <a href="#People">People</a>
          </Col>
          <Col>
            <a href="#Events">Events</a>
          </Col>
          <Col>
            <a href="#Gallery">Gallery</a>
          </Col>
          <Col>
            <a href="#Blog">Blog</a>
          </Col>
        </Row>
      </Header>
      <Content className="site-layout" style={{ padding: "0", marginTop: 64 }}>
        <div
          className="site-layout-background"
          style={{ padding: 0, minHeight: 380 }}
        >
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            showThumbs={false}
            useKeyboardArrows={true}
            autoPlay={true}
            stopOnHover={true}
            swipeable={true}
            dynamicHeight={false}
            emulateTouch={false}
            autoFocus={false}
            swipeScrollTolerance={5}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <Button
                  className="btn-arrow-prev"
                  shape="circle"
                  onClick={onClickHandler}
                  title={label}
                  icon={
                    <LeftOutlined
                      style={{ fontWeight: "bold", fontSize: "25px" }}
                    />
                  }
                ></Button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <Button
                  className="btn-arrow-next"
                  shape="circle"
                  onClick={onClickHandler}
                  title={label}
                  icon={
                    <RightOutlined
                      style={{ fontWeight: "bold", fontSize: "25px" }}
                    />
                  }
                ></Button>
              )
            }
          >
            <div className="carousel-div">
              <img
                className="carousel-image"
                style={{ height: window.innerHeight - 64 }}
                src="/assets/images/bg.png"
              />
              <div className="legend">
                <div>
                  <h3>WERE GETTING MARRIED</h3>
                </div>
                <div>
                  <h2>Save Our Date</h2>
                </div>
                <div>
                  <h3>22 December 2021</h3>
                </div>
                <div
                  style={{
                    animationDelay: "0ms",
                    animationDuration: "1000ms",
                    pointerEvents: "all",
                  }}
                >
                  <div className="animated-circle"></div>
                </div>
              </div>
            </div>
            <div className="carousel-div">
              <img
                className="carousel-image"
                style={{ height: window.innerHeight - 64 }}
                src="/assets/images/bg.png"
              />
              <div className="legend">
                <div>
                  <h3>WERE GETTING MARRIED</h3>
                </div>
                <div>
                  <h2>Save Our Date</h2>
                </div>
                <div>
                  <h3>22 December 2021</h3>
                </div>
                <div
                  style={{
                    animationDelay: "0ms",
                    animationDuration: "1000ms",
                    pointerEvents: "all",
                  }}
                >
                  <div className="animated-circle"></div>
                </div>
              </div>
            </div>
          </Carousel>
          <Countdown date={countDate} renderer={renderer} />
          <div id="Couple" className="container">
            <div className="section-title">
              <Row>
                <Col span={24}>
                  {" "}
                  <h2>Happy Cuple</h2>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <div className="couple-wrap couple-wrap-2">
                    <div className="couple-img">
                      <img src="/assets/images/thao.jpg" />
                    </div>
                    <div className="couple-text">
                      <div className="couple-content">
                        <h3>Thu Thảo</h3>
                        <p>
                          Hi I am Nancy Elizabeth. I am going to introduce
                          myself.I am a professional graphic designer
                          professional graphic designer going to introduce
                          myself.I am going to introduce myself.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="couple-wrap couple-wrap-3">
                    <div className="couple-img">
                      <img src="/assets/images/bi.jpg" />
                    </div>
                    <div className="couple-text">
                      <div className="couple-content">
                        <h3>Thành Nhân</h3>
                        <p>
                          Hi I am Nancy Elizabeth. I am going to introduce
                          myself.I am a professional graphic designer
                          professional graphic designer going to introduce
                          myself.I am going to introduce myself.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="welcome-area s2">
            <div className="container">
              <Row className="row">
                <Col span={24} className="col-lg-12">
                  <div className="welcome-content">
                    <h2>Welcome to our big day</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or less normal distribution of letters
                    </p>
                    <button type="button" className="btn btn btn-secondary">
                      Location
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div id="story" className="container">
            <div className="section-title">
              <Row>
                <Col span={24}>
                  {" "}
                  <h2> Our Love Story</h2>
                </Col>
              </Row>
            </div>
            <div className="container-1">
              <div className="story-wrap">
                <Row className="row">
                  <Col md={12} span={12}>
                    <div className="story-img">
                      <img src="/assets/images/1.jpg" alt="" />
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-text left-align-text">
                      <h3>First time we met</h3>
                      <span className="date">Jan 12 2019</span>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart. I am alone, and feel the charm of
                        existence in this spot, which was created for the bliss
                        of souls like mine. I am so happy, my dear friend,{" "}
                      </p>
                      <div className="story-button">
                        <a className="theme-btn" href="/">
                          Read More
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-text right-align-text">
                      <h3>Our First Date</h3>
                      <span className="date">Dec 25, 2017</span>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart. I am alone, and feel the charm of
                        existence in this spot, which was created for the bliss
                        of souls like mine. I am so happy, my dear friend,{" "}
                      </p>
                      <div className="story-button">
                        <a className="theme-btn" href="/">
                          Read More
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-img">
                      <img src="/assets/images/2.jpg" alt="" />
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-img">
                      <img src="/assets/images/3.jpg" alt="" />
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-text left-align-text">
                      <h3>Our Marriage Proposal</h3>
                      <span className="date">Jan 10, 2018</span>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart. I am alone, and feel the charm of
                        existence in this spot, which was created for the bliss
                        of souls like mine. I am so happy, my dear friend,{" "}
                      </p>
                      <div className="story-button">
                        <a className="theme-btn" href="/">
                          Read More
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-text right-align-text">
                      <h3>Our Engagement</h3>
                      <span className="date">Jan 22, 2018</span>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart. I am alone, and feel the charm of
                        existence in this spot, which was created for the bliss
                        of souls like mine. I am so happy, my dear friend,{" "}
                      </p>
                      <div className="story-button">
                        <a className="theme-btn" href="/">
                          Read More
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-img">
                      <img src="/assets/images/4.jpg" alt="" />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div id="people" className="container">
            <div className="section-title">
              <Row>
                <Col span={24}>
                  {" "}
                  <h2> Groomsmen &amp; Bridesmaid</h2>
                </Col>
              </Row>
            </div>
            <div className="groomsmen-bridesmaid-area section-padding">
              <div className="">
                <div className="groomsmen-bridesmaid-area-menu">
                  <div className="Groomsman-wrap">
                    <Row className="row">
                      <Col span={6} className="grid">
                        <div className="groomsmen-bridesmaid-wrap">
                          <div className="groomsmen-bridesmaid-img">
                            <img src="/assets/images/1.jpg" alt="bride" />
                            <div className="social-list">
                              <ul className="d-flex">
                                <li>
                                  <a href="/">
                                    <i className="fab fa-facebook"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Chị gái</h4>
                            <span>Sister</span>
                          </div>
                        </div>
                      </Col>
                      <Col span={6} className="grid">
                        <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2">
                          <div className="groomsmen-bridesmaid-img">
                            <img src="/assets/images/1.jpg" alt="bride" />
                            <div className="social-list">
                              <ul className="d-flex">
                                <li>
                                  <a href="/">
                                    <span className="fas fa-facebook"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Bạn thân</h4>
                            <span>Best Friend</span>
                          </div>
                        </div>
                      </Col>
                      <Col span={6} className="grid">
                        <div className="groomsmen-bridesmaid-wrap">
                          <div className="groomsmen-bridesmaid-img">
                            <img src="/assets/images/1.jpg" alt="bride" />
                            <div className="social-list">
                              <ul className="d-flex">
                                <li>
                                  <a href="/">
                                    <span className="fas fa-facebook"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Bạn</h4>
                            <span>Friend</span>
                          </div>
                        </div>
                      </Col>
                      <Col span={6} className="grid">
                        <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2">
                          <div className="groomsmen-bridesmaid-img">
                            <img src="/assets/images/1.jpg" alt="bride" />
                            <div className="social-list">
                              <ul className="d-flex">
                                <li>
                                  <a href="/">
                                    <span className="fas fa-facebook"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Bạn</h4>
                            <span>Friend</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="row">
                      <Col span={6} className="grid">
                        <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2">
                          <div className="groomsmen-bridesmaid-img">
                            <img src="/assets/images/1.jpg" alt="bride" />
                            <div className="social-list">
                              <ul className="d-flex">
                                <li>
                                  <a href="/">
                                    <i className="fab fa-facebook"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Anh trai </h4>
                            <span>Brother</span>
                          </div>
                        </div>
                      </Col>
                      <Col span={6} className="grid">
                        <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap">
                          <div className="groomsmen-bridesmaid-img">
                            <img src="/assets/images/1.jpg" alt="bride" />
                            <div className="social-list">
                              <ul className="d-flex">
                                <li>
                                  <a href="/">
                                    <i className="fab fa-facebook"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Bạn Thân </h4>
                            <span>Best Friend</span>
                          </div>
                        </div>
                      </Col>
                      <Col span={6} className="grid">
                        <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2">
                          <div className="groomsmen-bridesmaid-img">
                            <img src="/assets/images/1.jpg" alt="bride" />
                            <div className="social-list">
                              <ul className="d-flex">
                                <li>
                                  <a href="/">
                                    <span className="fas fa-facebook"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Bạn</h4>
                            <span>Friend</span>
                          </div>
                        </div>
                      </Col>
                      <Col span={6} className="grid">
                        <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap">
                          <div className="groomsmen-bridesmaid-img">
                            <img src="/assets/images/1.jpg" alt="bride" />
                            <div className="social-list">
                              <ul className="d-flex">
                                <li>
                                  <a href="/">
                                    <span className="fas fa-facebook"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Bạn</h4>
                            <span>Friend</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="event" className="container">
            <div className="section-title">
              <Row>
                <Col span={24}>
                  <h2>When &amp; Where</h2>
                </Col>
              </Row>
            </div>
            <div className="container">
              <Row className="row">
                <Col span={24} className="col-12">
                  <div className="tabs-site-button">
                    <div className="event-tabs">
                      <Col className="col-md-12 col-12">
                        <div className="event-wrap">
                          <Row className="row">
                            <Col
                              span={10}
                              className="col-lg-5 col-md-12 col-12"
                            >
                              <div className="event-img">
                                <img src="/assets/images/where1.jpg" />
                              </div>
                            </Col>
                            <Col
                              span={14}
                              className="col-lg-7 col-md-12 col-12"
                            >
                              <div className="event-text">
                                <h3>Wedding Ceremony</h3>
                                <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                                <span>
                                  256 Apay Road,Califonia Bong, London
                                </span>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal It is a long established
                                  fact that a reader will be distracted by the
                                  readable content of a page when looking at its
                                  layout. The point of using Lorem Ipsum is that
                                  it has a more-or-less normal{" "}
                                </p>
                                <button
                                  type="button"
                                  className="btn btn btn-secondary"
                                >
                                  Location
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="event-wrap">
                          <Row className="row">
                            <Col
                              span={14}
                              className="col-lg-7 col-md-12 col-12"
                            >
                              <div className="event-text event-text-2">
                                <h3>Wedding Party</h3>
                                <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                                <span>
                                  256 Apay Road,Califonia Bong, London
                                </span>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal It is a long established
                                  fact that a reader will be distracted by the
                                  readable content of a page when looking at its
                                  layout. The point of using Lorem Ipsum is that
                                  it has a more-or-less normal{" "}
                                </p>
                                <button
                                  type="button"
                                  className="btn btn btn-secondary"
                                >
                                  Location
                                </button>
                              </div>
                            </Col>
                            <Col
                              span={10}
                              className="col-lg-5 col-md-12 col-12"
                            >
                              <div className="event-img">
                                <img src="/assets/images/where2.jpg" />
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="event-wrap">
                          <Row className="row">
                            <Col
                              span={10}
                              className="col-lg-5 col-md-12 col-12"
                            >
                              <div className="event-img">
                                <img src="/assets/images/where3.jpg" />
                              </div>
                            </Col>
                            <Col
                              span={14}
                              className="col-lg-7 col-md-12 col-12"
                            >
                              <div className="event-text">
                                <h3>Wedding Dinner</h3>
                                <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                                <span>
                                  256 Apay Road,Califonia Bong, London
                                </span>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal It is a long established
                                  fact that a reader will be distracted by the
                                  readable content of a page when looking at its
                                  layout. The point of using Lorem Ipsum is that
                                  it has a more-or-less normal{" "}
                                </p>
                                <button
                                  type="button"
                                  className="btn btn btn-secondary"
                                >
                                  Location
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Content>
      <div className="site-footer s2">
        <div className="container">
          <Row>
            <div className="text">
              <h2>Nhân &amp; Thảo</h2>
              <p>Thank you</p>
            </div>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default App;
