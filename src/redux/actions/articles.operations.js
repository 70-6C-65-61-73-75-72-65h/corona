import { FETCH_ARTICLES } from "../constants/actionTypes";
import { setOperationError } from "./mixins";
import { googleImageScrapper } from "../../service/imageScrapper";

export const fetchArticlesOperation = async (
  { errorMessage, numberOfArticles, keyword },
  dispatch
) => {
  let response = await googleImageScrapper(keyword, numberOfArticles);
  if (response.length) {
    console.log(response);
    dispatch({
      type: FETCH_ARTICLES,
      payload: response,
    });
  } else {
    dispatch(setOperationError(errorMessage));
  }
};
