import { CustomWithFetchingWithError } from "./mixins";
import { fetchArticlesOperation } from "./articles.operations";

export const fetchArticles = (
  keyword,
  numberOfArticles,
  setFetching,
  message = `Failed fetch ${numberOfArticles} articles in google by keyword ${keyword}`
) =>
  CustomWithFetchingWithError(fetchArticlesOperation, {
    setFetching,
    message,
    mainData: {
      keyword,
      numberOfArticles,
    },
  });
