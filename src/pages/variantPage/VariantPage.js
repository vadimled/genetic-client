import React, { Component } from "react";
import style from "./VariantPage.module.scss";
import cn from "classnames";
import SideBarLayout from "Pages/mainPage/components/sideBarLayout";
import VariantPageHeader from "variantComponents/variantPageHeader";
import ExternalResources from "variantComponents/externalResources";
import { ReactComponent as ClosedIcon } from "Assets/closeSideBar.svg";
import { ReactComponent as OpenedIcon } from "Assets/openSideBar.svg";
import { getExternalResources, getVariantData } from "Store/selectors";
import { connect } from "react-redux";
import { setExternalResources } from "Actions/variantPageActions";

// import PropTypes from 'prop-types';

class VariantPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarToggle: true
    };

    props.setResources(this.createResourcesLinks(props.variantData));
  }

  createResourcesLinks = variantData => {
    let externalResources = [];

    const variantDBs = {
      title: "Variant DBs",
      UCSC: `https://genome.ucsc.edu/cgi-bin/hgTracks?db=hg19&lastVirtModeType=default&lastVirtModeExtraState=&virtModeType=default&virtMode=0&nonVirtPosition=&position=${encodeURIComponent(
        variantData.chrPosition
      )}&hgsid=731360955_9ebZL49sAeyPO3PxgbWCQ1DZ5e4N`,
      gnomAD: `https://gnomad.broadinstitute.org/variant/${[
        ...variantData.chrPosition.split(":")[0]
      ]
        .slice(3)
        .join("")}-${variantData.chrPosition.split(":")[1]}-${
        variantData.ref
      }-${variantData.alt}`,
      dbSNP: `https://www.ncbi.nlm.nih.gov/snp/?term=${variantData.dbSNP}`,
      ClinVar: `https://www.ncbi.nlm.nih.gov/clinvar/variation/${
        variantData.clinvarVariationId
      }`,
      COSMIC: `https://cancer.sanger.ac.uk/cosmic/mutation/overview?id=${[
        ...variantData.COSMIC
      ]
        .slice(4)
        .join("")}`,
      OncoKB: `https://oncokb.org/gene/${variantData.gene}`,
      PMKB: `https://pmkb.weill.cornell.edu/search?utf8=%E2%9C%93&search=${
        variantData.gene
      }`,
      Varsome: `https://varsome.com/variant/hg19/${[
        ...variantData.chrPosition.split(":")[0]
      ]
        .slice(3)
        .join("")}-${variantData.chrPosition.split(":")[1]}-${
        variantData.ref
      }-${variantData.alt}`,
      ICGC: `https://dcc.icgc.org/q?q=${encodeURIComponent(
        `${variantData.gene} ${variantData.variant}`
      )}`,
      Uniprot: `https://www.uniprot.org/uniprot/?query=${
        variantData.transcript
      }+AND+reviewed%3Ayes&sort=score`
    };
    externalResources.push(variantDBs);

    const publications = {
      title: "Publications",
      Pubmed: `https://www.ncbi.nlm.nih.gov/pubmed/?term=${
        variantData.gene
      }+AND+(${encodeURIComponent(variantData.protein)}+OR+${encodeURIComponent(
        variantData.coding
      )}+OR+${encodeURIComponent(variantData.AminoAcidChange)})`,
      "Google Scholar": `https://scholar.google.co.il/scholar?start=50&q=${
        variantData.gene
      }+AND+(${encodeURIComponent(variantData.protein)}+OR+${encodeURIComponent(
        variantData.coding
      )}+OR+${encodeURIComponent(
        variantData.AminoAcidChange
      )})&hl=en&as_sdt=0,5`
    };

    externalResources.push(publications);

    const inSilicoPredictors = {
      title: "In Silico predictors",
      "Damaging score": variantData.DamagingScore
    };
    externalResources.push(inSilicoPredictors);

    return externalResources;
  };

  handleClick = () => {
    this.setState({
      sidebarToggle: !this.state.sidebarToggle
    });
  };

  render() {
    const { sidebarToggle } = this.state;
    const { externalResources, variantData } = this.props;
    return (
      <div className={style["variant-page-wrapper"]}>
        <div
          className={cn([
            "links-wrapper",
            { "links-wrapper-open": sidebarToggle }
          ])}
        >
          <SideBarLayout
            handleClick={this.handleClick}
            mode={sidebarToggle}
            className={"external-resources"}
            iconOpened={<OpenedIcon />}
            iconClosed={<ClosedIcon />}
          >
            <ExternalResources externalResources={externalResources} />
          </SideBarLayout>
        </div>

        <div
          className={cn([
            "main-wrapper",
            { "links-wrapper-open": sidebarToggle }
          ])}
        >
          <div className="main-header-data">
            <VariantPageHeader
              sidebarToggle={sidebarToggle}
              variantData={variantData}
            />
          </div>
          <div className="main-data">
            <div className="history">History</div>
            <div className="evidence">Evidence</div>
          </div>
        </div>
      </div>
    );
  }
}

VariantPage.propTypes = {};

const mapStateToProps = state => {
  return {
    variantData: getVariantData(state),
    externalResources: getExternalResources(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setResources: data => dispatch(setExternalResources(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VariantPage);
