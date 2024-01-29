const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      message: "Hello Vue!",
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/248_f2.png",
    };
  },
}).mount("#app");
