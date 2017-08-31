import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ModelTable from "../../components/modelTable";
import { listWorks } from "../../modules/work";
import Loading from "../../components/loading";
// import { toast } from "react-toastify";

class WorksTable extends React.Component {
  async componentDidMount() {
    const { user } = this.props;
    await this.props.listWorks({ user });
  }

  render() {
    return this.props.listing
      ? <div style={{ height: 200, position: "relative" }}>
          <Loading />
        </div>
      : <ModelTable
          models={this.props.list}
          fields={["name", "description", "actual"]}
        />;
  }
}

const mapStateToProps = ({ auth, work }) => ({
  list: work.list,
  listing: work.listing,
  listingError: work.listingError,
  user: auth.user._id
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      listWorks
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(WorksTable);
