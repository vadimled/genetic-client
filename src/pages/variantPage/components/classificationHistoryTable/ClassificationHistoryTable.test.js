import "jest-dom/extend-expect";
import { fireEvent } from "@testing-library/react";
import { renderWithRedux } from "Utils/test_helpers";
import React from "react";
import ClassificationHistoryTable from "variantComponents/classificationHistoryTable";
import { SOMATIC_VARIANT_CLASS_OPTIONS } from "Utils/constants";

describe("ExternalResources ", () => {
  const dataShort = [
    {
      analystName: "Taly Yafe",
      class: "Tier1",
      date: "10/nov/2017",
      gsid: "GS00115NP050818_TS1_01",
      key: 0
    },
    {
      analystName: "Lior GoldBerg",
      class: "Unclassified",
      date: "5/Jul/2017",
      gsid: "GS00115NP050817_TS1_01",
      key: 1
    }
  ];
  const dataLong = [
    {
      analystName: "Taly Yafe",
      class: "Tier1",
      date: "10/nov/2017",
      gsid: "GS00115NP050818_TS1_01",
      key: 0
    },
    {
      analystName: "Lior GoldBerg",
      class: "Unclassified",
      date: "5/Jul/2017",
      gsid: "GS00115NP050817_TS1_01",
      key: 1
    },
    {
      analystName: "Taly Yafe",
      class: "Tier1",
      date: "10/nov/2017",
      gsid: "GS00115NP050818_TS1_01",
      key: 3
    },
    {
      analystName: "Lior GoldBerg",
      class: "Unclassified",
      date: "5/Jul/2017",
      gsid: "GS00115NP050817_TS1_01",
      key: 4
    }
  ];

  it("should - if data has length more than 3, click on Toggle button add the new selector to DOM", () => {
    const { getByTestId } = renderWithRedux(
      <ClassificationHistoryTable
        data={dataLong}
        typeData={SOMATIC_VARIANT_CLASS_OPTIONS}
      />
    );
    const toggle = getByTestId("classification-history-table-See All");
    expect(toggle).toBeInTheDocument();
    expect(document.querySelector(".with-scroll")).not.toBeInTheDocument();
    fireEvent.click(toggle);
    expect(document.querySelector(".with-scroll")).toBeInTheDocument();
  });

  it("should - if data has length less than 3, Toggle button isn't exists ", () => {
    const { queryByTestId } = renderWithRedux(
      <ClassificationHistoryTable
        data={dataShort}
        typeData={SOMATIC_VARIANT_CLASS_OPTIONS}
      />
    );
    expect(queryByTestId("classification-history-table-See All")).toBeNull();
  });
});
