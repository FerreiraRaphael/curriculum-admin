import React from "react";
import PropTypes from "prop-types";
import Table, { TBODY, TD, THEAD, TH, TR } from "../table";
import { filterObjectFields, capitalizeFirstLetter } from "../../lib/helpers";

const ModelRow = ({ model }) =>
  <TR>
    {Object.keys(model).map(field =>
      <TD key={field}>
        {model[field].toString()}
      </TD>
    )}
  </TR>;

ModelRow.propTypes = {
  model: PropTypes.object.isRequired
};

const ModelTable = ({ models, fields }) =>
  <Table>
    <THEAD>
      {fields.map(field =>
        <TH key={field}>
          {capitalizeFirstLetter(field)}
        </TH>
      )}
    </THEAD>
    <TBODY>
      {models.map(model =>
        <ModelRow key={model._id} model={filterObjectFields(model, fields)} />
      )}
    </TBODY>
  </Table>;

ModelTable.propTypes = {
  models: PropTypes.arrayOf(PropTypes.object).isRequired,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ModelTable;
