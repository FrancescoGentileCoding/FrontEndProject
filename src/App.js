import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="main">
      {/* Contenitore "result" */}
      <div className="result">
        <div className="number">200</div>
        <div className="small-text">Everything is Fine!</div>
      </div>

      {/* Contenitore "request" */}
      <div className="request">
        {/* Contenitore "GET" */}
        <button type="button" className="get">
          GET
        </button>
        <input
          type="text"
          className="link"
          value="www.yoursite.com/home/index.php"
          readOnly
        />
        <button type="submit" className="send">
          SEND
        </button>
      </div>

      {/* Contenitore "details" */}
      <div className="details">
        {/* Contenitore "info" */}
        <div className="info">
          <div className="url-info-text">URL INFO</div>
          {/* Contenitore centrale con tre contenitori */}
          <div className="info-container">
            {/* Contenitore "DOMAIN" */}
            <div className="info-box">
              <div className="info-title">DOMAIN</div>
              <div className="info-value">www.yoursite.com</div>
            </div>

            {/* Contenitore "SCHEME" */}
            <div className="info-box">
              <div className="info-title">SCHEME</div>
              <div className="info-value">HTTP</div>
            </div>

            {/* Contenitore "PATH" */}
            <div className="info-box">
              <div className="info-title">PATH</div>
              <div className="info-value">home</div>
            </div>
          </div>
        </div>

        {/* Contenitore "fpds-response" */}
        <div className="fpds-response">
          <div className="response-text">RESPONSE</div>
          <div className="response-container">
            {/* Tre nuovi contenitori per fpds-response */}
            <div className="response-box">
              <div className="response-title">HTTP/1.1 302</div>
            </div>
            <div className="response-box">
              <div className="response-title">Location: /newpage.php</div>
            </div>
            <div className="response-box">
              <div className="response-title">
                Server: Apache/2.2.14 (Win32)
              </div>
            </div>
          </div>
        </div>

        {/* Contenitore "spds-response" */}
        <div className="spds-response">
          <div className="response-text">RESPONSE</div>
          <div className="response-container">
            {/* Tre nuovi contenitori per spds-response */}
            <div className="response-box">
              <div className="response-title">HTTP/1.1 200 OK</div>
            </div>
            <div className="response-box">
              <div className="response-title">Date: Mon, 27 Jul 2009</div>
            </div>
            <div className="response-box">
              <div className="response-title">
                Server: Apache/2.2.14 (Win32)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenitore "share" */}
      <div className="share">
        <div className="share-title">SHARE</div>
        <div className="share-link">
          <input
            type="text"
            className="share-text"
            value="httprequest.com/1a54da684864"
            readOnly
          />
        </div>
      </div>

      {/* Contenitore "get-link" */}
      <div className="get-link">
        <button type="button" className="get-selectTwo">
          GET
        </button>
        <input
          type="text"
          className="text-getwo"
          value="www.yoursite.com/home/index.php"
          readOnly
        />
      </div>

      {/* Contenitore "details-two" */}
      <div className="detailsTwo">
        {/* Contenitore "info" */}
        <div className="infoTwo">
          <div className="url-info-textTwo">URL INFO</div>
          {/* Contenitore centrale con tre contenitori */}
          <div className="info-containerTwo">
            {/* Contenitore "DOMAIN" */}
            <div className="info-boxTwo">
              <div className="info-titleTwo">DOMAIN</div>
              <div className="info-valueTwo">www.yoursite.com</div>
            </div>

            {/* Contenitore "SCHEME" */}
            <div className="info-boxTwo">
              <div className="info-titleTwo">SCHEME</div>
              <div className="info-valueTwo">HTTP</div>
            </div>

            {/* Contenitore "PATH" */}
            <div className="info-boxTwo">
              <div className="info-titleTwo">PATH</div>
              <div className="info-valueTwo">home</div>
            </div>
          </div>
        </div>

        {/* Contenitore "fpds-response" */}
        <div className="fpds-responseTwo">
          <div className="response-textTwo">RESPONSE</div>
          {/* Tre nuovi contenitori per fpds-response */}
          <div className="response-containerTwo">
            <div className="response-boxTwo">
              <div className="response-titleTwo">HTTP/1.1 302</div>
            </div>
            <div className="response-boxTwo">
              <div className="response-titleTwo">Location: /newpage.php</div>
            </div>
            <div className="response-boxTwo">
              <div className="response-titleTwo">
                Server: Apache/2.2.14 (Win32)
              </div>
            </div>
          </div>
        </div>

        {/* Contenitore "spds-response" */}
        <div className="spds-responseTwo">
          <div className="response-textTwo">RESPONSE</div>
          {/* Tre nuovi contenitori per spds-response */}
          <div className="response-containerTwo">
            <div className="response-boxTwo">
              <div className="response-titleTwo">HTTP/1.1 200 OK</div>
            </div>
            <div className="response-boxTwo">
              <div className="response-titleTwo">Date: Mon, 27 Jul 2009</div>
            </div>
            <div className="response-boxTwo">
              <div className="response-titleTwo">
                Server: Apache/2.2.14 (Win32)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenitore "shareTwo" */}
      <div className="shareTwo">
        <div className="share-titleTwo">SHARE</div>
        <div className="share-linkTwo">
          <input
            type="text"
            className="share-textTwo"
            value="httprequest.com/1a54da684864"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default App;
