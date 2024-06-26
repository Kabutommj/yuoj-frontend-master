import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/ExampleView.vue";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import MatchContextView from "@/views/MatchContext.vue";
import QuestionsList from "@/views/question/QuestionsList.vue";
import RankView from "@/views/question/RankView.vue";
import AdminView from "@/views/AdminView.vue";
import MatchRankView from "@/views/macth/MatchRankView.vue";
import StrongRankView from "@/views/StrongRankView.vue";
// import NoAuthView from "@/views/NoAuthView.vue";
import ACCESS_ENUM from "@/access/accessEnum";
import AddQuestionView from "@/views/question/AddQuestionView.vue";
import ManageQuestionView from "@/views/question/ManageQuestionView.vue";
import QuestionsView from "@/views/macth/MatchList.vue";
import QuestionSubmitView from "@/views/question/QuestionSubmitView.vue";
import ViewQuestionView from "@/views/question/ViewQuestionView.vue";
import AddMatchView from "@/views/macth/AddMatchView.vue";
import ManageMatchView from "@/views/macth/ManageMatchView.vue";
import MatchList from "@/views/macth/MatchList.vue";
import UserInfoView from "@/views/user/UserInfoView.vue";
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/view/matchcontext/:id",
    name: "赛事详情",
    component: MatchContextView,
    props: true,
    meta: {
      // access: ACCESS_ENUM.USER,
      hideInMenu: true,
    },
  },

  {
    path: "/question_submit/:id",
    name: "浏览题目提交",
    component: QuestionSubmitView,
    props: true,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/view/question/:id/:competitionid",
    name: "在线做题",
    component: ViewQuestionView,
    props: true,
    meta: {
      access: ACCESS_ENUM.USER,
      hideInMenu: true,
    },
  },
  {
    path: "/add/question",
    name: "创建题目",
    component: AddQuestionView,
    meta: {
      hideInMenu: true,
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/update/question",
    name: "更新题目",
    component: AddQuestionView,
    meta: {
      access: ACCESS_ENUM.USER,
      hideInMenu: true,
    },
  },
  {
    path: "/manage/question/",
    name: "管理题目",
    component: ManageQuestionView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/match/add",
    name: "创建赛事",
    component: AddMatchView,
    meta: {
      hideInMenu: true,
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/manage/match/",
    name: "管理赛事",
    component: ManageMatchView,
    meta: {
      hideInMenu: false,
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/",
    name: "主页",
    component:MatchList,
  },
  {
    path: "/view/matchrank/:id",
    name: "天梯榜",
    component: MatchRankView,
    props: true,
    meta: {
      access: ACCESS_ENUM.USER,
    },
  },
  {
    path: "/view/Strongrank/:id",
    name: "大神榜",
    component: StrongRankView,
    props: true,
    meta: {
      access: ACCESS_ENUM.USER,
    },
  },
  {
    path: "/questionList/:id",
    name: "比赛题目列表",
    component: QuestionsList,
    props: true,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/rank/:id",
    name: "查看排行榜",
    component: RankView,
    props: true,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: '/userInfo',
    name: "UserInfo",
    component: UserInfoView,
    props: true,
    meta: {
      hideInMenu: true,
    }
  }
  // {
  //   path: "/hide",
  //   name: "隐藏页面",
  //   component: HomeView,
  //   meta: {
  //     hideInMenu: true,
  //   },
  // },
  // {
  //   path: "/noAuth",
  //   name: "无权限",
  //   component: NoAuthView,
  //   meta: {
  //     hideInMenu: true,
  //   },
  // },
  // {
  //   path: "/admin",
  //   name: "管理员可见",
  //   component: AdminView,
  //   meta: {
  //     access: ACCESS_ENUM.ADMIN,
  //   },
  // },
  // {
  //   path: "/about",
  //   name: "关于我的",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];
