import { combineReducers } from "redux";
import virusInfo from "./virusInfo.reducer";
import articles from "./articles.reducer";

export const reducers = combineReducers({ virusInfo, articles });
