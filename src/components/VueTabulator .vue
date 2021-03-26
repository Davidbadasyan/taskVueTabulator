<template>
  <div id="example-table"></div>
</template>


<script>
import Tabulator from "tabulator-tables";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      table: null,
    };
  },
  created() {
    this.postsText().then(() => {
      // debugger;
      console.log(this.list);
      this.table.setData(this.list);
    });
  },
  methods: {
    ...mapActions(["postsText"]),
  },
  computed: {
    ...mapState({
      list: (state) => state.data.list,
    }),
  },
  async mounted() {
    this.table = new Tabulator("#example-table", {
      height: 500,
      data: this.list,
      layout: "fitColumns",
      columns: [
        { title: "Position", field: "position", width: 150 },
        { title: "Title", field: "title", width: 150 },
        { title: "Link", field: "link", width: 150 },
        { title: "Snippet", field: "snippet", width: 150 },
        { title: "Is-own-domain", field: "is-own-domain", width: 150 },
        {
          title: "MetricsExtended",
          field: "metricsExtended.Backlinks",
          width: 150,
        },
        {
          title: "DomainRating",
          field: "domainRating.ahrefs_top",
          width: 150,
        },
        { title: "Page", field: "page.url", width: 150 },
        { title: "UrlMetrics", field: "urlMetrics", width: 150 },
        {
          title: "LsURLMetrics",
          field: "lsURLMetrics.countLinks",
          width: 150,
        },
      ],
    });
  },
};
</script>

