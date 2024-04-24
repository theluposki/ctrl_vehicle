import { createRouter, createWebHashHistory } from "vue-router";
import NotFound from "./views/notFound/NotFound.vue";

const routes = [
  { path: "/:pathMatch(.*)*", component: NotFound },
  { path: "/", component: () => import("./views/home/Home.vue") },
//   {
//     path: "/product",
//     component: () => import("./views/Product/Product.vue"),
//     children: [
//       {
//         path: "",
//         component: () => import("./views/Product/ListProducts.vue"),
//       },
//       {
//         path: "add-products",
//         component: () => import("./views/Product/AddProduct.vue"),
//       },
//     ],
//   },
  { path: "/about", component: () => import("./views/about/About.vue") },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});