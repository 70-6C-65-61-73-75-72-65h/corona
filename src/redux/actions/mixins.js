import { SET_OPERATION_ERROR } from "../constants/actionTypes";

// after next run of operation discard privious operation error
// run without args to discard
export const setOperationError = (error = "") => ({
  type: SET_OPERATION_ERROR,
  error,
});

export const withError = (message) => async (operation, dispatch) => {
  try {
    await operation();
  } catch (error) {
    console.log(error.message);
    console.log(error);
    dispatch(setOperationError(`${error.message || message}`));
  }
};
export const withFetching = (setFetching) => async (operation, dispatch) => {
  setFetching(true);
  await operation();
  setFetching(false);
};

// args could be object of arguments or operation (wrapped) function
export function createDispatchFunction(func, args, dispatch, extras = []) {
  if (extras.length === 0) return func(args, dispatch);
  return createDispatchFunction(
    extras.pop(),
    () => func(args, dispatch),
    dispatch,
    extras
  );
}

export const CustomWithFetchingWithError =
  (operation, args) => async (dispatch) =>
    createDispatchFunction(
      operation,
      { errorMessage: args?.message || "", ...args?.mainData },
      dispatch,
      [
        withFetching(args?.setFetching || (() => void 0)),
        withError("HTTP REQUEST error"),
      ]
    );
