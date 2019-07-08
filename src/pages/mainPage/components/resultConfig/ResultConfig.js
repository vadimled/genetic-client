import React from 'react';
import SlideBar from "GenericComponents/slideBar";
import style from './ResultConfig.module.scss';

const ResultConfig = () => {
  return (
    <SlideBar
      isOpen={true}
      onClose={() => true}
      title="Add result"
    >
      <div className={style['result-config']}>
        <div className="content">
          <div className="gene-row">
            <div className="label">Gene</div>
            <input type="text" className="rcinput"/>
          </div>
          <div className="chr-pos-row">
            <div className="chr-block">
              <div className="label">Chromosome</div>
              <input type="text" className="rcinput"/>
            </div>
            <div className="chr-pos-div">:</div>
            <div className="pos-block">
              <div className="label">Position</div>
              <input type="text" className="rcinput"/>
            </div>
          </div>
          <div className="allele-block">
            <div className="label">Allele change</div>
            <div className="allele-radios">
              <button className="allele-radio active">Change</button>
              <button className="allele-radio">Inserion</button>
              <button className="allele-radio">Deletion</button>
            </div>
            <input type="text" className="rcinput"/>
            <div className="allele-from-to-div">&gt;</div>
            <input type="text" className="rcinput"/>
          </div>
          <div className="vaf-covarage-row">
            <div className="vaf">
              <div className="label">VAF:</div>
              <div className="vaf-covarage-result">11</div>
            </div>
            <div className="covarage">
              <div className="label">Covarage:</div>
              <div className="vaf-covarage-result">11</div>
            </div>
          </div>
          <div className="allele-divider"/>
          <button className="allele-btn allele-btn--hgvs">Load HGVS</button>
          <div className="cp-row">
            <div className="label">Coding:</div>
            <div className="cp-result">123</div>
          </div>
          <div className="cp-row">
            <div className="label">Protein:</div>
            <div className="cp-result">123</div>
          </div>
          <div className="allele-divider"/>
          <button className="allele-btn allele-btn--add">Add result</button>
        </div>
      </div>
    </SlideBar>
  );
};

ResultConfig.defaultProps = {
  propName: 'DefaultProp'
};

export default React.memo(ResultConfig);
