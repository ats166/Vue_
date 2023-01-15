import { createWebHistory, createRouter } from "vue-router";
import ArticleList from "./components/ArticleList"
import MainHome from "./components/MainHome"
import ArticleDetail from "./components/ArticleDetail"
import Author from "./components/AuthorList"
import Comment from "./components/CommentList"

const routes = [
  {
    path: "/ArticleList",
    component: ArticleList,
  },
  {
    path: "/",
    component: MainHome,
  },
  {
    path: "/detail/:id(\\d+)",
    component : ArticleDetail,
    children : [
      {
        path : "author",
        component : Author
      },
      {
        path :"commnet",
        component : Comment
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 