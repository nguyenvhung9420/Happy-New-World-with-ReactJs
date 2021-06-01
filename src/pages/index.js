import '../css/landingpage.css';
import DropZone from "../components/dropzone";
import Image from "../components/image"
import Layout from "../components/layout"
import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

import { Container, Icon, Button, Header } from 'semantic-ui-react';
import { Row, Col } from 'react-bootstrap';

const background = require('../images/Blog-Hero-Mobile-Image.jpg');
const orchestra = require('../images/orchestre-1024x1024.jpg')

const IndexPage = () => {
  // const windowHeight = window.innerHeight;
  return (
    <div style={{
      backgroundColor: '#eeedeb'
    }}>
      <div style={{
        backgroundImage: "url(" + background + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>

        <Container style={{
          // height: windowHeight,
          height: 850,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>

          <div style={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <img style={{ height: 200, marginTop: 30 }} src={require('../images/logo.png')} />
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <div style={{
              width: 350,
              backgroundColor: 'black',
              marginBottom: 30,
              color: 'white',
              padding: 20
            }}>
              Last year, We have received total 20,000 USD.
              Last year, We have received total 20,000 USD.
              Last year, We have received total 20,000 USD.
              Last year, We have received total 20,000 USD.
            </div>

            <div className='donateButton' style={{ marginBottom: 30, backgroundColor: '#af2130' }}>
              <Button style={{
                backgroundColor: '#af2130',
                height: '100%',
                color: 'white',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <h2>Donate By Your Music</h2>
              </Button>
            </div>

          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Icon name='heart' size='huge' color='red' />
            <h4 style={{
              width: 350,
              marginBottom: 50,
              marginLeft: 10
            }}>

              Last year, We have received total 20,000 USD.
              Last year, We have received total 20,000 USD.
            </h4>
          </div>

        </Container>
      </div>

      <Row style={{
        backgroundColor: '#eeedeb',
      }}>
        <Col xs={12} sm={12} lg={5} style={{
          backgroundImage: 'url(' + orchestra + ')',
          backgroundPosition: 'center',
          boxShadow: 'inset 0 0 60px #000000'
        }}>

        </Col>

        <Col xs={12} sm={12} lg={5} style={{
          backgroundColor: '#c82f3e',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 40,
          color: '#eeedeb'
        }}>
          <h1>We need your help in your music.</h1>
          <h3>Submit your music here, now.</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </Col>

        <Col xs={0} sm={0} lg={2} style={{
          backgroundColor: '#af2130',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}>
          <h2>Please.</h2>
        </Col>
      </Row>

      <div>

        <Container xs={12} fluid>
          <Row style={{
            minHeight: 500,
            backgroundColor: '#eeedeb',
          }}>

            <Col lg={6} style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 60,
              justifyContent: 'center',
              backgroundColor: '#d9d4d0'
            }}>
              <Icon name="music" size="huge" />
              <h1>Lorem ipsum dolor sit amet</h1>
              <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa</h3>
              <p
                style={{ opacity: 0.7 }}
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

            </Col>

            <Col lg={6} style={{
              backgroundColor: 'black',
              color: 'white',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingRight: 60
            }}>
              <img style={{ width: '50%' }} src={require('../images/FenderGuitar2.jpg')} />
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p
                  style={{ opacity: 0.7 }}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>

          <Row style={{
            minHeight: 500,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Row style={{ marginTop: 40 }}>

              <Col xs={12} lg={6} style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: 20 }}>
                  <Icon name='umbrella' size='huge' color='red' />
                </div>
                <div style={{ color: '#af2130', fontWeight: '700' }}>
                  <h2>Lorem Ipsum</h2>
                  <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </Col>

              <Col xs={12} lg={6} style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: 20 }}>
                  <Icon name='globe' size='huge' style={{ opacity: 0.5 }} />
                </div>
                <div style={{ opacity: 0.5 }}>
                  <h2>Lorem Ipsum</h2>
                  <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </Col>

            </Row>

            <Row style={{ marginTop: 40, marginBottom: 40 }}>
              <Col xs={12} lg={6} style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: 20 }}>
                  <Icon name='money bill alternate outline' size='huge' style={{ opacity: 0.5 }} />
                </div>
                <div style={{ opacity: 0.5 }}>
                  <h2>Lorem Ipsum</h2>
                  <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </Col>
              <Col xs={12} lg={6} style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: 20 }}>
                  <Icon name='child' size='huge' style={{ opacity: 0.5 }} />
                </div>
                <div style={{ opacity: 0.5 }}>
                  <h2>Lorem Ipsum</h2>
                  <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </Col>
            </Row>

          </Row>
        </Container>
      </div>

      <Row style={{
        backgroundColor: '#eeedeb',
      }}>

        <Col xs={0} sm={0} lg={2} style={{
          backgroundColor: '#af2130',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}>
          <Icon name='heart' size='huge' />
        </Col>

        <Col xs={12} sm={12} lg={5} style={{
          backgroundColor: '#c82f3e',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 40,
          color: '#eeedeb'
        }}>
          <h1>We need your help in your music.</h1>
          <div style={{ opacity: 0.7 }}>
            <h3>Submit your music here, now.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          </div>
        </Col>

        <Col xs={12} sm={12} lg={5} style={{
          backgroundImage: 'url(' + orchestra + ')',
          backgroundPosition: 'center'
        }}>

        </Col>
      </Row>

      <Row style={{ backgroundColor: '#d9d4d0' }}>

        <Col xs={12} lg={4} style={{
          height: 260,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img style={{ height: 100 }} src={require('../images/logo.png')} />
        </Col>

        <Col xs={8} lg={4} style={{
          display: 'flex',
          margin: 'auto',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <h3>Contact Us</h3>
          <p style={{ opacity: 0.5 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
          <h1 style={{ color: '#af2130', margin: 0 }}>+65 9999 8888</h1>
        </Col>

        <Col xs={12} lg={4} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Button size='huge' style={{ marginBottom: 50, marginTop: 50 }}>
            Donate Now
            </Button>
        </Col>
      </Row>

      {/* <DropZone></DropZone> */}
    </div>
  )
}

export default IndexPage
