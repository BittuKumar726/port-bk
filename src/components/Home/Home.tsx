import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg";
import TypeWiter from "./Type";
import Home2 from "./Home2";
import { useEffect, useState } from "react";
// import api from "../../api/portApi";
import homeData from "../../data/home.json";

const Home = () => {
  const [data, setData] = useState<any>({});
  const getHomePageData = async () => {
    //  Commented due to api issues
    // try {
    //   const response = await api.get("/home/page");
    //   setData(response?.data);
    // } catch (error) {
    //   console.log(error, "Error");
    // }
    setData(homeData);
  };
  useEffect(() => {
    getHomePageData();
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> BITTU KUMAR</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <TypeWiter roles={data?.roles} />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 data={data} />
    </section>
  );
};

export default Home;
