<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
    <div class="container py-4">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }">
          publication.
        </span>
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }" />
      <div class="row">



        <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 py-3 px-5"
          v-for="d in data"
          :key="d.author">
          <div 
            class="title4"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true">
            <span v-html="d.company"></span>
          </div>
          <div
            class="title3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true">
            <span>- {{ d.author }}, {{ d.position }}</span>
          </div>
          <div
            class="title2"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true">
            <span v-html="d.title"></span>
          </div>
          
        </div>
        <div class="btnShowMore">
          <button
            style="height: 31px; margin-top: 5px;"
            class="btn-sm btn btn-outline-secondary no-outline"
            @click="open('publication')">
            read more
          </button> 
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Recommendation",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      data: info.recommendations,
      publication: info.links.publication,
    };
  },
  methods:{
    open(link){
      switch(link){
        case "publication":
          window.open(this.publication, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px; 
  font-weight: 400;
}

.title2 {
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
}

.title3 {
  opacity: 0.7;
  font-size: 15px;
  font-weight: 400;
  text-align: right;
  font-style: italic;
}

.title4{
  font-size: 19px;
  font-weight: bold;
  text-align: justify;
}

.btnShowMore {
  width: 95px;
  margin: auto;
}
</style>
