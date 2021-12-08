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
                        <h3>Thu Thảo (trong vai Nóc Nhà ^^) </h3>
                        <p>
                          Một cô gái ngân hàng nhỏ nhắn, đáng yêu với đôi kính
                          cận. Ấn tượng đầu tiên khi gặp là nụ cười rất hiền và
                          dễ gây được thiện cảm với người đối diện, tính cách
                          hòa đồng cởi mở cũng giúp Thảo nhanh chóng làm quen
                          cũng như bắt nhịp kịp mọi thứ.
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
                        <h3>Thành Nhân (aka Bi)</h3>
                        <p>
                          Một cục đen thui to bự và rất gấu, nhưng luôn được mọi
                          người nhận xét là ấm áp và nhiệt tình. Miệng bằng tay,
                          tay bằng miệng. Sống khá tình cảm và đôi khi đó chính
                          là điểm yếu của Bi.
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
                    <h2>Welcome to my life</h2>
                    <p>“Bà” yêu &hearts; ,</p>
                    <p>
                      Hôm nay chính thức là ngày tụi mình về một nhà, ngày chính
                      thức em lên chức Nóc Nhà ^^ , hơn ai hết anh vui lắm và đã
                      chờ ngày này đã lâu rồi. Như đã từng nói với em, đời anh
                      là những chuỗi ngày dài theo đuổi và kiếm tìm, cứ nghĩ
                      mình vẫn sẽ luôn độc hành tiếp tục khá lâu trên chuyến
                      hành trình thì Covid đã cô tình tạo cơ hội cho mình gặp
                      nhau, vì em không về quê được nên mình vô tình có nhiều
                      hơn thời gian dành cho nhau, tìm hiểu và chính thức hẹn
                      hò.
                    </p>
                    <p>
                      Không ai biết ngày mai ra sao và tương lai sẽ như thế nào,
                      nhưng anh luôn nhắc nhở mình phải trân trọng tình cảm của
                      em, anh dặn lòng mình phải sống tốt và không để em buồn
                      lòng. Dù có điều gì xảy ra đi nữa thì xin em đừng rời xa
                      anh nhé.
                    </p>
                    <p style={{ textAlign: "right" }}>Chồng của bà</p>
                    <p style={{ textAlign: "right" }}>Bi Bò with love</p>
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
                      <img src="/assets/images/hinh2.jpg" alt="" />
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-text left-align-text">
                      <h3>First time we met</h3>
                      <span className="date">Jan 23,2020</span>
                      <p>
                        Lần đầu tiên gặp nhau, chắc chắn ấn tượng đầu tiên của
                        em với anh sẽ là câu nói “đi với anh nhớ mặc quần”
                        =]]]]]]]. Đây nghiêm túc là một lý do nghiêm túc và đàng
                        hoàng, vì Bi đang đi 1 PKL, sợ rằng ngày đó em mặc váy
                        thì sẽ không hay nên đó là câu nói nửa vui nửa thật Bi
                        “dặn” em khi gặp nhau.
                      </p>
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-text right-align-text">
                      <h3>Our declare love </h3>
                      <span className="date">Jan 27,2020 </span>
                      <p>
                        Sala mùng 3 tết, bằng hết tất cả sự can đảm & cũng không
                        quên vò tay bứt tóc, anh tỏ tình và may mắn được em đồng
                        ý, để rồi từ đây bắt đầu cho chuỗi ngày đồng hành cùng
                        nhau.
                      </p>
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-img">
                      <img src="/assets/images/hinh3.jpg" alt="" />
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-img">
                      <img src="/assets/images/hinh4.jpg" alt="" />
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-text left-align-text">
                      <h3>Our First Trips </h3>
                      <span className="date">Feb 16, 2020</span>
                      <p>
                        Chuyến đi đầu tiên đi cùng em, chuyến đi khi cao hứng,
                        tính nhanh quyết định nhanh. Và đây là bắt đầu của chuối
                        ngày dài em “mài mông” trên con “wave tàu” của a 😉
                      </p>
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-text right-align-text">
                      <h3>Our Marriage Proposal </h3>
                      <span className="date">Jan 24, 2021</span>
                      <p>
                        Và rồi, một buổi tối nhẹ nhàng với nến, hoa, với sự
                        chứng kiến của anh chị, bạn bè thân thiết. Em đã đồng ý
                        lời cầu hôn từ anh &hearts;
                      </p>
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-img">
                      <img src="/assets/images/hinh5.jpg" alt="" />
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-img">
                      <img src="/assets/images/hinh6.jpg" alt="" />
                    </div>
                  </Col>
                  <Col md={12} span={12}>
                    <div className="story-text left-align-text">
                      <h3>Our Engagement </h3>
                      <span className="date">Dec 22, 2021 </span>
                      <p>
                        Và ngày mong ước cũng đã đến, chính thức hôm nay chúng
                        ta về một nhà, cùng vui, cùng chăm sóc, cùng nhau đồng
                        hành trên suốt chuyến hành trình cuộc đời này.
                      </p>
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
                  <h2>Our Family</h2>
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
                            <img src="/assets/images/hinh7.jpg" alt="bride" />
                            <div className="social-list">
                              <ul className="d-flex">
                                <li>
                                  <a href="https://www.facebook.com/luongvan.chin.5">
                                    <i className="fab fa-facebook"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Ba Chín </h4>
                          </div>
                        </div>
                      </Col>
                      <Col span={6} className="grid">
                        <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2">
                          <div className="groomsmen-bridesmaid-img">
                            <img src="/assets/images/hinh8.jpg" alt="bride" />
                            <div className="social-list">
                              <ul className="d-flex">
                                <li>
                                  <a href="https://www.facebook.com/truong.truc.9231">
                                    <span className="fab fa-facebook"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Mẹ Trúc</h4>
                          </div>
                        </div>
                      </Col>
                      <Col span={6} className="grid">
                        <div className="groomsmen-bridesmaid-wrap">
                          <div className="groomsmen-bridesmaid-img">
                            <img src="/assets/images/hinh9.jpg" alt="bride" />
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Bà Ngoại </h4>
                          </div>
                        </div>
                      </Col>
                      <Col span={6} className="grid">
                        <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2">
                          <div className="groomsmen-bridesmaid-img">
                            <img src="/assets/images/hinh10.jpg" alt="bride" />
                            <div className="social-list">
                              <ul className="d-flex">
                                <li>
                                  <a href="https://www.facebook.com/profile.php?id=100075643809020">
                                    <span className="fab fa-facebook"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Chị Lệ và Cháu</h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="row">
                      <Col span={6} className="grid">
                        <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2">
                          <div className="groomsmen-bridesmaid-img">
                            <img src="/assets/images/hinh11.jpg" alt="bride" />
                            <div className="social-list">
                              <ul className="d-flex">
                                <li>
                                  <a href="https://www.facebook.com/profile.php?id=100033374205305">
                                    <i className="fab fa-facebook"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Bố Thuận</h4>
                          </div>
                        </div>
                      </Col>
                      <Col span={6} className="grid">
                        <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap">
                          <div className="groomsmen-bridesmaid-img">
                            <img src="/assets/images/hinh12.jpg" alt="bride" />
                            <div className="social-list">
                              <ul className="d-flex">
                                <li>
                                  <a href="https://www.facebook.com/profile.php?id=100024417502398">
                                    <i className="fab fa-facebook"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Mẹ Mĩnh</h4>
                          </div>
                        </div>
                      </Col>
                      <Col span={6} className="grid">
                        <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2">
                          <div className="groomsmen-bridesmaid-img">
                            <img src="/assets/images/hinh13.jpg" alt="bride" />
                            <div className="social-list">
                              <ul className="d-flex">
                                <li>
                                  <a href="https://www.facebook.com/thang.duc.7777">
                                    <span className="fab fa-facebook"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Anh Thắng </h4>
                          </div>
                        </div>
                      </Col>
                      <Col span={6} className="grid">
                        <div className="groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap">
                          <div className="groomsmen-bridesmaid-img">
                            <img src="/assets/images/hinh14.jpg" alt="bride" />
                            <div className="social-list">
                              <ul className="d-flex">
                                <li>
                                  <a href="https://www.facebook.com/buivanthuc91">
                                    <span className="fab fa-facebook"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="groomsmen-bridesmaid-content">
                            <h4>Anh Thức & Chị Thúy </h4>
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
            <div>
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
                              style={{ alignSelf: "center" }}
                            >
                              <div className="event-text">
                                <h3>Wedding Ceremony</h3>
                                <span>
                                  Lễ đón dâu sẽ diễn ra vào lúc 7:00 ngày
                                  22/12/2021 nhằm ngày 19 tháng 11 Âm Lịch tại
                                  nhà của Nhân, Khu phố 3, phường An Lạc A, Quận
                                  Bình Tân.
                                </span>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="event-wrap">
                          <Row className="row">
                            <Col
                              span={14}
                              className="col-lg-7 col-md-12 col-12"
                              style={{ alignSelf: "center" }}
                            >
                              <div className="event-text event-text-2">
                                <h3>Wedding Party</h3>
                                <span>
                                  Tiệc trưa sẽ được diễn ra vào lúc 11:00 ngày
                                  22/12/2021 tại tư gia của Nhân(aka Bi).
                                </span>
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
                              style={{ alignSelf: "center" }}
                            >
                              <div className="event-text">
                                <h3>Wedding Dinner</h3>
                                <span>
                                  Hiện tại với tình hình Covid vẫn chưa ổn định,
                                  nên mong rằng cùng với sự chung tay của tất cả
                                  mọi người chúng ta sẽ sớm kiểm soát được dịch
                                  và sẽ sớm gặp nhau để cùng ca hát nhảy múa
                                  nhé.
                                </span>
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
          <Row>
            <div className="text">
              <h2>Nhân &amp; Thảo</h2>
              <p>Thank you</p>
            </div>
          </Row>
      </div>
    </Layout>
  );
};

export default App;
