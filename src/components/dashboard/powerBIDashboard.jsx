import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import './dashboard.css'

const PowerBIDashboard = () => {
  return (
    <div >
      <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual and qna
          id: process.env.REACT_APP_REPORT_ID,
          embedUrl: process.env.REACT_APP_EMBED_URL,
          accessToken: process.env.REACT_APP_ACCESS_TOKEN,
          tokenType: models.TokenType.Aad,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: true,
              },
            },
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
          ])
        }
        cssClassName={"Embed-container"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </div>
  );
}

export default PowerBIDashboard;
