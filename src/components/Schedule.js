import React from 'react';
import '../styles/schedule.css';

function Schedule() {
  return (
    <div className="schedule">
      <h1>Competitive League Schedule</h1>
      <h2>Toombul Indoor Sports Centre - 26/04/23</h2>
      {/* <div class="ec-fixture-list">
        <ul>
          <li>
            <div class="ec-cell"><span>7.30pm</span></div>
            <div class="ec-cell">
              <span>South Brisbane Haze</span>
              <span class="ec-fixture-vs"><small> vs </small></span>
              <span>Malaysian Teh Ais</span>
            </div>
          </li>
          <li>
            <div class="ec-cell"><span>8.20pm</span></div>
            <div class="ec-cell">
              <span>Toombul Tigers</span>
              <span class="ec-fixture-vs"><small> vs </small></span>
              <span>North Brisbane Bullsharks</span>
            </div>
          </li>
          <li>
            <div class="ec-cell"><span>9.10pm</span></div>
            <div class="ec-cell">
              <span>Brisbane City Goblins</span>
              <span class="ec-fixture-vs"><small> vs </small></span>
              <span>QUT Ballstars</span>
            </div>
          </li>
        </ul>
      </div> */}
      <table>
        <thead>Match Fixture - April 26 2023</thead>
        <tbody>
          <tr>
            <td>7:30 PM</td>
            <td>South Brisbane Haze</td>
            <td><small>vs</small></td>
            <td>Malaysian Teh Ais</td>
          </tr>
          <tr>
            <td>8:30 PM</td>
            <td>Toombul Tigers</td>
            <td><small>vs</small></td>
            <td>North Brisbane Bullsharks</td>
          </tr>
          <tr>
            <td>9:10 PM</td>
            <td>Brisbane City Goblins</td>
            <td><small>vs</small></td>
            <td>QUT Ballstars</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
