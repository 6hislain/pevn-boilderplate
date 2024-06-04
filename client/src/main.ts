import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const router = createRouter({ history: createMemoryHistory(), routes });

createApp(App).use(router).mount("#app");
