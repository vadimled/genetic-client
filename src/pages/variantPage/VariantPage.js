import React, { Component } from "react";
import style from "./VariantPage.module.scss";
// import PropTypes from 'prop-types';

class VariantPage extends Component {
  render() {
    return (
      <article className={style["variant-page-wrapper"]}>
        <section className="links-wrapper">
          <h2>Links</h2>
          <ul>
            <li>
              <a href="#">UCSD</a>
            </li>
            <li>
              <a href="#">gnomId</a>
            </li>
            <li>
              <a href="#">OMIM</a>
            </li>
          </ul>
        </section>
        <section className="main-wrapper">
          <header className="main-header-data">GENEXYZ</header>
          <section className="main-data">
            <div className="history">History</div>
            <div className="evidence">Evidence</div>
          </section>
        </section>
      </article>
    );
  }
}

VariantPage.propTypes = {};

export default VariantPage;
