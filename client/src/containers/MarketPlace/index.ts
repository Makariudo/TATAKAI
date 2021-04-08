import { connect } from "react-redux";
import MarketPlace from "../../components/MarketPlace";
import { initMarket } from "../../lib/actions/marketplace";

type IMapStateToPropsType = {
  contract: IContractState;
  marketplace: IMarketplaceState;
};

const mapStateToProps = ({
  contract: { web3, accounts },
  marketplace: { NFTS, isLoading },
}: IMapStateToPropsType) => {
  return {
    web3,
    accounts,
    nfts: NFTS || [],
    isLoading,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  initMarket: () => dispatch(initMarket()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MarketPlace);
