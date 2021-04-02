import { NEW_INSTANCE, SEED_INSTANCE } from "../actions/types";

export const initialState = {
  web3: null,
  accounts: null,
  contract: {},
};

// reducer qui va gérer les recettes
const contract = (
  oldState: IContractState = initialState,
  { type, payload }: IAction
) => {
  switch (type) {
    case NEW_INSTANCE:
      return {
        ...oldState,
        isLoading: true,
      };
    case SEED_INSTANCE:
      return {
        ...oldState,
        ...payload,
        isLoading: false,
      };
    default:
      return {
        ...oldState,
        ...payload,
      };
  }
};

export default contract;
