import { createStore } from "vuex";
import auth from "../modules/auth/store";
import main from "../modules/main/store"
const store = createStore({
  modules: {
    auth,
    main
  },
});

export default store;
