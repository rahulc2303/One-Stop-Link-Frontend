import React, { useState } from "react";
import "../Analytics/Analytics.css";
import { useSelector } from 'react-redux'
import { getLastNumberOfDaysDate, getLastNumberOfDaysDateInTextFormat, getYesterdayDate, getYesterdayDateInTextFormat } from "../../Dates/dates";

const Analytics = () => {


  const analytics = useSelector((s) => s.bioPageAnalytics);
  const [selectDate, setSelectDate] = useState("Yesterday");
  const [showDate, setShowDate] = useState(false);



  console.log(getLastNumberOfDaysDate(7))


  const getBioPageAnalyticsByDate = (analytics) => {
    if (selectDate === "Yesterday") {
      return analytics.filter(
        val => val.date == getYesterdayDate(),
      )
    } else if (selectDate === "Last 7 Days") {
      return analytics.filter(
        val => getLastNumberOfDaysDate(7).toString().includes(val.date),
      )
    } else if (selectDate === "Last 30 Days") {
      return analytics.filter(
        val => getLastNumberOfDaysDate(30).toString().includes(val.date),
      )
    } else if (selectDate === "Last 90 Days") {
      return analytics.filter(
        val => getLastNumberOfDaysDate(90).toString().includes(val.date),
      )
    } else {
      return [];
    }
  }


  console.log(getLastNumberOfDaysDateInTextFormat(7), "asdasd")
  console.log(getLastNumberOfDaysDate(7), "asdasd")



  const renderComparedDate = () => {
    if (selectDate === "Last 7 Days") {
      return getLastNumberOfDaysDateInTextFormat(7) + "-"
    } else if (selectDate === "Last 30 Days") {
      return getLastNumberOfDaysDateInTextFormat(30) + "-"
    } else if (selectDate === "Last 90 Days") {
      return getLastNumberOfDaysDateInTextFormat(90) + "-"
    } else {
      return null
    }
  }


  const renderCounts = (type) => {
    if (analytics && analytics.bioPageAnalytics && analytics.bioPageAnalytics.length > 0) {
      const bioPageAnalyticsByDate = getBioPageAnalyticsByDate(analytics.bioPageAnalytics);
      console.log("bioPageAnalyticsByDate", bioPageAnalyticsByDate)
      if (bioPageAnalyticsByDate && bioPageAnalyticsByDate.length > 0) {

        const visits = bioPageAnalyticsByDate
          .map(o => o.visits)
          .reduce((a, c) => {
            return a + c;
          });

        const linkClicks = bioPageAnalyticsByDate
          .map(o => o.linkClicks)
          .reduce((a, c) => {
            return a + c;
          });

        if (type === "visits") {
          return visits;
        } else if (type === "linkClicks") {
          return linkClicks;
        } else if (type === "ClicksPerVisit") {
          return (linkClicks / visits).toFixed(1)
        } else {
          return 0;
        }
      } else {
        return 0
      }
    } else {
      return 0
    }
  }


  return (
    <div className="stat-container">
      {/* Card-1 */}
      <div className="socialCard">
        <div className="backpage">
          {/* Going back page Arrow Functionality */}

          <h2 className="stat-header">Analytics</h2>
        </div>
      </div>
      {/* Card-2 */}
      <div className="calender">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/42/42288.png"
            className="calender-logo"
            alt=""
          />
          {/* Radio Buttons for Calender */}
          <div className="dropdown">
            <button className="dropbtn" onClick={() => setShowDate(true)}>{selectDate}</button> {renderComparedDate()}{getYesterdayDateInTextFormat()}

            {
              showDate ?
                <div className="dropdown-content">
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      onChange={() => {
                        setSelectDate("Yesterday")
                        setShowDate(false)
                      }}
                    />
                    Yesterday
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      onChange={() => {
                        setSelectDate("Last 7 Days")
                        setShowDate(false)
                      }}
                    />
                    Last 7 Days
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      onChange={() => {
                        setSelectDate("Last 30 Days")
                        setShowDate(false)
                      }}
                    />
                    Last 30 Days
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      onChange={() => {
                        setSelectDate("Last 90 Days")
                        setShowDate(false)
                      }}
                    />
                    Last 90 Days
                  </div>
                </div>
                :
                null
            }

          </div>
        </div>
      </div>
      {/* Card-3 */}
      <div className="overview">
        <h3 className="stat-overview">Overview</h3>
        <div className="grid-container-analytics">
          <div className="grid-one">
            <u>Visits</u>
            <br />
            {renderCounts("visits")}<br />-
          </div>
          <div className="grid-two">
            <u>Link Clicks</u>
            <br />
            {renderCounts("linkClicks")}<br />-
          </div>
          <div className="grid-three">
            <u>Clicks per visit</u>
            <br />
            {renderCounts("ClicksPerVisit")}<br />-
          </div>
        </div>
        <p className="overview-details">

          Compared to previous period:
          {renderComparedDate()}{getYesterdayDateInTextFormat()}

        </p>
      </div>

      {/* <div className="overview">
        <h3 className="stat-performance">Link Performance</h3>
        <p className="stat-details">No data available</p>
      </div> */}
    </div>
  );
};

export default Analytics;
