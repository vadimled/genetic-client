import React from "react";
import { render } from "@testing-library/react";
import "jest-dom/extend-expect";
import VariantTable from './VariantTable';

describe('VariantTable', () => {
  it('VariantTable snapshot', () => {
    const { asFragment } = render(
      <VariantTable
        onSelectRowKey={() => true}
        handleZygosity={() => true}
        handleVariantClass={() => true}
        handelChrPosition={() => true}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
