// import { Component } from "react";
// import Header from Header
import Home from "../pages/Home";
import Video from "../pages/Video";
import Group from "../pages/Group";
import Gaming from "../pages/Gaming";

//Route ko cần đăng nhập cx xem đc
const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/Video", Component: Video },
  { path: "/Group", Component: Group },
  { path: "/Gaming", Component: Gaming },
  //   { path: "/Upload", Component: Upload, layout: HeaderOnly },
];

//Route cần đăng nhập mới xem đc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
