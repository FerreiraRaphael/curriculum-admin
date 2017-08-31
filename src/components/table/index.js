import React from "react";
import Proptypes from "prop-types";

export const TR = ({ children }) =>
  <tr>
    {children}
  </tr>;

TR.propTypes = {
  children: Proptypes.oneOfType([
    Proptypes.node,
    Proptypes.arrayOf(Proptypes.node)
  ])
};

export const TBODY = ({ children }) =>
  <tbody>
    {children}
  </tbody>;

TBODY.propTypes = {
  children: Proptypes.oneOfType([
    Proptypes.node,
    Proptypes.arrayOf(Proptypes.node)
  ])
};

export const TD = ({ children }) =>
  <td>
    {children}
  </td>;

TD.propTypes = {
  children: Proptypes.oneOfType([
    Proptypes.node,
    Proptypes.arrayOf(Proptypes.node)
  ])
};

export const THEAD = ({ children }) =>
  <thead>
    <tr>
      {children}
    </tr>
  </thead>;

THEAD.propTypes = {
  children: Proptypes.oneOfType([
    Proptypes.node,
    Proptypes.arrayOf(Proptypes.node)
  ])
};

export const TH = ({ children }) =>
  <th>
    {children}
  </th>;

TH.propTypes = {
  children: Proptypes.oneOfType([
    Proptypes.node,
    Proptypes.arrayOf(Proptypes.node)
  ])
};

const Table = ({ children }) => {
  return (
    <table className="table table-striped table-hover ">
      {children}
    </table>
  );
};

Table.propTypes = {
  children: Proptypes.oneOfType([
    Proptypes.node,
    Proptypes.arrayOf(Proptypes.node)
  ])
};

export default Table;
