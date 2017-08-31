import React from "react";
import WorksTable from "../../container/worksTable";
import { Menu, MainButton } from "../../components/fab";

const effect = "zoomin",
  pos = "br",
  method = "hover";

const WorksScreen = props =>
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <div className="panel panel-default">
          <div className="panel-body">
            <h3>Trabalhos</h3>
            <WorksTable />
          </div>
        </div>
      </div>
    </div>
    <Menu effect={effect} method={method} position={pos}>
      <MainButton icon="add" label="Criar um Trabalho" />
    </Menu>
  </div>;

export default WorksScreen;
