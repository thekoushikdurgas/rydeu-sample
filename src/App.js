import React from 'react';
import './App.css';
import en from './en.png';
import telegram from './telegram.png';
import whatsapp from './whatsapp.png';
import messager from './messager.png';
import facebook from './facebook.png';
import instagram from './instagram.png';
import Twitter from './Twitter.png';
import linkedin from './linkedin.png';

function App() {
  const [chat, setchat] = React.useState(false);
  const [social, setsocial] = React.useState(false);
  const [sendquery, setsendquery] = React.useState(false);
  return (
    <>
      <div className="header">
        <nav className="nav">
          <div className="navdiv">
            <h2>LOGO</h2>
          </div>
          <div className="navdiv">
            <div>
              <i className="ion-ios-help-buoy-outline"></i>
              <span>Help</span>
            </div>
            <div>
              <img className="me-2" src={en} width="20" alt="" />
              <span>Deutsch</span>
              <i className="divider"></i>
              <span>EUR</span>
            </div>
            <div>
              <span>Open Requests</span>
            </div>
            <div>
              <i className="im im-user-circle"></i>
              <i className="fal fa-bars"></i>
            </div>
          </div>
        </nav>
        <div className="inner-header flex">
          <h1>Hello, how can we help you?</h1>
          <p>Find Travel guide, FAQ, chat,</p>
        </div>
        <div>
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
      <div className="contenthead flex">
        <div className="d-flex w-100 flex-column flex-md-row">
          <div className="card">
            <div className="card-body p-0">
              <div className="d-flex align-items-center h-100">
                <div>
                  <i className="fal fa-question-circle"></i>
                </div>
                <div className="d-flex flex-column align-items-start">
                  <span>FAQ</span>
                  <span>Lorem ipsum doolor sit amet</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body p-0">
              <div className="d-flex align-items-center h-100">
                <div>
                  <i className="tkd2-seo-map-location-place-search"></i>
                </div>
                <div className="d-flex flex-column align-items-start">
                  <span>Travel Guide</span>
                  <span>Lorem ipsum doolor sit amet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="parent-tab">
            <input type="checkbox" checked={chat} name="tab-1" readOnly className="tab" />
            <label className="checkboxlabel" htmlFor="tab-1" onClick={() => { setchat(!chat) }} >
              <div className="card-body p-0">
                <div className="d-flex align-items-center h-100">
                  <div>
                    <i className="tkd7-chat-box"></i>
                  </div>
                  <div className="d-flex flex-column align-items-start">
                    <span>Chat</span>
                    <span>Lorem ipsum doolor sit amet</span>
                  </div>
                </div>
              </div>
              <div className="icon">
                <i className="tkd2-chevron-down3" />
              </div>
            </label>
            <div className="content">
              <div className="chatdivs d-flex align-items-center h-100 justify-content-center">
                <div className='chatdiv d-flex align-items-center justify-content-center flex-column'>
                  <img src={telegram} width="30" alt="" />
                  <p className="fs-sm mb-0">Telegram</p>
                </div>
                <div className='chatdiv d-flex align-items-center justify-content-center flex-column'>
                  <img src={whatsapp} width="30" alt="" />
                  <p className="fs-sm mb-0">Telegram</p>
                </div>
                <div className='chatdiv d-flex align-items-center justify-content-center flex-column'>
                  <img src={messager} width="30" alt="" />
                  <p className="fs-sm mb-0">Telegram</p>
                </div>
              </div>
            </div>
          </div>
          <div className="parent-tab">
            <input type="checkbox" checked={social} name="tab-2" readOnly className="tab" />
            <label className="checkboxlabel" htmlFor="tab-2" onClick={() => { setsocial(!social) }} >
              <div className="card-body p-0">
                <div className="d-flex align-items-center h-100">
                  <div>
                    <i className="tkd11-social-media-marketing"></i>
                  </div>
                  <div className="d-flex flex-column align-items-start">
                    <span>Social</span>
                    <span>Lorem ipsum doolor sit amet</span>
                  </div>
                </div>
              </div>
              <div className="icon">
                <i className="tkd2-chevron-down3" />
              </div>
            </label>
            <div className="content">
              <div className="chatdivs d-flex align-items-center h-100 justify-content-center">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={Twitter} alt="" />
                <img src={linkedin} alt="" />
              </div>
            </div>
          </div>
          <div className="parent-tab">
            <input type="checkbox" checked={sendquery} name="tab-3" readOnly className="tab" />
            <label className="checkboxlabel" htmlFor="tab-3" onClick={() => { setsendquery(!sendquery) }} >
              <div className="card-body p-0">
                <div className="d-flex align-items-center h-100">
                  <div>
                    <i className="tkd10-mobile-messages"></i>
                  </div>
                  <div className="d-flex flex-column align-items-start">
                    <span>Send Query</span>
                    <span>Lorem ipsum doolor sit amet</span>
                  </div>
                </div>
              </div>
              <div className="icon">
                <i className="tkd2-chevron-down3" />
              </div>
            </label>
            <div className="content">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="label" htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" id="name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="label" htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" id="email"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="label" htmlFor="name">Subject</label>
                    <input type="text" className="form-control" name="name" id="name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="label" htmlFor="email">Order no.</label>
                    <input type="text" className="form-control" name="email" id="email" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="label" htmlFor="#">Your Query</label>
                    <textarea name="message" className="form-control" id="message" cols={30} rows={4} defaultValue={""} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                    <div className="submitting" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;