import { connect } from "react-redux";
import Admin from "../../components/Admin";
import { changeField, submitValue } from "../../lib/actions/admin";

type IMapStateToPropsType = {
  contract: IContractState;
  admin: IAdminState;
};
const mapStateToProps = ({
  contract: {},
  admin: { token, isLoading },
}: IMapStateToPropsType) => {
  return {
    token,
    isLoading,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  changeField: (e: any) => dispatch(changeField(e)),
  submitValue: () => dispatch(submitValue()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
