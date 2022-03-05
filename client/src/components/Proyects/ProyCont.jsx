import React from "react";
import { Card, Col, Text, Row, Button } from "@nextui-org/react";
import clinno_home from '../../contents/media/proyects/clinno_home.png'
import clinno_icon from '../../contents/media/proyects/clinno_icon.png'
import food_home from '../../contents/media/proyects/food_home.png'
import food_icon from '../../contents/media/proyects/food_icon.png'
import "./ProyCont-module.css";

export default function ContCert() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div style={{ "margin-top": "8pc" }}>
            <h2 className="TitleCert">Projects and work trajectory</h2>
          </div>
          <div className="ContProyMain">
            <Card cover css={{ w: "100%", p: 0 }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#9E9E9E"
                  >
                    Clinno - Medical booking app
                  </Text>
                  <Text h3 color="white">
                  Find clinics at all times<br />
for the specialty you need
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body>
                <Card.Image
                  src={clinno_home}
                  height={400}
                  width="100%"
                  alt="Clinno app Home"
                  style={{"filter" :"brightness(0.8)"}}
                />
              </Card.Body>
              <Card.Footer
                blur
                css={{
                  position: "absolute",
                  bgBlur: "#0f1114",
                  borderTop: "$borderWeights$light solid $gray700",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Row>
                      <Col span={3}>
                        <Card.Image
                          src={clinno_icon}
                          css={{ background: "black" }}
                          height={40}
                          width={40}
                          alt="Clinno app icon"
                        />
                      </Col>
                      <Col>
                        <Text color="#d1d1d1" size={12}>
                          Clinno App
                        </Text>
                        <Text color="#d1d1d1" size={12}>
                        Medical booking site.
                        </Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button
                        flat
                        auto
                        rounded
                        css={{ color: "#94f9f0", bg: "#94f9f026" }}
                      >
                        <Text
                          css={{ color: "inherit" }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          See app
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
            <div style={{"margin":"5pc"}}></div>
            <Card cover css={{ w: "100%", p: 0 }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#9E9E9E"
                  >
                    FoodCity - Food recipe App
                  </Text>
                  <Text h3 color="white">
                  Search among hundreds of food recipes, <br />
                   or create your own!
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body>
                <Card.Image
                  src={food_home}
                  height={400}
                  width="100%"
                  alt="FoodCity app Home"
                  style={{"filter" :"brightness(0.8)"}}
                />
              </Card.Body>
              <Card.Footer
                blur
                css={{
                  position: "absolute",
                  bgBlur: "#0f1114",
                  borderTop: "$borderWeights$light solid $gray700",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Row>
                      <Col span={3}>
                        <Card.Image
                          src={food_icon}
                          css={{ background: "black" }}
                          height={40}
                          width={40}
                          alt="FoodCity app icon"
                        />
                      </Col>
                      <Col>
                        <Text color="#d1d1d1" size={12}>
                          FoodCity
                        </Text>
                        <Text color="#d1d1d1" size={12}>
                        Food recipe App
                        </Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button
                        flat
                        auto
                        rounded
                        css={{ color: "#94f9f0", bg: "#94f9f026" }}
                      >
                        <Text
                          css={{ color: "inherit" }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          See app
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
