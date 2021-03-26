import * as mutationTypes from '../mutation-types';
import axios from "axios";
export default {
    state: {
        list: [],
    },

    actions: {
        async postsText({ commit }) {
            await axios
                .post("https://linksignal.ai/api/v1/serp", {
                    query: "cbd oil",
                    domain: "cbdfx.com",
                })
                .then((response) => {
                    commit(mutationTypes.POSTS_TEXT, response.data.items)
                });

        }
    },
    mutations: {
        [mutationTypes.POSTS_TEXT](state, list) {
            state.list = list;
        },
    },
}







