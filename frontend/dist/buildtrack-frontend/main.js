"use strict";
(self["webpackChunkbuildtrack_frontend"] = self["webpackChunkbuildtrack_frontend"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/auth/login/login.component */ 4860);
/* harmony import */ var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/auth/register/register.component */ 3464);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 4441);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/projects/projects.component */ 3607);
/* harmony import */ var _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/resources/resources.component */ 5297);
/* harmony import */ var _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/inventory/inventory.component */ 5629);
/* harmony import */ var _components_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/attendance/attendance.component */ 7665);
/* harmony import */ var _components_procurement_procurement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/procurement/procurement.component */ 5837);
/* harmony import */ var _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/reports/reports.component */ 1905);
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/notifications/notifications.component */ 6621);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);

// Core component shell imports (scaffolded components)













const routes = [{
  path: 'login',
  component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'register',
  component: _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}, {
  path: 'dashboard',
  component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuard]
}, {
  path: 'notifications',
  component: _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__.NotificationsComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuard]
}, {
  path: 'projects',
  component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuard]
}, {
  path: 'resources',
  component: _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_4__.ResourcesComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuard]
}, {
  path: 'inventory',
  component: _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_5__.InventoryComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuard]
}, {
  path: 'attendance',
  component: _components_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_6__.AttendanceComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuard]
}, {
  path: 'procurement',
  component: _components_procurement_procurement_component__WEBPACK_IMPORTED_MODULE_7__.ProcurementComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuard]
}, {
  path: 'reports',
  component: _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_8__.ReportsComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuard]
}, {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: '/dashboard'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();
 // Expose routes for unit testing context

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 4796);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/notification.service */ 7473);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _components_notification_drawer_notification_drawer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/notification-drawer/notification-drawer.component */ 9585);









function AppComponent_mat_sidenav_container_0_ng_container_9_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.unreadCount > 99 ? "99+" : ctx_r1.unreadCount, " ");
  }
}
function AppComponent_mat_sidenav_container_0_ng_container_9_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 27)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AppComponent_mat_sidenav_container_0_ng_container_9_a_1_span_5_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", item_r3.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r3.link === "/notifications" && ctx_r1.unreadCount > 0);
  }
}
function AppComponent_mat_sidenav_container_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_mat_sidenav_container_0_ng_container_9_a_1_Template, 6, 4, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hasAccess(item_r3.roles));
  }
}
function AppComponent_mat_sidenav_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-sidenav-container", 6)(1, "mat-sidenav", 7, 1)(3, "div", 8)(4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\uD83C\uDFD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "BuildTrack");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nav", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AppComponent_mat_sidenav_container_0_ng_container_9_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 13)(11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_mat_sidenav_container_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.confirmLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-sidenav-content", 15)(16, "header", 16)(17, "div", 17)(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "app-notification-drawer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 20)(24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 22)(27, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.navItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getUserInitial());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getUserName());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getUserRole());
  }
}
function AppComponent_div_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const toast_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, toast_r5.priority));
  }
}
function AppComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_2_Template_div_click_0_listener() {
      const toast_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onToastClick(toast_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 32)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 33)(5, "div", 34)(6, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AppComponent_div_2_span_8_Template, 3, 3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_2_Template_button_click_11_listener($event) {
      const toast_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.dismissToast(toast_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const toast_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", toast_r5.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getToastIcon(toast_r5.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](toast_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", toast_r5.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](toast_r5.message);
  }
}
function AppComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.cancelLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_3_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 42)(3, "div", 43)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "power_settings_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Confirm Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Are you sure you want to log out of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "BuildTrack");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 44)(14, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_3_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.cancelLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_3_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.executeLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Yes, Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function AppComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
  }
}
class AppComponent {
  constructor(authService, notificationService, router) {
    this.authService = authService;
    this.notificationService = notificationService;
    this.router = router;
    this.title = 'buildtrack-frontend';
    this.showLogoutModal = false;
    this.unreadCount = 0;
    this.activeToasts = [];
    this.navItems = [{
      label: 'Overview',
      icon: 'dashboard',
      link: '/dashboard',
      roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor', 'Client']
    }, {
      label: 'Notifications',
      icon: 'notifications',
      link: '/notifications',
      roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor', 'Client']
    }, {
      label: 'Projects',
      icon: 'business',
      link: '/projects',
      roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Client']
    }, {
      label: 'Resources',
      icon: 'people',
      link: '/resources',
      roles: ['Administrator', 'Project Manager', 'Site Engineer']
    }, {
      label: 'Inventory',
      icon: 'inventory_2',
      link: '/inventory',
      roles: ['Administrator', 'Project Manager', 'Contractor']
    }, {
      label: 'Attendance',
      icon: 'assignment_turned_in',
      link: '/attendance',
      roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor']
    }, {
      label: 'Procurement',
      icon: 'shopping_cart',
      link: '/procurement',
      roles: ['Administrator', 'Project Manager', 'Contractor']
    }, {
      label: 'Reports & Audits',
      icon: 'bar_chart',
      link: '/reports',
      roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor', 'Client']
    }];
    this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
  }
  ngOnInit() {
    this.sub.add(this.notificationService.unreadCount$.subscribe(count => {
      this.unreadCount = count;
    }));
    this.sub.add(this.notificationService.toast$.subscribe(toast => {
      this.addToast(toast);
    }));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  isLoggedIn() {
    return !!this.authService.currentUserValue;
  }
  hasAccess(allowedRoles) {
    const user = this.authService.currentUserValue;
    if (!user) return false;
    const userRole = user.role?.toLowerCase() || '';
    return allowedRoles.some(r => r.toLowerCase() === userRole);
  }
  getUserName() {
    return this.authService.currentUserValue?.name || 'User';
  }
  getUserRole() {
    return this.authService.currentUserValue?.role || 'Member';
  }
  getUserInitial() {
    const name = this.getUserName();
    return name ? name.charAt(0).toUpperCase() : 'U';
  }
  addToast(toast) {
    this.activeToasts.unshift(toast);
    const duration = toast.duration || 5000;
    setTimeout(() => {
      this.dismissToast(toast.id);
    }, duration);
  }
  dismissToast(id) {
    this.activeToasts = this.activeToasts.filter(t => t.id !== id);
  }
  onToastClick(toast) {
    if (toast.link) {
      this.router.navigate([toast.link]);
    } else {
      this.router.navigate(['/notifications']);
    }
    this.dismissToast(toast.id);
  }
  getToastIcon(type) {
    if (type === 'danger') return 'error_outline';
    if (type === 'warning') return 'warning_amber';
    if (type === 'success') return 'check_circle_outline';
    return 'info';
  }
  confirmLogout() {
    this.showLogoutModal = true;
  }
  cancelLogout() {
    this.showLogoutModal = false;
  }
  executeLogout() {
    this.showLogoutModal = false;
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 4,
      consts: [["authView", ""], ["sidenav", ""], ["style", "height: 100vh;", 4, "ngIf", "ngIfElse"], [1, "toast-container"], ["class", "toast-card", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "logout-modal-overlay", 3, "click", 4, "ngIf"], [2, "height", "100vh"], ["mode", "side", "opened", "", 1, "app-sidenav"], [1, "sidenav-logo"], [1, "logo-icon"], [1, "logo-text"], [1, "sidenav-nav"], [4, "ngFor", "ngForOf"], [1, "sidenav-footer"], [1, "btn", "btn-outline", 2, "width", "100%", 3, "click"], [1, "main-content"], [1, "top-navbar"], [1, "navbar-search"], ["type", "text", "placeholder", "Search projects, materials, purchase orders..."], [1, "navbar-right"], [1, "user-pill"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], [1, "content-wrapper"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "link-label"], ["class", "nav-badge", 4, "ngIf"], [1, "nav-badge"], [1, "toast-card", 3, "click", "ngClass"], [1, "toast-icon"], [1, "toast-body"], [1, "toast-header-row"], [1, "toast-title"], ["class", "toast-badge", 4, "ngIf"], [1, "toast-msg"], [1, "toast-close-btn", 3, "click"], [1, "toast-badge"], [1, "logout-modal-overlay", 3, "click"], [1, "logout-modal-card", 3, "click"], [1, "logout-modal-header"], [1, "logout-icon-circle"], [1, "logout-modal-actions"], [1, "btn", "btn-cancel", 3, "click"], [1, "btn", "btn-confirm-logout", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AppComponent_mat_sidenav_container_0_Template, 33, 4, "mat-sidenav-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppComponent_div_2_Template, 14, 5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AppComponent_div_3_Template, 20, 0, "div", 5)(4, AppComponent_ng_template_4_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const authView_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoggedIn())("ngIfElse", authView_r7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.activeToasts);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showLogoutModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _components_notification_drawer_notification_drawer_component__WEBPACK_IMPORTED_MODULE_2__.NotificationDrawerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.UpperCasePipe],
      styles: [".app-sidenav[_ngcontent-%COMP%] {\n      width: 240px;\n      background: #1a1d2e;\n      border-right: 1px solid rgba(255,255,255,0.08);\n      display: flex;\n      flex-direction: column;\n      padding: 0;\n    }\n    .sidenav-logo[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      padding: 24px 24px;\n      border-bottom: 1px solid rgba(255,255,255,0.08);\n    }\n    .logo-icon[_ngcontent-%COMP%] { font-size: 28px; }\n    .logo-text[_ngcontent-%COMP%] {\n      font-size: 20px;\n      font-weight: 700;\n      background: linear-gradient(135deg, #9c95ff, #00BFA5);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n    }\n    .sidenav-nav[_ngcontent-%COMP%] {\n      flex: 1;\n      padding: 16px 12px;\n      display: flex;\n      flex-direction: column;\n      gap: 4px;\n    }\n    .nav-link[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      padding: 12px 16px;\n      border-radius: 10px;\n      color: #a0a3b1;\n      text-decoration: none;\n      font-size: 14px;\n      font-weight: 500;\n      transition: all 0.2s;\n      position: relative;\n    }\n    .link-label[_ngcontent-%COMP%] { flex: 1; }\n    .nav-link[_ngcontent-%COMP%]:hover {\n      background: rgba(108,99,255,0.1);\n      color: #fff;\n    }\n    .nav-link.active[_ngcontent-%COMP%] {\n      background: rgba(108,99,255,0.2);\n      color: #9c95ff;\n    }\n    .nav-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { font-size: 20px; }\n    .nav-badge[_ngcontent-%COMP%] {\n      background: #FF6B6B;\n      color: #fff;\n      font-size: 10px;\n      font-weight: 700;\n      padding: 2px 6px;\n      border-radius: 10px;\n    }\n\n    .sidenav-footer[_ngcontent-%COMP%] {\n      padding: 16px 20px;\n      border-top: 1px solid rgba(255,255,255,0.08);\n    }\n    .main-content[_ngcontent-%COMP%] {\n      background: #0f1117;\n      display: flex;\n      flex-direction: column;\n      overflow-y: auto;\n    }\n\n    \n\n    .top-navbar[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 16px 32px;\n      background: #1a1d2e;\n      border-bottom: 1px solid rgba(255,255,255,0.08);\n      position: sticky;\n      top: 0;\n      z-index: 100;\n    }\n    .navbar-search[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      background: rgba(255,255,255,0.05);\n      border: 1px solid rgba(255,255,255,0.1);\n      border-radius: 12px;\n      padding: 8px 14px;\n      width: 320px;\n    }\n    .navbar-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { color: #6b6f82; font-size: 20px; }\n    .navbar-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      color: #fff;\n      font-size: 13px;\n      outline: none;\n      width: 100%;\n    }\n    .navbar-right[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 18px;\n    }\n\n    .user-pill[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      background: rgba(255,255,255,0.04);\n      padding: 4px 12px 4px 6px;\n      border-radius: 20px;\n      border: 1px solid rgba(255,255,255,0.08);\n    }\n    .user-avatar[_ngcontent-%COMP%] {\n      width: 32px;\n      height: 32px;\n      border-radius: 50%;\n      background: linear-gradient(135deg, #6C63FF, #00BFA5);\n      color: #fff;\n      font-weight: 700;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 14px;\n    }\n    .user-info[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n    .user-name[_ngcontent-%COMP%] { font-size: 13px; font-weight: 600; color: #fff; }\n    .user-role[_ngcontent-%COMP%] { font-size: 10px; color: #a0a3b1; text-transform: uppercase; }\n\n    .content-wrapper[_ngcontent-%COMP%] {\n      padding: 32px;\n      flex: 1;\n    }\n\n    \n\n    .toast-container[_ngcontent-%COMP%] {\n      position: fixed;\n      bottom: 24px;\n      right: 24px;\n      display: flex;\n      flex-direction: column;\n      gap: 12px;\n      z-index: 999999;\n      max-width: 380px;\n      pointer-events: none;\n    }\n    .toast-card[_ngcontent-%COMP%] {\n      pointer-events: auto;\n      background: #1a1d2e;\n      border: 1px solid rgba(255, 255, 255, 0.15);\n      border-radius: 14px;\n      padding: 14px 16px;\n      display: flex;\n      align-items: flex-start;\n      gap: 12px;\n      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6);\n      backdrop-filter: blur(12px);\n      cursor: pointer;\n      animation: _ngcontent-%COMP%_slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n      transition: transform 0.2s ease;\n    }\n    .toast-card[_ngcontent-%COMP%]:hover { transform: translateY(-2px); }\n    .toast-card.danger[_ngcontent-%COMP%] { border-color: rgba(255, 107, 107, 0.5); background: linear-gradient(135deg, #24141d, #1a1d2e); }\n    .toast-card.warning[_ngcontent-%COMP%] { border-color: rgba(255, 193, 7, 0.5); background: linear-gradient(135deg, #252219, #1a1d2e); }\n    .toast-card.success[_ngcontent-%COMP%] { border-color: rgba(0, 191, 165, 0.5); background: linear-gradient(135deg, #122825, #1a1d2e); }\n    .toast-card.info[_ngcontent-%COMP%] { border-color: rgba(108, 99, 255, 0.5); background: linear-gradient(135deg, #1c1a36, #1a1d2e); }\n\n    .toast-icon[_ngcontent-%COMP%] {\n      width: 32px;\n      height: 32px;\n      border-radius: 8px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n    }\n    .toast-card.danger[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] { background: rgba(255, 107, 107, 0.2); color: #FF6B6B; }\n    .toast-card.warning[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] { background: rgba(255, 193, 7, 0.2); color: #ffc107; }\n    .toast-card.success[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] { background: rgba(0, 191, 165, 0.2); color: #00BFA5; }\n    .toast-card.info[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] { background: rgba(108, 99, 255, 0.2); color: #9c95ff; }\n\n    .toast-body[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n    .toast-header-row[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 2px; }\n    .toast-title[_ngcontent-%COMP%] { font-size: 13px; font-weight: 700; color: #fff; }\n    .toast-badge[_ngcontent-%COMP%] { font-size: 8px; font-weight: 700; padding: 1px 4px; border-radius: 4px; background: rgba(255, 255, 255, 0.1); color: #a0a3b1; }\n    .toast-msg[_ngcontent-%COMP%] { font-size: 12px; color: #a0a3b1; margin: 0; line-height: 1.4; }\n\n    .toast-close-btn[_ngcontent-%COMP%] { background: none; border: none; color: #6b6f82; cursor: pointer; padding: 0; }\n    .toast-close-btn[_ngcontent-%COMP%]:hover { color: #fff; }\n\n    @keyframes _ngcontent-%COMP%_slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }\n\n    \n\n    .logout-modal-overlay[_ngcontent-%COMP%] {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100vw;\n      height: 100vh;\n      background: rgba(0, 0, 0, 0.75);\n      backdrop-filter: blur(8px);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      z-index: 99999;\n      animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n    }\n    .logout-modal-card[_ngcontent-%COMP%] {\n      background: #1a1d2e;\n      border: 1px solid rgba(255, 255, 255, 0.12);\n      border-radius: 20px;\n      padding: 32px 28px;\n      width: 90%;\n      max-width: 400px;\n      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);\n      text-align: center;\n      animation: _ngcontent-%COMP%_popIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n    }\n    .logout-icon-circle[_ngcontent-%COMP%] {\n      width: 64px;\n      height: 64px;\n      border-radius: 50%;\n      background: rgba(255, 107, 107, 0.12);\n      border: 1px solid rgba(255, 107, 107, 0.3);\n      color: #FF6B6B;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 0 auto 18px auto;\n    }\n    .logout-icon-circle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { font-size: 32px; width: 32px; height: 32px; }\n    .logout-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 20px; font-weight: 700; color: #ffffff; margin: 0 0 8px 0; }\n    .logout-modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 14px; color: #a0a3b1; margin: 0 0 24px 0; line-height: 1.5; }\n    .logout-modal-actions[_ngcontent-%COMP%] { display: flex; gap: 12px; justify-content: center; }\n    .btn-cancel[_ngcontent-%COMP%] {\n      flex: 1;\n      background: rgba(255, 255, 255, 0.08);\n      color: #a0a3b1;\n      border: 1px solid rgba(255, 255, 255, 0.12);\n      padding: 10px 16px;\n      border-radius: 10px;\n      font-weight: 600;\n      cursor: pointer;\n      transition: all 0.2s ease;\n    }\n    .btn-cancel[_ngcontent-%COMP%]:hover { background: rgba(255, 255, 255, 0.15); color: #ffffff; }\n    .btn-confirm-logout[_ngcontent-%COMP%] {\n      flex: 1;\n      background: linear-gradient(135deg, #FF6B6B, #d32f2f);\n      color: #ffffff;\n      border: none;\n      padding: 10px 16px;\n      border-radius: 10px;\n      font-weight: 600;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 6px;\n      box-shadow: 0 4px 15px rgba(255, 107, 107, 0.35);\n      transition: all 0.2s ease;\n    }\n    .btn-confirm-logout[_ngcontent-%COMP%]:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(255, 107, 107, 0.5); }\n    @keyframes _ngcontent-%COMP%_fadeIn { from { opacity: 0; } to { opacity: 1; } }\n    @keyframes _ngcontent-%COMP%_popIn { from { opacity: 0; transform: scale(0.9) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxZQUFZO01BQ1osbUJBQW1CO01BQ25CLDhDQUE4QztNQUM5QyxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFVBQVU7SUFDWjtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixTQUFTO01BQ1Qsa0JBQWtCO01BQ2xCLCtDQUErQztJQUNqRDtJQUNBLGFBQWEsZUFBZSxFQUFFO0lBQzlCO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixxREFBcUQ7TUFDckQsNkJBQTZCO01BQzdCLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsT0FBTztNQUNQLGtCQUFrQjtNQUNsQixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFFBQVE7SUFDVjtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixTQUFTO01BQ1Qsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixjQUFjO01BQ2QscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsb0JBQW9CO01BQ3BCLGtCQUFrQjtJQUNwQjtJQUNBLGNBQWMsT0FBTyxFQUFFO0lBQ3ZCO01BQ0UsZ0NBQWdDO01BQ2hDLFdBQVc7SUFDYjtJQUNBO01BQ0UsZ0NBQWdDO01BQ2hDLGNBQWM7SUFDaEI7SUFDQSxxQkFBcUIsZUFBZSxFQUFFO0lBQ3RDO01BQ0UsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsNENBQTRDO0lBQzlDO0lBQ0E7TUFDRSxtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixnQkFBZ0I7SUFDbEI7O0lBRUEsc0JBQXNCO0lBQ3RCO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEI7TUFDOUIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQiwrQ0FBK0M7TUFDL0MsZ0JBQWdCO01BQ2hCLE1BQU07TUFDTixZQUFZO0lBQ2Q7SUFDQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsU0FBUztNQUNULGtDQUFrQztNQUNsQyx1Q0FBdUM7TUFDdkMsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixZQUFZO0lBQ2Q7SUFDQSwwQkFBMEIsY0FBYyxFQUFFLGVBQWUsRUFBRTtJQUMzRDtNQUNFLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osV0FBVztNQUNYLGVBQWU7TUFDZixhQUFhO01BQ2IsV0FBVztJQUNiO0lBQ0E7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFNBQVM7SUFDWDs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsU0FBUztNQUNULGtDQUFrQztNQUNsQyx5QkFBeUI7TUFDekIsbUJBQW1CO01BQ25CLHdDQUF3QztJQUMxQztJQUNBO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIscURBQXFEO01BQ3JELFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsZUFBZTtJQUNqQjtJQUNBLGFBQWEsYUFBYSxFQUFFLHNCQUFzQixFQUFFO0lBQ3BELGFBQWEsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRTtJQUM3RCxhQUFhLGVBQWUsRUFBRSxjQUFjLEVBQUUseUJBQXlCLEVBQUU7O0lBRXpFO01BQ0UsYUFBYTtNQUNiLE9BQU87SUFDVDs7SUFFQSx5QkFBeUI7SUFDekI7TUFDRSxlQUFlO01BQ2YsWUFBWTtNQUNaLFdBQVc7TUFDWCxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFNBQVM7TUFDVCxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLG9CQUFvQjtJQUN0QjtJQUNBO01BQ0Usb0JBQW9CO01BQ3BCLG1CQUFtQjtNQUNuQiwyQ0FBMkM7TUFDM0MsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLFNBQVM7TUFDVCwwQ0FBMEM7TUFDMUMsMkJBQTJCO01BQzNCLGVBQWU7TUFDZiwwREFBMEQ7TUFDMUQsK0JBQStCO0lBQ2pDO0lBQ0Esb0JBQW9CLDJCQUEyQixFQUFFO0lBQ2pELHFCQUFxQixzQ0FBc0MsRUFBRSxxREFBcUQsRUFBRTtJQUNwSCxzQkFBc0Isb0NBQW9DLEVBQUUscURBQXFELEVBQUU7SUFDbkgsc0JBQXNCLG9DQUFvQyxFQUFFLHFEQUFxRCxFQUFFO0lBQ25ILG1CQUFtQixxQ0FBcUMsRUFBRSxxREFBcUQsRUFBRTs7SUFFakg7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixjQUFjO0lBQ2hCO0lBQ0EsaUNBQWlDLG9DQUFvQyxFQUFFLGNBQWMsRUFBRTtJQUN2RixrQ0FBa0Msa0NBQWtDLEVBQUUsY0FBYyxFQUFFO0lBQ3RGLGtDQUFrQyxrQ0FBa0MsRUFBRSxjQUFjLEVBQUU7SUFDdEYsK0JBQStCLG1DQUFtQyxFQUFFLGNBQWMsRUFBRTs7SUFFcEYsY0FBYyxPQUFPLEVBQUUsWUFBWSxFQUFFO0lBQ3JDLG9CQUFvQixhQUFhLEVBQUUsbUJBQW1CLEVBQUUsOEJBQThCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFO0lBQ3RILGVBQWUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRTtJQUMvRCxlQUFlLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxvQ0FBb0MsRUFBRSxjQUFjLEVBQUU7SUFDN0ksYUFBYSxlQUFlLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTs7SUFFM0UsbUJBQW1CLGdCQUFnQixFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRTtJQUNoRyx5QkFBeUIsV0FBVyxFQUFFOztJQUV0QywwQkFBMEIsT0FBTyxVQUFVLEVBQUUsMkJBQTJCLEVBQUUsRUFBRSxLQUFLLFVBQVUsRUFBRSx3QkFBd0IsRUFBRSxFQUFFOztJQUV6SCx3QkFBd0I7SUFDeEI7TUFDRSxlQUFlO01BQ2YsTUFBTTtNQUNOLE9BQU87TUFDUCxZQUFZO01BQ1osYUFBYTtNQUNiLCtCQUErQjtNQUMvQiwwQkFBMEI7TUFDMUIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsY0FBYztNQUNkLCtCQUErQjtJQUNqQztJQUNBO01BQ0UsbUJBQW1CO01BQ25CLDJDQUEyQztNQUMzQyxtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsMENBQTBDO01BQzFDLGtCQUFrQjtNQUNsQixvREFBb0Q7SUFDdEQ7SUFDQTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLHFDQUFxQztNQUNyQywwQ0FBMEM7TUFDMUMsY0FBYztNQUNkLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLHdCQUF3QjtJQUMxQjtJQUNBLCtCQUErQixlQUFlLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRTtJQUMzRSwwQkFBMEIsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRTtJQUNoRyx5QkFBeUIsZUFBZSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRTtJQUNoRyx3QkFBd0IsYUFBYSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRTtJQUMzRTtNQUNFLE9BQU87TUFDUCxxQ0FBcUM7TUFDckMsY0FBYztNQUNkLDJDQUEyQztNQUMzQyxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YseUJBQXlCO0lBQzNCO0lBQ0Esb0JBQW9CLHFDQUFxQyxFQUFFLGNBQWMsRUFBRTtJQUMzRTtNQUNFLE9BQU87TUFDUCxxREFBcUQ7TUFDckQsY0FBYztNQUNkLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsUUFBUTtNQUNSLGdEQUFnRDtNQUNoRCx5QkFBeUI7SUFDM0I7SUFDQSw0QkFBNEIsMkJBQTJCLEVBQUUsK0NBQStDLEVBQUU7SUFDMUcsb0JBQW9CLE9BQU8sVUFBVSxFQUFFLEVBQUUsS0FBSyxVQUFVLEVBQUUsRUFBRTtJQUM1RCxtQkFBbUIsT0FBTyxVQUFVLEVBQUUsc0NBQXNDLEVBQUUsRUFBRSxLQUFLLFVBQVUsRUFBRSxpQ0FBaUMsRUFBRSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmFwcC1zaWRlbmF2IHtcbiAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgIGJhY2tncm91bmQ6ICMxYTFkMmU7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAuc2lkZW5hdi1sb2dvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgcGFkZGluZzogMjRweCAyNHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gICAgfVxuICAgIC5sb2dvLWljb24geyBmb250LXNpemU6IDI4cHg7IH1cbiAgICAubG9nby10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOWM5NWZmLCAjMDBCRkE1KTtcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuc2lkZW5hdi1uYXYge1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmc6IDE2cHggMTJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgfVxuICAgIC5uYXYtbGluayB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBjb2xvcjogI2EwYTNiMTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLmxpbmstbGFiZWwgeyBmbGV4OiAxOyB9XG4gICAgLm5hdi1saW5rOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTA4LDk5LDI1NSwwLjEpO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC5uYXYtbGluay5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMDgsOTksMjU1LDAuMik7XG4gICAgICBjb2xvcjogIzljOTVmZjtcbiAgICB9XG4gICAgLm5hdi1saW5rIG1hdC1pY29uIHsgZm9udC1zaXplOiAyMHB4OyB9XG4gICAgLm5hdi1iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkY2QjZCO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgcGFkZGluZzogMnB4IDZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuXG4gICAgLnNpZGVuYXYtZm9vdGVyIHtcbiAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICAgIH1cbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6ICMwZjExMTc7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuXG4gICAgLyogVG9wIE5hdmJhciBIZWFkZXIgKi9cbiAgICAudG9wLW5hdmJhciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDE2cHggMzJweDtcbiAgICAgIGJhY2tncm91bmQ6ICMxYTFkMmU7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB0b3A6IDA7XG4gICAgICB6LWluZGV4OiAxMDA7XG4gICAgfVxuICAgIC5uYXZiYXItc2VhcmNoIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICAgIHdpZHRoOiAzMjBweDtcbiAgICB9XG4gICAgLm5hdmJhci1zZWFyY2ggbWF0LWljb24geyBjb2xvcjogIzZiNmY4MjsgZm9udC1zaXplOiAyMHB4OyB9XG4gICAgLm5hdmJhci1zZWFyY2ggaW5wdXQge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAubmF2YmFyLXJpZ2h0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxOHB4O1xuICAgIH1cblxuICAgIC51c2VyLXBpbGwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xuICAgICAgcGFkZGluZzogNHB4IDEycHggNHB4IDZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICAgIH1cbiAgICAudXNlci1hdmF0YXIge1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNkM2M0ZGLCAjMDBCRkE1KTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC51c2VyLWluZm8geyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgLnVzZXItbmFtZSB7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICNmZmY7IH1cbiAgICAudXNlci1yb2xlIHsgZm9udC1zaXplOiAxMHB4OyBjb2xvcjogI2EwYTNiMTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4gICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nOiAzMnB4O1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAvKiBMaXZlIFRvYXN0IENvbnRhaW5lciAqL1xuICAgIC50b2FzdC1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICAgIG1heC13aWR0aDogMzgwcHg7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgLnRvYXN0LWNhcmQge1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICBiYWNrZ3JvdW5kOiAjMWExZDJlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBib3gtc2hhZG93OiAwIDEycHggMzJweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBhbmltYXRpb246IHNsaWRlSW5SaWdodCAwLjNzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgICB9XG4gICAgLnRvYXN0LWNhcmQ6aG92ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IH1cbiAgICAudG9hc3QtY2FyZC5kYW5nZXIgeyBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAxMDcsIDEwNywgMC41KTsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI0MTQxZCwgIzFhMWQyZSk7IH1cbiAgICAudG9hc3QtY2FyZC53YXJuaW5nIHsgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjUpOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjUyMjE5LCAjMWExZDJlKTsgfVxuICAgIC50b2FzdC1jYXJkLnN1Y2Nlc3MgeyBib3JkZXItY29sb3I6IHJnYmEoMCwgMTkxLCAxNjUsIDAuNSk7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMjI4MjUsICMxYTFkMmUpOyB9XG4gICAgLnRvYXN0LWNhcmQuaW5mbyB7IGJvcmRlci1jb2xvcjogcmdiYSgxMDgsIDk5LCAyNTUsIDAuNSk7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxYzFhMzYsICMxYTFkMmUpOyB9XG5cbiAgICAudG9hc3QtaWNvbiB7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICB9XG4gICAgLnRvYXN0LWNhcmQuZGFuZ2VyIC50b2FzdC1pY29uIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDEwNywgMTA3LCAwLjIpOyBjb2xvcjogI0ZGNkI2QjsgfVxuICAgIC50b2FzdC1jYXJkLndhcm5pbmcgLnRvYXN0LWljb24geyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjIpOyBjb2xvcjogI2ZmYzEwNzsgfVxuICAgIC50b2FzdC1jYXJkLnN1Y2Nlc3MgLnRvYXN0LWljb24geyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE5MSwgMTY1LCAwLjIpOyBjb2xvcjogIzAwQkZBNTsgfVxuICAgIC50b2FzdC1jYXJkLmluZm8gLnRvYXN0LWljb24geyBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgOTksIDI1NSwgMC4yKTsgY29sb3I6ICM5Yzk1ZmY7IH1cblxuICAgIC50b2FzdC1ib2R5IHsgZmxleDogMTsgbWluLXdpZHRoOiAwOyB9XG4gICAgLnRvYXN0LWhlYWRlci1yb3cgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogOHB4OyBtYXJnaW4tYm90dG9tOiAycHg7IH1cbiAgICAudG9hc3QtdGl0bGUgeyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjZmZmOyB9XG4gICAgLnRvYXN0LWJhZGdlIHsgZm9udC1zaXplOiA4cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHBhZGRpbmc6IDFweCA0cHg7IGJvcmRlci1yYWRpdXM6IDRweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyBjb2xvcjogI2EwYTNiMTsgfVxuICAgIC50b2FzdC1tc2cgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjYTBhM2IxOyBtYXJnaW46IDA7IGxpbmUtaGVpZ2h0OiAxLjQ7IH1cblxuICAgIC50b2FzdC1jbG9zZS1idG4geyBiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IG5vbmU7IGNvbG9yOiAjNmI2ZjgyOyBjdXJzb3I6IHBvaW50ZXI7IHBhZGRpbmc6IDA7IH1cbiAgICAudG9hc3QtY2xvc2UtYnRuOmhvdmVyIHsgY29sb3I6ICNmZmY7IH1cblxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MHB4KTsgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XG5cbiAgICAvKiBMb2dvdXQgTW9kYWwgU3R5bGVzICovXG4gICAgLmxvZ291dC1tb2RhbC1vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwdnc7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBlYXNlLW91dDtcbiAgICB9XG4gICAgLmxvZ291dC1tb2RhbC1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxYTFkMmU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIHBhZGRpbmc6IDMycHggMjhweDtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYW5pbWF0aW9uOiBwb3BJbiAwLjI1cyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcbiAgICB9XG4gICAgLmxvZ291dC1pY29uLWNpcmNsZSB7XG4gICAgICB3aWR0aDogNjRweDtcbiAgICAgIGhlaWdodDogNjRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMDcsIDEwNywgMC4xMik7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTA3LCAxMDcsIDAuMyk7XG4gICAgICBjb2xvcjogI0ZGNkI2QjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgYXV0byAxOHB4IGF1dG87XG4gICAgfVxuICAgIC5sb2dvdXQtaWNvbi1jaXJjbGUgbWF0LWljb24geyBmb250LXNpemU6IDMycHg7IHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7IH1cbiAgICAubG9nb3V0LW1vZGFsLWhlYWRlciBoMyB7IGZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmZmZmZmY7IG1hcmdpbjogMCAwIDhweCAwOyB9XG4gICAgLmxvZ291dC1tb2RhbC1oZWFkZXIgcCB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICNhMGEzYjE7IG1hcmdpbjogMCAwIDI0cHggMDsgbGluZS1oZWlnaHQ6IDEuNTsgfVxuICAgIC5sb2dvdXQtbW9kYWwtYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTJweDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAuYnRuLWNhbmNlbCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgICAgIGNvbG9yOiAjYTBhM2IxO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICB9XG4gICAgLmJ0bi1jYW5jZWw6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpOyBjb2xvcjogI2ZmZmZmZjsgfVxuICAgIC5idG4tY29uZmlybS1sb2dvdXQge1xuICAgICAgZmxleDogMTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNGRjZCNkIsICNkMzJmMmYpO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBnYXA6IDZweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgyNTUsIDEwNywgMTA3LCAwLjM1KTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgfVxuICAgIC5idG4tY29uZmlybS1sb2dvdXQ6aG92ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7IGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgyNTUsIDEwNywgMTA3LCAwLjUpOyB9XG4gICAgQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTogMDsgfSB0byB7IG9wYWNpdHk6IDE7IH0gfVxuICAgIEBrZXlmcmFtZXMgcG9wSW4geyBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiBzY2FsZSgwLjkpIHRyYW5zbGF0ZVkoMTBweCk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7IH0gfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* reexport safe */ _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent),
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth/login/login.component */ 4860);
/* harmony import */ var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth/register/register.component */ 3464);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 4441);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects/projects.component */ 3607);
/* harmony import */ var _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/resources/resources.component */ 5297);
/* harmony import */ var _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inventory/inventory.component */ 5629);
/* harmony import */ var _components_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/attendance/attendance.component */ 7665);
/* harmony import */ var _components_procurement_procurement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/procurement/procurement.component */ 5837);
/* harmony import */ var _components_notification_drawer_notification_drawer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/notification-drawer/notification-drawer.component */ 9585);
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/notifications/notifications.component */ 6621);
/* harmony import */ var _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/reports/reports.component */ 1905);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ 4796);
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/project.service */ 1279);
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/analytics.service */ 2210);
/* harmony import */ var _services_reporting_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/reporting.service */ 5828);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/notification.service */ 7473);
/* harmony import */ var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/token.interceptor */ 2543);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 7580);




// Angular Material Imports










// Routing & Shell Components


// Component declarations











// Services & Guards








class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_13__.AuthService, _services_project_service__WEBPACK_IMPORTED_MODULE_14__.ProjectService, _services_analytics_service__WEBPACK_IMPORTED_MODULE_15__.AnalyticsService, _services_reporting_service__WEBPACK_IMPORTED_MODULE_16__.ReportingService, _services_notification_service__WEBPACK_IMPORTED_MODULE_17__.NotificationService, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__.AuthGuard, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HTTP_INTERCEPTORS,
        useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_18__.TokenInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
      // Angular Material Components
      _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelectModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatTableModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__.MatSnackBarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__.MatProgressBarModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent, _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent, _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__.ProjectsComponent, _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_6__.ResourcesComponent, _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_7__.InventoryComponent, _components_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_8__.AttendanceComponent, _components_procurement_procurement_component__WEBPACK_IMPORTED_MODULE_9__.ProcurementComponent, _components_notification_drawer_notification_drawer_component__WEBPACK_IMPORTED_MODULE_10__.NotificationDrawerComponent, _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__.NotificationsComponent, _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_12__.ReportsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
    // Angular Material Components
    _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelectModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatTableModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__.MatSnackBarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__.MatProgressBarModule]
  });
})();
 // Export for test runner configurations

/***/ }),

/***/ 7665:
/*!***************************************************************!*\
  !*** ./src/app/components/attendance/attendance.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttendanceComponent: () => (/* binding */ AttendanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/resource.service */ 258);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function AttendanceComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading workforce roster...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AttendanceComponent_table_46_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 23)(2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AttendanceComponent_table_46_tr_18_Template_input_change_2_listener() {
      const w_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toggleWorker(w_r2._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "strong", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td")(16, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const w_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("row-selected", ctx_r2.isPresent(w_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r2.isPresent(w_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](w_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](w_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](w_r2.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", w_r2.dailyWage, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((w_r2.currentProjectId == null ? null : w_r2.currentProjectId.name) || "Unallocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("badge-success", ctx_r2.isPresent(w_r2._id))("badge-danger", !ctx_r2.isPresent(w_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.isPresent(w_r2._id) ? "Present" : "Absent", " ");
  }
}
function AttendanceComponent_table_46_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No workers registered in database. Go to Resources to add labor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AttendanceComponent_table_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Daily Wage (\u20B9)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Deployment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AttendanceComponent_table_46_tr_18_Template, 18, 13, "tr", 22)(19, AttendanceComponent_table_46_tr_19_Template, 3, 0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.workers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.loading && ctx_r2.workers.length === 0);
  }
}
class AttendanceComponent {
  constructor(resourceService, snackBar) {
    this.resourceService = resourceService;
    this.snackBar = snackBar;
    this.workers = [];
    this.presentIds = [];
    this.selectedDate = '';
    this.loading = true;
    this.saving = false;
    this.clearing = false;
    this.attendanceExists = false;
    // Default to local ISO date YYYY-MM-DD
    const today = new Date();
    const offset = today.getTimezoneOffset();
    const localToday = new Date(today.getTime() - offset * 60 * 1000);
    this.selectedDate = localToday.toISOString().split('T')[0];
  }
  ngOnInit() {
    this.loadWorkforce();
  }
  loadWorkforce() {
    this.loading = true;
    this.resourceService.getWorkers().subscribe({
      next: res => {
        this.workers = res.success ? res.data : Array.isArray(res) ? res : res.workers || [];
        this.loadAttendance();
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Failed to load workers roster', 'Close', {
          duration: 3000
        });
      }
    });
  }
  loadAttendance() {
    this.resourceService.getAttendance(this.selectedDate).subscribe({
      next: res => {
        this.loading = false;
        if (res.success && res.count > 0 && res.data[0]) {
          const record = res.data[0];
          this.attendanceExists = true;
          this.presentIds = record.presentWorkers.map(w => typeof w === 'object' ? w._id : w);
        } else {
          this.attendanceExists = false;
          this.presentIds = [];
        }
      },
      error: () => {
        this.loading = false;
        this.attendanceExists = false;
        this.presentIds = [];
      }
    });
  }
  onDateChange() {
    this.loading = true;
    this.loadAttendance();
  }
  isPresent(id) {
    return this.presentIds.includes(id);
  }
  toggleWorker(id) {
    const index = this.presentIds.indexOf(id);
    if (index === -1) {
      this.presentIds.push(id);
    } else {
      this.presentIds.splice(index, 1);
    }
  }
  selectAll() {
    this.presentIds = this.workers.map(w => w._id).filter(id => !!id);
  }
  deselectAll() {
    this.presentIds = [];
  }
  getPresentCount() {
    return this.presentIds.length;
  }
  getWageCommitment() {
    return this.workers.filter(w => this.isPresent(w._id)).reduce((sum, w) => sum + (w.dailyWage || 0), 0);
  }
  saveAttendance() {
    if (!this.selectedDate) {
      this.snackBar.open('Please select a date first', 'Close', {
        duration: 3000
      });
      return;
    }
    this.saving = true;
    this.resourceService.submitAttendance(this.selectedDate, this.presentIds).subscribe({
      next: () => {
        this.saving = false;
        this.attendanceExists = true;
        this.snackBar.open('Attendance saved successfully', 'Close', {
          duration: 3000
        });
      },
      error: () => {
        this.saving = false;
        this.snackBar.open('Failed to save attendance', 'Close', {
          duration: 3000
        });
      }
    });
  }
  clearAttendance() {
    if (!confirm('Are you sure you want to delete the attendance log for ' + this.selectedDate + '?')) return;
    this.clearing = true;
    this.resourceService.deleteAttendance(this.selectedDate).subscribe({
      next: () => {
        this.clearing = false;
        this.attendanceExists = false;
        this.presentIds = [];
        this.snackBar.open('Attendance record cleared', 'Close', {
          duration: 3000
        });
      },
      error: () => {
        this.clearing = false;
        this.snackBar.open('Failed to clear attendance record', 'Close', {
          duration: 3000
        });
      }
    });
  }
  static {
    this.ɵfac = function AttendanceComponent_Factory(t) {
      return new (t || AttendanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_resource_service__WEBPACK_IMPORTED_MODULE_0__.ResourceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AttendanceComponent,
      selectors: [["app-attendance"]],
      decls: 47,
      vars: 14,
      consts: [[1, "page-header"], [1, "glass-card", 2, "padding", "24px", "margin-bottom", "28px"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "flex-wrap", "wrap", "gap", "16px"], [2, "display", "flex", "align-items", "center", "gap", "12px"], [2, "font-weight", "600", "color", "#a0a3b1", "font-size", "14px"], ["type", "date", 1, "input-field", 2, "width", "160px", "padding", "8px 12px", 3, "ngModelChange", "change", "ngModel"], [2, "display", "flex", "gap", "12px"], [1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-outline", 2, "border-color", "#FF6B6B", "color", "#FF6B6B", 3, "click", "disabled"], [1, "stats-grid", 2, "display", "grid", "grid-template-columns", "1fr 1fr 1fr", "gap", "20px", "margin-bottom", "28px"], [1, "stat-card"], [1, "stat-label"], [1, "stat-value", 2, "color", "#9c95ff"], [2, "font-size", "12px", "color", "#a0a3b1", "margin-top", "6px"], [1, "stat-value", 2, "color", "#00BFA5"], [1, "stat-value", 2, "color", "#ffc107"], [1, "table-container"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], [1, "loading-state"], [2, "width", "80px", "text-align", "center"], [3, "row-selected", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], ["type", "checkbox", 1, "attendance-checkbox", 3, "change", "checked"], [2, "color", "#fff"], [1, "badge", "badge-info", 2, "font-size", "11px"], [1, "badge"], ["colspan", "7", 2, "text-align", "center", "color", "#6b6f82", "padding", "40px"]],
      template: function AttendanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Daily Workforce Attendance");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Record, review, and clear worker attendance logs for construction projects.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1)(7, "div", 2)(8, "div", 3)(9, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Select Date *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AttendanceComponent_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedDate, $event) || (ctx.selectedDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AttendanceComponent_Template_input_change_11_listener() {
            return ctx.onDateChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AttendanceComponent_Template_button_click_13_listener() {
            return ctx.selectAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Select All");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AttendanceComponent_Template_button_click_15_listener() {
            return ctx.deselectAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Deselect All");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AttendanceComponent_Template_button_click_17_listener() {
            return ctx.saveAttendance();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AttendanceComponent_Template_button_click_19_listener() {
            return ctx.clearAttendance();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10)(22, "div", 11)(23, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Total Labor Strength");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Total registered workforce");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 11)(30, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Present Count");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Workers marked present today");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 11)(37, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Daily Wage Commitment");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Total wage payout for today's strength");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, AttendanceComponent_div_45_Template, 2, 0, "div", 18)(46, AttendanceComponent_table_46_Template, 20, 2, "table", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.saving ? "Saving..." : "Save Attendance", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.clearing || !ctx.attendanceExists);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.clearing ? "Clearing..." : "Clear Attendance", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.workers.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getPresentCount());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](41, 10, ctx.getWageCommitment(), "1.0-0", "en-IN"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe],
      styles: [".input-field[_ngcontent-%COMP%] {\n      background: rgba(255,255,255,0.05);\n      border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;\n      color: #fff; font-size: 14px; font-family: 'Inter', sans-serif; outline: none;\n    }\n    .input-field[_ngcontent-%COMP%]:focus { border-color: #6C63FF; }\n    .loading-state[_ngcontent-%COMP%] { padding: 40px; text-align: center; color: #6b6f82; }\n    .attendance-checkbox[_ngcontent-%COMP%] {\n      width: 18px;\n      height: 18px;\n      cursor: pointer;\n      accent-color: #00BFA5;\n    }\n    .row-selected[_ngcontent-%COMP%] {\n      background: rgba(0, 191, 165, 0.03);\n    }\n    .badge-danger[_ngcontent-%COMP%] {\n      background: rgba(255, 107, 107, 0.1);\n      color: #FF6B6B;\n      border: 1px solid rgba(255, 107, 107, 0.2);\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdHRlbmRhbmNlL2F0dGVuZGFuY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGtDQUFrQztNQUNsQyx1Q0FBdUMsRUFBRSxrQkFBa0I7TUFDM0QsV0FBVyxFQUFFLGVBQWUsRUFBRSxnQ0FBZ0MsRUFBRSxhQUFhO0lBQy9FO0lBQ0EscUJBQXFCLHFCQUFxQixFQUFFO0lBQzVDLGlCQUFpQixhQUFhLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFO0lBQ3BFO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO01BQ2YscUJBQXFCO0lBQ3ZCO0lBQ0E7TUFDRSxtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLG9DQUFvQztNQUNwQyxjQUFjO01BQ2QsMENBQTBDO0lBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmlucHV0LWZpZWxkIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7IGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDE0cHg7IGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmOyBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAuaW5wdXQtZmllbGQ6Zm9jdXMgeyBib3JkZXItY29sb3I6ICM2QzYzRkY7IH1cbiAgICAubG9hZGluZy1zdGF0ZSB7IHBhZGRpbmc6IDQwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6ICM2YjZmODI7IH1cbiAgICAuYXR0ZW5kYW5jZS1jaGVja2JveCB7XG4gICAgICB3aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGFjY2VudC1jb2xvcjogIzAwQkZBNTtcbiAgICB9XG4gICAgLnJvdy1zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE5MSwgMTY1LCAwLjAzKTtcbiAgICB9XG4gICAgLmJhZGdlLWRhbmdlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTA3LCAxMDcsIDAuMSk7XG4gICAgICBjb2xvcjogI0ZGNkI2QjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxMDcsIDEwNywgMC4yKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4860:
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function LoginComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.toastType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.toastMsg);
  }
}
function LoginComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_button_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleRegister());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.isRegister ? "Switch to Login" : "Create an Account", " ");
  }
}
function LoginComponent_form_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_38_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28)(2, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 28)(6, "div", 31)(7, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_form_38_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleForgot(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.loading ? "Authenticating..." : "Authenticate Session", " ");
  }
}
function LoginComponent_div_39_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_39_form_1_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.onRegisterSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28)(2, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 28)(6, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 28)(10, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 38)(14, "div", 28)(15, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Clearance Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "select", 39)(18, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Worker");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Contractor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Site Engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Project Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Administrator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 28)(31, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 28)(35, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Authorization Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 28)(39, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.loading ? "Registering..." : "Complete Onboarding", " ");
  }
}
function LoginComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_39_form_1_Template, 44, 3, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.registerStep === 1);
  }
}
function LoginComponent_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48)(1, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Select your verification method to reset password: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 52)(4, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_40_div_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.setForgotMethod("email"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\uD83D\uDCE7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Email Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Send code to registered email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_40_div_1_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.setForgotMethod("mobile"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\uD83D\uDCF1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Mobile Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Send SMS code to registered Indian number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function LoginComponent_div_40_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_40_form_2_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.requestOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 28)(4, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 38)(8, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_40_form_2_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.forgotMethod = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.forgotForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Enter your registered ", ctx_r0.forgotMethod === "email" ? "Email address" : "Indian mobile number", ". We will generate a verification OTP to reset your password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.forgotMethod === "email" ? "Email Address" : "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r0.forgotMethod === "email" ? "email" : "text")("placeholder", ctx_r0.forgotMethod === "email" ? "you@company.com" : "9876543210");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.loading ? "Sending..." : "Send OTP Code", " ");
  }
}
function LoginComponent_div_40_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_40_form_3_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.resetPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Verification code sent successfully to your account! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 28)(4, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Verification Code (OTP)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 28)(8, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 28)(12, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Confirm New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.resetForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.loading ? "Resetting..." : "Update Password", " ");
  }
}
function LoginComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_40_div_1_Template, 18, 0, "div", 22)(2, LoginComponent_div_40_form_2_Template, 12, 7, "form", 20)(3, LoginComponent_div_40_form_3_Template, 17, 3, "form", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_40_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleForgot(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Back to Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.forgotStep === 1 && !ctx_r0.forgotMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.forgotStep === 1 && ctx_r0.forgotMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.forgotStep === 2);
  }
}
function LoginComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64)(1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "PRE-AUTHORIZED DEMO LOGINS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 66)(4, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_41_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.loginShortcut("engineer@buildtrack.io"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sanjay (Engineer)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_41_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.loginShortcut("pm@buildtrack.io"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Laura (Manager)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_41_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.loginShortcut("admin@buildtrack.io"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "James (Admin)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class LoginComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.toastMsg = '';
    this.toastType = '';
    this.isForgot = false;
    this.isRegister = false;
    this.forgotStep = 1;
    this.registerStep = 1;
    this.registerOtp = '';
    this.forgotMethod = null;
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
    this.registerForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      role: ['Project Manager', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      department: [''],
      securityCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.forgotForm = this.fb.group({
      mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.resetForm = this.fb.group({
      otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  showToast(message, type = 'success') {
    this.toastMsg = message;
    this.toastType = type;
    setTimeout(() => {
      if (this.toastMsg === message) {
        this.toastMsg = '';
        this.toastType = '';
      }
    }, 4000);
  }
  toggleForgot(val) {
    this.isForgot = val;
    this.forgotStep = 1;
    this.forgotMethod = null;
    this.toastMsg = '';
    this.forgotForm.reset();
    this.resetForm.reset();
  }
  setForgotMethod(method) {
    this.forgotMethod = method;
    this.forgotForm.reset();
  }
  toggleRegister() {
    this.isRegister = !this.isRegister;
    this.registerStep = 1;
    this.registerOtp = '';
    this.toastMsg = '';
    this.registerForm.reset({
      role: 'Project Manager'
    });
  }
  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    if (!email || !password) {
      this.showToast('Please provide email and password.', 'error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showToast('Invalid email format.', 'error');
      return;
    }
    if (password.length < 6) {
      this.showToast('Password must be at least 6 characters long.', 'error');
      return;
    }
    this.loading = true;
    this.authService.login({
      email,
      password
    }).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.loading = false;
        this.showToast(err?.error?.msg || err?.error?.message || 'Authentication failed: Invalid credentials.', 'error');
      }
    });
  }
  onRegisterSubmit() {
    const {
      name,
      email,
      mobile,
      role,
      department,
      securityCode,
      password
    } = this.registerForm.value;
    if (!name || !email || !mobile || !securityCode || !password) {
      this.showToast('Please complete all form fields.', 'error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showToast('Invalid email format.', 'error');
      return;
    }
    const indianMobileRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
    if (!indianMobileRegex.test(mobile)) {
      this.showToast('Please enter a valid 10-digit Indian mobile number (e.g., 9876543210).', 'error');
      return;
    }
    if (securityCode !== '002') {
      this.showToast('Invalid authorization code.', 'error');
      return;
    }
    if (password.length < 6) {
      this.showToast('Password must be at least 6 characters long.', 'error');
      return;
    }
    this.loading = true;
    this.authService.register({
      name,
      email,
      mobile,
      role,
      department,
      securityCode,
      password
    }).subscribe({
      next: () => {
        this.loading = false;
        this.isRegister = false;
        this.registerStep = 1;
        this.registerForm.reset({
          role: 'Project Manager'
        });
        this.showToast('Account onboarding finished: Welcome! Please log in.', 'success');
      },
      error: err => {
        this.loading = false;
        this.showToast(err?.error?.msg || err?.error?.message || 'Registration failed.', 'error');
      }
    });
  }
  loginShortcut(email) {
    this.loading = true;
    this.authService.login({
      email,
      password: 'password123'
    }).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.loading = false;
        this.showToast(err?.error?.msg || err?.error?.message || 'Shortcut login failed.', 'error');
      }
    });
  }
  requestOtp() {
    const input = this.forgotForm.value.mobile?.trim();
    if (!input) {
      this.showToast(`Please provide your registered ${this.forgotMethod === 'email' ? 'email address' : 'mobile number'}.`, 'error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const indianMobileRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
    let data = {};
    if (this.forgotMethod === 'email') {
      if (!emailRegex.test(input)) {
        this.showToast('Please enter a valid email address.', 'error');
        return;
      }
      data.email = input;
    } else {
      if (!indianMobileRegex.test(input)) {
        this.showToast('Please enter a valid 10-digit Indian mobile number.', 'error');
        return;
      }
      data.mobile = input;
    }
    this.loading = true;
    this.authService.forgotPassword(data).subscribe({
      next: res => {
        this.loading = false;
        this.forgotStep = 2;
        if (res.otp) {
          this.showToast(`Verification code generated: ${res.otp}`, 'success');
        } else {
          this.showToast(res.msg || 'Verification code sent successfully!', 'success');
        }
      },
      error: err => {
        this.loading = false;
        this.showToast(err?.error?.msg || err?.error?.message || 'Failed to send OTP.', 'error');
      }
    });
  }
  resetPassword() {
    const {
      otp,
      password,
      confirmPassword
    } = this.resetForm.value;
    if (!otp || !password || !confirmPassword) {
      this.showToast('Please fill in all fields.', 'error');
      return;
    }
    if (password.length < 6) {
      this.showToast('New password must be at least 6 characters long.', 'error');
      return;
    }
    if (password !== confirmPassword) {
      this.showToast('Passwords do not match.', 'error');
      return;
    }
    const input = this.forgotForm.value.mobile?.trim();
    let data = {
      otp,
      password
    };
    if (this.forgotMethod === 'email') {
      data.email = input;
    } else {
      data.mobile = input;
    }
    this.loading = true;
    this.authService.resetPassword(data).subscribe({
      next: () => {
        this.loading = false;
        this.toggleForgot(false);
        this.showToast('Password reset successfully. Please log in with your new password.', 'success');
      },
      error: err => {
        this.loading = false;
        this.showToast(err?.error?.msg || err?.error?.message || 'Failed to reset password.', 'error');
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 42,
      vars: 7,
      consts: [[1, "auth-container", "font-Outfit"], ["class", "toast-message", 3, "ngClass", 4, "ngIf"], [1, "auth-box"], [1, "info-banner"], [1, "banner-overlay"], [1, "banner-top"], [1, "logo-wrapper"], [1, "logo-icon"], [1, "banner-title"], [1, "banner-desc"], [1, "status-badge"], [1, "banner-features"], [1, "feature-item"], [1, "feature-icon"], [1, "feature-text"], [1, "banner-footer"], [1, "form-wrapper"], [1, "form-header"], [1, "form-title"], ["class", "switch-link", 3, "click", 4, "ngIf"], ["class", "space-y-4", 3, "formGroup", "ngSubmit", 4, "ngIf"], [4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], ["class", "shortcuts-section", 4, "ngIf"], [1, "toast-message", 3, "ngClass"], [1, "toast-content"], [1, "switch-link", 3, "click"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "field-group"], [1, "input-label"], ["type", "email", "formControlName", "email", "placeholder", "pm@buildtrack.io", 1, "input-field"], [1, "label-row"], ["type", "button", 1, "forgot-link", 3, "click"], ["type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "input-field"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["type", "text", "formControlName", "name", "placeholder", "Emily Watson", 1, "input-field"], ["type", "email", "formControlName", "email", "placeholder", "you@company.com", 1, "input-field"], ["type", "text", "formControlName", "mobile", "placeholder", "9876543210", 1, "input-field"], [1, "grid-2"], ["formControlName", "role", 1, "input-field", "select-field"], ["value", "Worker"], ["value", "Client"], ["value", "Contractor"], ["value", "Site Engineer"], ["value", "Project Manager"], ["value", "Administrator"], ["type", "text", "formControlName", "department", "placeholder", "Planning Dept", 1, "input-field"], ["type", "password", "formControlName", "securityCode", "placeholder", "\u2022\u2022\u2022\u2022", 1, "input-field"], [1, "space-y-4"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["type", "button", 1, "back-link", 3, "click"], [1, "form-desc", "text-center"], [1, "method-selector-container"], ["type", "button", 1, "method-btn", 3, "click"], [1, "method-icon"], [1, "method-title"], [1, "method-desc"], [1, "form-desc"], ["formControlName", "mobile", 1, "input-field", 3, "type", "placeholder"], ["type", "button", 1, "shortcut-btn", 2, "padding", "12px", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "form-desc", "success-banner"], ["type", "text", "formControlName", "otp", "placeholder", "Enter OTP", 1, "input-field"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "input-field"], [1, "shortcuts-section"], [1, "shortcuts-title"], [1, "shortcuts-grid"], [1, "shortcut-btn", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 3, 2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\uD83D\uDC77");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "BuildTrack Portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Enterprise monitoring and operational management platform. Log daily site completions, machinery workloads, budgets, and procurements. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " System Status: Active connection established. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\uD83D\uDEE1\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Role-Based Access Control Restrictions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12)(22, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\uD83D\uDCCA");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Interactive Recharts Analytics & Statistics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12)(27, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\uD83D\uDCE5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "PDF & Excel Reporting Compilation Exports");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " BUILDTRACK OPERATIONS V2.4 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16)(34, "div", 17)(35, "h3", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, LoginComponent_button_37_Template, 2, 1, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, LoginComponent_form_38_Template, 14, 3, "form", 20)(39, LoginComponent_div_39_Template, 2, 1, "div", 21)(40, LoginComponent_div_40_Template, 6, 3, "div", 22)(41, LoginComponent_div_41_Template, 10, 0, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.toastMsg);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isForgot ? "Reset Password" : ctx.isRegister ? "Register Account" : "Security Sign In", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isForgot);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isForgot && !ctx.isRegister);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRegister && !ctx.isForgot);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isForgot);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isForgot && !ctx.isRegister);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: [".auth-container[_ngcontent-%COMP%] {\n      min-height: 100vh;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background-color: #0f172a; \n\n      padding: 16px;\n      position: relative;\n      overflow: hidden;\n    }\n    .auth-container[_ngcontent-%COMP%]::before {\n      content: '';\n      position: absolute;\n      top: 25%;\n      left: 25%;\n      width: 384px;\n      height: 384px;\n      background-color: rgba(59, 130, 246, 0.1);\n      border-radius: 9999px;\n      filter: blur(64px);\n    }\n    .auth-box[_ngcontent-%COMP%] {\n      width: 100%;\n      max-width: 896px;\n      display: grid;\n      grid-template-columns: 1fr;\n      border-radius: 24px;\n      overflow: hidden;\n      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);\n      border: 1px solid #1e293b;\n      background-color: rgba(2, 6, 23, 0.8);\n      backdrop-filter: blur(12px);\n    }\n    @media (min-width: 768px) {\n      .auth-box[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n    .info-banner[_ngcontent-%COMP%] {\n      padding: 40px;\n      background: linear-gradient(to bottom right, #2563eb, #1d4ed8, #312e81);\n      color: #ffffff;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      position: relative;\n      overflow: hidden;\n    }\n    .banner-overlay[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 256px;\n      height: 256px;\n      background-color: rgba(255, 255, 255, 0.05);\n      border-radius: 9999px;\n      filter: blur(40px);\n      transform: translate(40px, -40px);\n    }\n    .logo-wrapper[_ngcontent-%COMP%] {\n      width: 48px;\n      height: 48px;\n      border-radius: 12px;\n      background-color: rgba(255, 255, 255, 0.2);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 24px;\n    }\n    .logo-icon[_ngcontent-%COMP%] {\n      font-size: 24px;\n    }\n    .banner-title[_ngcontent-%COMP%] {\n      font-size: 28px;\n      font-weight: 800;\n      letter-spacing: -0.5px;\n      margin-bottom: 12px;\n    }\n    .banner-desc[_ngcontent-%COMP%] {\n      font-size: 14px;\n      color: rgba(239, 246, 255, 0.9);\n      line-height: 1.6;\n      margin-bottom: 16px;\n      font-weight: 300;\n    }\n    .status-badge[_ngcontent-%COMP%] {\n      display: inline-block;\n      padding: 12px;\n      border-radius: 12px;\n      background-color: rgba(255, 255, 255, 0.1);\n      border: 1px solid rgba(255, 255, 255, 0.2);\n      font-size: 12px;\n      font-weight: 600;\n    }\n    .banner-features[_ngcontent-%COMP%] {\n      margin-top: 32px;\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n    }\n    .feature-item[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n    }\n    .feature-icon[_ngcontent-%COMP%] {\n      font-size: 18px;\n    }\n    .feature-text[_ngcontent-%COMP%] {\n      font-size: 13px;\n      font-weight: 600;\n    }\n    .banner-footer[_ngcontent-%COMP%] {\n      font-size: 10px;\n      text-transform: uppercase;\n      letter-spacing: 2px;\n      color: #93c5fd;\n      font-weight: 700;\n      margin-top: 40px;\n    }\n    .form-wrapper[_ngcontent-%COMP%] {\n      padding: 40px;\n      background-color: rgba(15, 23, 42, 0.6);\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    }\n    .form-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 24px;\n      border-bottom: 1px solid #1e293b;\n      padding-bottom: 12px;\n    }\n    .form-title[_ngcontent-%COMP%] {\n      font-size: 20px;\n      font-weight: 700;\n      color: #ffffff;\n    }\n    .switch-link[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      color: #3b82f6;\n      font-size: 12px;\n      font-weight: 700;\n      cursor: pointer;\n    }\n    .switch-link[_ngcontent-%COMP%]:hover {\n      text-decoration: underline;\n    }\n    .field-group[_ngcontent-%COMP%] {\n      margin-bottom: 16px;\n    }\n    .input-label[_ngcontent-%COMP%] {\n      display: block;\n      font-size: 11px;\n      font-weight: 600;\n      color: #94a3b8;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n      margin-bottom: 6px;\n    }\n    .input-field[_ngcontent-%COMP%] {\n      width: 100%;\n      padding: 10px 14px;\n      background-color: rgba(30, 41, 59, 0.6);\n      border: 1px solid #334155;\n      border-radius: 8px;\n      color: #ffffff;\n      font-size: 14px;\n      outline: none;\n      transition: all 0.2s;\n    }\n    .input-field[_ngcontent-%COMP%]:focus {\n      border-color: #f59e0b; \n\n      box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2);\n    }\n    .select-field[_ngcontent-%COMP%] {\n      appearance: none;\n      background-image: url(\"data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\");\n      background-repeat: no-repeat;\n      background-position: right 10px center;\n    }\n    .select-field[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n      background-color: #0f172a;\n    }\n    .grid-2[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 12px;\n    }\n    .label-row[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 6px;\n    }\n    .forgot-link[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      color: #3b82f6;\n      font-size: 12px;\n      font-weight: 700;\n      cursor: pointer;\n    }\n    .forgot-link[_ngcontent-%COMP%]:hover {\n      text-decoration: underline;\n    }\n    .submit-btn[_ngcontent-%COMP%] {\n      width: 100%;\n      background-color: #2563eb;\n      color: #ffffff;\n      font-weight: 700;\n      padding: 12px;\n      border-radius: 8px;\n      border: none;\n      cursor: pointer;\n      font-size: 14px;\n      transition: all 0.2s;\n      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);\n    }\n    .submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n      background-color: #1d4ed8;\n      box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);\n    }\n    .submit-btn[_ngcontent-%COMP%]:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n    .form-desc[_ngcontent-%COMP%] {\n      font-size: 12px;\n      color: #94a3b8;\n      line-height: 1.5;\n    }\n    .success-banner[_ngcontent-%COMP%] {\n      color: #10b981;\n      background-color: rgba(16, 185, 129, 0.05);\n      border: 1px solid rgba(16, 185, 129, 0.2);\n      padding: 10px;\n      border-radius: 8px;\n    }\n    .back-link[_ngcontent-%COMP%] {\n      width: 100%;\n      background: none;\n      border: none;\n      color: #94a3b8;\n      text-align: center;\n      font-size: 12px;\n      font-weight: 600;\n      cursor: pointer;\n      text-decoration: underline;\n      display: block;\n      margin-top: 16px;\n    }\n    .back-link[_ngcontent-%COMP%]:hover {\n      color: #ffffff;\n    }\n    .shortcuts-section[_ngcontent-%COMP%] {\n      margin-top: 32px;\n      padding-top: 24px;\n      border-top: 1px solid #1e293b;\n    }\n    .shortcuts-title[_ngcontent-%COMP%] {\n      font-size: 10px;\n      font-weight: 750;\n      color: #64748b;\n      letter-spacing: 1px;\n      display: block;\n      margin-bottom: 12px;\n      text-align: center;\n    }\n    .shortcuts-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      gap: 8px;\n    }\n    .shortcut-btn[_ngcontent-%COMP%] {\n      background-color: #1e293b;\n      border: 1px solid #334155;\n      border-radius: 8px;\n      color: #94a3b8;\n      font-size: 10px;\n      font-weight: 700;\n      padding: 8px 4px;\n      cursor: pointer;\n      transition: all 0.2s;\n    }\n    .shortcut-btn[_ngcontent-%COMP%]:hover {\n      background-color: rgba(37, 99, 235, 0.1);\n      border-color: #2563eb;\n      color: #ffffff;\n    }\n    .method-selector-container[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 12px;\n      margin-bottom: 16px;\n    }\n    .method-btn[_ngcontent-%COMP%] {\n      width: 100%;\n      background-color: #1e293b;\n      border: 1px solid #334155;\n      border-radius: 12px;\n      color: #ffffff;\n      padding: 16px;\n      cursor: pointer;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      text-align: center;\n      transition: all 0.25s ease;\n    }\n    .method-btn[_ngcontent-%COMP%]:hover {\n      background-color: rgba(37, 99, 235, 0.1);\n      border-color: #2563eb;\n      transform: translateY(-2px);\n    }\n    .method-icon[_ngcontent-%COMP%] {\n      font-size: 24px;\n      margin-bottom: 8px;\n    }\n    .method-title[_ngcontent-%COMP%] {\n      font-size: 14px;\n      font-weight: 700;\n      display: block;\n      margin-bottom: 4px;\n    }\n    .method-desc[_ngcontent-%COMP%] {\n      font-size: 11px;\n      color: #94a3b8;\n      font-weight: 450;\n    }\n    .toast-message[_ngcontent-%COMP%] {\n      position: fixed;\n      top: 16px;\n      right: 16px;\n      z-index: 9999;\n      padding: 12px 20px;\n      border-radius: 8px;\n      color: #ffffff;\n      font-size: 13px;\n      font-weight: 600;\n      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);\n      border: 1px solid transparent;\n      animation: _ngcontent-%COMP%_slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    }\n    @keyframes _ngcontent-%COMP%_slideIn {\n      from { transform: translateX(100%); opacity: 0; }\n      to { transform: translateX(0); opacity: 1; }\n    }\n    .toast-message.error[_ngcontent-%COMP%] {\n      background-color: #dc2626;\n      border-color: #ef4444;\n    }\n    .toast-message.success[_ngcontent-%COMP%] {\n      background-color: #059669;\n      border-color: #10b981;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxpQkFBaUI7TUFDakIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIseUJBQXlCLEVBQUUsaUJBQWlCO01BQzVDLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLGFBQWE7TUFDYix5Q0FBeUM7TUFDekMscUJBQXFCO01BQ3JCLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixhQUFhO01BQ2IsMEJBQTBCO01BQzFCLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsZ0RBQWdEO01BQ2hELHlCQUF5QjtNQUN6QixxQ0FBcUM7TUFDckMsMkJBQTJCO0lBQzdCO0lBQ0E7TUFDRTtRQUNFLDhCQUE4QjtNQUNoQztJQUNGO0lBQ0E7TUFDRSxhQUFhO01BQ2IsdUVBQXVFO01BQ3ZFLGNBQWM7TUFDZCxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLDhCQUE4QjtNQUM5QixrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLFFBQVE7TUFDUixZQUFZO01BQ1osYUFBYTtNQUNiLDJDQUEyQztNQUMzQyxxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLGlDQUFpQztJQUNuQztJQUNBO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsMENBQTBDO01BQzFDLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsZUFBZTtJQUNqQjtJQUNBO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixzQkFBc0I7TUFDdEIsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxlQUFlO01BQ2YsK0JBQStCO01BQy9CLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxxQkFBcUI7TUFDckIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiwwQ0FBMEM7TUFDMUMsMENBQTBDO01BQzFDLGVBQWU7TUFDZixnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFNBQVM7SUFDWDtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixTQUFTO0lBQ1g7SUFDQTtNQUNFLGVBQWU7SUFDakI7SUFDQTtNQUNFLGVBQWU7TUFDZixnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsbUJBQW1CO01BQ25CLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxhQUFhO01BQ2IsdUNBQXVDO01BQ3ZDLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsOEJBQThCO0lBQ2hDO0lBQ0E7TUFDRSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsZ0NBQWdDO01BQ2hDLG9CQUFvQjtJQUN0QjtJQUNBO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGNBQWM7TUFDZCxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGVBQWU7SUFDakI7SUFDQTtNQUNFLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxjQUFjO01BQ2QsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QseUJBQXlCO01BQ3pCLHFCQUFxQjtNQUNyQixrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsdUNBQXVDO01BQ3ZDLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsY0FBYztNQUNkLGVBQWU7TUFDZixhQUFhO01BQ2Isb0JBQW9CO0lBQ3RCO0lBQ0E7TUFDRSxxQkFBcUIsRUFBRSxxQkFBcUI7TUFDNUMsNkNBQTZDO0lBQy9DO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsc05BQXNOO01BQ3ROLDRCQUE0QjtNQUM1QixzQ0FBc0M7SUFDeEM7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtJQUNBO01BQ0UsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixTQUFTO0lBQ1g7SUFDQTtNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsbUJBQW1CO01BQ25CLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixjQUFjO01BQ2QsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSwwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLFdBQVc7TUFDWCx5QkFBeUI7TUFDekIsY0FBYztNQUNkLGdCQUFnQjtNQUNoQixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixlQUFlO01BQ2YsZUFBZTtNQUNmLG9CQUFvQjtNQUNwQiw2Q0FBNkM7SUFDL0M7SUFDQTtNQUNFLHlCQUF5QjtNQUN6Qiw2Q0FBNkM7SUFDL0M7SUFDQTtNQUNFLFlBQVk7TUFDWixtQkFBbUI7SUFDckI7SUFDQTtNQUNFLGVBQWU7TUFDZixjQUFjO01BQ2QsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxjQUFjO01BQ2QsMENBQTBDO01BQzFDLHlDQUF5QztNQUN6QyxhQUFhO01BQ2Isa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLDBCQUEwQjtNQUMxQixjQUFjO01BQ2QsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLDZCQUE2QjtJQUMvQjtJQUNBO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsbUJBQW1CO01BQ25CLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxhQUFhO01BQ2IscUNBQXFDO01BQ3JDLFFBQVE7SUFDVjtJQUNBO01BQ0UseUJBQXlCO01BQ3pCLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsY0FBYztNQUNkLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixvQkFBb0I7SUFDdEI7SUFDQTtNQUNFLHdDQUF3QztNQUN4QyxxQkFBcUI7TUFDckIsY0FBYztJQUNoQjtJQUNBO01BQ0UsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixTQUFTO01BQ1QsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxXQUFXO01BQ1gseUJBQXlCO01BQ3pCLHlCQUF5QjtNQUN6QixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLGFBQWE7TUFDYixlQUFlO01BQ2YsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0Usd0NBQXdDO01BQ3hDLHFCQUFxQjtNQUNyQiwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLGVBQWU7TUFDZixrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsZUFBZTtNQUNmLGNBQWM7TUFDZCxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGVBQWU7TUFDZixTQUFTO01BQ1QsV0FBVztNQUNYLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLDBDQUEwQztNQUMxQyw2QkFBNkI7TUFDN0Isb0RBQW9EO0lBQ3REO0lBQ0E7TUFDRSxPQUFPLDJCQUEyQixFQUFFLFVBQVUsRUFBRTtNQUNoRCxLQUFLLHdCQUF3QixFQUFFLFVBQVUsRUFBRTtJQUM3QztJQUNBO01BQ0UseUJBQXlCO01BQ3pCLHFCQUFxQjtJQUN2QjtJQUNBO01BQ0UseUJBQXlCO01BQ3pCLHFCQUFxQjtJQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5hdXRoLWNvbnRhaW5lciB7XG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNzJhOyAvKiBiZy1zbGF0ZS05MDAgKi9cbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAuYXV0aC1jb250YWluZXI6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMjUlO1xuICAgICAgbGVmdDogMjUlO1xuICAgICAgd2lkdGg6IDM4NHB4O1xuICAgICAgaGVpZ2h0OiAzODRweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgZmlsdGVyOiBibHVyKDY0cHgpO1xuICAgIH1cbiAgICAuYXV0aC1ib3gge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDg5NnB4O1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBib3gtc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWUyOTNiO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCA2LCAyMywgMC44KTtcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAuYXV0aC1ib3gge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICB9XG4gICAgfVxuICAgIC5pbmZvLWJhbm5lciB7XG4gICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzI1NjNlYiwgIzFkNGVkOCwgIzMxMmU4MSk7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgLmJhbm5lci1vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgd2lkdGg6IDI1NnB4O1xuICAgICAgaGVpZ2h0OiAyNTZweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICBmaWx0ZXI6IGJsdXIoNDBweCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHB4LCAtNDBweCk7XG4gICAgfVxuICAgIC5sb2dvLXdyYXBwZXIge1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICAgIC5sb2dvLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICAuYmFubmVyLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG4gICAgLmJhbm5lci1kZXNjIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiByZ2JhKDIzOSwgMjQ2LCAyNTUsIDAuOSk7XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuICAgIC5zdGF0dXMtYmFkZ2Uge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAuYmFubmVyLWZlYXR1cmVzIHtcbiAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTZweDtcbiAgICB9XG4gICAgLmZlYXR1cmUtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICB9XG4gICAgLmZlYXR1cmUtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIC5mZWF0dXJlLXRleHQge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLmJhbm5lci1mb290ZXIge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICBjb2xvcjogIzkzYzVmZDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbiAgICAuZm9ybS13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAyMywgNDIsIDAuNik7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgLmZvcm0taGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWUyOTNiO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgfVxuICAgIC5mb3JtLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gICAgLnN3aXRjaC1saW5rIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogIzNiODJmNjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5zd2l0Y2gtbGluazpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gICAgLmZpZWxkLWdyb3VwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuICAgIC5pbnB1dC1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzk0YTNiODtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgfVxuICAgIC5pbnB1dC1maWVsZCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDQxLCA1OSwgMC42KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzQxNTU7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICB9XG4gICAgLmlucHV0LWZpZWxkOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogI2Y1OWUwYjsgLyogQW1iZXIgZm9jdXMgcmluZyAqL1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjIpO1xuICAgIH1cbiAgICAuc2VsZWN0LWZpZWxkIHtcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIGZpbGw9J3doaXRlJyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIHdpZHRoPScyNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNNyAxMGw1IDUgNS01eicvPjxwYXRoIGQ9J00wIDBoMjR2MjRIMHonIGZpbGw9J25vbmUnLz48L3N2Zz5cIik7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTBweCBjZW50ZXI7XG4gICAgfVxuICAgIC5zZWxlY3QtZmllbGQgb3B0aW9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7XG4gICAgfVxuICAgIC5ncmlkLTIge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICB9XG4gICAgLmxhYmVsLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICB9XG4gICAgLmZvcmdvdC1saW5rIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogIzNiODJmNjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5mb3Jnb3QtbGluazpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gICAgLnN1Ym1pdC1idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU2M2ViO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjIpO1xuICAgIH1cbiAgICAuc3VibWl0LWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0ZWQ4O1xuICAgICAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjQpO1xuICAgIH1cbiAgICAuc3VibWl0LWJ0bjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgICAuZm9ybS1kZXNjIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG4gICAgLnN1Y2Nlc3MtYmFubmVyIHtcbiAgICAgIGNvbG9yOiAjMTBiOTgxO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNiwgMTg1LCAxMjksIDAuMDUpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMTg1LCAxMjksIDAuMik7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cbiAgICAuYmFjay1saW5rIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cbiAgICAuYmFjay1saW5rOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgICAuc2hvcnRjdXRzLXNlY3Rpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxZTI5M2I7XG4gICAgfVxuICAgIC5zaG9ydGN1dHMtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDc1MDtcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnNob3J0Y3V0cy1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuICAgIC5zaG9ydGN1dC1idG4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzQxNTU7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBjb2xvcjogIzk0YTNiODtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBwYWRkaW5nOiA4cHggNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgfVxuICAgIC5zaG9ydGN1dC1idG46aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgOTksIDIzNSwgMC4xKTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzI1NjNlYjtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgICAubWV0aG9kLXNlbGVjdG9yLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuICAgIC5tZXRob2QtYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzQxNTU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgfVxuICAgIC5tZXRob2QtYnRuOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMSk7XG4gICAgICBib3JkZXItY29sb3I6ICMyNTYzZWI7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgfVxuICAgIC5tZXRob2QtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIC5tZXRob2QtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgICAubWV0aG9kLWRlc2Mge1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICBmb250LXdlaWdodDogNDUwO1xuICAgIH1cbiAgICAudG9hc3QtbWVzc2FnZSB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDE2cHg7XG4gICAgICByaWdodDogMTZweDtcbiAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBib3gtc2hhZG93OiAwIDEwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gICAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyBvcGFjaXR5OiAwOyB9XG4gICAgICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxuICAgIH1cbiAgICAudG9hc3QtbWVzc2FnZS5lcnJvciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZWY0NDQ0O1xuICAgIH1cbiAgICAudG9hc3QtbWVzc2FnZS5zdWNjZXNzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTk2Njk7XG4gICAgICBib3JkZXItY29sb3I6ICMxMGI5ODE7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3464:
/*!****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function RegisterComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
  }
}
function RegisterComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.successMsg);
  }
}
function RegisterComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Complete Onboarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Creating account...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class RegisterComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.errorMsg = '';
    this.successMsg = '';
    this.registerForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^(?:\+91|0)?[6-9]\d{9}$/)]],
      role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      department: [''],
      securityCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.registerForm.invalid) return;
    this.loading = true;
    this.errorMsg = '';
    this.successMsg = '';
    this.authService.register(this.registerForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.loading = false;
        this.errorMsg = err?.error?.msg || err?.error?.message || 'Registration failed. Please check authorization code.';
      }
    });
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 62,
      vars: 6,
      consts: [[1, "auth-wrapper"], [1, "auth-card", "glass-card"], [1, "auth-header"], [1, "auth-logo"], [1, "gradient-text"], [3, "ngSubmit", "formGroup"], [1, "field-group"], ["type", "text", "formControlName", "name", "placeholder", "John Doe", 1, "input-field"], ["type", "email", "formControlName", "email", "placeholder", "you@company.com", 1, "input-field"], ["type", "text", "formControlName", "mobile", "placeholder", "9876543210", 1, "input-field"], [1, "grid-2"], ["formControlName", "role", 1, "input-field"], ["value", ""], ["value", "Worker"], ["value", "Client"], ["value", "Contractor"], ["value", "Site Engineer"], ["value", "Project Manager"], ["value", "Administrator"], ["type", "text", "formControlName", "department", "placeholder", "e.g. Planning Dept", 1, "input-field"], ["type", "password", "formControlName", "securityCode", "placeholder", "Enter registration code (e.g., 002)", 1, "input-field"], ["type", "password", "formControlName", "password", "placeholder", "Min 6 characters", 1, "input-field"], ["class", "error-msg", 4, "ngIf"], ["class", "success-msg", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", 3, "disabled"], [4, "ngIf"], [1, "auth-footer"], ["routerLink", "/login"], [1, "error-msg"], [1, "success-msg"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\uD83C\uDFD7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Create Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Join BuildTrack today");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Full Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6)(15, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6)(19, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Mobile Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10)(23, "div", 6)(24, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Clearance Role");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "select", 11)(27, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Select a role");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Worker");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Client");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Contractor");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Site Engineer");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Project Manager");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Administrator");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 6)(42, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Department");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 6)(46, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Authorization Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 6)(50, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, RegisterComponent_div_53_Template, 2, 1, "div", 22)(54, RegisterComponent_div_54_Template, 2, 1, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, RegisterComponent_span_56_Template, 2, 0, "span", 25)(57, RegisterComponent_span_57_Template, 2, 0, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Already have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Sign In");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMsg);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMsg);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.registerForm.invalid || ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: [".auth-wrapper[_ngcontent-%COMP%] {\n      min-height: 100vh;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: radial-gradient(ellipse at 60% 50%, rgba(108,99,255,0.15) 0%, transparent 60%),\n                  radial-gradient(ellipse at 10% 80%, rgba(0,191,165,0.1) 0%, transparent 50%),\n                  #0f1117;\n    }\n    .auth-card[_ngcontent-%COMP%] { width: 100%; max-width: 440px; padding: 40px; }\n    .auth-header[_ngcontent-%COMP%] { text-align: center; margin-bottom: 28px; }\n    .auth-logo[_ngcontent-%COMP%] { font-size: 48px; margin-bottom: 12px; }\n    .auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 32px; font-weight: 800; }\n    .auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #a0a3b1; margin-top: 6px; }\n    .field-group[_ngcontent-%COMP%] { margin-bottom: 16px; }\n    .field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display: block; font-size: 13px; font-weight: 600; color: #a0a3b1; margin-bottom: 8px; }\n    .input-field[_ngcontent-%COMP%] {\n      width: 100%; padding: 12px 14px;\n      background: rgba(255,255,255,0.05);\n      border: 1px solid rgba(255,255,255,0.1);\n      border-radius: 10px;\n      color: #fff; font-size: 14px;\n      font-family: 'Inter', sans-serif;\n      transition: all 0.2s; outline: none;\n    }\n    .input-field[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] { background: #1a1d2e; }\n    .input-field[_ngcontent-%COMP%]:focus { border-color: #6C63FF; box-shadow: 0 0 0 3px rgba(108,99,255,0.2); }\n    .input-field[_ngcontent-%COMP%]::placeholder { color: #6b6f82; }\n    .grid-2[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n    .error-msg[_ngcontent-%COMP%] { color: #FF6B6B; font-size: 13px; margin-bottom: 16px; padding: 10px 14px; background: rgba(255,107,107,0.1); border-radius: 8px; }\n    .success-msg[_ngcontent-%COMP%] { color: #00BFA5; font-size: 13px; margin-bottom: 16px; padding: 10px 14px; background: rgba(0,191,165,0.1); border-radius: 8px; }\n    .submit-btn[_ngcontent-%COMP%] { width: 100%; justify-content: center; padding: 14px; font-size: 15px; margin-top: 8px; }\n    .submit-btn[_ngcontent-%COMP%]:disabled { opacity: 0.6; cursor: not-allowed; }\n    .auth-footer[_ngcontent-%COMP%] { text-align: center; margin-top: 24px; color: #a0a3b1; font-size: 14px; }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxpQkFBaUI7TUFDakIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkI7O3lCQUVtQjtJQUNyQjtJQUNBLGFBQWEsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRTtJQUMzRCxlQUFlLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFO0lBQ3hELGFBQWEsZUFBZSxFQUFFLG1CQUFtQixFQUFFO0lBQ25ELGtCQUFrQixlQUFlLEVBQUUsZ0JBQWdCLEVBQUU7SUFDckQsaUJBQWlCLGNBQWMsRUFBRSxlQUFlLEVBQUU7SUFDbEQsZUFBZSxtQkFBbUIsRUFBRTtJQUNwQyxxQkFBcUIsY0FBYyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7SUFDNUc7TUFDRSxXQUFXLEVBQUUsa0JBQWtCO01BQy9CLGtDQUFrQztNQUNsQyx1Q0FBdUM7TUFDdkMsbUJBQW1CO01BQ25CLFdBQVcsRUFBRSxlQUFlO01BQzVCLGdDQUFnQztNQUNoQyxvQkFBb0IsRUFBRSxhQUFhO0lBQ3JDO0lBQ0Esc0JBQXNCLG1CQUFtQixFQUFFO0lBQzNDLHFCQUFxQixxQkFBcUIsRUFBRSwwQ0FBMEMsRUFBRTtJQUN4Riw0QkFBNEIsY0FBYyxFQUFFO0lBQzVDLFVBQVUsYUFBYSxFQUFFLDhCQUE4QixFQUFFLFNBQVMsRUFBRTtJQUNwRSxhQUFhLGNBQWMsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsaUNBQWlDLEVBQUUsa0JBQWtCLEVBQUU7SUFDOUksZUFBZSxjQUFjLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLCtCQUErQixFQUFFLGtCQUFrQixFQUFFO0lBQzlJLGNBQWMsV0FBVyxFQUFFLHVCQUF1QixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFO0lBQ3JHLHVCQUF1QixZQUFZLEVBQUUsbUJBQW1CLEVBQUU7SUFDMUQsZUFBZSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmF1dGgtd3JhcHBlciB7XG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCA2MCUgNTAlLCByZ2JhKDEwOCw5OSwyNTUsMC4xNSkgMCUsIHRyYW5zcGFyZW50IDYwJSksXG4gICAgICAgICAgICAgICAgICByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCAxMCUgODAlLCByZ2JhKDAsMTkxLDE2NSwwLjEpIDAlLCB0cmFuc3BhcmVudCA1MCUpLFxuICAgICAgICAgICAgICAgICAgIzBmMTExNztcbiAgICB9XG4gICAgLmF1dGgtY2FyZCB7IHdpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDQ0MHB4OyBwYWRkaW5nOiA0MHB4OyB9XG4gICAgLmF1dGgtaGVhZGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAyOHB4OyB9XG4gICAgLmF1dGgtbG9nbyB7IGZvbnQtc2l6ZTogNDhweDsgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxuICAgIC5hdXRoLWhlYWRlciBoMSB7IGZvbnQtc2l6ZTogMzJweDsgZm9udC13ZWlnaHQ6IDgwMDsgfVxuICAgIC5hdXRoLWhlYWRlciBwIHsgY29sb3I6ICNhMGEzYjE7IG1hcmdpbi10b3A6IDZweDsgfVxuICAgIC5maWVsZC1ncm91cCB7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cbiAgICAuZmllbGQtZ3JvdXAgbGFiZWwgeyBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI2EwYTNiMTsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG4gICAgLmlucHV0LWZpZWxkIHtcbiAgICAgIHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzOyBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAuaW5wdXQtZmllbGQgb3B0aW9uIHsgYmFja2dyb3VuZDogIzFhMWQyZTsgfVxuICAgIC5pbnB1dC1maWVsZDpmb2N1cyB7IGJvcmRlci1jb2xvcjogIzZDNjNGRjsgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTA4LDk5LDI1NSwwLjIpOyB9XG4gICAgLmlucHV0LWZpZWxkOjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjNmI2ZjgyOyB9XG4gICAgLmdyaWQtMiB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgZ2FwOiAxMnB4OyB9XG4gICAgLmVycm9yLW1zZyB7IGNvbG9yOiAjRkY2QjZCOyBmb250LXNpemU6IDEzcHg7IG1hcmdpbi1ib3R0b206IDE2cHg7IHBhZGRpbmc6IDEwcHggMTRweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMTA3LDEwNywwLjEpOyBib3JkZXItcmFkaXVzOiA4cHg7IH1cbiAgICAuc3VjY2Vzcy1tc2cgeyBjb2xvcjogIzAwQkZBNTsgZm9udC1zaXplOiAxM3B4OyBtYXJnaW4tYm90dG9tOiAxNnB4OyBwYWRkaW5nOiAxMHB4IDE0cHg7IGJhY2tncm91bmQ6IHJnYmEoMCwxOTEsMTY1LDAuMSk7IGJvcmRlci1yYWRpdXM6IDhweDsgfVxuICAgIC5zdWJtaXQtYnRuIHsgd2lkdGg6IDEwMCU7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBwYWRkaW5nOiAxNHB4OyBmb250LXNpemU6IDE1cHg7IG1hcmdpbi10b3A6IDhweDsgfVxuICAgIC5zdWJtaXQtYnRuOmRpc2FibGVkIHsgb3BhY2l0eTogMC42OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG4gICAgLmF1dGgtZm9vdGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiAyNHB4OyBjb2xvcjogI2EwYTNiMTsgZm9udC1zaXplOiAxNHB4OyB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4441:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ 6792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/project.service */ 1279);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/analytics.service */ 2210);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);









const _c0 = ["budgetSpendCanvas"];
const _c1 = ["statusDoughnutCanvas"];
const _c2 = ["trendLineCanvas"];
const _c3 = ["inventoryPieCanvas"];
function DashboardComponent_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", p_r2._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r2.name);
  }
}
function DashboardComponent_div_31_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stat_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("negative", stat_r3.isNegative);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", stat_r3.trend, " ");
  }
}
function DashboardComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 33)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DashboardComponent_div_31_span_10_Template, 2, 3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const stat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stat_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", stat_r3.iconBg)("color", stat_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stat_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", stat_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stat_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", stat_r3.trend);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stat_r3.sub);
  }
}
function DashboardComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Loading project data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_table_80_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "div", 42)(11, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r4.client || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r4.getBadgeClass(p_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", p_r4.progress || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", p_r4.progress || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9", ctx_r4.formatCurrency(p_r4.budget), "");
  }
}
function DashboardComponent_table_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Project Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DashboardComponent_table_80_tr_14_Template, 17, 8, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.projects.slice(0, 5));
  }
}
function DashboardComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No projects found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Create your first project \u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_4__.registerables);
class DashboardComponent {
  constructor(projectService, authService, analyticsService) {
    this.projectService = projectService;
    this.authService = authService;
    this.analyticsService = analyticsService;
    this.userName = '';
    this.loading = true;
    this.projects = [];
    this.selectedTimeRange = '30d';
    this.selectedProjectFilter = 'all';
    this.kpiCards = [{
      label: 'Total Portfolio Budget',
      value: '₹0',
      color: '#9c95ff',
      iconBg: 'rgba(156, 149, 255, 0.15)',
      icon: 'account_balance_wallet',
      trend: '+12%',
      isNegative: false,
      sub: 'vs last month'
    }, {
      label: 'Active Projects',
      value: '0',
      color: '#00BFA5',
      iconBg: 'rgba(0, 191, 165, 0.15)',
      icon: 'business',
      trend: '+2 new',
      isNegative: false,
      sub: 'on schedule'
    }, {
      label: 'Inventory Stock Value',
      value: '₹0',
      color: '#ffc107',
      iconBg: 'rgba(255, 193, 7, 0.15)',
      icon: 'inventory_2',
      trend: '-4%',
      isNegative: true,
      sub: 'materials value'
    }, {
      label: 'Worker Attendance',
      value: '0%',
      color: '#4fc3f7',
      iconBg: 'rgba(79, 195, 247, 0.15)',
      icon: 'people',
      trend: '+95%',
      isNegative: false,
      sub: 'today check-in'
    }, {
      label: 'Total PO Expenditure',
      value: '₹0',
      color: '#e040fb',
      iconBg: 'rgba(224, 64, 251, 0.15)',
      icon: 'shopping_bag',
      trend: '+8%',
      isNegative: false,
      sub: 'procurement spend'
    }, {
      label: 'Low Stock Alerts',
      value: '0 items',
      color: '#FF6B6B',
      iconBg: 'rgba(255, 107, 107, 0.15)',
      icon: 'warning',
      trend: 'Critical',
      isNegative: true,
      sub: 'reorder required'
    }];
  }
  ngOnInit() {
    const user = this.authService.currentUserValue;
    this.userName = user?.name || 'User';
    this.projectService.getProjects().subscribe({
      next: data => {
        this.projects = data.success ? data.data : Array.isArray(data) ? data : data.projects || [];
        this.loading = false;
        this.loadAnalytics();
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  ngAfterViewInit() {
    // Charts will initialize once analytics data is loaded
  }
  ngOnDestroy() {
    this.destroyCharts();
  }
  loadAnalytics() {
    this.analyticsService.getDashboardAnalytics().subscribe({
      next: res => {
        if (res.success) {
          this.analyticsData = res.data;
          this.updateKpis(res.data.summary);
          this.renderCharts(res.data.charts);
        }
      },
      error: () => {
        // Fallback computation from projects if analytics endpoint fails
        this.computeFallbackKpis();
      }
    });
  }
  onFilterChange() {
    // Dynamically adjust charts based on time range filter
    if (this.analyticsData) {
      let multiplier = 1;
      if (this.selectedTimeRange === '7d') multiplier = 0.3;
      if (this.selectedTimeRange === '6m') multiplier = 1.5;
      const summary = {
        ...this.analyticsData.summary
      };
      summary.poTotalSpent = Math.round(summary.poTotalSpent * multiplier);
      this.updateKpis(summary);
      this.renderCharts(this.analyticsData.charts);
    }
  }
  updateKpis(summary) {
    this.kpiCards[0].value = '₹' + this.formatCurrency(summary.totalBudget);
    this.kpiCards[1].value = String(summary.activeProjects);
    this.kpiCards[2].value = '₹' + this.formatCurrency(summary.inventoryTotalValue);
    this.kpiCards[3].value = summary.attendanceRate + '%';
    this.kpiCards[4].value = '₹' + this.formatCurrency(summary.poTotalSpent);
    this.kpiCards[5].value = summary.lowStockCount + ' items';
  }
  computeFallbackKpis() {
    const active = this.projects.filter(p => p.status === 'active' || p.status === 'in-progress').length;
    const totalBudget = this.projects.reduce((s, p) => s + (p.budget || 0), 0);
    this.kpiCards[0].value = '₹' + this.formatCurrency(totalBudget);
    this.kpiCards[1].value = String(active);
    this.kpiCards[2].value = '₹4.2L';
    this.kpiCards[3].value = '88%';
    this.kpiCards[4].value = '₹12.5L';
    this.kpiCards[5].value = '2 items';
  }
  renderCharts(chartsData) {
    this.destroyCharts();
    // 1. Budget vs Spend Bar Chart
    if (this.budgetSpendCanvas && this.budgetSpendCanvas.nativeElement) {
      const ctx = this.budgetSpendCanvas.nativeElement.getContext('2d');
      if (ctx) {
        const labels = (chartsData.projectSpend || []).map(p => p.name);
        const budgets = (chartsData.projectSpend || []).map(p => p.budget);
        const spent = (chartsData.projectSpend || []).map(p => p.spent);
        this.budgetSpendChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels.length ? labels : ['Tower A', 'Commercial Hub', 'Green Valley'],
            datasets: [{
              label: 'Allocated Budget',
              data: budgets.length ? budgets : [5000000, 12000000, 7500000],
              backgroundColor: 'rgba(108, 99, 255, 0.7)',
              borderRadius: 6
            }, {
              label: 'Actual Spend',
              data: spent.length ? spent : [3200000, 8400000, 4100000],
              backgroundColor: 'rgba(0, 191, 165, 0.7)',
              borderRadius: 6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: {
                  color: '#a0a3b1'
                }
              }
            },
            scales: {
              x: {
                ticks: {
                  color: '#a0a3b1'
                },
                grid: {
                  color: 'rgba(255,255,255,0.05)'
                }
              },
              y: {
                ticks: {
                  color: '#a0a3b1'
                },
                grid: {
                  color: 'rgba(255,255,255,0.05)'
                }
              }
            }
          }
        });
      }
    }
    // 2. Status Distribution Doughnut Chart
    if (this.statusDoughnutCanvas && this.statusDoughnutCanvas.nativeElement) {
      const ctx = this.statusDoughnutCanvas.nativeElement.getContext('2d');
      if (ctx) {
        const statuses = chartsData.projectStatuses || {
          active: 3,
          completed: 2,
          onHold: 1,
          cancelled: 0
        };
        this.statusDoughnutChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Active', 'Completed', 'On-Hold', 'Cancelled'],
            datasets: [{
              data: [statuses.active, statuses.completed, statuses.onHold, statuses.cancelled],
              backgroundColor: ['#6C63FF', '#00BFA5', '#ffc107', '#FF6B6B'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  color: '#a0a3b1'
                }
              }
            }
          }
        });
      }
    }
    // 3. Trend Line Chart
    if (this.trendLineCanvas && this.trendLineCanvas.nativeElement) {
      const ctx = this.trendLineCanvas.nativeElement.getContext('2d');
      if (ctx) {
        this.trendLineChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
              label: 'Monthly Expenditure (Lakhs)',
              data: [12, 19, 15, 25, 22, 30, 28],
              borderColor: '#9c95ff',
              backgroundColor: 'rgba(156, 149, 255, 0.1)',
              tension: 0.4,
              fill: true
            }, {
              label: 'Site Milestone Progress %',
              data: [10, 25, 40, 55, 70, 82, 90],
              borderColor: '#00BFA5',
              backgroundColor: 'rgba(0, 191, 165, 0.1)',
              tension: 0.4,
              fill: true
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: {
                  color: '#a0a3b1'
                }
              }
            },
            scales: {
              x: {
                ticks: {
                  color: '#a0a3b1'
                },
                grid: {
                  color: 'rgba(255,255,255,0.05)'
                }
              },
              y: {
                ticks: {
                  color: '#a0a3b1'
                },
                grid: {
                  color: 'rgba(255,255,255,0.05)'
                }
              }
            }
          }
        });
      }
    }
    // 4. Inventory Stock Pie Chart
    if (this.inventoryPieCanvas && this.inventoryPieCanvas.nativeElement) {
      const ctx = this.inventoryPieCanvas.nativeElement.getContext('2d');
      if (ctx) {
        const stock = chartsData.inventoryStockStatus || {
          adequate: 12,
          lowStock: 3
        };
        this.inventoryPieChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Adequate Safety Stock', 'Low Stock Reorder Alert'],
            datasets: [{
              data: [stock.adequate, stock.lowStock],
              backgroundColor: ['#00BFA5', '#FF6B6B'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  color: '#a0a3b1'
                }
              }
            }
          }
        });
      }
    }
  }
  destroyCharts() {
    if (this.budgetSpendChart) this.budgetSpendChart.destroy();
    if (this.statusDoughnutChart) this.statusDoughnutChart.destroy();
    if (this.trendLineChart) this.trendLineChart.destroy();
    if (this.inventoryPieChart) this.inventoryPieChart.destroy();
  }
  getBadgeClass(status) {
    const map = {
      'active': 'badge-info',
      'in-progress': 'badge-info',
      'completed': 'badge-success',
      'on-hold': 'badge-warning',
      'cancelled': 'badge-danger'
    };
    return map[status?.toLowerCase()] || 'badge-info';
  }
  formatCurrency(val) {
    if (!val) return '0';
    if (val >= 10000000) return (val / 10000000).toFixed(1) + 'Cr';
    if (val >= 100000) return (val / 100000).toFixed(1) + 'L';
    return val.toLocaleString();
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      viewQuery: function DashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.budgetSpendCanvas = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.statusDoughnutCanvas = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.trendLineCanvas = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inventoryPieCanvas = _t.first);
        }
      },
      decls: 82,
      vars: 8,
      consts: [["budgetSpendCanvas", ""], ["statusDoughnutCanvas", ""], ["trendLineCanvas", ""], ["inventoryPieCanvas", ""], [1, "dashboard-page"], [1, "page-header"], [1, "gradient-text"], [1, "filter-toolbar"], [1, "filter-item"], [2, "color", "#a0a3b1"], [3, "ngModelChange", "change", "ngModel"], ["value", "7d"], ["value", "30d"], ["value", "6m"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "charts-grid"], [1, "chart-card"], [1, "chart-header"], [1, "chart-body"], [1, "chart-body", "doughnut-body"], [1, "section-header"], ["routerLink", "/projects", 1, "view-all"], [1, "table-container"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [3, "value"], [1, "stat-card"], [1, "card-header"], [1, "stat-label"], [1, "icon-circle"], [1, "stat-value"], [1, "stat-sub"], ["class", "trend-badge", 3, "negative", 4, "ngIf"], [1, "trend-badge"], [1, "loading-state"], [4, "ngFor", "ngForOf"], [2, "color", "#fff"], [1, "badge", 3, "ngClass"], [1, "progress-wrap"], [1, "progress-bar"], [1, "progress-fill"], [1, "empty-state"], ["routerLink", "/projects"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div")(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Welcome back, ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " \uD83D\uDC4B");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Real-time analytics, KPI metrics, and operational performance graphs.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "calendar_today");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "select", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function DashboardComponent_Template_select_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedTimeRange, $event) || (ctx.selectedTimeRange = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function DashboardComponent_Template_select_change_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onFilterChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Last 7 Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Last 30 Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Last 6 Months");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "All Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 8)(24, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "filter_alt");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "select", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function DashboardComponent_Template_select_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedProjectFilter, $event) || (ctx.selectedProjectFilter = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function DashboardComponent_Template_select_change_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onFilterChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "All Active Sites");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, DashboardComponent_option_29_Template, 2, 2, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, DashboardComponent_div_31_Template, 13, 11, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 18)(33, "div", 19)(34, "div", 20)(35, "div")(36, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Capital Budget vs Spend Breakdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Comparison of allocated budget vs actual site expenditure per project");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "canvas", null, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 19)(44, "div", 20)(45, "div")(46, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Project Status Distribution");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Active, Completed, On-Hold, & Cancelled overview");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "canvas", null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 19)(54, "div", 20)(55, "div")(56, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Expenditure & Progress Trend");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Monthly capital deployment vs average project completion %");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "canvas", null, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 19)(64, "div", 20)(65, "div")(66, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Inventory Stock Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Adequate stock vs items below threshold");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "canvas", null, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 23)(74, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Active Construction Sites");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "View all projects \u2192");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, DashboardComponent_div_79_Template, 2, 0, "div", 26)(80, DashboardComponent_table_80_Template, 15, 1, "table", 27)(81, DashboardComponent_div_81_Template, 4, 0, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.userName);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedTimeRange);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedProjectFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.projects);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.kpiCards);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.projects.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.projects.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon],
      styles: [".dashboard-page[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 24px; }\n    .page-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      flex-wrap: wrap;\n      gap: 16px;\n    }\n    .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 26px; font-weight: 800; margin: 0 0 4px 0; }\n    .page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; color: #a0a3b1; font-size: 14px; }\n\n    .filter-toolbar[_ngcontent-%COMP%] { display: flex; gap: 12px; }\n    .filter-item[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      background: #1a1d2e;\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      border-radius: 12px;\n      padding: 6px 12px;\n    }\n    .filter-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      color: #fff;\n      font-size: 13px;\n      outline: none;\n      cursor: pointer;\n    }\n\n    \n\n    .stats-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n      gap: 18px;\n    }\n    .stat-card[_ngcontent-%COMP%] {\n      background: #1a1d2e;\n      border: 1px solid rgba(255, 255, 255, 0.08);\n      border-radius: 16px;\n      padding: 20px;\n      display: flex;\n      flex-direction: column;\n      gap: 12px;\n      box-shadow: 0 4px 20px rgba(0,0,0,0.2);\n    }\n    .card-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n    .stat-label[_ngcontent-%COMP%] { font-size: 13px; font-weight: 600; color: #a0a3b1; }\n    .icon-circle[_ngcontent-%COMP%] {\n      width: 40px;\n      height: 40px;\n      border-radius: 10px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .stat-value[_ngcontent-%COMP%] { font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }\n    .stat-sub[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #6b6f82; }\n    .trend-badge[_ngcontent-%COMP%] {\n      background: rgba(0, 191, 165, 0.15);\n      color: #00BFA5;\n      padding: 2px 6px;\n      border-radius: 6px;\n      font-size: 11px;\n      font-weight: 700;\n    }\n    .trend-badge.negative[_ngcontent-%COMP%] {\n      background: rgba(255, 107, 107, 0.15);\n      color: #FF6B6B;\n    }\n\n    \n\n    .charts-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n      gap: 20px;\n    }\n    @media (max-width: 992px) {\n      .charts-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n    }\n\n    .chart-card[_ngcontent-%COMP%] {\n      background: #1a1d2e;\n      border: 1px solid rgba(255, 255, 255, 0.08);\n      border-radius: 16px;\n      padding: 20px;\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n    }\n    .chart-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 16px; font-weight: 700; color: #fff; margin: 0 0 4px 0; }\n    .chart-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 12px; color: #a0a3b1; margin: 0; }\n    \n    .chart-body[_ngcontent-%COMP%] {\n      position: relative;\n      height: 280px;\n      width: 100%;\n    }\n    .doughnut-body[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    \n\n    .section-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      margin-top: 12px;\n    }\n    .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 18px; font-weight: 700; color: #fff; margin: 0; }\n    .view-all[_ngcontent-%COMP%] { color: #9c95ff; font-size: 13px; text-decoration: none; font-weight: 600; }\n    .table-container[_ngcontent-%COMP%] {\n      background: #1a1d2e;\n      border: 1px solid rgba(255, 255, 255, 0.08);\n      border-radius: 16px;\n      overflow: hidden;\n    }\n    table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; text-align: left; }\n    th[_ngcontent-%COMP%] {\n      background: rgba(0, 0, 0, 0.2);\n      color: #a0a3b1;\n      font-size: 12px;\n      font-weight: 700;\n      padding: 14px 16px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n    }\n    td[_ngcontent-%COMP%] {\n      padding: 14px 16px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n      color: #c4c7d4;\n      font-size: 13px;\n    }\n    .progress-wrap[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\n    .progress-bar[_ngcontent-%COMP%] { flex: 1; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; }\n    .progress-fill[_ngcontent-%COMP%] { height: 100%; background: linear-gradient(90deg, #6C63FF, #00BFA5); border-radius: 3px; }\n    .progress-wrap[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 12px; color: #a0a3b1; width: 35px; }\n\n    .badge[_ngcontent-%COMP%] { padding: 4px 8px; border-radius: 6px; font-size: 11px; font-weight: 700; text-transform: uppercase; }\n    .badge-info[_ngcontent-%COMP%] { background: rgba(108, 99, 255, 0.15); color: #9c95ff; }\n    .badge-success[_ngcontent-%COMP%] { background: rgba(0, 191, 165, 0.15); color: #00BFA5; }\n    .badge-warning[_ngcontent-%COMP%] { background: rgba(255, 193, 7, 0.15); color: #ffc107; }\n    .badge-danger[_ngcontent-%COMP%] { background: rgba(255, 107, 107, 0.15); color: #FF6B6B; }\n\n    .loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] { padding: 40px; text-align: center; color: #6b6f82; }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0ksa0JBQWtCLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxTQUFTLEVBQUU7SUFDcEU7TUFDRSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsU0FBUztJQUNYO0lBQ0Esa0JBQWtCLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRTtJQUN4RSxpQkFBaUIsU0FBUyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUU7O0lBRTdELGtCQUFrQixhQUFhLEVBQUUsU0FBUyxFQUFFO0lBQzVDO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixRQUFRO01BQ1IsbUJBQW1CO01BQ25CLDBDQUEwQztNQUMxQyxtQkFBbUI7TUFDbkIsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLFdBQVc7TUFDWCxlQUFlO01BQ2YsYUFBYTtNQUNiLGVBQWU7SUFDakI7O0lBRUEsbUJBQW1CO0lBQ25CO01BQ0UsYUFBYTtNQUNiLDJEQUEyRDtNQUMzRCxTQUFTO0lBQ1g7SUFDQTtNQUNFLG1CQUFtQjtNQUNuQiwyQ0FBMkM7TUFDM0MsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFNBQVM7TUFDVCxzQ0FBc0M7SUFDeEM7SUFDQTtNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsbUJBQW1CO0lBQ3JCO0lBQ0EsY0FBYyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFO0lBQ2pFO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7SUFDekI7SUFDQSxjQUFjLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsRUFBRTtJQUN6RSxZQUFZLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRTtJQUMzRjtNQUNFLG1DQUFtQztNQUNuQyxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxxQ0FBcUM7TUFDckMsY0FBYztJQUNoQjs7SUFFQSx3QkFBd0I7SUFDeEI7TUFDRSxhQUFhO01BQ2IscUNBQXFDO01BQ3JDLFNBQVM7SUFDWDtJQUNBO01BQ0UsZUFBZSwwQkFBMEIsRUFBRTtJQUM3Qzs7SUFFQTtNQUNFLG1CQUFtQjtNQUNuQiwyQ0FBMkM7TUFDM0MsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFNBQVM7SUFDWDtJQUNBLG1CQUFtQixlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFO0lBQ3RGLGtCQUFrQixlQUFlLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRTs7SUFFOUQ7TUFDRSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLFdBQVc7SUFDYjtJQUNBO01BQ0UsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7SUFDckI7O0lBRUEsa0JBQWtCO0lBQ2xCO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEI7TUFDOUIsZ0JBQWdCO0lBQ2xCO0lBQ0EscUJBQXFCLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFO0lBQ2hGLFlBQVksY0FBYyxFQUFFLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRTtJQUN0RjtNQUNFLG1CQUFtQjtNQUNuQiwyQ0FBMkM7TUFDM0MsbUJBQW1CO01BQ25CLGdCQUFnQjtJQUNsQjtJQUNBLFFBQVEsV0FBVyxFQUFFLHlCQUF5QixFQUFFLGdCQUFnQixFQUFFO0lBQ2xFO01BQ0UsOEJBQThCO01BQzlCLGNBQWM7TUFDZCxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixrREFBa0Q7SUFDcEQ7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixrREFBa0Q7TUFDbEQsY0FBYztNQUNkLGVBQWU7SUFDakI7SUFDQSxpQkFBaUIsYUFBYSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRTtJQUNoRSxnQkFBZ0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxrQ0FBa0MsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRTtJQUNoSCxpQkFBaUIsWUFBWSxFQUFFLG9EQUFvRCxFQUFFLGtCQUFrQixFQUFFO0lBQ3pHLHNCQUFzQixlQUFlLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRTs7SUFFcEUsU0FBUyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUseUJBQXlCLEVBQUU7SUFDN0csY0FBYyxvQ0FBb0MsRUFBRSxjQUFjLEVBQUU7SUFDcEUsaUJBQWlCLG1DQUFtQyxFQUFFLGNBQWMsRUFBRTtJQUN0RSxpQkFBaUIsbUNBQW1DLEVBQUUsY0FBYyxFQUFFO0lBQ3RFLGdCQUFnQixxQ0FBcUMsRUFBRSxjQUFjLEVBQUU7O0lBRXZFLCtCQUErQixhQUFhLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmRhc2hib2FyZC1wYWdlIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAyNHB4OyB9XG4gICAgLnBhZ2UtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cbiAgICAucGFnZS1oZWFkZXIgaDEgeyBmb250LXNpemU6IDI2cHg7IGZvbnQtd2VpZ2h0OiA4MDA7IG1hcmdpbjogMCAwIDRweCAwOyB9XG4gICAgLnBhZ2UtaGVhZGVyIHAgeyBtYXJnaW46IDA7IGNvbG9yOiAjYTBhM2IxOyBmb250LXNpemU6IDE0cHg7IH1cblxuICAgIC5maWx0ZXItdG9vbGJhciB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTJweDsgfVxuICAgIC5maWx0ZXItaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgYmFja2dyb3VuZDogIzFhMWQyZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICB9XG4gICAgLmZpbHRlci1pdGVtIHNlbGVjdCB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC8qIEtQSSBDYXJkcyBHcmlkICovXG4gICAgLnN0YXRzLWdyaWQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpO1xuICAgICAgZ2FwOiAxOHB4O1xuICAgIH1cbiAgICAuc3RhdC1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxYTFkMmU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgIH1cbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5zdGF0LWxhYmVsIHsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI2EwYTNiMTsgfVxuICAgIC5pY29uLWNpcmNsZSB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuc3RhdC12YWx1ZSB7IGZvbnQtc2l6ZTogMjZweDsgZm9udC13ZWlnaHQ6IDgwMDsgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDsgfVxuICAgIC5zdGF0LXN1YiB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNmI2ZjgyOyB9XG4gICAgLnRyZW5kLWJhZGdlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTkxLCAxNjUsIDAuMTUpO1xuICAgICAgY29sb3I6ICMwMEJGQTU7XG4gICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gICAgLnRyZW5kLWJhZGdlLm5lZ2F0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMDcsIDEwNywgMC4xNSk7XG4gICAgICBjb2xvcjogI0ZGNkI2QjtcbiAgICB9XG5cbiAgICAvKiBWaXN1YWxpemF0aW9ucyBHcmlkICovXG4gICAgLmNoYXJ0cy1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgZ2FwOiAyMHB4O1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgIC5jaGFydHMtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG4gICAgfVxuXG4gICAgLmNoYXJ0LWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogIzFhMWQyZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cbiAgICAuY2hhcnQtaGVhZGVyIGgzIHsgZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2ZmZjsgbWFyZ2luOiAwIDAgNHB4IDA7IH1cbiAgICAuY2hhcnQtaGVhZGVyIHAgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjYTBhM2IxOyBtYXJnaW46IDA7IH1cbiAgICBcbiAgICAuY2hhcnQtYm9keSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDI4MHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5kb3VnaG51dC1ib2R5IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLyogVGFibGUgU2VjdGlvbiAqL1xuICAgIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuICAgIC5zZWN0aW9uLWhlYWRlciBoMiB7IGZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmZmY7IG1hcmdpbjogMDsgfVxuICAgIC52aWV3LWFsbCB7IGNvbG9yOiAjOWM5NWZmOyBmb250LXNpemU6IDEzcHg7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAgIC50YWJsZS1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogIzFhMWQyZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgdGFibGUgeyB3aWR0aDogMTAwJTsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgdGV4dC1hbGlnbjogbGVmdDsgfVxuICAgIHRoIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIGNvbG9yOiAjYTBhM2IxO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAgIH1cbiAgICB0ZCB7XG4gICAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcbiAgICAgIGNvbG9yOiAjYzRjN2Q0O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgICAucHJvZ3Jlc3Mtd3JhcCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDsgfVxuICAgIC5wcm9ncmVzcy1iYXIgeyBmbGV4OiAxOyBoZWlnaHQ6IDZweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTsgYm9yZGVyLXJhZGl1czogM3B4OyBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLnByb2dyZXNzLWZpbGwgeyBoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzZDNjNGRiwgIzAwQkZBNSk7IGJvcmRlci1yYWRpdXM6IDNweDsgfVxuICAgIC5wcm9ncmVzcy13cmFwIHNwYW4geyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjYTBhM2IxOyB3aWR0aDogMzVweDsgfVxuXG4gICAgLmJhZGdlIHsgcGFkZGluZzogNHB4IDhweDsgYm9yZGVyLXJhZGl1czogNnB4OyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgICAuYmFkZ2UtaW5mbyB7IGJhY2tncm91bmQ6IHJnYmEoMTA4LCA5OSwgMjU1LCAwLjE1KTsgY29sb3I6ICM5Yzk1ZmY7IH1cbiAgICAuYmFkZ2Utc3VjY2VzcyB7IGJhY2tncm91bmQ6IHJnYmEoMCwgMTkxLCAxNjUsIDAuMTUpOyBjb2xvcjogIzAwQkZBNTsgfVxuICAgIC5iYWRnZS13YXJuaW5nIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE5MywgNywgMC4xNSk7IGNvbG9yOiAjZmZjMTA3OyB9XG4gICAgLmJhZGdlLWRhbmdlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMDcsIDEwNywgMC4xNSk7IGNvbG9yOiAjRkY2QjZCOyB9XG5cbiAgICAubG9hZGluZy1zdGF0ZSwgLmVtcHR5LXN0YXRlIHsgcGFkZGluZzogNDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogIzZiNmY4MjsgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5629:
/*!*************************************************************!*\
  !*** ./src/app/components/inventory/inventory.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryComponent: () => (/* binding */ InventoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/inventory.service */ 4934);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





function InventoryComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register New Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function InventoryComponent_div_31_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.saveMaterial());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 29)(5, "div", 30)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Material Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 30)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Category *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 32)(13, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Cement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Steel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Bricks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Sand");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Concrete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Electrical Materials");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Plumbing Materials");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 30)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Initial Quantity *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 30)(32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Unit of Measure *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 30)(36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Safety Threshold Limit *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 30)(40, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Cost Per Unit (\u20B9) *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 37)(44, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InventoryComponent_div_31_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.showAddForm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.materialForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.materialForm.invalid || ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.saving ? "Registering..." : "Register Item", " ");
  }
}
function InventoryComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading materials from warehouse database...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function InventoryComponent_table_53_tr_22_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56)(1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InventoryComponent_table_53_tr_22_div_25_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startAdjustment(item_r5, "receive"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDCE5 Receive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InventoryComponent_table_53_tr_22_div_25_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startAdjustment(item_r5, "consume"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\uD83D\uDCE4 Consume");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function InventoryComponent_table_53_tr_22_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59)(1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 61, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InventoryComponent_table_53_tr_22_div_26_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const adjustQty_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.submitAdjustment(item_r5, adjustQty_r7.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InventoryComponent_table_53_tr_22_div_26_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cancelAdjustment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.adjustmentType === "receive" ? "Recv Amt:" : "Cons Amt:");
  }
}
function InventoryComponent_table_53_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td")(5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td")(10, "div", 45)(11, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td")(18, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, InventoryComponent_table_53_tr_22_div_25_Template, 5, 0, "div", 52)(26, InventoryComponent_table_53_tr_22_div_26_Template, 9, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td", 54)(28, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InventoryComponent_table_53_tr_22_Template_button_click_28_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.deleteItem(item_r5._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r5.threshold, " ", item_r5.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r1.getStockFillPercentage(item_r5), "%")("background", ctx_r1.getProgressBarColor(item_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.getBadgeClass(item_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.getStatusText(item_r5), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", item_r5.costPerUnit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", (item_r5.quantity * item_r5.costPerUnit).toLocaleString("en-IN"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.adjustingItemId !== item_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.adjustingItemId === item_r5._id);
  }
}
function InventoryComponent_table_53_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No inventory materials match the filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function InventoryComponent_table_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Material Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Safety Threshold");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Current Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Unit Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Total Valuation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Stock Adjustments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, InventoryComponent_table_53_tr_22_Template, 30, 16, "tr", 42)(23, InventoryComponent_table_53_tr_23_Template, 3, 0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.filteredItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.filteredItems.length === 0);
  }
}
class InventoryComponent {
  constructor(inventoryService, fb) {
    this.inventoryService = inventoryService;
    this.fb = fb;
    this.inventoryItems = [];
    this.filteredItems = [];
    this.loading = true;
    this.saving = false;
    this.showAddForm = false;
    // Stock quick adjustment values
    this.adjustingItemId = '';
    this.adjustmentType = 'receive';
    this.searchVal = '';
    this.filterCategory = '';
    this.initForm();
  }
  ngOnInit() {
    this.fetchInventory();
  }
  initForm() {
    this.materialForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      category: ['Cement', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      quantity: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      unit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      threshold: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      costPerUnit: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]]
    });
  }
  fetchInventory() {
    this.loading = true;
    this.inventoryService.getInventory().subscribe({
      next: res => {
        this.inventoryItems = res.success ? res.data : Array.isArray(res) ? res : [];
        this.applyFilter();
        this.loading = false;
      },
      error: err => {
        console.error('Failed to load inventory', err);
        this.loading = false;
      }
    });
  }
  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    if (this.showAddForm) {
      this.materialForm.reset({
        category: 'Cement',
        quantity: 0,
        threshold: 0,
        costPerUnit: 0
      });
    }
  }
  saveMaterial() {
    if (this.materialForm.invalid) return;
    this.saving = true;
    this.inventoryService.addInventoryItem(this.materialForm.value).subscribe({
      next: () => {
        this.saving = false;
        this.showAddForm = false;
        this.materialForm.reset();
        this.fetchInventory();
      },
      error: err => {
        this.saving = false;
        alert(err?.error?.message || 'Failed to register material.');
      }
    });
  }
  // --- Search & Filter ---
  onSearchChange(event) {
    this.searchVal = event.target.value?.toLowerCase() || '';
    this.applyFilter();
  }
  onFilterChange(event) {
    this.filterCategory = event.target.value || '';
    this.applyFilter();
  }
  applyFilter() {
    this.filteredItems = this.inventoryItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(this.searchVal);
      const matchesCategory = !this.filterCategory || item.category === this.filterCategory;
      return matchesSearch && matchesCategory;
    });
  }
  // --- Quick Stock Adjustments ---
  startAdjustment(item, type) {
    this.adjustingItemId = item._id;
    this.adjustmentType = type;
  }
  cancelAdjustment() {
    this.adjustingItemId = '';
  }
  submitAdjustment(item, qtyStr) {
    const qty = parseInt(qtyStr, 10);
    if (isNaN(qty) || qty <= 0) {
      alert('Please enter a valid positive number.');
      return;
    }
    let newQty = item.quantity;
    if (this.adjustmentType === 'receive') {
      newQty += qty;
    } else {
      if (qty > item.quantity) {
        alert(`Cannot consume more than available stock (${item.quantity} ${item.unit}).`);
        return;
      }
      newQty -= qty;
    }
    this.inventoryService.updateInventoryItem(item._id, {
      quantity: newQty
    }).subscribe({
      next: () => {
        this.adjustingItemId = '';
        this.fetchInventory();
      },
      error: err => {
        alert(err?.error?.message || 'Failed to update stock quantity.');
      }
    });
  }
  deleteItem(id) {
    if (!confirm('Are you sure you want to delete this material catalog item?')) return;
    this.inventoryService.deleteInventoryItem(id).subscribe({
      next: () => {
        this.fetchInventory();
      },
      error: err => {
        alert(err?.error?.message || 'Failed to delete material.');
      }
    });
  }
  // --- Statistics & Visual Helpers ---
  getLowStockCount() {
    return this.inventoryItems.filter(item => item.quantity < item.threshold).length;
  }
  getInventoryValue() {
    return this.inventoryItems.reduce((sum, item) => sum + item.quantity * item.costPerUnit, 0);
  }
  getStockFillPercentage(item) {
    if (item.quantity === 0) return 0;
    if (item.quantity >= item.threshold * 2) return 100;
    const ratio = item.quantity / (item.threshold * 2) * 100;
    return Math.min(100, Math.max(5, ratio));
  }
  getProgressBarColor(item) {
    if (item.quantity === 0) return '#FF6B6B';
    if (item.quantity < item.threshold) return '#ffc107';
    return '#00BFA5';
  }
  getBadgeClass(item) {
    if (item.quantity === 0) return 'badge-danger';
    if (item.quantity < item.threshold) return 'badge-warning';
    return 'badge-success';
  }
  getStatusText(item) {
    if (item.quantity === 0) return 'Out of Stock';
    if (item.quantity < item.threshold) return 'Low Stock';
    return 'In Stock';
  }
  static {
    this.ɵfac = function InventoryComponent_Factory(t) {
      return new (t || InventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_inventory_service__WEBPACK_IMPORTED_MODULE_0__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: InventoryComponent,
      selectors: [["app-inventory"]],
      decls: 54,
      vars: 7,
      consts: [["adjustQty", ""], [1, "page-header"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between"], [1, "btn", "btn-primary", 3, "click"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-label"], [1, "stat-value", 2, "color", "#9c95ff"], [2, "font-size", "12px", "color", "#a0a3b1", "margin-top", "6px"], [1, "stat-value", 2, "color", "#FF6B6B"], [1, "stat-value", 2, "color", "#00BFA5"], ["class", "glass-card", "style", "padding:24px;margin-bottom:28px", 4, "ngIf"], [2, "display", "flex", "gap", "16px", "margin-bottom", "24px", "align-items", "center", "flex-wrap", "wrap"], ["type", "text", "placeholder", "\uD83D\uDD0D Search material...", 1, "input-field", 2, "max-width", "300px", "padding", "8px 12px", "flex", "1", 3, "input"], [1, "input-field", 2, "max-width", "200px", "padding", "8px 12px", 3, "change"], ["value", ""], ["value", "Cement"], ["value", "Steel"], ["value", "Bricks"], ["value", "Sand"], ["value", "Concrete"], ["value", "Electrical Materials"], ["value", "Plumbing Materials"], [1, "table-container"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], [1, "glass-card", 2, "padding", "24px", "margin-bottom", "28px"], [2, "margin-bottom", "18px", "font-size", "15px", "color", "#fff"], [3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "field-group"], ["formControlName", "name", "placeholder", "e.g. Portland Cement (Grade 53)", 1, "input-field"], ["formControlName", "category", 1, "input-field"], ["type", "number", "formControlName", "quantity", "placeholder", "e.g. 500", "min", "0", 1, "input-field"], ["formControlName", "unit", "placeholder", "e.g. Bags, Tons, Cu.m, Coils", 1, "input-field"], ["type", "number", "formControlName", "threshold", "placeholder", "e.g. 50", "min", "0", 1, "input-field"], ["type", "number", "formControlName", "costPerUnit", "placeholder", "e.g. 350", "min", "0", 1, "input-field"], [2, "margin-top", "16px", "display", "flex", "gap", "12px", "justify-content", "end"], ["type", "button", 1, "btn", "btn-outline", 2, "padding", "8px 16px", "font-size", "13px", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 2, "padding", "8px 16px", "font-size", "13px", 3, "disabled"], [1, "loading-state"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], [2, "color", "#fff"], [1, "badge", "badge-info", 2, "font-size", "10px"], [2, "display", "flex", "align-items", "center", "gap", "10px"], [2, "font-weight", "700", "color", "#fff", "font-family", "monospace", "font-size", "15px"], [2, "font-size", "12px", "color", "#a0a3b1"], [1, "progress-bar", 2, "height", "6px", "width", "130px", "background", "rgba(255,255,255,0.05)", "margin-top", "5px", "border-radius", "3px", "overflow", "hidden"], [1, "progress-fill"], [1, "badge", 3, "ngClass"], [2, "width", "280px"], ["style", "display:flex;gap:8px;justify-content:center", 4, "ngIf"], ["style", "display:flex;gap:6px;align-items:center;justify-content:center", 4, "ngIf"], [2, "width", "60px", "text-align", "center"], ["title", "Delete Material", 2, "background", "none", "border", "none", "color", "#FF6B6B", "cursor", "pointer", "font-size", "16px", 3, "click"], [2, "display", "flex", "gap", "8px", "justify-content", "center"], [1, "action-btn", "edit-btn", 2, "padding", "4px 8px", 3, "click"], [1, "action-btn", "delete-btn", 2, "padding", "4px 8px", 3, "click"], [2, "display", "flex", "gap", "6px", "align-items", "center", "justify-content", "center"], [2, "font-size", "11px", "color", "#a0a3b1"], ["type", "number", "min", "1", "placeholder", "Qty", 1, "input-field", 2, "padding", "4px 6px", "width", "75px", "height", "28px", "font-size", "12px", "background", "rgba(0,0,0,0.3)"], [1, "action-btn", "edit-btn", 2, "padding", "4px 8px", "height", "28px", 3, "click"], [1, "action-btn", 2, "padding", "4px 6px", "height", "28px", "border-color", "transparent", "color", "#FF6B6B", 3, "click"], ["colspan", "9", 2, "text-align", "center", "color", "#6b6f82", "padding", "32px"]],
      template: function InventoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div")(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Material & Inventory");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Track construction materials, safety thresholds, and log stock consumption.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InventoryComponent_Template_button_click_7_listener() {
            return ctx.toggleAddForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Material Types");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Active items in storage catalog");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5)(18, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Low Stock Alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Items below safe buffer limit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5)(25, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Total Inventory Value");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Cumulative catalog cost value");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, InventoryComponent_div_31_Template, 48, 3, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12)(33, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function InventoryComponent_Template_input_input_33_listener($event) {
            return ctx.onSearchChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "select", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function InventoryComponent_Template_select_change_34_listener($event) {
            return ctx.onFilterChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "All Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Cement");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Steel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Bricks");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Sand");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Concrete");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Electrical Materials");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Plumbing Materials");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, InventoryComponent_div_52_Template, 2, 0, "div", 24)(53, InventoryComponent_table_53_Template, 24, 2, "table", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.showAddForm ? "Close Form" : "+ Register Material", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.inventoryItems.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getLowStockCount());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", ctx.getInventoryValue().toLocaleString("en-IN"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAddForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: [".form-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n      gap: 16px;\n    }\n    .field-group[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n    }\n    .field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n      font-size: 12px;\n      font-weight: 600;\n      color: #a0a3b1;\n      margin-bottom: 6px;\n    }\n    .input-field[_ngcontent-%COMP%] {\n      padding: 10px 12px;\n      background: rgba(255, 255, 255, 0.05);\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      border-radius: 8px;\n      color: #fff;\n      font-size: 13px;\n      outline: none;\n      transition: all 0.2s;\n    }\n    .input-field[_ngcontent-%COMP%]:focus {\n      border-color: #6C63FF;\n    }\n    .input-field[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n      background: #1a1d2e;\n      color: #fff;\n    }\n    .action-btn[_ngcontent-%COMP%] {\n      background: rgba(255, 255, 255, 0.04);\n      border: 1px solid rgba(255, 255, 255, 0.08);\n      border-radius: 6px;\n      color: #fff;\n      font-size: 12px;\n      cursor: pointer;\n      transition: all 0.2s;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .action-btn[_ngcontent-%COMP%]:hover {\n      background: rgba(255, 255, 255, 0.12);\n    }\n    .edit-btn[_ngcontent-%COMP%]:hover {\n      border-color: #00BFA5;\n      color: #00BFA5;\n    }\n    .delete-btn[_ngcontent-%COMP%]:hover {\n      border-color: #FF6B6B;\n      color: #FF6B6B;\n    }\n    .progress-fill[_ngcontent-%COMP%] {\n      height: 100%;\n      transition: width 0.4s ease;\n    }\n    .loading-state[_ngcontent-%COMP%] {\n      padding: 40px;\n      text-align: center;\n      color: #6b6f82;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxhQUFhO01BQ2IsMkRBQTJEO01BQzNELFNBQVM7SUFDWDtJQUNBO01BQ0UsYUFBYTtNQUNiLHNCQUFzQjtJQUN4QjtJQUNBO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixjQUFjO01BQ2Qsa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIscUNBQXFDO01BQ3JDLDBDQUEwQztNQUMxQyxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGVBQWU7TUFDZixhQUFhO01BQ2Isb0JBQW9CO0lBQ3RCO0lBQ0E7TUFDRSxxQkFBcUI7SUFDdkI7SUFDQTtNQUNFLG1CQUFtQjtNQUNuQixXQUFXO0lBQ2I7SUFDQTtNQUNFLHFDQUFxQztNQUNyQywyQ0FBMkM7TUFDM0Msa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxlQUFlO01BQ2YsZUFBZTtNQUNmLG9CQUFvQjtNQUNwQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UscUNBQXFDO0lBQ3ZDO0lBQ0E7TUFDRSxxQkFBcUI7TUFDckIsY0FBYztJQUNoQjtJQUNBO01BQ0UscUJBQXFCO01BQ3JCLGNBQWM7SUFDaEI7SUFDQTtNQUNFLFlBQVk7TUFDWiwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsY0FBYztJQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5mb3JtLWdyaWQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cbiAgICAuZmllbGQtZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5maWVsZC1ncm91cCBsYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICNhMGEzYjE7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgfVxuICAgIC5pbnB1dC1maWVsZCB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgfVxuICAgIC5pbnB1dC1maWVsZDpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICM2QzYzRkY7XG4gICAgfVxuICAgIC5pbnB1dC1maWVsZCBvcHRpb24ge1xuICAgICAgYmFja2dyb3VuZDogIzFhMWQyZTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuYWN0aW9uLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuYWN0aW9uLWJ0bjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuICAgIH1cbiAgICAuZWRpdC1idG46aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDBCRkE1O1xuICAgICAgY29sb3I6ICMwMEJGQTU7XG4gICAgfVxuICAgIC5kZWxldGUtYnRuOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGNkI2QjtcbiAgICAgIGNvbG9yOiAjRkY2QjZCO1xuICAgIH1cbiAgICAucHJvZ3Jlc3MtZmlsbCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2U7XG4gICAgfVxuICAgIC5sb2FkaW5nLXN0YXRlIHtcbiAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzZiNmY4MjtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9585:
/*!*********************************************************************************!*\
  !*** ./src/app/components/notification-drawer/notification-drawer.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationDrawerComponent: () => (/* binding */ NotificationDrawerComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/notification.service */ 7473);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);






function NotificationDrawerComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.unreadCount > 99 ? "99+" : ctx_r0.unreadCount);
  }
}
function NotificationDrawerComponent_div_5_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.unreadCount, " new");
  }
}
function NotificationDrawerComponent_div_5_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationDrawerComponent_div_5_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.markAllRead());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Mark read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NotificationDrawerComponent_div_5_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "notifications_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No notifications found in this view.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NotificationDrawerComponent_div_5_div_25_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationDrawerComponent_div_5_div_25_button_19_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.markAsRead(item_r5._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Mark read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NotificationDrawerComponent_div_5_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationDrawerComponent_div_5_div_25_Template_div_click_0_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.onNotificationClick(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 27)(5, "div", 28)(6, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 32)(13, "div", 33)(14, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, NotificationDrawerComponent_div_5_div_25_button_19_Template, 2, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("unread", !item_r5.read)("urgent", item_r5.priority === "urgent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r5.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getIcon(item_r5.category, item_r5.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatTime(item_r5.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 13, item_r5.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r5.priority || "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r5.priority || "medium", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r5.read);
  }
}
function NotificationDrawerComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "notifications_active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NotificationDrawerComponent_div_5_span_7_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10)(9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationDrawerComponent_div_5_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleSound());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NotificationDrawerComponent_div_5_button_12_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationDrawerComponent_div_5_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleDrawer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 15)(17, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationDrawerComponent_div_5_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.activeTab = "all");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationDrawerComponent_div_5_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.activeTab = "unread");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationDrawerComponent_div_5_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.activeTab = "urgent");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, NotificationDrawerComponent_div_5_div_24_Template, 5, 0, "div", 18)(25, NotificationDrawerComponent_div_5_div_25_Template, 20, 15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationDrawerComponent_div_5_Template_div_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.openNotificationCenter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "View All in Notification Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.unreadCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r0.soundEnabled ? "Mute sound" : "Enable sound");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.soundEnabled ? "volume_up" : "volume_off", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.unreadCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.activeTab === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" All (", ctx_r0.notifications.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.activeTab === "unread");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Unread (", ctx_r0.unreadCount, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.activeTab === "urgent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Urgent (", ctx_r0.getUrgentCount(), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.filteredNotifications.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.filteredNotifications);
  }
}
class NotificationDrawerComponent {
  constructor(notificationService, router) {
    this.notificationService = notificationService;
    this.router = router;
    this.isOpen = false;
    this.activeTab = 'all';
    this.notifications = [];
    this.unreadCount = 0;
    this.soundEnabled = true;
    this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
  }
  ngOnInit() {
    this.soundEnabled = this.notificationService.soundEnabled;
    this.sub.add(this.notificationService.notifications$.subscribe(data => {
      this.notifications = data;
    }));
    this.sub.add(this.notificationService.unreadCount$.subscribe(count => {
      this.unreadCount = count;
    }));
    this.notificationService.fetchNotifications().subscribe();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  toggleDrawer() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.notificationService.fetchNotifications().subscribe();
    }
  }
  toggleSound() {
    this.soundEnabled = this.notificationService.toggleSound();
  }
  get filteredNotifications() {
    if (this.activeTab === 'unread') {
      return this.notifications.filter(n => !n.read);
    }
    if (this.activeTab === 'urgent') {
      return this.notifications.filter(n => n.priority === 'urgent' || n.priority === 'high' || n.type === 'danger');
    }
    return this.notifications;
  }
  getUrgentCount() {
    return this.notifications.filter(n => n.priority === 'urgent' || n.priority === 'high' || n.type === 'danger').length;
  }
  markAsRead(id) {
    this.notificationService.markAsRead(id).subscribe();
  }
  markAllRead() {
    this.notificationService.markAllAsRead().subscribe();
  }
  onNotificationClick(item) {
    if (!item.read) {
      this.markAsRead(item._id);
    }
    this.isOpen = false;
    if (item.link) {
      this.router.navigate([item.link]);
    }
  }
  openNotificationCenter() {
    this.isOpen = false;
    this.router.navigate(['/notifications']);
  }
  getIcon(category, type) {
    if (type === 'danger') return 'error_outline';
    if (category === 'inventory') return 'inventory_2';
    if (category === 'procurement') return 'shopping_cart';
    if (category === 'milestone') return 'flag';
    if (category === 'system') return 'settings_suggest';
    return 'info';
  }
  formatTime(dateStr) {
    if (!dateStr) return 'Just now';
    const date = new Date(dateStr);
    const diffMins = Math.floor((Date.now() - date.getTime()) / 60000);
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${Math.floor(diffHours / 24)}d ago`;
  }
  static {
    this.ɵfac = function NotificationDrawerComponent_Factory(t) {
      return new (t || NotificationDrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NotificationDrawerComponent,
      selectors: [["app-notification-drawer"]],
      decls: 6,
      vars: 4,
      consts: [[1, "notification-wrapper"], [1, "bell-btn", 3, "click"], ["class", "badge", 4, "ngIf"], ["class", "drawer-panel", 4, "ngIf"], [1, "badge"], [1, "drawer-panel"], [1, "drawer-header"], [1, "header-title"], [2, "color", "#9c95ff"], ["class", "unread-pill", 4, "ngIf"], [1, "header-actions"], [1, "icon-small-btn", 3, "click", "title"], [2, "font-size", "16px", "width", "16px", "height", "16px"], ["class", "text-btn", "title", "Mark all as read", 3, "click", 4, "ngIf"], [1, "icon-close-btn", 3, "click"], [1, "drawer-tabs"], [3, "click"], [1, "drawer-body"], ["class", "empty-state", 4, "ngIf"], ["class", "notification-item", 3, "unread", "urgent", "click", 4, "ngFor", "ngForOf"], [1, "drawer-footer", 3, "click"], [1, "unread-pill"], ["title", "Mark all as read", 1, "text-btn", 3, "click"], [1, "empty-state"], [2, "font-size", "40px", "width", "40px", "height", "40px", "color", "#4a4d64"], [1, "notification-item", 3, "click"], [1, "item-icon", 3, "ngClass"], [1, "item-content"], [1, "item-title-row"], [1, "item-title"], [1, "item-time"], [1, "item-msg"], [1, "item-footer"], [1, "tags-row"], [1, "category-tag"], [1, "prio-tag", 3, "ngClass"], ["class", "mark-btn", 3, "click", 4, "ngIf"], [1, "mark-btn", 3, "click"]],
      template: function NotificationDrawerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationDrawerComponent_Template_button_click_1_listener() {
            return ctx.toggleDrawer();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NotificationDrawerComponent_span_4_Template, 2, 1, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NotificationDrawerComponent_div_5_Template, 31, 15, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.isOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_4__.UpperCasePipe],
      styles: [".notification-wrapper[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block;\n    }\n    .bell-btn[_ngcontent-%COMP%] {\n      background: rgba(255, 255, 255, 0.05);\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      color: #a0a3b1;\n      width: 42px;\n      height: 42px;\n      border-radius: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      position: relative;\n      transition: all 0.2s ease;\n    }\n    .bell-btn[_ngcontent-%COMP%]:hover, .bell-btn.active[_ngcontent-%COMP%] {\n      background: rgba(108, 99, 255, 0.15);\n      color: #9c95ff;\n      border-color: rgba(108, 99, 255, 0.4);\n    }\n    .badge[_ngcontent-%COMP%] {\n      position: absolute;\n      top: -4px;\n      right: -4px;\n      background: #FF6B6B;\n      color: white;\n      font-size: 10px;\n      font-weight: 700;\n      padding: 2px 6px;\n      border-radius: 10px;\n      border: 2px solid #1a1d2e;\n      animation: _ngcontent-%COMP%_pulse 2s infinite;\n    }\n    @keyframes _ngcontent-%COMP%_pulse {\n      0% { transform: scale(1); }\n      50% { transform: scale(1.1); }\n      100% { transform: scale(1); }\n    }\n\n    .drawer-panel[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 52px;\n      right: 0;\n      width: 390px;\n      max-height: 540px;\n      background: #1a1d2e;\n      border: 1px solid rgba(255, 255, 255, 0.12);\n      border-radius: 16px;\n      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);\n      z-index: 9999;\n      display: flex;\n      flex-direction: column;\n      overflow: hidden;\n      animation: _ngcontent-%COMP%_slideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n    }\n    @keyframes _ngcontent-%COMP%_slideDown {\n      from { opacity: 0; transform: translateY(-10px); }\n      to { opacity: 1; transform: translateY(0); }\n    }\n\n    .drawer-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 16px 20px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n      background: rgba(255,255,255,0.02);\n    }\n    .header-title[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n    }\n    .header-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 16px;\n      font-weight: 700;\n      color: #fff;\n    }\n    .unread-pill[_ngcontent-%COMP%] {\n      background: rgba(108, 99, 255, 0.2);\n      color: #9c95ff;\n      font-size: 11px;\n      font-weight: 600;\n      padding: 2px 8px;\n      border-radius: 12px;\n    }\n    .header-actions[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n    .icon-small-btn[_ngcontent-%COMP%] {\n      background: rgba(255, 255, 255, 0.05);\n      border: none;\n      color: #a0a3b1;\n      border-radius: 6px;\n      padding: 4px;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n    }\n    .icon-small-btn[_ngcontent-%COMP%]:hover { color: #fff; background: rgba(255, 255, 255, 0.1); }\n\n    .text-btn[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      color: #9c95ff;\n      font-size: 12px;\n      cursor: pointer;\n      font-weight: 500;\n    }\n    .text-btn[_ngcontent-%COMP%]:hover { text-decoration: underline; }\n    .icon-close-btn[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      color: #a0a3b1;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      padding: 2px;\n    }\n    .icon-close-btn[_ngcontent-%COMP%]:hover { color: #fff; }\n\n    .drawer-tabs[_ngcontent-%COMP%] {\n      display: flex;\n      padding: 8px 16px;\n      gap: 8px;\n      background: rgba(0,0,0,0.15);\n      border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n    }\n    .drawer-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n      flex: 1;\n      background: none;\n      border: none;\n      color: #a0a3b1;\n      padding: 6px 10px;\n      font-size: 12px;\n      font-weight: 600;\n      border-radius: 8px;\n      cursor: pointer;\n      transition: all 0.2s;\n    }\n    .drawer-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n      background: rgba(108, 99, 255, 0.2);\n      color: #fff;\n    }\n\n    .drawer-body[_ngcontent-%COMP%] {\n      flex: 1;\n      overflow-y: auto;\n      padding: 12px;\n    }\n    .empty-state[_ngcontent-%COMP%] {\n      padding: 40px 20px;\n      text-align: center;\n      color: #6b6f82;\n    }\n    .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin-top: 8px; font-size: 13px; }\n\n    .notification-item[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 12px;\n      padding: 12px;\n      border-radius: 12px;\n      margin-bottom: 8px;\n      background: rgba(255, 255, 255, 0.02);\n      border: 1px solid rgba(255, 255, 255, 0.04);\n      cursor: pointer;\n      transition: all 0.2s ease;\n    }\n    .notification-item[_ngcontent-%COMP%]:hover {\n      background: rgba(255, 255, 255, 0.05);\n      transform: translateX(2px);\n    }\n    .notification-item.unread[_ngcontent-%COMP%] {\n      background: rgba(108, 99, 255, 0.08);\n      border-color: rgba(108, 99, 255, 0.2);\n    }\n    .notification-item.urgent[_ngcontent-%COMP%] {\n      border-color: rgba(255, 107, 107, 0.4);\n    }\n\n    .item-icon[_ngcontent-%COMP%] {\n      width: 36px;\n      height: 36px;\n      border-radius: 10px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n    }\n    .item-icon.info[_ngcontent-%COMP%] { background: rgba(0, 191, 165, 0.15); color: #00BFA5; }\n    .item-icon.warning[_ngcontent-%COMP%] { background: rgba(255, 193, 7, 0.15); color: #ffc107; }\n    .item-icon.danger[_ngcontent-%COMP%] { background: rgba(255, 107, 107, 0.15); color: #FF6B6B; }\n    .item-icon.success[_ngcontent-%COMP%] { background: rgba(108, 99, 255, 0.15); color: #9c95ff; }\n\n    .item-content[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n    .item-title-row[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: baseline;\n      margin-bottom: 4px;\n    }\n    .item-title[_ngcontent-%COMP%] {\n      font-size: 13px;\n      font-weight: 600;\n      color: #fff;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    .item-time[_ngcontent-%COMP%] {\n      font-size: 10px;\n      color: #6b6f82;\n    }\n    .item-msg[_ngcontent-%COMP%] {\n      font-size: 12px;\n      color: #a0a3b1;\n      margin: 0 0 8px 0;\n      line-height: 1.4;\n    }\n    .item-footer[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n    .tags-row[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 6px; }\n    .category-tag[_ngcontent-%COMP%] {\n      font-size: 9px;\n      font-weight: 700;\n      color: #6b6f82;\n      letter-spacing: 0.5px;\n    }\n    .prio-tag[_ngcontent-%COMP%] {\n      font-size: 8px;\n      font-weight: 700;\n      padding: 1px 4px;\n      border-radius: 4px;\n      text-transform: uppercase;\n    }\n    .prio-tag.urgent[_ngcontent-%COMP%] { background: rgba(255, 107, 107, 0.2); color: #FF6B6B; }\n    .prio-tag.high[_ngcontent-%COMP%] { background: rgba(255, 193, 7, 0.2); color: #ffc107; }\n    .prio-tag.medium[_ngcontent-%COMP%] { background: rgba(33, 150, 243, 0.2); color: #2196F3; }\n    .prio-tag.low[_ngcontent-%COMP%] { background: rgba(0, 191, 165, 0.2); color: #00BFA5; }\n\n    .mark-btn[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      color: #9c95ff;\n      font-size: 11px;\n      cursor: pointer;\n      padding: 0;\n    }\n    .mark-btn[_ngcontent-%COMP%]:hover { text-decoration: underline; }\n\n    .drawer-footer[_ngcontent-%COMP%] {\n      padding: 12px;\n      background: rgba(0, 0, 0, 0.2);\n      border-top: 1px solid rgba(255, 255, 255, 0.08);\n      text-align: center;\n      color: #9c95ff;\n      font-size: 12px;\n      font-weight: 600;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 6px;\n      transition: background 0.2s;\n    }\n    .drawer-footer[_ngcontent-%COMP%]:hover { background: rgba(108, 99, 255, 0.15); color: #fff; }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb24tZHJhd2VyL25vdGlmaWNhdGlvbi1kcmF3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGtCQUFrQjtNQUNsQixxQkFBcUI7SUFDdkI7SUFDQTtNQUNFLHFDQUFxQztNQUNyQywwQ0FBMEM7TUFDMUMsY0FBYztNQUNkLFdBQVc7TUFDWCxZQUFZO01BQ1osbUJBQW1CO01BQ25CLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIseUJBQXlCO0lBQzNCO0lBQ0E7TUFDRSxvQ0FBb0M7TUFDcEMsY0FBYztNQUNkLHFDQUFxQztJQUN2QztJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxXQUFXO01BQ1gsbUJBQW1CO01BQ25CLFlBQVk7TUFDWixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIseUJBQXlCO01BQ3pCLDRCQUE0QjtJQUM5QjtJQUNBO01BQ0UsS0FBSyxtQkFBbUIsRUFBRTtNQUMxQixNQUFNLHFCQUFxQixFQUFFO01BQzdCLE9BQU8sbUJBQW1CLEVBQUU7SUFDOUI7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFFBQVE7TUFDUixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQiwyQ0FBMkM7TUFDM0MsbUJBQW1CO01BQ25CLDBDQUEwQztNQUMxQyxhQUFhO01BQ2IsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixnQkFBZ0I7TUFDaEIsdURBQXVEO0lBQ3pEO0lBQ0E7TUFDRSxPQUFPLFVBQVUsRUFBRSw0QkFBNEIsRUFBRTtNQUNqRCxLQUFLLFVBQVUsRUFBRSx3QkFBd0IsRUFBRTtJQUM3Qzs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLGtCQUFrQjtNQUNsQixrREFBa0Q7TUFDbEQsa0NBQWtDO0lBQ3BDO0lBQ0E7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFNBQVM7SUFDWDtJQUNBO01BQ0UsU0FBUztNQUNULGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsV0FBVztJQUNiO0lBQ0E7TUFDRSxtQ0FBbUM7TUFDbkMsY0FBYztNQUNkLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixRQUFRO0lBQ1Y7SUFDQTtNQUNFLHFDQUFxQztNQUNyQyxZQUFZO01BQ1osY0FBYztNQUNkLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osZUFBZTtNQUNmLGFBQWE7TUFDYixtQkFBbUI7SUFDckI7SUFDQSx3QkFBd0IsV0FBVyxFQUFFLG9DQUFvQyxFQUFFOztJQUUzRTtNQUNFLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osY0FBYztNQUNkLGVBQWU7TUFDZixlQUFlO01BQ2YsZ0JBQWdCO0lBQ2xCO0lBQ0Esa0JBQWtCLDBCQUEwQixFQUFFO0lBQzlDO01BQ0UsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixjQUFjO01BQ2QsZUFBZTtNQUNmLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsWUFBWTtJQUNkO0lBQ0Esd0JBQXdCLFdBQVcsRUFBRTs7SUFFckM7TUFDRSxhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLFFBQVE7TUFDUiw0QkFBNEI7TUFDNUIsa0RBQWtEO0lBQ3BEO0lBQ0E7TUFDRSxPQUFPO01BQ1AsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixvQkFBb0I7SUFDdEI7SUFDQTtNQUNFLG1DQUFtQztNQUNuQyxXQUFXO0lBQ2I7O0lBRUE7TUFDRSxPQUFPO01BQ1AsZ0JBQWdCO01BQ2hCLGFBQWE7SUFDZjtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixjQUFjO0lBQ2hCO0lBQ0EsaUJBQWlCLGVBQWUsRUFBRSxlQUFlLEVBQUU7O0lBRW5EO01BQ0UsYUFBYTtNQUNiLFNBQVM7TUFDVCxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixxQ0FBcUM7TUFDckMsMkNBQTJDO01BQzNDLGVBQWU7TUFDZix5QkFBeUI7SUFDM0I7SUFDQTtNQUNFLHFDQUFxQztNQUNyQywwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLG9DQUFvQztNQUNwQyxxQ0FBcUM7SUFDdkM7SUFDQTtNQUNFLHNDQUFzQztJQUN4Qzs7SUFFQTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osbUJBQW1CO01BQ25CLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGNBQWM7SUFDaEI7SUFDQSxrQkFBa0IsbUNBQW1DLEVBQUUsY0FBYyxFQUFFO0lBQ3ZFLHFCQUFxQixtQ0FBbUMsRUFBRSxjQUFjLEVBQUU7SUFDMUUsb0JBQW9CLHFDQUFxQyxFQUFFLGNBQWMsRUFBRTtJQUMzRSxxQkFBcUIsb0NBQW9DLEVBQUUsY0FBYyxFQUFFOztJQUUzRSxnQkFBZ0IsT0FBTyxFQUFFLFlBQVksRUFBRTtJQUN2QztNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIscUJBQXFCO01BQ3JCLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGVBQWU7TUFDZixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxlQUFlO01BQ2YsY0FBYztNQUNkLGlCQUFpQjtNQUNqQixnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsbUJBQW1CO0lBQ3JCO0lBQ0EsWUFBWSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFO0lBQzFEO01BQ0UsY0FBYztNQUNkLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QscUJBQXFCO0lBQ3ZCO0lBQ0E7TUFDRSxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIseUJBQXlCO0lBQzNCO0lBQ0EsbUJBQW1CLG9DQUFvQyxFQUFFLGNBQWMsRUFBRTtJQUN6RSxpQkFBaUIsa0NBQWtDLEVBQUUsY0FBYyxFQUFFO0lBQ3JFLG1CQUFtQixtQ0FBbUMsRUFBRSxjQUFjLEVBQUU7SUFDeEUsZ0JBQWdCLGtDQUFrQyxFQUFFLGNBQWMsRUFBRTs7SUFFcEU7TUFDRSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGNBQWM7TUFDZCxlQUFlO01BQ2YsZUFBZTtNQUNmLFVBQVU7SUFDWjtJQUNBLGtCQUFrQiwwQkFBMEIsRUFBRTs7SUFFOUM7TUFDRSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLCtDQUErQztNQUMvQyxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLFFBQVE7TUFDUiwyQkFBMkI7SUFDN0I7SUFDQSx1QkFBdUIsb0NBQW9DLEVBQUUsV0FBVyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLm5vdGlmaWNhdGlvbi13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLmJlbGwtYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICBjb2xvcjogI2EwYTNiMTtcbiAgICAgIHdpZHRoOiA0MnB4O1xuICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIH1cbiAgICAuYmVsbC1idG46aG92ZXIsIC5iZWxsLWJ0bi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMDgsIDk5LCAyNTUsIDAuMTUpO1xuICAgICAgY29sb3I6ICM5Yzk1ZmY7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMTA4LCA5OSwgMjU1LCAwLjQpO1xuICAgIH1cbiAgICAuYmFkZ2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtNHB4O1xuICAgICAgcmlnaHQ6IC00cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkY2QjZCO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIzFhMWQyZTtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gICAgICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cbiAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gICAgfVxuXG4gICAgLmRyYXdlci1wYW5lbCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUycHg7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiAzOTBweDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0MHB4O1xuICAgICAgYmFja2dyb3VuZDogIzFhMWQyZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgYm94LXNoYWRvdzogMCAxNnB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIDAuMnMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgICAgIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpOyB9XG4gICAgICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIH1cblxuICAgIC5kcmF3ZXItaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDIpO1xuICAgIH1cbiAgICAuaGVhZGVyLXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgICAuaGVhZGVyLXRpdGxlIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLnVucmVhZC1waWxsIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTA4LCA5OSwgMjU1LCAwLjIpO1xuICAgICAgY29sb3I6ICM5Yzk1ZmY7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgcGFkZGluZzogMnB4IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgfVxuICAgIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cbiAgICAuaWNvbi1zbWFsbC1idG4ge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiAjYTBhM2IxO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pY29uLXNtYWxsLWJ0bjpob3ZlciB7IGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cblxuICAgIC50ZXh0LWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6ICM5Yzk1ZmY7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAudGV4dC1idG46aG92ZXIgeyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuICAgIC5pY29uLWNsb3NlLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6ICNhMGEzYjE7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDJweDtcbiAgICB9XG4gICAgLmljb24tY2xvc2UtYnRuOmhvdmVyIHsgY29sb3I6ICNmZmY7IH1cblxuICAgIC5kcmF3ZXItdGFicyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgICB9XG4gICAgLmRyYXdlci10YWJzIGJ1dHRvbiB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiAjYTBhM2IxO1xuICAgICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgfVxuICAgIC5kcmF3ZXItdGFicyBidXR0b24uYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTA4LCA5OSwgMjU1LCAwLjIpO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLmRyYXdlci1ib2R5IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICB9XG4gICAgLmVtcHR5LXN0YXRlIHtcbiAgICAgIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjNmI2ZjgyO1xuICAgIH1cbiAgICAuZW1wdHktc3RhdGUgcCB7IG1hcmdpbi10b3A6IDhweDsgZm9udC1zaXplOiAxM3B4OyB9XG5cbiAgICAubm90aWZpY2F0aW9uLWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIH1cbiAgICAubm90aWZpY2F0aW9uLWl0ZW06aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICAgIH1cbiAgICAubm90aWZpY2F0aW9uLWl0ZW0udW5yZWFkIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTA4LCA5OSwgMjU1LCAwLjA4KTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMDgsIDk5LCAyNTUsIDAuMik7XG4gICAgfVxuICAgIC5ub3RpZmljYXRpb24taXRlbS51cmdlbnQge1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMTA3LCAxMDcsIDAuNCk7XG4gICAgfVxuXG4gICAgLml0ZW0taWNvbiB7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgfVxuICAgIC5pdGVtLWljb24uaW5mbyB7IGJhY2tncm91bmQ6IHJnYmEoMCwgMTkxLCAxNjUsIDAuMTUpOyBjb2xvcjogIzAwQkZBNTsgfVxuICAgIC5pdGVtLWljb24ud2FybmluZyB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMTUpOyBjb2xvcjogI2ZmYzEwNzsgfVxuICAgIC5pdGVtLWljb24uZGFuZ2VyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDEwNywgMTA3LCAwLjE1KTsgY29sb3I6ICNGRjZCNkI7IH1cbiAgICAuaXRlbS1pY29uLnN1Y2Nlc3MgeyBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgOTksIDI1NSwgMC4xNSk7IGNvbG9yOiAjOWM5NWZmOyB9XG5cbiAgICAuaXRlbS1jb250ZW50IHsgZmxleDogMTsgbWluLXdpZHRoOiAwOyB9XG4gICAgLml0ZW0tdGl0bGUtcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuICAgIC5pdGVtLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuICAgIC5pdGVtLXRpbWUge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgY29sb3I6ICM2YjZmODI7XG4gICAgfVxuICAgIC5pdGVtLW1zZyB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogI2EwYTNiMTtcbiAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICB9XG4gICAgLml0ZW0tZm9vdGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAudGFncy1yb3cgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgfVxuICAgIC5jYXRlZ29yeS10YWcge1xuICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICM2YjZmODI7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgfVxuICAgIC5wcmlvLXRhZyB7XG4gICAgICBmb250LXNpemU6IDhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBwYWRkaW5nOiAxcHggNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gICAgLnByaW8tdGFnLnVyZ2VudCB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMDcsIDEwNywgMC4yKTsgY29sb3I6ICNGRjZCNkI7IH1cbiAgICAucHJpby10YWcuaGlnaCB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMik7IGNvbG9yOiAjZmZjMTA3OyB9XG4gICAgLnByaW8tdGFnLm1lZGl1bSB7IGJhY2tncm91bmQ6IHJnYmEoMzMsIDE1MCwgMjQzLCAwLjIpOyBjb2xvcjogIzIxOTZGMzsgfVxuICAgIC5wcmlvLXRhZy5sb3cgeyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE5MSwgMTY1LCAwLjIpOyBjb2xvcjogIzAwQkZBNTsgfVxuXG4gICAgLm1hcmstYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogIzljOTVmZjtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5tYXJrLWJ0bjpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG5cbiAgICAuZHJhd2VyLWZvb3RlciB7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzljOTVmZjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgfVxuICAgIC5kcmF3ZXItZm9vdGVyOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgxMDgsIDk5LCAyNTUsIDAuMTUpOyBjb2xvcjogI2ZmZjsgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6621:
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsComponent: () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/notification.service */ 7473);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);








function NotificationsComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.openBroadcastModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "campaign");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Send Broadcast");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function NotificationsComponent_button_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_button_75_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r1.searchQuery = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.applyFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function NotificationsComponent_div_133_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "notifications_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "No Notifications Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "No alerts match your current search criteria or category filter. Try clearing filters or running a system audit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_div_133_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.resetFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Reset All Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function NotificationsComponent_div_134_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 71);
  }
}
function NotificationsComponent_div_134_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 72)(1, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r6.recipientRole, " ");
  }
}
function NotificationsComponent_div_134_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 74)(1, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 1, item_r6.channel), " ");
  }
}
function NotificationsComponent_div_134_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_div_134_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.navigateTo(item_r6.link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function NotificationsComponent_div_134_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_div_134_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.markRead(item_r6._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Mark Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function NotificationsComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_div_134_Template_div_click_0_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onCardClick(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 53)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 54)(6, "div", 55)(7, "div", 56)(8, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NotificationsComponent_div_134_span_10_Template, 1, 0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 61)(16, "div", 62)(17, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, NotificationsComponent_div_134_span_23_Template, 4, 1, "span", 65)(24, NotificationsComponent_div_134_span_24_Template, 5, 3, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_div_134_Template_div_click_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, NotificationsComponent_div_134_button_26_Template, 5, 0, "button", 68)(27, NotificationsComponent_div_134_button_27_Template, 5, 0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_div_134_Template_button_click_28_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.deleteItem(item_r6._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("unread-card", !item_r6.read)("urgent-card", item_r6.priority === "urgent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", item_r6.priority || "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", item_r6.type || "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getCategoryIcon(item_r6.category, item_r6.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r6.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.formatTime(item_r6.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r6.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 18, item_r6.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "tag-priority-" + (item_r6.priority || "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 20, item_r6.priority || "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r6.recipientRole && item_r6.recipientRole !== "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r6.channel && item_r6.channel !== "in_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r6.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r6.read);
  }
}
function NotificationsComponent_div_135_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_div_135_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closeBroadcastModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_div_135_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 79)(3, "div", 80)(4, "mat-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "campaign");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Broadcast Site Announcement");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_div_135_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closeBroadcastModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function NotificationsComponent_div_135_Template_form_ngSubmit_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.sendBroadcast());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 84)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Notification Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function NotificationsComponent_div_135_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.broadcastForm.title, $event) || (ctx_r1.broadcastForm.title = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 84)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Message Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "textarea", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function NotificationsComponent_div_135_Template_textarea_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.broadcastForm.message, $event) || (ctx_r1.broadcastForm.message = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 88)(25, "div", 84)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function NotificationsComponent_div_135_Template_select_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.broadcastForm.category, $event) || (ctx_r1.broadcastForm.category = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "General Announcement");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Inventory & Materials");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Procurement & PO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Milestones & Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "System & Equipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 84)(40, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Priority Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function NotificationsComponent_div_135_Template_select_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.broadcastForm.priority, $event) || (ctx_r1.broadcastForm.priority = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Urgent (Critical Red Alert)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "High Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Medium Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Low Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 88)(52, "div", 84)(53, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Target Audience Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function NotificationsComponent_div_135_Template_select_ngModelChange_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.broadcastForm.recipientRole, $event) || (ctx_r1.broadcastForm.recipientRole = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "All Roles & Staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Administrators");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Project Managers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Site Engineers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Contractors");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Clients");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 84)(69, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Dispatch Channels");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "select", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function NotificationsComponent_div_135_Template_select_ngModelChange_71_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.broadcastForm.channel, $event) || (ctx_r1.broadcastForm.channel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "In-App Notification Drawer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Email Notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "SMS Text Alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "All Channels (In-App + Email + SMS)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 84)(81, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Target Page Link (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function NotificationsComponent_div_135_Template_input_ngModelChange_83_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.broadcastForm.link, $event) || (ctx_r1.broadcastForm.link = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 102)(85, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_div_135_Template_button_click_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closeBroadcastModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "button", 104)(88, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.broadcastForm.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.broadcastForm.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.broadcastForm.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.broadcastForm.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.broadcastForm.recipientRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.broadcastForm.channel);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.broadcastForm.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.isSubmitting ? "Dispatching..." : "Dispatch Broadcast");
  }
}
class NotificationsComponent {
  constructor(notificationService, authService, router) {
    this.notificationService = notificationService;
    this.authService = authService;
    this.router = router;
    this.notifications = [];
    this.stats = null;
    this.searchQuery = '';
    this.activeCategory = 'all';
    this.activePriority = 'all';
    this.activeReadFilter = 'all';
    this.isAuditing = false;
    this.soundEnabled = true;
    this.showBroadcastModal = false;
    this.isSubmitting = false;
    this.broadcastForm = {
      title: '',
      message: '',
      type: 'info',
      priority: 'medium',
      category: 'general',
      recipientRole: 'all',
      channel: 'in_app',
      link: ''
    };
    this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  }
  ngOnInit() {
    this.soundEnabled = this.notificationService.soundEnabled;
    this.sub.add(this.notificationService.notifications$.subscribe(data => {
      this.notifications = data;
    }));
    this.sub.add(this.notificationService.stats$.subscribe(s => {
      this.stats = s;
    }));
    this.loadData();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  loadData() {
    this.applyFilters();
  }
  applyFilters() {
    const filters = {};
    if (this.searchQuery) filters.search = this.searchQuery;
    if (this.activeCategory !== 'all') filters.category = this.activeCategory;
    if (this.activePriority !== 'all') filters.priority = this.activePriority;
    if (this.activeReadFilter !== 'all') filters.read = this.activeReadFilter;
    this.notificationService.fetchNotifications(filters).subscribe();
  }
  resetFilters() {
    this.searchQuery = '';
    this.activeCategory = 'all';
    this.activePriority = 'all';
    this.activeReadFilter = 'all';
    this.applyFilters();
  }
  filterByCategory(cat) {
    this.activeCategory = this.activeCategory === cat ? 'all' : cat;
    this.applyFilters();
  }
  filterByPriority(prio) {
    this.activePriority = this.activePriority === prio ? 'all' : prio;
    this.applyFilters();
  }
  filterByStatus(readStatus) {
    this.activeReadFilter = this.activeReadFilter === readStatus ? 'all' : readStatus;
    this.applyFilters();
  }
  get filteredNotifications() {
    return this.notifications;
  }
  getUnreadCount() {
    return this.notifications.filter(n => !n.read).length;
  }
  getUrgentCount() {
    return this.notifications.filter(n => n.priority === 'urgent').length;
  }
  getCategoryCount(cat) {
    return this.notifications.filter(n => n.category === cat).length;
  }
  toggleSound() {
    this.soundEnabled = this.notificationService.toggleSound();
  }
  runSystemCheck() {
    this.isAuditing = true;
    this.notificationService.triggerSystemCheck().subscribe({
      next: () => {
        this.isAuditing = false;
      },
      error: () => {
        this.isAuditing = false;
      }
    });
  }
  markRead(id) {
    this.notificationService.markAsRead(id).subscribe();
  }
  markAllRead() {
    this.notificationService.markAllAsRead().subscribe();
  }
  clearReadLogs() {
    this.notificationService.clearAllRead().subscribe();
  }
  deleteItem(id) {
    this.notificationService.deleteNotification(id).subscribe();
  }
  onCardClick(item) {
    if (!item.read) {
      this.markRead(item._id);
    }
    if (item.link) {
      this.navigateTo(item.link);
    }
  }
  navigateTo(link) {
    if (link) {
      this.router.navigate([link]);
    }
  }
  isManagerOrAdmin() {
    const role = (this.authService.currentUserValue?.role || '').toLowerCase();
    return role === 'administrator' || role === 'project manager' || role === 'admin';
  }
  openBroadcastModal() {
    this.showBroadcastModal = true;
  }
  closeBroadcastModal() {
    this.showBroadcastModal = false;
  }
  sendBroadcast() {
    if (!this.broadcastForm.title || !this.broadcastForm.message) return;
    this.isSubmitting = true;
    this.notificationService.broadcastNotification(this.broadcastForm).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.closeBroadcastModal();
        this.broadcastForm = {
          title: '',
          message: '',
          type: 'info',
          priority: 'medium',
          category: 'general',
          recipientRole: 'all',
          channel: 'in_app',
          link: ''
        };
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }
  getCategoryIcon(category, type) {
    if (type === 'danger') return 'error_outline';
    if (category === 'inventory') return 'inventory_2';
    if (category === 'procurement') return 'shopping_cart';
    if (category === 'milestone') return 'flag';
    if (category === 'system') return 'settings_suggest';
    return 'campaign';
  }
  formatTime(dateStr) {
    if (!dateStr) return 'Just now';
    const date = new Date(dateStr);
    const diffMins = Math.floor((Date.now() - date.getTime()) / 60000);
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${Math.floor(diffHours / 24)}d ago`;
  }
  static {
    this.ɵfac = function NotificationsComponent_Factory(t) {
      return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NotificationsComponent,
      selectors: [["app-notifications"]],
      decls: 136,
      vars: 33,
      consts: [[1, "notifications-page"], [1, "header-card"], [1, "header-main"], [1, "header-title-box"], [1, "bell-glow-icon"], [1, "header-actions"], [1, "btn", "btn-secondary", 3, "click", "title"], [1, "btn", "btn-warning", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "kpi-grid"], [1, "kpi-card", 3, "click"], [1, "kpi-icon", "icon-total"], [1, "kpi-data"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-icon", "icon-unread"], [1, "kpi-icon", "icon-urgent"], [1, "kpi-icon", "icon-inventory"], [1, "kpi-icon", "icon-procurement"], [1, "toolbar-card"], [1, "search-box"], ["type", "text", "placeholder", "Search notifications by title, message or keyword...", 3, "ngModelChange", "ngModel"], ["class", "clear-search-btn", 3, "click", 4, "ngIf"], [1, "filter-controls"], [1, "select-wrapper"], [1, "select-label"], [3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "inventory"], ["value", "procurement"], ["value", "milestone"], ["value", "system"], ["value", "general"], ["value", "urgent"], ["value", "high"], ["value", "medium"], ["value", "low"], ["value", "false"], ["value", "true"], ["title", "Mark all items read", 1, "btn", "btn-outline", 3, "click"], ["title", "Remove read items", 1, "btn", "btn-danger-outline", 3, "click"], [1, "list-container"], [1, "list-header"], [1, "sub-text"], ["class", "empty-card", 4, "ngIf"], ["class", "notification-card", 3, "unread-card", "urgent-card", "click", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "clear-search-btn", 3, "click"], [1, "empty-card"], [1, "empty-icon-circle"], [1, "notification-card", 3, "click"], [1, "card-left-badge", 3, "ngClass"], [1, "card-icon", 3, "ngClass"], [1, "card-content"], [1, "card-top-row"], [1, "title-wrap"], [1, "card-title"], ["class", "unread-dot", "title", "Unread notification", 4, "ngIf"], [1, "card-time"], [1, "card-message"], [1, "card-footer"], [1, "meta-tags"], [1, "tag", "tag-category"], [1, "tag", 3, "ngClass"], ["class", "tag tag-role", 4, "ngIf"], ["class", "tag tag-channel", 4, "ngIf"], [1, "card-actions", 3, "click"], ["class", "action-btn link-btn", 3, "click", 4, "ngIf"], ["class", "action-btn read-btn", 3, "click", 4, "ngIf"], [1, "action-btn", "delete-btn", 3, "click"], ["title", "Unread notification", 1, "unread-dot"], [1, "tag", "tag-role"], [2, "font-size", "12px", "width", "12px", "height", "12px"], [1, "tag", "tag-channel"], [1, "action-btn", "link-btn", 3, "click"], [1, "action-btn", "read-btn", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-header"], [1, "modal-title-row"], [2, "color", "#9c95ff"], [1, "close-icon-btn", 3, "click"], [1, "modal-form", 3, "ngSubmit"], [1, "form-group"], [1, "required"], ["type", "text", "name", "title", "placeholder", "e.g. Weather Alert: Heavy Rainfall Expected on Site B", "required", "", 3, "ngModelChange", "ngModel"], ["rows", "3", "name", "message", "placeholder", "Provide clear instructions for site teams...", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["name", "category", 3, "ngModelChange", "ngModel"], ["name", "priority", 3, "ngModelChange", "ngModel"], ["name", "recipientRole", 3, "ngModelChange", "ngModel"], ["value", "administrator"], ["value", "project manager"], ["value", "site engineer"], ["value", "contractor"], ["value", "client"], ["name", "channel", 3, "ngModelChange", "ngModel"], ["value", "in_app"], ["value", "email"], ["value", "sms"], ["type", "text", "name", "link", "placeholder", "e.g. /projects or /inventory", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
      template: function NotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "notifications_active");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "BuildTrack Notification Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Monitor real-time system alerts, inventory warnings, purchase approvals, and site announcements.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5)(13, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_13_listener() {
            return ctx.toggleSound();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_18_listener() {
            return ctx.runSystemCheck();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "published_with_changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, NotificationsComponent_button_23_Template, 5, 0, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 9)(25, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_Template_div_click_25_listener() {
            return ctx.filterByStatus("all");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 11)(27, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 12)(30, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Total Logs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_Template_div_click_34_listener() {
            return ctx.filterByStatus("unread");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 15)(36, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "mark_email_unread");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 12)(39, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Unread Items");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_Template_div_click_43_listener() {
            return ctx.filterByPriority("urgent");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 16)(45, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "error");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 12)(48, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Urgent Severity");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_Template_div_click_52_listener() {
            return ctx.filterByCategory("inventory");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 17)(54, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "inventory_2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 12)(57, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Inventory Alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_Template_div_click_61_listener() {
            return ctx.filterByCategory("procurement");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 18)(63, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "shopping_cart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 12)(66, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Procurement POs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 19)(71, "div", 20)(72, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function NotificationsComponent_Template_input_ngModelChange_74_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotificationsComponent_Template_input_ngModelChange_74_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, NotificationsComponent_button_75_Template, 3, 0, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 23)(77, "div", 24)(78, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Category:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function NotificationsComponent_Template_select_ngModelChange_80_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.activeCategory, $event) || (ctx.activeCategory = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function NotificationsComponent_Template_select_change_80_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "All Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Inventory");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Procurement");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Milestones");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "option", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "System");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "General");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 24)(94, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Priority:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function NotificationsComponent_Template_select_ngModelChange_96_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.activePriority, $event) || (ctx.activePriority = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function NotificationsComponent_Template_select_change_96_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "All Priorities");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Urgent");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "High");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Medium");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Low");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 24)(108, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Status:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function NotificationsComponent_Template_select_ngModelChange_110_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.activeReadFilter, $event) || (ctx.activeReadFilter = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function NotificationsComponent_Template_select_change_110_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "All Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Unread Only");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "option", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Read Only");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_117_listener() {
            return ctx.markAllRead();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "done_all");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Mark All Read");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_122_listener() {
            return ctx.clearReadLogs();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "cleaning_services");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "Clear Read Logs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 41)(128, "div", 42)(129, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "Updates sort chronologically by timestamp.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](133, NotificationsComponent_div_133_Template, 10, 0, "div", 44)(134, NotificationsComponent_div_134_Template, 31, 22, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](135, NotificationsComponent_div_135_Template, 92, 9, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.soundEnabled ? "Mute Audio Alerts" : "Enable Audio Alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.soundEnabled ? "volume_up" : "volume_off");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.soundEnabled ? "Sound On" : "Muted");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isAuditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("spinning", ctx.isAuditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isAuditing ? "Scanning..." : "Run System Audit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isManagerOrAdmin());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active-kpi", ctx.activeReadFilter === "all" && ctx.activeCategory === "all");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.stats == null ? null : ctx.stats.total) || ctx.notifications.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active-kpi", ctx.activeReadFilter === "false");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.stats == null ? null : ctx.stats.unread) || ctx.getUnreadCount());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active-kpi", ctx.activePriority === "urgent");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.stats == null ? null : ctx.stats.urgent) || ctx.getUrgentCount());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active-kpi", ctx.activeCategory === "inventory");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.stats == null ? null : ctx.stats.inventory) || ctx.getCategoryCount("inventory"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active-kpi", ctx.activeCategory === "procurement");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.stats == null ? null : ctx.stats.procurement) || ctx.getCategoryCount("procurement"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.activeCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.activePriority);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.activeReadFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" Showing ", ctx.filteredNotifications.length, " Notification", ctx.filteredNotifications.length === 1 ? "" : "s", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredNotifications.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredNotifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showBroadcastModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe],
      styles: [".notifications-page[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 24px;\n      color: #ffffff;\n    }\n\n    \n\n    .header-card[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, rgba(26, 29, 46, 0.95), rgba(15, 17, 23, 0.95));\n      border: 1px solid rgba(255, 255, 255, 0.08);\n      border-radius: 20px;\n      padding: 28px;\n      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n    }\n    .header-main[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 24px;\n      gap: 20px;\n      flex-wrap: wrap;\n    }\n    .header-title-box[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 16px;\n    }\n    .bell-glow-icon[_ngcontent-%COMP%] {\n      width: 56px;\n      height: 56px;\n      border-radius: 16px;\n      background: linear-gradient(135deg, rgba(108, 99, 255, 0.25), rgba(0, 191, 165, 0.25));\n      border: 1px solid rgba(108, 99, 255, 0.4);\n      color: #9c95ff;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      box-shadow: 0 0 20px rgba(108, 99, 255, 0.2);\n    }\n    .bell-glow-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { font-size: 30px; width: 30px; height: 30px; }\n    .header-title-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 24px; font-weight: 700; margin: 0 0 4px 0; color: #fff; }\n    .header-title-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 13px; color: #a0a3b1; margin: 0; }\n    .header-actions[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }\n\n    \n\n    .kpi-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n      gap: 16px;\n    }\n    .kpi-card[_ngcontent-%COMP%] {\n      background: rgba(255, 255, 255, 0.03);\n      border: 1px solid rgba(255, 255, 255, 0.06);\n      border-radius: 14px;\n      padding: 16px;\n      display: flex;\n      align-items: center;\n      gap: 14px;\n      cursor: pointer;\n      transition: all 0.25s ease;\n    }\n    .kpi-card[_ngcontent-%COMP%]:hover {\n      background: rgba(255, 255, 255, 0.06);\n      transform: translateY(-2px);\n    }\n    .kpi-card.active-kpi[_ngcontent-%COMP%] {\n      border-color: #9c95ff;\n      background: rgba(108, 99, 255, 0.15);\n      box-shadow: 0 0 15px rgba(108, 99, 255, 0.2);\n    }\n    .kpi-icon[_ngcontent-%COMP%] {\n      width: 42px;\n      height: 42px;\n      border-radius: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n    }\n    .icon-total[_ngcontent-%COMP%] { background: rgba(108, 99, 255, 0.15); color: #9c95ff; }\n    .icon-unread[_ngcontent-%COMP%] { background: rgba(0, 191, 165, 0.15); color: #00BFA5; }\n    .icon-urgent[_ngcontent-%COMP%] { background: rgba(255, 107, 107, 0.15); color: #FF6B6B; }\n    .icon-inventory[_ngcontent-%COMP%] { background: rgba(255, 193, 7, 0.15); color: #ffc107; }\n    .icon-procurement[_ngcontent-%COMP%] { background: rgba(33, 150, 243, 0.15); color: #2196F3; }\n\n    .kpi-data[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n    .kpi-value[_ngcontent-%COMP%] { font-size: 20px; font-weight: 700; color: #fff; }\n    .kpi-label[_ngcontent-%COMP%] { font-size: 11px; color: #a0a3b1; font-weight: 500; }\n\n    \n\n    .toolbar-card[_ngcontent-%COMP%] {\n      background: #1a1d2e;\n      border: 1px solid rgba(255, 255, 255, 0.08);\n      border-radius: 16px;\n      padding: 18px 22px;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 16px;\n      flex-wrap: wrap;\n    }\n    .search-box[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      background: rgba(255, 255, 255, 0.05);\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      border-radius: 12px;\n      padding: 8px 14px;\n      flex: 1;\n      min-width: 260px;\n    }\n    .search-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { color: #6b6f82; }\n    .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      color: #fff;\n      font-size: 13px;\n      outline: none;\n      width: 100%;\n    }\n    .clear-search-btn[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      color: #a0a3b1;\n      cursor: pointer;\n      display: flex;\n    }\n\n    .filter-controls[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      flex-wrap: wrap;\n    }\n    .select-wrapper[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      background: rgba(255, 255, 255, 0.04);\n      border: 1px solid rgba(255, 255, 255, 0.08);\n      padding: 6px 12px;\n      border-radius: 10px;\n    }\n    .select-label[_ngcontent-%COMP%] { font-size: 12px; color: #a0a3b1; font-weight: 500; }\n    .select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      color: #fff;\n      font-size: 12px;\n      outline: none;\n      cursor: pointer;\n    }\n    .select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] { background: #1a1d2e; color: #fff; }\n\n    \n\n    .btn[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      padding: 8px 16px;\n      border-radius: 10px;\n      font-size: 13px;\n      font-weight: 600;\n      cursor: pointer;\n      border: none;\n      transition: all 0.2s ease;\n    }\n    .btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { font-size: 18px; width: 18px; height: 18px; }\n    .btn-primary[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, #6C63FF, #5a52e0);\n      color: #fff;\n      box-shadow: 0 4px 12px rgba(108, 99, 255, 0.3);\n    }\n    .btn-primary[_ngcontent-%COMP%]:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(108, 99, 255, 0.45); }\n    .btn-secondary[_ngcontent-%COMP%] { background: rgba(255, 255, 255, 0.08); color: #fff; }\n    .btn-secondary[_ngcontent-%COMP%]:hover { background: rgba(255, 255, 255, 0.14); }\n    .btn-warning[_ngcontent-%COMP%] { background: rgba(255, 193, 7, 0.15); color: #ffc107; border: 1px solid rgba(255, 193, 7, 0.3); }\n    .btn-warning[_ngcontent-%COMP%]:hover { background: rgba(255, 193, 7, 0.25); }\n    .btn-outline[_ngcontent-%COMP%] { background: none; border: 1px solid rgba(255, 255, 255, 0.12); color: #a0a3b1; }\n    .btn-outline[_ngcontent-%COMP%]:hover { background: rgba(255, 255, 255, 0.06); color: #fff; }\n    .btn-danger-outline[_ngcontent-%COMP%] { background: none; border: 1px solid rgba(255, 107, 107, 0.3); color: #FF6B6B; }\n    .btn-danger-outline[_ngcontent-%COMP%]:hover { background: rgba(255, 107, 107, 0.12); }\n\n    .spinning[_ngcontent-%COMP%] { animation: _ngcontent-%COMP%_spin 1s linear infinite; }\n    @keyframes _ngcontent-%COMP%_spin { 100% { transform: rotate(360deg); } }\n\n    \n\n    .list-container[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 12px;\n    }\n    .list-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: baseline;\n      padding: 0 4px;\n    }\n    .list-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 16px; font-weight: 700; margin: 0; color: #fff; }\n    .sub-text[_ngcontent-%COMP%] { font-size: 12px; color: #6b6f82; }\n\n    \n\n    .empty-card[_ngcontent-%COMP%] {\n      background: #1a1d2e;\n      border: 1px dashed rgba(255, 255, 255, 0.12);\n      border-radius: 16px;\n      padding: 48px 24px;\n      text-align: center;\n      color: #a0a3b1;\n    }\n    .empty-icon-circle[_ngcontent-%COMP%] {\n      width: 64px;\n      height: 64px;\n      border-radius: 50%;\n      background: rgba(255, 255, 255, 0.04);\n      color: #6b6f82;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 0 auto 16px auto;\n    }\n    .empty-icon-circle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { font-size: 32px; width: 32px; height: 32px; }\n    .empty-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { font-size: 18px; color: #fff; margin: 0 0 8px 0; }\n    .empty-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 13px; margin: 0 0 20px 0; max-width: 420px; margin-left: auto; margin-right: auto; }\n\n    \n\n    .notification-card[_ngcontent-%COMP%] {\n      position: relative;\n      background: #1a1d2e;\n      border: 1px solid rgba(255, 255, 255, 0.06);\n      border-radius: 16px;\n      padding: 18px 20px 18px 24px;\n      display: flex;\n      gap: 16px;\n      align-items: flex-start;\n      cursor: pointer;\n      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n      overflow: hidden;\n    }\n    .notification-card[_ngcontent-%COMP%]:hover {\n      background: rgba(255, 255, 255, 0.03);\n      transform: translateX(4px);\n      border-color: rgba(255, 255, 255, 0.15);\n    }\n    .notification-card.unread-card[_ngcontent-%COMP%] {\n      background: linear-gradient(90deg, rgba(108, 99, 255, 0.08), rgba(26, 29, 46, 0.95));\n      border-color: rgba(108, 99, 255, 0.25);\n    }\n    .notification-card.urgent-card[_ngcontent-%COMP%] {\n      border-color: rgba(255, 107, 107, 0.4);\n      box-shadow: 0 0 15px rgba(255, 107, 107, 0.08);\n    }\n\n    .card-left-badge[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 4px;\n      height: 100%;\n    }\n    .card-left-badge.urgent[_ngcontent-%COMP%] { background: #FF6B6B; box-shadow: 0 0 10px #FF6B6B; }\n    .card-left-badge.high[_ngcontent-%COMP%] { background: #ffc107; }\n    .card-left-badge.medium[_ngcontent-%COMP%] { background: #2196F3; }\n    .card-left-badge.low[_ngcontent-%COMP%] { background: #00BFA5; }\n\n    .card-icon[_ngcontent-%COMP%] {\n      width: 44px;\n      height: 44px;\n      border-radius: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n      margin-top: 2px;\n    }\n    .card-icon.info[_ngcontent-%COMP%] { background: rgba(0, 191, 165, 0.15); color: #00BFA5; }\n    .card-icon.warning[_ngcontent-%COMP%] { background: rgba(255, 193, 7, 0.15); color: #ffc107; }\n    .card-icon.danger[_ngcontent-%COMP%] { background: rgba(255, 107, 107, 0.15); color: #FF6B6B; }\n    .card-icon.success[_ngcontent-%COMP%] { background: rgba(108, 99, 255, 0.15); color: #9c95ff; }\n\n    .card-content[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n    .card-top-row[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 6px;\n    }\n    .title-wrap[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n    .card-title[_ngcontent-%COMP%] {\n      font-size: 15px;\n      font-weight: 700;\n      color: #fff;\n    }\n    .unread-dot[_ngcontent-%COMP%] {\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: #9c95ff;\n      box-shadow: 0 0 8px #9c95ff;\n    }\n    .card-time[_ngcontent-%COMP%] { font-size: 11px; color: #6b6f82; font-weight: 500; }\n    .card-message[_ngcontent-%COMP%] {\n      font-size: 13px;\n      color: #a0a3b1;\n      margin: 0 0 12px 0;\n      line-height: 1.5;\n    }\n\n    .card-footer[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      flex-wrap: wrap;\n      gap: 10px;\n    }\n    .meta-tags[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 6px;\n      flex-wrap: wrap;\n    }\n    .tag[_ngcontent-%COMP%] {\n      font-size: 10px;\n      font-weight: 700;\n      padding: 3px 8px;\n      border-radius: 6px;\n      letter-spacing: 0.5px;\n    }\n    .tag-category[_ngcontent-%COMP%] { background: rgba(255, 255, 255, 0.06); color: #a0a3b1; }\n    .tag-priority-urgent[_ngcontent-%COMP%] { background: rgba(255, 107, 107, 0.2); color: #FF6B6B; border: 1px solid rgba(255, 107, 107, 0.3); }\n    .tag-priority-high[_ngcontent-%COMP%] { background: rgba(255, 193, 7, 0.2); color: #ffc107; }\n    .tag-priority-medium[_ngcontent-%COMP%] { background: rgba(33, 150, 243, 0.2); color: #2196F3; }\n    .tag-priority-low[_ngcontent-%COMP%] { background: rgba(0, 191, 165, 0.2); color: #00BFA5; }\n    .tag-role[_ngcontent-%COMP%] { background: rgba(108, 99, 255, 0.15); color: #9c95ff; display: inline-flex; align-items: center; gap: 4px; }\n    .tag-channel[_ngcontent-%COMP%] { background: rgba(255, 255, 255, 0.08); color: #fff; display: inline-flex; align-items: center; gap: 4px; }\n\n    .card-actions[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; }\n    .action-btn[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      font-size: 12px;\n      font-weight: 600;\n      cursor: pointer;\n      display: inline-flex;\n      align-items: center;\n      gap: 4px;\n      padding: 4px 8px;\n      border-radius: 6px;\n      transition: all 0.2s;\n    }\n    .action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { font-size: 15px; width: 15px; height: 15px; }\n    .link-btn[_ngcontent-%COMP%] { color: #9c95ff; background: rgba(108, 99, 255, 0.1); }\n    .link-btn[_ngcontent-%COMP%]:hover { background: rgba(108, 99, 255, 0.2); }\n    .read-btn[_ngcontent-%COMP%] { color: #00BFA5; background: rgba(0, 191, 165, 0.1); }\n    .read-btn[_ngcontent-%COMP%]:hover { background: rgba(0, 191, 165, 0.2); }\n    .delete-btn[_ngcontent-%COMP%] { color: #6b6f82; padding: 4px; }\n    .delete-btn[_ngcontent-%COMP%]:hover { color: #FF6B6B; background: rgba(255, 107, 107, 0.1); }\n\n    \n\n    .modal-overlay[_ngcontent-%COMP%] {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100vw;\n      height: 100vh;\n      background: rgba(0, 0, 0, 0.75);\n      backdrop-filter: blur(8px);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      z-index: 99999;\n      animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n    }\n    .modal-card[_ngcontent-%COMP%] {\n      background: #1a1d2e;\n      border: 1px solid rgba(255, 255, 255, 0.12);\n      border-radius: 20px;\n      width: 90%;\n      max-width: 580px;\n      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);\n      overflow: hidden;\n      animation: _ngcontent-%COMP%_slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n    }\n    .modal-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 20px 24px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n      background: rgba(255, 255, 255, 0.02);\n    }\n    .modal-title-row[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\n    .modal-title-row[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0; font-size: 18px; font-weight: 700; color: #fff; }\n    .close-icon-btn[_ngcontent-%COMP%] { background: none; border: none; color: #a0a3b1; cursor: pointer; }\n    .close-icon-btn[_ngcontent-%COMP%]:hover { color: #fff; }\n\n    .modal-form[_ngcontent-%COMP%] { padding: 24px; display: flex; flex-direction: column; gap: 16px; }\n    .form-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; }\n    .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 12px; font-weight: 600; color: #a0a3b1; }\n    .required[_ngcontent-%COMP%] { color: #FF6B6B; }\n    .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n      background: rgba(255, 255, 255, 0.04);\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      border-radius: 10px;\n      padding: 10px 14px;\n      color: #fff;\n      font-size: 13px;\n      outline: none;\n      font-family: inherit;\n    }\n    .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n      border-color: #9c95ff;\n      background: rgba(108, 99, 255, 0.05);\n    }\n    .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] { background: #1a1d2e; color: #fff; }\n    .form-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }\n\n    .modal-actions[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: flex-end;\n      gap: 12px;\n      margin-top: 8px;\n    }\n\n    @keyframes _ngcontent-%COMP%_fadeIn { from { opacity: 0; } to { opacity: 1; } }\n    @keyframes _ngcontent-%COMP%_slideUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsU0FBUztNQUNULGNBQWM7SUFDaEI7O0lBRUEsb0JBQW9CO0lBQ3BCO01BQ0UsbUZBQW1GO01BQ25GLDJDQUEyQztNQUMzQyxtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLDBDQUEwQztJQUM1QztJQUNBO01BQ0UsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLFNBQVM7TUFDVCxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFNBQVM7SUFDWDtJQUNBO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsc0ZBQXNGO01BQ3RGLHlDQUF5QztNQUN6QyxjQUFjO01BQ2QsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsNENBQTRDO0lBQzlDO0lBQ0EsMkJBQTJCLGVBQWUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFO0lBQ3ZFLHVCQUF1QixlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFO0lBQzFGLHNCQUFzQixlQUFlLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRTtJQUNsRSxrQkFBa0IsYUFBYSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUU7O0lBRWxGLGFBQWE7SUFDYjtNQUNFLGFBQWE7TUFDYiwyREFBMkQ7TUFDM0QsU0FBUztJQUNYO0lBQ0E7TUFDRSxxQ0FBcUM7TUFDckMsMkNBQTJDO01BQzNDLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixTQUFTO01BQ1QsZUFBZTtNQUNmLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0UscUNBQXFDO01BQ3JDLDJCQUEyQjtJQUM3QjtJQUNBO01BQ0UscUJBQXFCO01BQ3JCLG9DQUFvQztNQUNwQyw0Q0FBNEM7SUFDOUM7SUFDQTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osbUJBQW1CO01BQ25CLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGNBQWM7SUFDaEI7SUFDQSxjQUFjLG9DQUFvQyxFQUFFLGNBQWMsRUFBRTtJQUNwRSxlQUFlLG1DQUFtQyxFQUFFLGNBQWMsRUFBRTtJQUNwRSxlQUFlLHFDQUFxQyxFQUFFLGNBQWMsRUFBRTtJQUN0RSxrQkFBa0IsbUNBQW1DLEVBQUUsY0FBYyxFQUFFO0lBQ3ZFLG9CQUFvQixvQ0FBb0MsRUFBRSxjQUFjLEVBQUU7O0lBRTFFLFlBQVksYUFBYSxFQUFFLHNCQUFzQixFQUFFO0lBQ25ELGFBQWEsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRTtJQUM3RCxhQUFhLGVBQWUsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUU7O0lBRWhFLGlCQUFpQjtJQUNqQjtNQUNFLG1CQUFtQjtNQUNuQiwyQ0FBMkM7TUFDM0MsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5QixTQUFTO01BQ1QsZUFBZTtJQUNqQjtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixTQUFTO01BQ1QscUNBQXFDO01BQ3JDLDBDQUEwQztNQUMxQyxtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLE9BQU87TUFDUCxnQkFBZ0I7SUFDbEI7SUFDQSx1QkFBdUIsY0FBYyxFQUFFO0lBQ3ZDO01BQ0UsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixXQUFXO01BQ1gsZUFBZTtNQUNmLGFBQWE7TUFDYixXQUFXO0lBQ2I7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osY0FBYztNQUNkLGVBQWU7TUFDZixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFNBQVM7TUFDVCxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFFBQVE7TUFDUixxQ0FBcUM7TUFDckMsMkNBQTJDO01BQzNDLGlCQUFpQjtNQUNqQixtQkFBbUI7SUFDckI7SUFDQSxnQkFBZ0IsZUFBZSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRTtJQUNuRTtNQUNFLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osV0FBVztNQUNYLGVBQWU7TUFDZixhQUFhO01BQ2IsZUFBZTtJQUNqQjtJQUNBLGdDQUFnQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUU7O0lBRWxFLGtCQUFrQjtJQUNsQjtNQUNFLG9CQUFvQjtNQUNwQixtQkFBbUI7TUFDbkIsUUFBUTtNQUNSLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsWUFBWTtNQUNaLHlCQUF5QjtJQUMzQjtJQUNBLGdCQUFnQixlQUFlLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRTtJQUM1RDtNQUNFLHFEQUFxRDtNQUNyRCxXQUFXO01BQ1gsOENBQThDO0lBQ2hEO0lBQ0EscUJBQXFCLDJCQUEyQixFQUFFLCtDQUErQyxFQUFFO0lBQ25HLGlCQUFpQixxQ0FBcUMsRUFBRSxXQUFXLEVBQUU7SUFDckUsdUJBQXVCLHFDQUFxQyxFQUFFO0lBQzlELGVBQWUsbUNBQW1DLEVBQUUsY0FBYyxFQUFFLHdDQUF3QyxFQUFFO0lBQzlHLHFCQUFxQixtQ0FBbUMsRUFBRTtJQUMxRCxlQUFlLGdCQUFnQixFQUFFLDJDQUEyQyxFQUFFLGNBQWMsRUFBRTtJQUM5RixxQkFBcUIscUNBQXFDLEVBQUUsV0FBVyxFQUFFO0lBQ3pFLHNCQUFzQixnQkFBZ0IsRUFBRSwwQ0FBMEMsRUFBRSxjQUFjLEVBQUU7SUFDcEcsNEJBQTRCLHFDQUFxQyxFQUFFOztJQUVuRSxZQUFZLGtDQUFrQyxFQUFFO0lBQ2hELGtCQUFrQixPQUFPLHlCQUF5QixFQUFFLEVBQUU7O0lBRXRELGlDQUFpQztJQUNqQztNQUNFLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsU0FBUztJQUNYO0lBQ0E7TUFDRSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLHFCQUFxQjtNQUNyQixjQUFjO0lBQ2hCO0lBQ0Esa0JBQWtCLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFO0lBQzdFLFlBQVksZUFBZSxFQUFFLGNBQWMsRUFBRTs7SUFFN0MsZUFBZTtJQUNmO01BQ0UsbUJBQW1CO01BQ25CLDRDQUE0QztNQUM1QyxtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixxQ0FBcUM7TUFDckMsY0FBYztNQUNkLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLHdCQUF3QjtJQUMxQjtJQUNBLDhCQUE4QixlQUFlLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRTtJQUMxRSxpQkFBaUIsZUFBZSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRTtJQUNsRSxnQkFBZ0IsZUFBZSxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFOztJQUU5RyxzQkFBc0I7SUFDdEI7TUFDRSxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLDJDQUEyQztNQUMzQyxtQkFBbUI7TUFDbkIsNEJBQTRCO01BQzVCLGFBQWE7TUFDYixTQUFTO01BQ1QsdUJBQXVCO01BQ3ZCLGVBQWU7TUFDZixrREFBa0Q7TUFDbEQsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxxQ0FBcUM7TUFDckMsMEJBQTBCO01BQzFCLHVDQUF1QztJQUN6QztJQUNBO01BQ0Usb0ZBQW9GO01BQ3BGLHNDQUFzQztJQUN4QztJQUNBO01BQ0Usc0NBQXNDO01BQ3RDLDhDQUE4QztJQUNoRDs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sT0FBTztNQUNQLFVBQVU7TUFDVixZQUFZO0lBQ2Q7SUFDQSwwQkFBMEIsbUJBQW1CLEVBQUUsNEJBQTRCLEVBQUU7SUFDN0Usd0JBQXdCLG1CQUFtQixFQUFFO0lBQzdDLDBCQUEwQixtQkFBbUIsRUFBRTtJQUMvQyx1QkFBdUIsbUJBQW1CLEVBQUU7O0lBRTVDO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsY0FBYztNQUNkLGVBQWU7SUFDakI7SUFDQSxrQkFBa0IsbUNBQW1DLEVBQUUsY0FBYyxFQUFFO0lBQ3ZFLHFCQUFxQixtQ0FBbUMsRUFBRSxjQUFjLEVBQUU7SUFDMUUsb0JBQW9CLHFDQUFxQyxFQUFFLGNBQWMsRUFBRTtJQUMzRSxxQkFBcUIsb0NBQW9DLEVBQUUsY0FBYyxFQUFFOztJQUUzRSxnQkFBZ0IsT0FBTyxFQUFFLFlBQVksRUFBRTtJQUN2QztNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsbUJBQW1CO01BQ25CLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixRQUFRO0lBQ1Y7SUFDQTtNQUNFLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsV0FBVztJQUNiO0lBQ0E7TUFDRSxVQUFVO01BQ1YsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsMkJBQTJCO0lBQzdCO0lBQ0EsYUFBYSxlQUFlLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFO0lBQ2hFO01BQ0UsZUFBZTtNQUNmLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLFNBQVM7SUFDWDtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixRQUFRO01BQ1IsZUFBZTtJQUNqQjtJQUNBO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLHFCQUFxQjtJQUN2QjtJQUNBLGdCQUFnQixxQ0FBcUMsRUFBRSxjQUFjLEVBQUU7SUFDdkUsdUJBQXVCLG9DQUFvQyxFQUFFLGNBQWMsRUFBRSwwQ0FBMEMsRUFBRTtJQUN6SCxxQkFBcUIsa0NBQWtDLEVBQUUsY0FBYyxFQUFFO0lBQ3pFLHVCQUF1QixtQ0FBbUMsRUFBRSxjQUFjLEVBQUU7SUFDNUUsb0JBQW9CLGtDQUFrQyxFQUFFLGNBQWMsRUFBRTtJQUN4RSxZQUFZLG9DQUFvQyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUU7SUFDdkgsZUFBZSxxQ0FBcUMsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFOztJQUV4SCxnQkFBZ0IsYUFBYSxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRTtJQUM5RDtNQUNFLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixlQUFlO01BQ2Ysb0JBQW9CO01BQ3BCLG1CQUFtQjtNQUNuQixRQUFRO01BQ1IsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixvQkFBb0I7SUFDdEI7SUFDQSx1QkFBdUIsZUFBZSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUU7SUFDbkUsWUFBWSxjQUFjLEVBQUUsbUNBQW1DLEVBQUU7SUFDakUsa0JBQWtCLG1DQUFtQyxFQUFFO0lBQ3ZELFlBQVksY0FBYyxFQUFFLGtDQUFrQyxFQUFFO0lBQ2hFLGtCQUFrQixrQ0FBa0MsRUFBRTtJQUN0RCxjQUFjLGNBQWMsRUFBRSxZQUFZLEVBQUU7SUFDNUMsb0JBQW9CLGNBQWMsRUFBRSxvQ0FBb0MsRUFBRTs7SUFFMUUsb0JBQW9CO0lBQ3BCO01BQ0UsZUFBZTtNQUNmLE1BQU07TUFDTixPQUFPO01BQ1AsWUFBWTtNQUNaLGFBQWE7TUFDYiwrQkFBK0I7TUFDL0IsMEJBQTBCO01BQzFCLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGNBQWM7TUFDZCwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLG1CQUFtQjtNQUNuQiwyQ0FBMkM7TUFDM0MsbUJBQW1CO01BQ25CLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsMENBQTBDO01BQzFDLGdCQUFnQjtNQUNoQixzREFBc0Q7SUFDeEQ7SUFDQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLGtCQUFrQjtNQUNsQixrREFBa0Q7TUFDbEQscUNBQXFDO0lBQ3ZDO0lBQ0EsbUJBQW1CLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUU7SUFDbEUsc0JBQXNCLFNBQVMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFO0lBQ2pGLGtCQUFrQixnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRTtJQUNuRix3QkFBd0IsV0FBVyxFQUFFOztJQUVyQyxjQUFjLGFBQWEsRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFO0lBQy9FLGNBQWMsYUFBYSxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRTtJQUMvRCxvQkFBb0IsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRTtJQUN2RSxZQUFZLGNBQWMsRUFBRTtJQUM1QjtNQUNFLHFDQUFxQztNQUNyQywwQ0FBMEM7TUFDMUMsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsZUFBZTtNQUNmLGFBQWE7TUFDYixvQkFBb0I7SUFDdEI7SUFDQTtNQUNFLHFCQUFxQjtNQUNyQixvQ0FBb0M7SUFDdEM7SUFDQSw0QkFBNEIsbUJBQW1CLEVBQUUsV0FBVyxFQUFFO0lBQzlELFlBQVksYUFBYSxFQUFFLDhCQUE4QixFQUFFLFNBQVMsRUFBRTs7SUFFdEU7TUFDRSxhQUFhO01BQ2IseUJBQXlCO01BQ3pCLFNBQVM7TUFDVCxlQUFlO0lBQ2pCOztJQUVBLG9CQUFvQixPQUFPLFVBQVUsRUFBRSxFQUFFLEtBQUssVUFBVSxFQUFFLEVBQUU7SUFDNUQscUJBQXFCLE9BQU8sVUFBVSxFQUFFLDJCQUEyQixFQUFFLEVBQUUsS0FBSyxVQUFVLEVBQUUsd0JBQXdCLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5ub3RpZmljYXRpb25zLXBhZ2Uge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDI0cHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG5cbiAgICAvKiBUb3AgSGVhZGVyIENhcmQgKi9cbiAgICAuaGVhZGVyLWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNiwgMjksIDQ2LCAwLjk1KSwgcmdiYSgxNSwgMTcsIDIzLCAwLjk1KSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIHBhZGRpbmc6IDI4cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgfVxuICAgIC5oZWFkZXItbWFpbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICBnYXA6IDIwcHg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5oZWFkZXItdGl0bGUtYm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cbiAgICAuYmVsbC1nbG93LWljb24ge1xuICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMDgsIDk5LCAyNTUsIDAuMjUpLCByZ2JhKDAsIDE5MSwgMTY1LCAwLjI1KSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEwOCwgOTksIDI1NSwgMC40KTtcbiAgICAgIGNvbG9yOiAjOWM5NWZmO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMTA4LCA5OSwgMjU1LCAwLjIpO1xuICAgIH1cbiAgICAuYmVsbC1nbG93LWljb24gbWF0LWljb24geyBmb250LXNpemU6IDMwcHg7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDMwcHg7IH1cbiAgICAuaGVhZGVyLXRpdGxlLWJveCBoMiB7IGZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luOiAwIDAgNHB4IDA7IGNvbG9yOiAjZmZmOyB9XG4gICAgLmhlYWRlci10aXRsZS1ib3ggcCB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICNhMGEzYjE7IG1hcmdpbjogMDsgfVxuICAgIC5oZWFkZXItYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDsgZmxleC13cmFwOiB3cmFwOyB9XG5cbiAgICAvKiBLUEkgR3JpZCAqL1xuICAgIC5rcGktZ3JpZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgfVxuICAgIC5rcGktY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDE0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgICB9XG4gICAgLmtwaS1jYXJkOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgfVxuICAgIC5rcGktY2FyZC5hY3RpdmUta3BpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzljOTVmZjtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTA4LCA5OSwgMjU1LCAwLjE1KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMTA4LCA5OSwgMjU1LCAwLjIpO1xuICAgIH1cbiAgICAua3BpLWljb24ge1xuICAgICAgd2lkdGg6IDQycHg7XG4gICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIH1cbiAgICAuaWNvbi10b3RhbCB7IGJhY2tncm91bmQ6IHJnYmEoMTA4LCA5OSwgMjU1LCAwLjE1KTsgY29sb3I6ICM5Yzk1ZmY7IH1cbiAgICAuaWNvbi11bnJlYWQgeyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE5MSwgMTY1LCAwLjE1KTsgY29sb3I6ICMwMEJGQTU7IH1cbiAgICAuaWNvbi11cmdlbnQgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTA3LCAxMDcsIDAuMTUpOyBjb2xvcjogI0ZGNkI2QjsgfVxuICAgIC5pY29uLWludmVudG9yeSB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMTUpOyBjb2xvcjogI2ZmYzEwNzsgfVxuICAgIC5pY29uLXByb2N1cmVtZW50IHsgYmFja2dyb3VuZDogcmdiYSgzMywgMTUwLCAyNDMsIDAuMTUpOyBjb2xvcjogIzIxOTZGMzsgfVxuXG4gICAgLmtwaS1kYXRhIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIC5rcGktdmFsdWUgeyBmb250LXNpemU6IDIwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjZmZmOyB9XG4gICAgLmtwaS1sYWJlbCB7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICNhMGEzYjE7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuICAgIC8qIFRvb2xiYXIgQ2FyZCAqL1xuICAgIC50b29sYmFyLWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogIzFhMWQyZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgcGFkZGluZzogMThweCAyMnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBnYXA6IDE2cHg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5zZWFyY2gtYm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtaW4td2lkdGg6IDI2MHB4O1xuICAgIH1cbiAgICAuc2VhcmNoLWJveCBtYXQtaWNvbiB7IGNvbG9yOiAjNmI2ZjgyOyB9XG4gICAgLnNlYXJjaC1ib3ggaW5wdXQge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuY2xlYXItc2VhcmNoLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6ICNhMGEzYjE7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5maWx0ZXItY29udHJvbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5zZWxlY3Qtd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICAgIC5zZWxlY3QtbGFiZWwgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjYTBhM2IxOyBmb250LXdlaWdodDogNTAwOyB9XG4gICAgLnNlbGVjdC13cmFwcGVyIHNlbGVjdCB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuc2VsZWN0LXdyYXBwZXIgc2VsZWN0IG9wdGlvbiB7IGJhY2tncm91bmQ6ICMxYTFkMmU7IGNvbG9yOiAjZmZmOyB9XG5cbiAgICAvKiBCdXR0b24gU3R5bGVzICovXG4gICAgLmJ0biB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIH1cbiAgICAuYnRuIG1hdC1pY29uIHsgZm9udC1zaXplOiAxOHB4OyB3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4OyB9XG4gICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2QzYzRkYsICM1YTUyZTApO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTA4LCA5OSwgMjU1LCAwLjMpO1xuICAgIH1cbiAgICAuYnRuLXByaW1hcnk6aG92ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7IGJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSgxMDgsIDk5LCAyNTUsIDAuNDUpOyB9XG4gICAgLmJ0bi1zZWNvbmRhcnkgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpOyBjb2xvcjogI2ZmZjsgfVxuICAgIC5idG4tc2Vjb25kYXJ5OmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KTsgfVxuICAgIC5idG4td2FybmluZyB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMTUpOyBjb2xvcjogI2ZmYzEwNzsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDE5MywgNywgMC4zKTsgfVxuICAgIC5idG4td2FybmluZzpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMjUpOyB9XG4gICAgLmJ0bi1vdXRsaW5lIHsgYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTsgY29sb3I6ICNhMGEzYjE7IH1cbiAgICAuYnRuLW91dGxpbmU6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpOyBjb2xvcjogI2ZmZjsgfVxuICAgIC5idG4tZGFuZ2VyLW91dGxpbmUgeyBiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTA3LCAxMDcsIDAuMyk7IGNvbG9yOiAjRkY2QjZCOyB9XG4gICAgLmJ0bi1kYW5nZXItb3V0bGluZTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMDcsIDEwNywgMC4xMik7IH1cblxuICAgIC5zcGlubmluZyB7IGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7IH1cbiAgICBAa2V5ZnJhbWVzIHNwaW4geyAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5cbiAgICAvKiBOb3RpZmljYXRpb25zIExpc3QgQ29udGFpbmVyICovXG4gICAgLmxpc3QtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgIH1cbiAgICAubGlzdC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgIH1cbiAgICAubGlzdC1oZWFkZXIgaDMgeyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbjogMDsgY29sb3I6ICNmZmY7IH1cbiAgICAuc3ViLXRleHQgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNmI2ZjgyOyB9XG5cbiAgICAvKiBFbXB0eSBDYXJkICovXG4gICAgLmVtcHR5LWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogIzFhMWQyZTtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIHBhZGRpbmc6IDQ4cHggMjRweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjYTBhM2IxO1xuICAgIH1cbiAgICAuZW1wdHktaWNvbi1jaXJjbGUge1xuICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xuICAgICAgY29sb3I6ICM2YjZmODI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMTZweCBhdXRvO1xuICAgIH1cbiAgICAuZW1wdHktaWNvbi1jaXJjbGUgbWF0LWljb24geyBmb250LXNpemU6IDMycHg7IHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7IH1cbiAgICAuZW1wdHktY2FyZCBoNCB7IGZvbnQtc2l6ZTogMThweDsgY29sb3I6ICNmZmY7IG1hcmdpbjogMCAwIDhweCAwOyB9XG4gICAgLmVtcHR5LWNhcmQgcCB7IGZvbnQtc2l6ZTogMTNweDsgbWFyZ2luOiAwIDAgMjBweCAwOyBtYXgtd2lkdGg6IDQyMHB4OyBtYXJnaW4tbGVmdDogYXV0bzsgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XG5cbiAgICAvKiBOb3RpZmljYXRpb24gQ2FyZCAqL1xuICAgIC5ub3RpZmljYXRpb24tY2FyZCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiAjMWExZDJlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICBwYWRkaW5nOiAxOHB4IDIwcHggMThweCAyNHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTZweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAubm90aWZpY2F0aW9uLWNhcmQ6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgIH1cbiAgICAubm90aWZpY2F0aW9uLWNhcmQudW5yZWFkLWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEwOCwgOTksIDI1NSwgMC4wOCksIHJnYmEoMjYsIDI5LCA0NiwgMC45NSkpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEwOCwgOTksIDI1NSwgMC4yNSk7XG4gICAgfVxuICAgIC5ub3RpZmljYXRpb24tY2FyZC51cmdlbnQtY2FyZCB7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAxMDcsIDEwNywgMC40KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMjU1LCAxMDcsIDEwNywgMC4wOCk7XG4gICAgfVxuXG4gICAgLmNhcmQtbGVmdC1iYWRnZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDRweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgLmNhcmQtbGVmdC1iYWRnZS51cmdlbnQgeyBiYWNrZ3JvdW5kOiAjRkY2QjZCOyBib3gtc2hhZG93OiAwIDAgMTBweCAjRkY2QjZCOyB9XG4gICAgLmNhcmQtbGVmdC1iYWRnZS5oaWdoIHsgYmFja2dyb3VuZDogI2ZmYzEwNzsgfVxuICAgIC5jYXJkLWxlZnQtYmFkZ2UubWVkaXVtIHsgYmFja2dyb3VuZDogIzIxOTZGMzsgfVxuICAgIC5jYXJkLWxlZnQtYmFkZ2UubG93IHsgYmFja2dyb3VuZDogIzAwQkZBNTsgfVxuXG4gICAgLmNhcmQtaWNvbiB7XG4gICAgICB3aWR0aDogNDRweDtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgfVxuICAgIC5jYXJkLWljb24uaW5mbyB7IGJhY2tncm91bmQ6IHJnYmEoMCwgMTkxLCAxNjUsIDAuMTUpOyBjb2xvcjogIzAwQkZBNTsgfVxuICAgIC5jYXJkLWljb24ud2FybmluZyB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMTUpOyBjb2xvcjogI2ZmYzEwNzsgfVxuICAgIC5jYXJkLWljb24uZGFuZ2VyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDEwNywgMTA3LCAwLjE1KTsgY29sb3I6ICNGRjZCNkI7IH1cbiAgICAuY2FyZC1pY29uLnN1Y2Nlc3MgeyBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgOTksIDI1NSwgMC4xNSk7IGNvbG9yOiAjOWM5NWZmOyB9XG5cbiAgICAuY2FyZC1jb250ZW50IHsgZmxleDogMTsgbWluLXdpZHRoOiAwOyB9XG4gICAgLmNhcmQtdG9wLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICB9XG4gICAgLnRpdGxlLXdyYXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAudW5yZWFkLWRvdCB7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjOWM5NWZmO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAjOWM5NWZmO1xuICAgIH1cbiAgICAuY2FyZC10aW1lIHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzZiNmY4MjsgZm9udC13ZWlnaHQ6IDUwMDsgfVxuICAgIC5jYXJkLW1lc3NhZ2Uge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgY29sb3I6ICNhMGEzYjE7XG4gICAgICBtYXJnaW46IDAgMCAxMnB4IDA7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cblxuICAgIC5jYXJkLWZvb3RlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGdhcDogMTBweDtcbiAgICB9XG4gICAgLm1ldGEtdGFncyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNnB4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgICAudGFnIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cbiAgICAudGFnLWNhdGVnb3J5IHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTsgY29sb3I6ICNhMGEzYjE7IH1cbiAgICAudGFnLXByaW9yaXR5LXVyZ2VudCB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMDcsIDEwNywgMC4yKTsgY29sb3I6ICNGRjZCNkI7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxMDcsIDEwNywgMC4zKTsgfVxuICAgIC50YWctcHJpb3JpdHktaGlnaCB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMik7IGNvbG9yOiAjZmZjMTA3OyB9XG4gICAgLnRhZy1wcmlvcml0eS1tZWRpdW0geyBiYWNrZ3JvdW5kOiByZ2JhKDMzLCAxNTAsIDI0MywgMC4yKTsgY29sb3I6ICMyMTk2RjM7IH1cbiAgICAudGFnLXByaW9yaXR5LWxvdyB7IGJhY2tncm91bmQ6IHJnYmEoMCwgMTkxLCAxNjUsIDAuMik7IGNvbG9yOiAjMDBCRkE1OyB9XG4gICAgLnRhZy1yb2xlIHsgYmFja2dyb3VuZDogcmdiYSgxMDgsIDk5LCAyNTUsIDAuMTUpOyBjb2xvcjogIzljOTVmZjsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNHB4OyB9XG4gICAgLnRhZy1jaGFubmVsIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTsgY29sb3I6ICNmZmY7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgfVxuXG4gICAgLmNhcmQtYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyB9XG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDRweDtcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICB9XG4gICAgLmFjdGlvbi1idG4gbWF0LWljb24geyBmb250LXNpemU6IDE1cHg7IHdpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7IH1cbiAgICAubGluay1idG4geyBjb2xvcjogIzljOTVmZjsgYmFja2dyb3VuZDogcmdiYSgxMDgsIDk5LCAyNTUsIDAuMSk7IH1cbiAgICAubGluay1idG46aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgOTksIDI1NSwgMC4yKTsgfVxuICAgIC5yZWFkLWJ0biB7IGNvbG9yOiAjMDBCRkE1OyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE5MSwgMTY1LCAwLjEpOyB9XG4gICAgLnJlYWQtYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgwLCAxOTEsIDE2NSwgMC4yKTsgfVxuICAgIC5kZWxldGUtYnRuIHsgY29sb3I6ICM2YjZmODI7IHBhZGRpbmc6IDRweDsgfVxuICAgIC5kZWxldGUtYnRuOmhvdmVyIHsgY29sb3I6ICNGRjZCNkI7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMDcsIDEwNywgMC4xKTsgfVxuXG4gICAgLyogQnJvYWRjYXN0IE1vZGFsICovXG4gICAgLm1vZGFsLW92ZXJsYXkge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICBhbmltYXRpb246IGZhZGVJbiAwLjJzIGVhc2U7XG4gICAgfVxuICAgIC5tb2RhbC1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxYTFkMmU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXgtd2lkdGg6IDU4MHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVVcCAwLjI1cyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcbiAgICB9XG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKTtcbiAgICB9XG4gICAgLm1vZGFsLXRpdGxlLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDsgfVxuICAgIC5tb2RhbC10aXRsZS1yb3cgaDMgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmZmY7IH1cbiAgICAuY2xvc2UtaWNvbi1idG4geyBiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IG5vbmU7IGNvbG9yOiAjYTBhM2IxOyBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAuY2xvc2UtaWNvbi1idG46aG92ZXIgeyBjb2xvcjogI2ZmZjsgfVxuXG4gICAgLm1vZGFsLWZvcm0geyBwYWRkaW5nOiAyNHB4OyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDE2cHg7IH1cbiAgICAuZm9ybS1ncm91cCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogNnB4OyB9XG4gICAgLmZvcm0tZ3JvdXAgbGFiZWwgeyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjYTBhM2IxOyB9XG4gICAgLnJlcXVpcmVkIHsgY29sb3I6ICNGRjZCNkI7IH1cbiAgICAuZm9ybS1ncm91cCBpbnB1dCwgLmZvcm0tZ3JvdXAgdGV4dGFyZWEsIC5mb3JtLWdyb3VwIHNlbGVjdCB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIH1cbiAgICAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cywgLmZvcm0tZ3JvdXAgdGV4dGFyZWE6Zm9jdXMsIC5mb3JtLWdyb3VwIHNlbGVjdDpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICM5Yzk1ZmY7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgOTksIDI1NSwgMC4wNSk7XG4gICAgfVxuICAgIC5mb3JtLWdyb3VwIHNlbGVjdCBvcHRpb24geyBiYWNrZ3JvdW5kOiAjMWExZDJlOyBjb2xvcjogI2ZmZjsgfVxuICAgIC5mb3JtLXJvdyB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgZ2FwOiAxNnB4OyB9XG5cbiAgICAubW9kYWwtYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OiAwOyB9IHRvIHsgb3BhY2l0eTogMTsgfSB9XG4gICAgQGtleWZyYW1lcyBzbGlkZVVwIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTsgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5837:
/*!*****************************************************************!*\
  !*** ./src/app/components/procurement/procurement.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcurementComponent: () => (/* binding */ ProcurementComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_procurement_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/procurement.service */ 1292);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function ProcurementComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProcurementComponent_div_33_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.savePO());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17)(5, "div", 18)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Vendor/Supplier Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Category *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 20)(13, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Raw Materials");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Equipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Machinery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Safety Equipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Office Supplies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Invoice Number *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 18)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Total Amount (\u20B9) *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18)(32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Invoice Date *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18)(36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Status *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "select", 29)(39, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Shipped");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 35)(50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Items List & Description *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 37)(54, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProcurementComponent_div_33_Template_button_click_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cancelForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.isEditing ? "Update Purchase Order" : "Create Purchase Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.poForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.poForm.invalid || ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.saving ? "Saving..." : ctx_r1.isEditing ? "Save Changes" : "Create Order", " ");
  }
}
function ProcurementComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading purchase catalog...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProcurementComponent_table_36_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td")(5, "strong", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td")(18, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td")(21, "div", 46)(22, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProcurementComponent_table_36_tr_20_Template_button_click_22_listener() {
      const p_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startEdit(p_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProcurementComponent_table_36_tr_20_Template_button_click_24_listener() {
      const p_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.deletePO(p_r4._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r4.invoiceNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r4.vendorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r4.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", p_r4.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r4.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](13, 9, p_r4.totalAmount, "1.0-0", "en-IN"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 13, p_r4.date, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.getBadgeClass(p_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r4.status);
  }
}
function ProcurementComponent_table_36_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No purchase orders found. Click \"+ New Purchase Order\" to generate one. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProcurementComponent_table_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Invoice No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Items Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProcurementComponent_table_36_tr_20_Template, 26, 16, "tr", 41)(21, ProcurementComponent_table_36_tr_21_Template, 3, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.procurements);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.loading && ctx_r1.procurements.length === 0);
  }
}
class ProcurementComponent {
  constructor(procurementService, fb, snackBar) {
    this.procurementService = procurementService;
    this.fb = fb;
    this.snackBar = snackBar;
    this.procurements = [];
    this.loading = true;
    this.saving = false;
    this.showForm = false;
    this.isEditing = false;
    this.editingPOId = '';
    this.poForm = this.fb.group({
      vendorName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      category: ['Raw Materials', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      items: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      totalAmount: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
      status: ['Pending', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      invoiceNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  ngOnInit() {
    this.loadProcurements();
  }
  loadProcurements() {
    this.loading = true;
    this.procurementService.getProcurements().subscribe({
      next: res => {
        this.procurements = res.success ? res.data : Array.isArray(res) ? res : res.procurements || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Failed to load purchase catalog', 'Close', {
          duration: 3000
        });
      }
    });
  }
  toggleForm() {
    if (this.showForm && !this.isEditing) {
      this.showForm = false;
    } else {
      this.isEditing = false;
      this.editingPOId = '';
      this.poForm.reset({
        category: 'Raw Materials',
        status: 'Pending',
        totalAmount: 0,
        date: new Date().toISOString().split('T')[0]
      });
      this.showForm = true;
    }
  }
  cancelForm() {
    this.showForm = false;
    this.isEditing = false;
    this.editingPOId = '';
    this.poForm.reset();
  }
  startEdit(po) {
    this.isEditing = true;
    this.editingPOId = po._id || '';
    this.showForm = true;
    const formattedDate = po.date ? new Date(po.date).toISOString().split('T')[0] : '';
    this.poForm.patchValue({
      vendorName: po.vendorName,
      category: po.category,
      items: po.items,
      totalAmount: po.totalAmount,
      status: po.status,
      invoiceNo: po.invoiceNo,
      date: formattedDate
    });
  }
  savePO() {
    if (this.poForm.invalid) return;
    this.saving = true;
    if (this.isEditing) {
      this.procurementService.updateProcurement(this.editingPOId, this.poForm.value).subscribe({
        next: () => {
          this.saving = false;
          this.showForm = false;
          this.isEditing = false;
          this.editingPOId = '';
          this.poForm.reset();
          this.loadProcurements();
          this.snackBar.open('Purchase order updated', 'Close', {
            duration: 3000
          });
        },
        error: err => {
          this.saving = false;
          this.snackBar.open(err?.error?.message || 'Failed to update order', 'Close', {
            duration: 3000
          });
        }
      });
    } else {
      this.procurementService.createProcurement(this.poForm.value).subscribe({
        next: () => {
          this.saving = false;
          this.showForm = false;
          this.poForm.reset();
          this.loadProcurements();
          this.snackBar.open('Purchase order created', 'Close', {
            duration: 3000
          });
        },
        error: err => {
          this.saving = false;
          this.snackBar.open(err?.error?.message || 'Failed to create order. Check invoice no duplicates', 'Close', {
            duration: 3000
          });
        }
      });
    }
  }
  deletePO(id) {
    if (!confirm('Are you sure you want to delete this purchase order?')) return;
    this.procurementService.deleteProcurement(id).subscribe({
      next: () => {
        this.loadProcurements();
        this.snackBar.open('Purchase order deleted', 'Close', {
          duration: 3000
        });
      },
      error: () => {
        this.snackBar.open('Failed to delete purchase order', 'Close', {
          duration: 3000
        });
      }
    });
  }
  // --- Statistics Helpers ---
  getPendingCount() {
    return this.procurements.filter(p => p.status !== 'Paid').length;
  }
  getPaidCount() {
    return this.procurements.filter(p => p.status === 'Paid').length;
  }
  getTotalAmount() {
    return this.procurements.reduce((sum, p) => sum + (p.totalAmount || 0), 0);
  }
  getPendingAmount() {
    return this.procurements.filter(p => p.status !== 'Paid').reduce((sum, p) => sum + (p.totalAmount || 0), 0);
  }
  getBadgeClass(status) {
    const map = {
      'pending': 'badge-warning',
      'approved': 'badge-info',
      'shipped': 'badge-info',
      'received': 'badge-success',
      'paid': 'badge-success'
    };
    return map[status?.toLowerCase()] || 'badge-info';
  }
  static {
    this.ɵfac = function ProcurementComponent_Factory(t) {
      return new (t || ProcurementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_procurement_service__WEBPACK_IMPORTED_MODULE_0__.ProcurementService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProcurementComponent,
      selectors: [["app-procurement"]],
      decls: 37,
      vars: 17,
      consts: [[1, "page-header"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between"], [1, "btn", "btn-primary", 3, "click"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-label"], [1, "stat-value", 2, "color", "#9c95ff"], [2, "font-size", "12px", "color", "#a0a3b1", "margin-top", "6px"], [1, "stat-value", 2, "color", "#00BFA5"], [1, "stat-value", 2, "color", "#ffc107"], ["class", "glass-card", "style", "padding:24px;margin-bottom:28px", 4, "ngIf"], [1, "table-container"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], [1, "glass-card", 2, "padding", "24px", "margin-bottom", "28px"], [2, "margin-bottom", "18px", "font-size", "16px", "color", "#fff"], [3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "field-group"], ["formControlName", "vendorName", "placeholder", "e.g. Apex Steel Distributors", 1, "input-field"], ["formControlName", "category", 1, "input-field"], ["value", "Raw Materials"], ["value", "Equipment"], ["value", "Machinery"], ["value", "Safety Equipment"], ["value", "Office Supplies"], ["formControlName", "invoiceNo", "placeholder", "e.g. INV-2026-9042", 1, "input-field"], ["type", "number", "formControlName", "totalAmount", "placeholder", "10000", 1, "input-field"], ["type", "date", "formControlName", "date", 1, "input-field"], ["formControlName", "status", 1, "input-field"], ["value", "Pending"], ["value", "Approved"], ["value", "Shipped"], ["value", "Received"], ["value", "Paid"], [1, "field-group", 2, "margin-top", "16px"], ["formControlName", "items", "placeholder", "List details: e.g. Reinforcement TMT bars (10 Tons), 500 bags of cement...", 1, "input-field", 2, "height", "60px", "resize", "none"], [2, "margin-top", "20px", "display", "flex", "gap", "12px", "justify-content", "end"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "loading-state"], [4, "ngFor", "ngForOf"], [2, "color", "#9c95ff"], [2, "color", "#fff"], [2, "max-width", "240px", "text-overflow", "ellipsis", "overflow", "hidden", "white-space", "nowrap", 3, "title"], [1, "badge", 3, "ngClass"], [2, "display", "flex", "gap", "8px"], ["title", "Edit PO", 1, "action-btn", "edit-btn", 3, "click"], ["title", "Delete PO", 1, "action-btn", "delete-btn", 3, "click"], ["colspan", "8", 2, "text-align", "center", "color", "#6b6f82", "padding", "40px"]],
      template: function ProcurementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Procurement & Purchase Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Create and track material supplies, machinery leasing, and vendor invoices.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProcurementComponent_Template_button_click_7_listener() {
            return ctx.toggleForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Total Purchase Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4)(18, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Total Outflow Value");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Sum of all PO amount structures");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4)(26, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Pending Payments");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Unpaid or pending approvals");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ProcurementComponent_div_33_Template, 58, 4, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ProcurementComponent_div_35_Template, 2, 0, "div", 12)(36, ProcurementComponent_table_36_Template, 22, 2, "table", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.showForm && !ctx.isEditing ? "Close" : "+ New Purchase Order", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.procurements.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.getPendingCount(), " Pending | ", ctx.getPaidCount(), " Fully Settled ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](22, 9, ctx.getTotalAmount(), "1.0-0", "en-IN"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](30, 13, ctx.getPendingAmount(), "1.0-0", "en-IN"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: [".form-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }\n    .field-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n    .field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 13px; font-weight: 600; color: #a0a3b1; margin-bottom: 6px; }\n    .input-field[_ngcontent-%COMP%] {\n      padding: 10px 14px; background: rgba(255,255,255,0.05);\n      border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;\n      color: #fff; font-size: 14px; font-family: 'Inter', sans-serif; outline: none;\n    }\n    .input-field[_ngcontent-%COMP%]:focus { border-color: #6C63FF; }\n    .input-field[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] { background: #1a1d2e; color: #fff; }\n    .loading-state[_ngcontent-%COMP%] { padding: 40px; text-align: center; color: #6b6f82; }\n    \n    .action-btn[_ngcontent-%COMP%] {\n      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n      border-radius: 6px; color: #fff; padding: 6px 10px; font-size: 13px; cursor: pointer;\n      transition: all 0.2s; display: flex; align-items: center; justify-content: center;\n    }\n    .action-btn[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.15); transform: translateY(-1px); }\n    .edit-btn[_ngcontent-%COMP%]:hover { border-color: #6C63FF; color: #6C63FF; }\n    .delete-btn[_ngcontent-%COMP%]:hover { border-color: #FF6B6B; color: #FF6B6B; }\n\n    .badge-info[_ngcontent-%COMP%] { background: rgba(108,99,255,0.1); color: #9c95ff; border: 1px solid rgba(108,99,255,0.2); }\n    .badge-warning[_ngcontent-%COMP%] { background: rgba(255,193,7,0.1); color: #ffc107; border: 1px solid rgba(255,193,7,0.2); }\n    .badge-success[_ngcontent-%COMP%] { background: rgba(0,191,165,0.1); color: #00BFA5; border: 1px solid rgba(0,191,165,0.2); }\n    .badge-danger[_ngcontent-%COMP%] { background: rgba(255,107,107,0.1); color: #FF6B6B; border: 1px solid rgba(255,107,107,0.2); }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9jdXJlbWVudC9wcm9jdXJlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJLGFBQWEsYUFBYSxFQUFFLGtDQUFrQyxFQUFFLFNBQVMsRUFBRTtJQUMzRSxlQUFlLGFBQWEsRUFBRSxzQkFBc0IsRUFBRTtJQUN0RCxxQkFBcUIsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtJQUM1RjtNQUNFLGtCQUFrQixFQUFFLGtDQUFrQztNQUN0RCx1Q0FBdUMsRUFBRSxrQkFBa0I7TUFDM0QsV0FBVyxFQUFFLGVBQWUsRUFBRSxnQ0FBZ0MsRUFBRSxhQUFhO0lBQy9FO0lBQ0EscUJBQXFCLHFCQUFxQixFQUFFO0lBQzVDLHNCQUFzQixtQkFBbUIsRUFBRSxXQUFXLEVBQUU7SUFDeEQsaUJBQWlCLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUU7O0lBRXBFO01BQ0Usa0NBQWtDLEVBQUUsdUNBQXVDO01BQzNFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsZUFBZTtNQUNwRixvQkFBb0IsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCO0lBQ25GO0lBQ0Esb0JBQW9CLGtDQUFrQyxFQUFFLDJCQUEyQixFQUFFO0lBQ3JGLGtCQUFrQixxQkFBcUIsRUFBRSxjQUFjLEVBQUU7SUFDekQsb0JBQW9CLHFCQUFxQixFQUFFLGNBQWMsRUFBRTs7SUFFM0QsY0FBYyxnQ0FBZ0MsRUFBRSxjQUFjLEVBQUUsc0NBQXNDLEVBQUU7SUFDeEcsaUJBQWlCLCtCQUErQixFQUFFLGNBQWMsRUFBRSxxQ0FBcUMsRUFBRTtJQUN6RyxpQkFBaUIsK0JBQStCLEVBQUUsY0FBYyxFQUFFLHFDQUFxQyxFQUFFO0lBQ3pHLGdCQUFnQixpQ0FBaUMsRUFBRSxjQUFjLEVBQUUsdUNBQXVDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuZm9ybS1ncmlkIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjsgZ2FwOiAxNnB4OyB9XG4gICAgLmZpZWxkLWdyb3VwIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIC5maWVsZC1ncm91cCBsYWJlbCB7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICNhMGEzYjE7IG1hcmdpbi1ib3R0b206IDZweDsgfVxuICAgIC5pbnB1dC1maWVsZCB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7IGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDE0cHg7IGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmOyBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAuaW5wdXQtZmllbGQ6Zm9jdXMgeyBib3JkZXItY29sb3I6ICM2QzYzRkY7IH1cbiAgICAuaW5wdXQtZmllbGQgb3B0aW9uIHsgYmFja2dyb3VuZDogIzFhMWQyZTsgY29sb3I6ICNmZmY7IH1cbiAgICAubG9hZGluZy1zdGF0ZSB7IHBhZGRpbmc6IDQwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6ICM2YjZmODI7IH1cbiAgICBcbiAgICAuYWN0aW9uLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7IGNvbG9yOiAjZmZmOyBwYWRkaW5nOiA2cHggMTBweDsgZm9udC1zaXplOiAxM3B4OyBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yczsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5hY3Rpb24tYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOyB9XG4gICAgLmVkaXQtYnRuOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiAjNkM2M0ZGOyBjb2xvcjogIzZDNjNGRjsgfVxuICAgIC5kZWxldGUtYnRuOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiAjRkY2QjZCOyBjb2xvcjogI0ZGNkI2QjsgfVxuXG4gICAgLmJhZGdlLWluZm8geyBiYWNrZ3JvdW5kOiByZ2JhKDEwOCw5OSwyNTUsMC4xKTsgY29sb3I6ICM5Yzk1ZmY7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTA4LDk5LDI1NSwwLjIpOyB9XG4gICAgLmJhZGdlLXdhcm5pbmcgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwxOTMsNywwLjEpOyBjb2xvcjogI2ZmYzEwNzsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMTkzLDcsMC4yKTsgfVxuICAgIC5iYWRnZS1zdWNjZXNzIHsgYmFja2dyb3VuZDogcmdiYSgwLDE5MSwxNjUsMC4xKTsgY29sb3I6ICMwMEJGQTU7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwxOTEsMTY1LDAuMik7IH1cbiAgICAuYmFkZ2UtZGFuZ2VyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMTA3LDEwNywwLjEpOyBjb2xvcjogI0ZGNkI2QjsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMTA3LDEwNywwLjIpOyB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3607:
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/project.service */ 1279);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





function ProjectsComponent_div_9_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Progress (%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.projectForm.value.progress, "%");
  }
}
function ProjectsComponent_div_9_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Actual Expense (\u20B9)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_div_9_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
  }
}
function ProjectsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProjectsComponent_div_9_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.saveProject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 12)(5, "div", 13)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Project Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 13)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Category *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 15)(13, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Select Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Residential");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Commercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Infrastructure");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Industrial");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Government Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Client *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13)(30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Location *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Budget (\u20B9) *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 13)(38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Status *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "select", 25)(41, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Planning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Ongoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Delayed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 13)(52, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Start Date *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 13)(56, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "End Date *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, ProjectsComponent_div_9_div_59_Template, 7, 1, "div", 33)(60, ProjectsComponent_div_9_div_60_Template, 4, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, ProjectsComponent_div_9_div_61_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 35)(63, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_9_Template_button_click_65_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cancelForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.isEditing ? "Edit Project" : "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.projectForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.projectForm.invalid || ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.saving ? "Saving..." : ctx_r1.isEditing ? "Save Changes" : "Create Project", " ");
  }
}
function ProjectsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading projects...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_table_12_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td")(11, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td")(14, "div", 47)(15, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td")(22, "div", 50)(23, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_table_12_tr_20_Template_button_click_23_listener() {
      const p_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.viewDetails(p_r4._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\uD83D\uDC41\uFE0F Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_table_12_tr_20_Template_button_click_25_listener() {
      const p_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startEdit(p_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_table_12_tr_20_Template_button_click_27_listener() {
      const p_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.confirmDelete(p_r4._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r4.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r4.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r4.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.getBadgeClass(p_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", p_r4.progress || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", p_r4.progress || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", ctx_r1.formatCurrency(p_r4.budget), "");
  }
}
function ProjectsComponent_table_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProjectsComponent_table_12_tr_20_Template, 29, 10, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.projects);
  }
}
function ProjectsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No projects yet. Click \"+ New Project\" to get started. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_div_14_div_19_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68)(1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.selectedProject.projectManager.name);
  }
}
function ProjectsComponent_div_14_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65)(1, "div", 66)(2, "div", 67)(3, "div", 68)(4, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 68)(9, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 68)(14, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 68)(19, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 68)(25, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ProjectsComponent_div_14_div_19_div_30_Template, 5, 1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 72)(32, "div", 73)(33, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Overall Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 75)(36, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 78)(41, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Budget Spent Breakdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 79)(44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.selectedProject.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.selectedProject.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.selectedProject.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](23, 18, ctx_r1.selectedProject.startDate, "longDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](29, 21, ctx_r1.selectedProject.endDate, "longDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedProject.projectManager);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r1.selectedProject.progress || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.selectedProject.progress || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Expended: \u20B9", ctx_r1.formatRealCurrency(ctx_r1.selectedProject.actualExpense || 0), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Budget: \u20B9", ctx_r1.formatRealCurrency(ctx_r1.selectedProject.budget), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r1.getBudgetPercentage(ctx_r1.selectedProject), "%")("background", ctx_r1.getBudgetBarColor(ctx_r1.selectedProject));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r1.getBudgetBarColor(ctx_r1.selectedProject));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.getBudgetPercentage(ctx_r1.selectedProject).toFixed(1), "% Consumed ");
  }
}
function ProjectsComponent_div_14_div_20_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87)(1, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProjectsComponent_div_14_div_20_div_6_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.addMilestone());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 88)(3, "div", 13)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Title *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 13)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Phase *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "select", 90)(11, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Foundation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Structural Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Electrical Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Plumbing Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Finishing Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Inspection Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Due Date *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Status *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "select", 98)(31, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "In Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 101)(38, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.milestoneForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.milestoneForm.invalid || ctx_r1.milestoneSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.milestoneSaving ? "Adding..." : "Add Milestone", " ");
  }
}
function ProjectsComponent_div_14_div_20_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 103)(2, "select", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProjectsComponent_div_14_div_20_tr_22_Template_select_change_2_listener($event) {
      const m_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.updateMilestoneStatus(m_r9._id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "In Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td")(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td")(13, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 106)(19, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_14_div_20_tr_22_Template_button_click_19_listener() {
      const m_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.deleteMilestone(m_r9._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const m_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", m_r9.status)("ngClass", ctx_r1.getMilestoneStatusClass(m_r9.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-decoration", m_r9.status === "Completed" ? "line-through" : "none")("color", m_r9.status === "Completed" ? "#6b6f82" : "#fff");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", m_r9.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r9.phase);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 9, m_r9.dueDate, "mediumDate"));
  }
}
function ProjectsComponent_div_14_div_20_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No milestones logged for this project.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProjectsComponent_div_14_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65)(1, "div", 82)(2, "h4", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Timeline Checklist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_14_div_20_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleMilestoneForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProjectsComponent_div_14_div_20_div_6_Template, 40, 3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 86)(8, "table")(9, "thead")(10, "tr")(11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Milestone Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ProjectsComponent_div_14_div_20_tr_22_Template, 21, 12, "tr", 44)(23, ProjectsComponent_div_14_div_20_tr_23_Template, 3, 0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.showMilestoneForm ? "Cancel" : "+ Add Milestone", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showMilestoneForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.milestones);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.milestones.length === 0);
  }
}
function ProjectsComponent_div_14_div_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87)(1, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProjectsComponent_div_14_div_21_div_6_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.addDailyLog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 109)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Work Description *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "textarea", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 88)(7, "div", 13)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Delay Time (Hours)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 13)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Delay Reason (If applicable)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 101)(16, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.logForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.logForm.invalid || ctx_r1.logSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.logSaving ? "Saving..." : "Submit Log", " ");
  }
}
function ProjectsComponent_div_14_div_21_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td")(5, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td")(10, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const l_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 6, l_r12.date, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](l_r12.workCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", l_r12.delayTime, " hrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", l_r12.delayTime > 0 ? "badge-danger" : "badge-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", l_r12.delayReason || "None", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((l_r12.supervisorId == null ? null : l_r12.supervisorId.name) || "Site Engineer");
  }
}
function ProjectsComponent_div_14_div_21_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No activity logs recorded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProjectsComponent_div_14_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65)(1, "div", 82)(2, "h4", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Site Activity Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_14_div_21_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleLogForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProjectsComponent_div_14_div_21_div_6_Template, 18, 3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 86)(8, "table")(9, "thead")(10, "tr")(11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Work Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Delay (Hrs)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Delay Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Supervisor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ProjectsComponent_div_14_div_21_tr_22_Template, 14, 9, "tr", 44)(23, ProjectsComponent_div_14_div_21_tr_23_Template, 3, 0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.showLogForm ? "Cancel" : "+ New Entry", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showLogForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.progressLogs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.progressLogs.length === 0);
  }
}
function ProjectsComponent_div_14_div_22_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87)(1, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProjectsComponent_div_14_div_22_div_6_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.addBudgetCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 116)(3, "div", 13)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Category *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 117)(7, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Labor Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Material Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Equipment Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Transportation Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Maintenance Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Administrative Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Allocated (\u20B9) *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Actual (\u20B9)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 101)(28, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.budgetForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.budgetForm.invalid || ctx_r1.budgetSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.budgetSaving ? "Saving..." : "Add Category", " ");
  }
}
function ProjectsComponent_div_14_div_22_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td")(9, "div", 126)(10, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 115)(15, "div", 129)(16, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_14_div_22_tr_22_Template_button_click_16_listener() {
      const b_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.incrementExpense(b_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\uD83D\uDCB8 Log Exp");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_14_div_22_tr_22_Template_button_click_18_listener() {
      const b_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.deleteBudgetCategory(b_r16._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const b_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](b_r16.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", ctx_r1.formatRealCurrency(b_r16.allocated), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", b_r16.actual > b_r16.allocated ? "#FF6B6B" : "#00BFA5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u20B9", ctx_r1.formatRealCurrency(b_r16.actual), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r1.getBudgetCategoryRatio(b_r16), "%")("background", b_r16.actual > b_r16.allocated ? "#FF6B6B" : "#00BFA5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", b_r16.actual > b_r16.allocated ? "#FF6B6B" : "#a0a3b1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.getBudgetCategoryRatio(b_r16).toFixed(0), "% ");
  }
}
function ProjectsComponent_div_14_div_22_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No budget limits allocated yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProjectsComponent_div_14_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65)(1, "div", 82)(2, "h4", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Budget Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_14_div_22_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleBudgetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProjectsComponent_div_14_div_22_div_6_Template, 30, 3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 86)(8, "table")(9, "thead")(10, "tr")(11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cost Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Actual Expended");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Utilization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ProjectsComponent_div_14_div_22_tr_22_Template, 20, 12, "tr", 44)(23, ProjectsComponent_div_14_div_22_tr_23_Template, 3, 0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.showBudgetForm ? "Cancel" : "+ Allocate Category", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showBudgetForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.budgets);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.budgets.length === 0);
  }
}
function ProjectsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "div")(4, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_14_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.showDetails = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 61)(11, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_14_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.activeTab = "overview");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_14_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.activeTab = "milestones");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Milestones Timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_14_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.activeTab = "logs");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Daily Site Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_14_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.activeTab = "budget");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Budgets & Costs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProjectsComponent_div_14_div_19_Template, 52, 24, "div", 63)(20, ProjectsComponent_div_14_div_20_Template, 24, 4, "div", 63)(21, ProjectsComponent_div_14_div_21_Template, 24, 4, "div", 63)(22, ProjectsComponent_div_14_div_22_Template, 24, 4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 64)(24, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_14_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.showDetails = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Close Workspace");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.selectedProject.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.getBadgeClass(ctx_r1.selectedProject.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.selectedProject.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab === "milestones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab === "logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab === "budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "milestones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "budget");
  }
}
function ProjectsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55)(1, "div", 131)(2, "h3", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Delete Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Are you sure you want to delete this project? This action is permanent and cannot be undone. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 134)(7, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_15_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.showDeleteConfirm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_15_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.deleteProject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Delete Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
class ProjectsComponent {
  constructor(projectService, fb) {
    this.projectService = projectService;
    this.fb = fb;
    this.projects = [];
    this.loading = true;
    this.showForm = false;
    this.saving = false;
    this.errorMsg = '';
    this.selectedProject = null;
    this.showDetails = false;
    this.showDeleteConfirm = false;
    this.deletingProjectId = '';
    this.isEditing = false;
    this.editingProjectId = '';
    // Workspace subcomponents state
    this.activeTab = 'overview';
    this.milestones = [];
    this.progressLogs = [];
    this.budgets = [];
    this.showMilestoneForm = false;
    this.milestoneSaving = false;
    this.showLogForm = false;
    this.logSaving = false;
    this.showBudgetForm = false;
    this.budgetSaving = false;
    this.Math = Math;
    this.projectForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      client: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      budget: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
      status: ['Planning', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      progress: [0],
      actualExpense: [0]
    });
    this.milestoneForm = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      phase: ['Foundation', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      dueDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      status: ['Pending', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.logForm = this.fb.group({
      workCompleted: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      delayTime: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      delayReason: ['None']
    });
    this.budgetForm = this.fb.group({
      category: ['Labor Cost', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      allocated: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
      actual: [0]
    });
  }
  ngOnInit() {
    this.loadProjects();
  }
  loadProjects() {
    this.loading = true;
    this.projectService.getProjects().subscribe({
      next: res => {
        this.projects = res.success ? res.data : Array.isArray(res) ? res : res.projects || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  toggleNewProjectForm() {
    if (this.showForm && !this.isEditing) {
      this.showForm = false;
    } else {
      this.isEditing = false;
      this.editingProjectId = '';
      this.projectForm.reset({
        status: 'Planning',
        progress: 0,
        actualExpense: 0
      });
      this.showForm = true;
    }
  }
  cancelForm() {
    this.showForm = false;
    this.isEditing = false;
    this.editingProjectId = '';
    this.projectForm.reset({
      status: 'Planning',
      progress: 0,
      actualExpense: 0
    });
  }
  startEdit(project) {
    this.isEditing = true;
    this.editingProjectId = project._id || '';
    this.showForm = true;
    const formatForInput = dateVal => {
      if (!dateVal) return '';
      const d = new Date(dateVal);
      const month = '' + (d.getMonth() + 1);
      const day = '' + d.getDate();
      const year = d.getFullYear();
      return [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-');
    };
    this.projectForm.patchValue({
      name: project.name,
      category: project.category,
      client: project.client,
      location: project.location,
      budget: project.budget,
      status: project.status,
      startDate: formatForInput(project.startDate),
      endDate: formatForInput(project.endDate),
      progress: project.progress || 0,
      actualExpense: project.actualExpense || 0
    });
  }
  saveProject() {
    if (this.projectForm.invalid) return;
    this.saving = true;
    this.errorMsg = '';
    if (this.isEditing) {
      this.projectService.updateProject(this.editingProjectId, this.projectForm.value).subscribe({
        next: () => {
          this.saving = false;
          this.showForm = false;
          this.isEditing = false;
          this.editingProjectId = '';
          this.projectForm.reset({
            status: 'Planning',
            progress: 0,
            actualExpense: 0
          });
          this.loadProjects();
        },
        error: err => {
          this.saving = false;
          this.errorMsg = err?.error?.msg || err?.error?.message || 'Failed to update project.';
        }
      });
    } else {
      this.projectService.createProject(this.projectForm.value).subscribe({
        next: () => {
          this.saving = false;
          this.showForm = false;
          this.projectForm.reset({
            status: 'Planning',
            progress: 0,
            actualExpense: 0
          });
          this.loadProjects();
        },
        error: err => {
          this.saving = false;
          this.errorMsg = err?.error?.msg || err?.error?.message || 'Failed to save project. Ensure all database fields are correct.';
        }
      });
    }
  }
  viewDetails(id) {
    this.projectService.getProjectById(id).subscribe({
      next: res => {
        if (res.success) {
          this.selectedProject = res.data;
          this.showDetails = true;
          this.activeTab = 'overview';
          this.showMilestoneForm = false;
          this.showLogForm = false;
          this.showBudgetForm = false;
          this.loadProjectDetails(id);
        }
      },
      error: err => {
        console.error('Failed to load project details:', err);
      }
    });
  }
  loadProjectDetails(projectId) {
    // Milestones
    this.projectService.getMilestones(projectId).subscribe({
      next: res => {
        this.milestones = res.success ? res.data : [];
      }
    });
    // Daily activity logs
    this.projectService.getProjectProgressLogs(projectId).subscribe({
      next: res => {
        this.progressLogs = res.success ? res.data : [];
      }
    });
    // Budgets breakdown
    this.projectService.getProjectBudgets(projectId).subscribe({
      next: res => {
        this.budgets = res.success ? res.data : [];
      }
    });
  }
  confirmDelete(id) {
    this.deletingProjectId = id;
    this.showDeleteConfirm = true;
  }
  deleteProject() {
    if (!this.deletingProjectId) return;
    this.projectService.deleteProject(this.deletingProjectId).subscribe({
      next: () => {
        this.showDeleteConfirm = false;
        this.deletingProjectId = '';
        this.loadProjects();
      },
      error: err => {
        console.error('Failed to delete project:', err);
        this.showDeleteConfirm = false;
      }
    });
  }
  getBadgeClass(status) {
    const map = {
      'ongoing': 'badge-info',
      'planning': 'badge-warning',
      'delayed': 'badge-danger',
      'completed': 'badge-success',
      'closed': 'badge-danger'
    };
    return map[status?.toLowerCase()] || 'badge-info';
  }
  formatCurrency(val) {
    if (!val) return '0';
    if (val >= 10000000) return (val / 10000000).toFixed(1) + 'Cr';
    if (val >= 100000) return (val / 100000).toFixed(1) + 'L';
    return val.toLocaleString('en-IN');
  }
  formatRealCurrency(val) {
    return (val || 0).toLocaleString('en-IN');
  }
  // --- Budget calculation helpers ---
  getBudgetPercentage(project) {
    if (!project || !project.budget) return 0;
    return (project.actualExpense || 0) / project.budget * 100;
  }
  getBudgetBarColor(project) {
    const percentage = this.getBudgetPercentage(project);
    if (percentage > 100) return '#FF6B6B'; // Red overflow
    if (percentage > 85) return '#ffc107'; // Warning yellow
    return '#00BFA5'; // Healthy green
  }
  getBudgetCategoryRatio(budget) {
    if (!budget || !budget.allocated) return 0;
    return budget.actual / budget.allocated * 100;
  }
  // --- Subcomponent form toggles ---
  toggleMilestoneForm() {
    this.showMilestoneForm = !this.showMilestoneForm;
    if (this.showMilestoneForm) {
      this.milestoneForm.reset({
        status: 'Pending',
        phase: 'Foundation'
      });
    }
  }
  toggleLogForm() {
    this.showLogForm = !this.showLogForm;
    if (this.showLogForm) {
      this.logForm.reset({
        delayTime: 0,
        delayReason: 'None'
      });
    }
  }
  toggleBudgetForm() {
    this.showBudgetForm = !this.showBudgetForm;
    if (this.showBudgetForm) {
      this.budgetForm.reset({
        category: 'Labor Cost',
        allocated: 0,
        actual: 0
      });
    }
  }
  // --- Subcomponent API actions ---
  // Milestones CRUD
  getMilestoneStatusClass(status) {
    const map = {
      'pending': 'status-pending',
      'in progress': 'status-inprogress',
      'completed': 'status-completed'
    };
    return map[status?.toLowerCase()] || 'status-pending';
  }
  addMilestone() {
    if (this.milestoneForm.invalid) return;
    this.milestoneSaving = true;
    this.projectService.createMilestone(this.selectedProject._id, this.milestoneForm.value).subscribe({
      next: () => {
        this.milestoneSaving = false;
        this.showMilestoneForm = false;
        this.milestoneForm.reset({
          status: 'Pending',
          phase: 'Foundation'
        });
        // Reload details & project card to reflect progress changes
        this.loadProjectDetails(this.selectedProject._id);
        this.syncProjectOverallInfo();
      },
      error: err => {
        this.milestoneSaving = false;
        alert(err?.error?.message || 'Failed to add milestone.');
      }
    });
  }
  updateMilestoneStatus(milestoneId, event) {
    const newStatus = event.target.value;
    this.projectService.updateMilestone(milestoneId, {
      status: newStatus
    }).subscribe({
      next: () => {
        this.loadProjectDetails(this.selectedProject._id);
        this.syncProjectOverallInfo();
      },
      error: err => {
        alert(err?.error?.message || 'Failed to update milestone status.');
      }
    });
  }
  deleteMilestone(milestoneId) {
    if (!confirm('Are you sure you want to delete this milestone?')) return;
    this.projectService.deleteMilestone(milestoneId).subscribe({
      next: () => {
        this.loadProjectDetails(this.selectedProject._id);
        this.syncProjectOverallInfo();
      },
      error: err => {
        alert(err?.error?.message || 'Failed to delete milestone.');
      }
    });
  }
  // Daily Site Logs Actions
  addDailyLog() {
    if (this.logForm.invalid) return;
    this.logSaving = true;
    // Supervisor mock fallback - in real deployment, it will be the logged in user
    const localUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const supervisorId = localUser.id || '6659c9b68e0d5d21a8a25c11'; // seeded Admin/PM id fallback
    const payload = {
      ...this.logForm.value,
      projectId: this.selectedProject._id,
      supervisorId
    };
    this.projectService.logDailyProgress(payload).subscribe({
      next: () => {
        this.logSaving = false;
        this.showLogForm = false;
        this.logForm.reset({
          delayTime: 0,
          delayReason: 'None'
        });
        this.loadProjectDetails(this.selectedProject._id);
      },
      error: err => {
        this.logSaving = false;
        alert(err?.error?.message || 'Failed to add daily log.');
      }
    });
  }
  // Budget Breakdown Actions
  addBudgetCategory() {
    if (this.budgetForm.invalid) return;
    this.budgetSaving = true;
    this.projectService.createProjectBudget(this.selectedProject._id, this.budgetForm.value).subscribe({
      next: () => {
        this.budgetSaving = false;
        this.showBudgetForm = false;
        this.budgetForm.reset({
          category: 'Labor Cost',
          allocated: 0,
          actual: 0
        });
        this.loadProjectDetails(this.selectedProject._id);
      },
      error: err => {
        this.budgetSaving = false;
        alert(err?.error?.message || 'Failed to add budget category.');
      }
    });
  }
  deleteBudgetCategory(budgetId) {
    if (!confirm('Are you sure you want to delete this budget category?')) return;
    this.projectService.deleteBudget(budgetId).subscribe({
      next: () => {
        this.loadProjectDetails(this.selectedProject._id);
      },
      error: err => {
        alert(err?.error?.message || 'Failed to delete budget category.');
      }
    });
  }
  incrementExpense(budget) {
    const amtStr = window.prompt(`Enter amount to add under ${budget.category} (₹):`);
    if (!amtStr) return;
    const amount = parseFloat(amtStr);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid positive number.');
      return;
    }
    const updatedActual = (budget.actual || 0) + amount;
    this.projectService.updateBudget(budget._id, {
      actual: updatedActual
    }).subscribe({
      next: () => {
        // Also update project's overall actualExpense
        const newProjectExpense = (this.selectedProject.actualExpense || 0) + amount;
        this.projectService.updateProject(this.selectedProject._id, {
          actualExpense: newProjectExpense
        }).subscribe({
          next: projRes => {
            this.selectedProject = projRes.data;
            this.loadProjectDetails(this.selectedProject._id);
            this.loadProjects(); // Reload primary grid
          }
        });
      },
      error: err => {
        alert(err?.error?.message || 'Failed to record expense.');
      }
    });
  }
  // Reload project metadata internally to sync progress & budgets on the card
  syncProjectOverallInfo() {
    this.projectService.getProjectById(this.selectedProject._id).subscribe({
      next: res => {
        if (res.success) {
          this.selectedProject = res.data;
          this.loadProjects();
        }
      }
    });
  }
  static {
    this.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 16,
      vars: 7,
      consts: [[1, "page-header"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between"], [1, "btn", "btn-primary", 3, "click"], ["class", "glass-card", "style", "padding:28px;margin-bottom:28px", 4, "ngIf"], [1, "table-container"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [1, "glass-card", 2, "padding", "28px", "margin-bottom", "28px"], [2, "margin-bottom", "20px", "font-size", "16px"], [3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "field-group"], ["formControlName", "name", "placeholder", "e.g. Metro Bridge Phase 2", 1, "input-field"], ["formControlName", "category", 1, "input-field"], ["value", ""], ["value", "Residential"], ["value", "Commercial"], ["value", "Infrastructure"], ["value", "Industrial"], ["value", "Government Projects"], ["formControlName", "client", "placeholder", "Client name", 1, "input-field"], ["formControlName", "location", "placeholder", "City, State", 1, "input-field"], ["type", "number", "formControlName", "budget", "placeholder", "5000000", 1, "input-field"], ["formControlName", "status", 1, "input-field"], ["value", "Planning"], ["value", "Ongoing"], ["value", "Delayed"], ["value", "Completed"], ["value", "Closed"], ["type", "date", "formControlName", "startDate", 1, "input-field"], ["type", "date", "formControlName", "endDate", 1, "input-field"], ["class", "field-group", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], [2, "margin-top", "20px", "display", "flex", "gap", "12px"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], [2, "display", "flex", "align-items", "center", "gap", "10px"], ["type", "range", "formControlName", "progress", "min", "0", "max", "100", 1, "progress-slider", 2, "flex", "1"], [2, "font-size", "14px", "color", "#fff", "width", "35px"], ["type", "number", "formControlName", "actualExpense", "placeholder", "0", 1, "input-field"], [1, "error-msg"], [1, "loading-state"], [4, "ngFor", "ngForOf"], [2, "color", "#fff"], [1, "badge", 3, "ngClass"], [1, "progress-wrap"], [1, "progress-bar"], [1, "progress-fill"], [2, "display", "flex", "gap", "8px"], ["title", "View Workspace", 1, "action-btn", "detail-btn", 3, "click"], ["title", "Edit", 1, "action-btn", "edit-btn", 3, "click"], ["title", "Delete", 1, "action-btn", "delete-btn", 3, "click"], [1, "empty-state"], [1, "modal-overlay"], [1, "modal-card", 2, "max-width", "850px", "width", "95%"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "18px", "border-bottom", "1px solid rgba(255,255,255,0.1)", "padding-bottom", "12px"], [2, "font-size", "20px", "color", "#fff", "margin", "0"], [1, "badge", 2, "margin-top", "4px", 3, "ngClass"], [2, "background", "none", "border", "none", "color", "#a0a3b1", "cursor", "pointer", "font-size", "24px", "padding", "0", "line-height", "1", 3, "click"], [1, "modal-tabs"], [1, "tab-btn", 3, "click"], ["class", "tab-content", "style", "padding:10px 0", 4, "ngIf"], [2, "margin-top", "24px", "text-align", "right"], [1, "tab-content", 2, "padding", "10px 0"], [1, "overview-grid"], [1, "overview-info"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], ["class", "detail-row", 4, "ngIf"], [1, "overview-stats"], [1, "overview-stat-box"], [1, "stat-lbl"], [2, "display", "flex", "align-items", "center", "gap", "10px", "margin-top", "8px"], [1, "progress-bar", 2, "height", "12px", "flex", "1"], [2, "font-weight", "700", "color", "#fff"], [1, "overview-stat-box", 2, "margin-top", "16px"], [2, "display", "flex", "justify-content", "space-between", "font-size", "12px", "color", "#a0a3b1", "margin-bottom", "4px", "margin-top", "8px"], [1, "progress-bar", 2, "height", "12px"], [2, "text-align", "right", "font-size", "12px", "margin-top", "4px"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "12px"], [2, "color", "#fff", "margin", "0", "font-size", "15px"], [1, "btn", "btn-outline", 2, "padding", "6px 12px", "font-size", "12px", 3, "click"], ["class", "glass-card", "style", "padding:16px;margin-bottom:16px", 4, "ngIf"], [1, "mini-table-container", 2, "max-height", "280px", "overflow-y", "auto"], [1, "glass-card", 2, "padding", "16px", "margin-bottom", "16px"], [1, "form-grid", 2, "grid-template-columns", "1fr 1fr", "gap", "12px", "margin-bottom", "12px"], ["formControlName", "title", "placeholder", "e.g. Pour foundation walls", 1, "input-field", 2, "padding", "8px 12px"], ["formControlName", "phase", 1, "input-field", 2, "padding", "8px 12px"], ["value", "Foundation"], ["value", "Structural Work"], ["value", "Electrical Work"], ["value", "Plumbing Work"], ["value", "Finishing Work"], ["value", "Inspection Work"], ["type", "date", "formControlName", "dueDate", 1, "input-field", 2, "padding", "8px 12px"], ["formControlName", "status", 1, "input-field", 2, "padding", "8px 12px"], ["value", "Pending"], ["value", "In Progress"], [2, "text-align", "right"], ["type", "submit", 1, "btn", "btn-primary", 2, "padding", "6px 16px", "font-size", "12px", 3, "disabled"], [2, "width", "150px"], [1, "select-status-badge", 3, "change", "value", "ngClass"], [1, "badge", "badge-info", 2, "font-size", "10px"], [2, "width", "60px", "text-align", "center"], ["title", "Delete", 2, "background", "none", "border", "none", "color", "#FF6B6B", "cursor", "pointer", "font-size", "15px", 3, "click"], ["colspan", "5", 2, "text-align", "center", "color", "#6b6f82", "padding", "24px"], [1, "field-group", 2, "margin-bottom", "12px"], ["formControlName", "workCompleted", "placeholder", "Brief detail about construction work performed today...", 1, "input-field", 2, "padding", "8px 12px", "height", "55px", "resize", "none"], ["type", "number", "formControlName", "delayTime", 1, "input-field", 2, "padding", "8px 12px"], ["formControlName", "delayReason", "placeholder", "Weather, concrete truck late, etc.", 1, "input-field", 2, "padding", "8px 12px"], [2, "white-space", "nowrap"], [2, "color", "#fff", "font-size", "13px"], [2, "text-align", "center"], [1, "form-grid", 2, "grid-template-columns", "1fr 1fr 1fr", "gap", "12px", "margin-bottom", "12px"], ["formControlName", "category", 1, "input-field", 2, "padding", "8px 12px"], ["value", "Labor Cost"], ["value", "Material Cost"], ["value", "Equipment Cost"], ["value", "Transportation Cost"], ["value", "Maintenance Cost"], ["value", "Administrative Cost"], ["type", "number", "formControlName", "allocated", 1, "input-field", 2, "padding", "8px 12px"], ["type", "number", "formControlName", "actual", 1, "input-field", 2, "padding", "8px 12px"], [2, "display", "flex", "align-items", "center", "gap", "8px"], [1, "progress-bar", 2, "height", "6px", "width", "75px", "background", "rgba(255,255,255,0.05)"], [2, "font-size", "12px", "font-weight", "600"], [2, "display", "flex", "gap", "12px", "justify-content", "center"], ["title", "Log Expense", 2, "background", "none", "border", "none", "color", "#00BFA5", "cursor", "pointer", "font-size", "14px", 3, "click"], [1, "modal-card", 2, "max-width", "400px"], [2, "margin-bottom", "12px", "font-size", "16px", "color", "#fff"], [2, "color", "#a0a3b1", "font-size", "14px", "line-height", "1.5", "margin-bottom", "24px"], [2, "display", "flex", "justify-content", "end", "gap", "12px"], [1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-primary", 2, "background", "#FF6B6B", 3, "click"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Manage and track all your construction projects.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_7_listener() {
            return ctx.toggleNewProjectForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProjectsComponent_div_9_Template, 67, 7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectsComponent_div_11_Template, 2, 0, "div", 5)(12, ProjectsComponent_table_12_Template, 21, 1, "table", 6)(13, ProjectsComponent_div_13_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProjectsComponent_div_14_Template, 26, 15, "div", 8)(15, ProjectsComponent_div_15_Template, 11, 0, "div", 8);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.showForm && !ctx.isEditing ? "Close" : "+ New Project", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.projects.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDetails && ctx.selectedProject);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDeleteConfirm);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: [".form-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 12px; }\n    .field-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n    .field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 13px; font-weight: 600; color: #a0a3b1; margin-bottom: 6px; }\n    .input-field[_ngcontent-%COMP%] {\n      padding: 11px 14px; background: rgba(255,255,255,0.05);\n      border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;\n      color: #fff; font-size: 14px; font-family: 'Inter', sans-serif; outline: none;\n    }\n    .input-field[_ngcontent-%COMP%]:focus { border-color: #6C63FF; }\n    .input-field[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] { background: #1a1d2e; color: #fff; }\n    .loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] { padding: 40px; text-align: center; color: #6b6f82; }\n    .progress-wrap[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\n    .progress-bar[_ngcontent-%COMP%] { flex: 1; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; }\n    .progress-fill[_ngcontent-%COMP%] { height: 100%; background: linear-gradient(90deg, #6C63FF, #00BFA5); border-radius: 3px; }\n    .progress-wrap[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 12px; color: #a0a3b1; width: 35px; }\n    .error-msg[_ngcontent-%COMP%] { color: #FF6B6B; font-size: 13px; margin-top: 12px; padding: 10px 14px; background: rgba(255,107,107,0.1); border-radius: 8px; }\n    \n    .action-btn[_ngcontent-%COMP%] {\n      background: rgba(255,255,255,0.05);\n      border: 1px solid rgba(255,255,255,0.1);\n      border-radius: 6px;\n      color: #fff;\n      padding: 6px 10px;\n      font-size: 13px;\n      cursor: pointer;\n      transition: all 0.2s;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .action-btn[_ngcontent-%COMP%]:hover {\n      background: rgba(255,255,255,0.15);\n      transform: translateY(-1px);\n    }\n    .edit-btn[_ngcontent-%COMP%]:hover {\n      border-color: #6C63FF;\n      color: #6C63FF;\n    }\n    .delete-btn[_ngcontent-%COMP%]:hover {\n      border-color: #FF6B6B;\n      color: #FF6B6B;\n    }\n    .detail-btn[_ngcontent-%COMP%]:hover {\n      border-color: #00BFA5;\n      color: #00BFA5;\n    }\n    .modal-overlay[_ngcontent-%COMP%] {\n      position: fixed;\n      top: 0; left: 0; right: 0; bottom: 0;\n      background: rgba(0,0,0,0.6);\n      backdrop-filter: blur(4px);\n      z-index: 1000;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .modal-card[_ngcontent-%COMP%] {\n      width: 100%;\n      background: #111422;\n      border: 1px solid rgba(255,255,255,0.1);\n      border-radius: 16px;\n      padding: 24px;\n      box-shadow: 0 20px 40px rgba(0,0,0,0.5);\n    }\n    .detail-row[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      border-bottom: 1px solid rgba(255,255,255,0.05);\n      padding: 10px 0;\n      font-size: 14px;\n    }\n    .detail-label[_ngcontent-%COMP%] {\n      color: #a0a3b1;\n      font-weight: 500;\n    }\n    .detail-value[_ngcontent-%COMP%] {\n      color: #fff;\n      font-weight: 600;\n    }\n    .progress-slider[_ngcontent-%COMP%] {\n      -webkit-appearance: none;\n      height: 6px;\n      border-radius: 3px;\n      background: rgba(255,255,255,0.1);\n      outline: none;\n    }\n    .progress-slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      width: 16px;\n      height: 16px;\n      border-radius: 50%;\n      background: #6C63FF;\n      cursor: pointer;\n    }\n\n    \n\n    .modal-tabs[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 8px;\n      margin-bottom: 20px;\n      border-bottom: 1px solid rgba(255,255,255,0.08);\n      padding-bottom: 8px;\n    }\n    .tab-btn[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      color: #a0a3b1;\n      padding: 8px 16px;\n      cursor: pointer;\n      font-size: 14px;\n      font-weight: 500;\n      transition: all 0.2s;\n      border-bottom: 2px solid transparent;\n      outline: none;\n    }\n    .tab-btn[_ngcontent-%COMP%]:hover {\n      color: #fff;\n    }\n    .tab-btn.active[_ngcontent-%COMP%] {\n      color: #6C63FF;\n      border-bottom-color: #6C63FF;\n      font-weight: 600;\n    }\n    .overview-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 24px;\n    }\n    .overview-info[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n    }\n    .overview-stats[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n    }\n    .overview-stat-box[_ngcontent-%COMP%] {\n      background: rgba(255,255,255,0.02);\n      border: 1px solid rgba(255,255,255,0.05);\n      border-radius: 8px;\n      padding: 18px;\n    }\n    .stat-lbl[_ngcontent-%COMP%] {\n      font-size: 11px;\n      font-weight: 600;\n      color: #a0a3b1;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n    }\n    .mini-table-container[_ngcontent-%COMP%] {\n      background: rgba(255,255,255,0.01);\n      border: 1px solid rgba(255,255,255,0.06);\n      border-radius: 8px;\n    }\n    .select-status-badge[_ngcontent-%COMP%] {\n      background: rgba(255,255,255,0.05);\n      border: 1px solid rgba(255,255,255,0.08);\n      border-radius: 6px;\n      color: #fff;\n      font-size: 12px;\n      padding: 4px 8px;\n      outline: none;\n      cursor: pointer;\n    }\n    .status-pending[_ngcontent-%COMP%] { color: #ffc107; border-color: rgba(255,193,7,0.3); }\n    .status-inprogress[_ngcontent-%COMP%] { color: #6C63FF; border-color: rgba(108,99,255,0.3); }\n    .status-completed[_ngcontent-%COMP%] { color: #00BFA5; border-color: rgba(0,191,165,0.3); }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJLGFBQWEsYUFBYSxFQUFFLDhCQUE4QixFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRTtJQUM1RixlQUFlLGFBQWEsRUFBRSxzQkFBc0IsRUFBRTtJQUN0RCxxQkFBcUIsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtJQUM1RjtNQUNFLGtCQUFrQixFQUFFLGtDQUFrQztNQUN0RCx1Q0FBdUMsRUFBRSxrQkFBa0I7TUFDM0QsV0FBVyxFQUFFLGVBQWUsRUFBRSxnQ0FBZ0MsRUFBRSxhQUFhO0lBQy9FO0lBQ0EscUJBQXFCLHFCQUFxQixFQUFFO0lBQzVDLHNCQUFzQixtQkFBbUIsRUFBRSxXQUFXLEVBQUU7SUFDeEQsK0JBQStCLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUU7SUFDbEYsaUJBQWlCLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUU7SUFDaEUsZ0JBQWdCLE9BQU8sRUFBRSxXQUFXLEVBQUUsa0NBQWtDLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUU7SUFDaEgsaUJBQWlCLFlBQVksRUFBRSxvREFBb0QsRUFBRSxrQkFBa0IsRUFBRTtJQUN6RyxzQkFBc0IsZUFBZSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUU7SUFDcEUsYUFBYSxjQUFjLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGlDQUFpQyxFQUFFLGtCQUFrQixFQUFFOztJQUUzSTtNQUNFLGtDQUFrQztNQUNsQyx1Q0FBdUM7TUFDdkMsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGVBQWU7TUFDZixvQkFBb0I7TUFDcEIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGtDQUFrQztNQUNsQywyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLHFCQUFxQjtNQUNyQixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxxQkFBcUI7TUFDckIsY0FBYztJQUNoQjtJQUNBO01BQ0UscUJBQXFCO01BQ3JCLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGVBQWU7TUFDZixNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTO01BQ3BDLDJCQUEyQjtNQUMzQiwwQkFBMEI7TUFDMUIsYUFBYTtNQUNiLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxXQUFXO01BQ1gsbUJBQW1CO01BQ25CLHVDQUF1QztNQUN2QyxtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLHVDQUF1QztJQUN6QztJQUNBO01BQ0UsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QiwrQ0FBK0M7TUFDL0MsZUFBZTtNQUNmLGVBQWU7SUFDakI7SUFDQTtNQUNFLGNBQWM7TUFDZCxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLFdBQVc7TUFDWCxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLHdCQUF3QjtNQUN4QixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGlDQUFpQztNQUNqQyxhQUFhO0lBQ2Y7SUFDQTtNQUNFLHdCQUF3QjtNQUN4QixXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsZUFBZTtJQUNqQjs7SUFFQSxpQ0FBaUM7SUFDakM7TUFDRSxhQUFhO01BQ2IsUUFBUTtNQUNSLG1CQUFtQjtNQUNuQiwrQ0FBK0M7TUFDL0MsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsb0JBQW9CO01BQ3BCLG9DQUFvQztNQUNwQyxhQUFhO0lBQ2Y7SUFDQTtNQUNFLFdBQVc7SUFDYjtJQUNBO01BQ0UsY0FBYztNQUNkLDRCQUE0QjtNQUM1QixnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsU0FBUztJQUNYO0lBQ0E7TUFDRSxhQUFhO01BQ2Isc0JBQXNCO0lBQ3hCO0lBQ0E7TUFDRSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0Usa0NBQWtDO01BQ2xDLHdDQUF3QztNQUN4QyxrQkFBa0I7TUFDbEIsYUFBYTtJQUNmO0lBQ0E7TUFDRSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCx5QkFBeUI7TUFDekIscUJBQXFCO0lBQ3ZCO0lBQ0E7TUFDRSxrQ0FBa0M7TUFDbEMsd0NBQXdDO01BQ3hDLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0Usa0NBQWtDO01BQ2xDLHdDQUF3QztNQUN4QyxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLGVBQWU7SUFDakI7SUFDQSxrQkFBa0IsY0FBYyxFQUFFLGlDQUFpQyxFQUFFO0lBQ3JFLHFCQUFxQixjQUFjLEVBQUUsa0NBQWtDLEVBQUU7SUFDekUsb0JBQW9CLGNBQWMsRUFBRSxpQ0FBaUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5mb3JtLWdyaWQgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IGdhcDogMTZweDsgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxuICAgIC5maWVsZC1ncm91cCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAuZmllbGQtZ3JvdXAgbGFiZWwgeyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjYTBhM2IxOyBtYXJnaW4tYm90dG9tOiA2cHg7IH1cbiAgICAuaW5wdXQtZmllbGQge1xuICAgICAgcGFkZGluZzogMTFweCAxNHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxNHB4OyBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjsgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gICAgLmlucHV0LWZpZWxkOmZvY3VzIHsgYm9yZGVyLWNvbG9yOiAjNkM2M0ZGOyB9XG4gICAgLmlucHV0LWZpZWxkIG9wdGlvbiB7IGJhY2tncm91bmQ6ICMxYTFkMmU7IGNvbG9yOiAjZmZmOyB9XG4gICAgLmxvYWRpbmctc3RhdGUsIC5lbXB0eS1zdGF0ZSB7IHBhZGRpbmc6IDQwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6ICM2YjZmODI7IH1cbiAgICAucHJvZ3Jlc3Mtd3JhcCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDsgfVxuICAgIC5wcm9ncmVzcy1iYXIgeyBmbGV4OiAxOyBoZWlnaHQ6IDZweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTsgYm9yZGVyLXJhZGl1czogM3B4OyBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLnByb2dyZXNzLWZpbGwgeyBoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzZDNjNGRiwgIzAwQkZBNSk7IGJvcmRlci1yYWRpdXM6IDNweDsgfVxuICAgIC5wcm9ncmVzcy13cmFwIHNwYW4geyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjYTBhM2IxOyB3aWR0aDogMzVweDsgfVxuICAgIC5lcnJvci1tc2cgeyBjb2xvcjogI0ZGNkI2QjsgZm9udC1zaXplOiAxM3B4OyBtYXJnaW4tdG9wOiAxMnB4OyBwYWRkaW5nOiAxMHB4IDE0cHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDEwNywxMDcsMC4xKTsgYm9yZGVyLXJhZGl1czogOHB4OyB9XG4gICAgXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgfVxuICAgIC5lZGl0LWJ0bjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICM2QzYzRkY7XG4gICAgICBjb2xvcjogIzZDNjNGRjtcbiAgICB9XG4gICAgLmRlbGV0ZS1idG46aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjRkY2QjZCO1xuICAgICAgY29sb3I6ICNGRjZCNkI7XG4gICAgfVxuICAgIC5kZXRhaWwtYnRuOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwQkZBNTtcbiAgICAgIGNvbG9yOiAjMDBCRkE1O1xuICAgIH1cbiAgICAubW9kYWwtb3ZlcmxheSB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAubW9kYWwtY2FyZCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICMxMTE0MjI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICB9XG4gICAgLmRldGFpbC1yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAuZGV0YWlsLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAjYTBhM2IxO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLmRldGFpbC12YWx1ZSB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5wcm9ncmVzcy1zbGlkZXIge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAucHJvZ3Jlc3Mtc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICB3aWR0aDogMTZweDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6ICM2QzYzRkY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLyogTW9kYWwgV29ya3NwYWNlIFRhYnMgU3R5bGluZyAqL1xuICAgIC5tb2RhbC10YWJzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIC50YWItYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogI2EwYTNiMTtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gICAgLnRhYi1idG46aG92ZXIge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC50YWItYnRuLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogIzZDNjNGRjtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM2QzYzRkY7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAub3ZlcnZpZXctZ3JpZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgZ2FwOiAyNHB4O1xuICAgIH1cbiAgICAub3ZlcnZpZXctaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLm92ZXJ2aWV3LXN0YXRzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5vdmVydmlldy1zdGF0LWJveCB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDIpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgfVxuICAgIC5zdGF0LWxibCB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICNhMGEzYjE7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cbiAgICAubWluaS10YWJsZS1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjAxKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuICAgIC5zZWxlY3Qtc3RhdHVzLWJhZGdlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLnN0YXR1cy1wZW5kaW5nIHsgY29sb3I6ICNmZmMxMDc7IGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMTkzLDcsMC4zKTsgfVxuICAgIC5zdGF0dXMtaW5wcm9ncmVzcyB7IGNvbG9yOiAjNkM2M0ZGOyBib3JkZXItY29sb3I6IHJnYmEoMTA4LDk5LDI1NSwwLjMpOyB9XG4gICAgLnN0YXR1cy1jb21wbGV0ZWQgeyBjb2xvcjogIzAwQkZBNTsgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMTkxLDE2NSwwLjMpOyB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1905:
/*!*********************************************************!*\
  !*** ./src/app/components/reports/reports.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsComponent: () => (/* binding */ ReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_reporting_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/reporting.service */ 5828);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 3840);





function ReportsComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "sync");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Fetching analytical dataset... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReportsComponent_table_133_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "strong", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td")(15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td")(18, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r1.module.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.module, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", ctx_r2.formatCurrency(item_r1.amount), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.getStatusBadge(item_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.date ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 10, item_r1.date, "mediumDate") : "N/A");
  }
}
function ReportsComponent_table_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Module");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Record Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Reference #");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Valuation (INR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Timestamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ReportsComponent_table_133_tr_20_Template, 23, 13, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.items);
  }
}
function ReportsComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48)(1, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "find_in_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No matching report entries found for the selected criteria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ReportsComponent {
  constructor(reportingService) {
    this.reportingService = reportingService;
    this.loading = true;
    this.selectedPreset = 'executive';
    this.filters = {
      module: 'all',
      status: 'all',
      startDate: '',
      endDate: '',
      search: ''
    };
    this.items = [];
  }
  ngOnInit() {
    this.loadReportData();
  }
  loadReportData() {
    this.loading = true;
    this.reportingService.getReportData(this.filters).subscribe({
      next: res => {
        this.items = res.success ? res.data : [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyPreset(preset) {
    this.selectedPreset = preset;
    if (preset === 'executive') {
      this.filters.module = 'all';
    } else if (preset === 'procurement') {
      this.filters.module = 'procurement';
    } else if (preset === 'projects') {
      this.filters.module = 'projects';
    } else if (preset === 'inventory') {
      this.filters.module = 'inventory';
    }
    this.loadReportData();
  }
  resetFilters() {
    this.selectedPreset = 'executive';
    this.filters = {
      module: 'all',
      status: 'all',
      startDate: '',
      endDate: '',
      search: ''
    };
    this.loadReportData();
  }
  get totalValuation() {
    return this.items.reduce((acc, i) => acc + (i.amount || 0), 0);
  }
  get normalCount() {
    return this.items.filter(i => !i.status.toLowerCase().includes('low') && !i.status.toLowerCase().includes('pending')).length;
  }
  get alertCount() {
    return this.items.filter(i => i.status.toLowerCase().includes('low') || i.status.toLowerCase().includes('pending')).length;
  }
  getStatusBadge(status) {
    const s = status?.toLowerCase() || '';
    if (s.includes('low') || s.includes('cancel')) return 'badge-danger';
    if (s.includes('pending') || s.includes('hold')) return 'badge-warning';
    if (s.includes('active') || s.includes('approved') || s.includes('completed')) return 'badge-success';
    return 'badge-info';
  }
  formatCurrency(val) {
    if (!val) return '0';
    if (val >= 10000000) return (val / 10000000).toFixed(2) + ' Cr';
    if (val >= 100000) return (val / 100000).toFixed(2) + ' L';
    return val.toLocaleString();
  }
  exportCsv() {
    this.reportingService.exportToCsv('BuildTrack_Report', this.items);
  }
  exportJson() {
    this.reportingService.exportToJson('BuildTrack_Report', this.items);
  }
  exportPdf() {
    this.reportingService.printPdfReport('BuildTrack Executive Analytics & Operations Audit', this.items);
  }
  static {
    this.ɵfac = function ReportsComponent_Factory(t) {
      return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_reporting_service__WEBPACK_IMPORTED_MODULE_0__.ReportingService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ReportsComponent,
      selectors: [["app-reports"]],
      decls: 135,
      vars: 23,
      consts: [[1, "reports-page"], [1, "page-header"], [1, "gradient-text"], [1, "export-actions"], [1, "btn", "btn-outline", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "template-presets"], [1, "preset-card", 3, "click"], [1, "preset-icon"], [1, "preset-info"], [1, "preset-title"], [1, "preset-desc"], [1, "filter-card"], [1, "filter-row"], [1, "filter-group"], [3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "procurement"], ["value", "projects"], ["value", "inventory"], ["value", "active"], ["value", "approved"], ["value", "completed"], ["value", "low stock"], ["value", "pending"], ["type", "date", 3, "ngModelChange", "change", "ngModel"], [1, "filter-group", "search-group"], [1, "search-input-wrap"], ["type", "text", "placeholder", "Search by title, PO #, category...", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "filter-group", "reset-group"], [1, "btn", "btn-outline", 3, "click"], [1, "summary-metrics"], [1, "metric-card"], [1, "m-label"], [1, "m-val"], [1, "m-val", 2, "color", "#00BFA5"], [1, "m-val", 2, "color", "#9c95ff"], [1, "m-val", 2, "color", "#FF6B6B"], [1, "table-container"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "loading-state"], [1, "spin"], [4, "ngFor", "ngForOf"], [1, "module-badge", 3, "ngClass"], [2, "color", "#fff"], [1, "badge", 3, "ngClass"], [1, "empty-state"], [2, "font-size", "48px", "width", "48px", "height", "48px", "color", "#4a4d64"]],
      template: function ReportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Reporting ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Hub");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " & Audits \uD83D\uDCCA");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Generate, filter, and export comprehensive construction project analytical reports.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3)(11, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsComponent_Template_button_click_11_listener() {
            return ctx.exportCsv();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "file_download");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Export CSV ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsComponent_Template_button_click_15_listener() {
            return ctx.exportJson();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Export JSON ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsComponent_Template_button_click_19_listener() {
            return ctx.exportPdf();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "picture_as_pdf");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Print PDF Report ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 6)(24, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsComponent_Template_button_click_24_listener() {
            return ctx.applyPreset("executive");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8)(26, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9)(29, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Executive Summary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Cross-module operational summary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsComponent_Template_button_click_33_listener() {
            return ctx.applyPreset("procurement");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 8)(35, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "shopping_cart");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9)(38, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Procurement & POs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Purchase order status & spend");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsComponent_Template_button_click_42_listener() {
            return ctx.applyPreset("projects");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 8)(44, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "business");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 9)(47, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Projects & Budgets");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Progress and capital allocations");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsComponent_Template_button_click_51_listener() {
            return ctx.applyPreset("inventory");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 8)(53, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "inventory_2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 9)(56, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Inventory & Stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Stock levels and material valuation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 12)(61, "div", 13)(62, "div", 14)(63, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Module");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ReportsComponent_Template_select_ngModelChange_65_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.filters.module, $event) || (ctx.filters.module = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ReportsComponent_Template_select_change_65_listener() {
            return ctx.loadReportData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "All Modules");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Procurement & POs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Projects & Budgets");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Inventory & Stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 14)(75, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Status Filter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ReportsComponent_Template_select_ngModelChange_77_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.filters.status, $event) || (ctx.filters.status = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ReportsComponent_Template_select_change_77_listener() {
            return ctx.loadReportData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "All Statuses");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Approved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Low Stock Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 14)(91, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Start Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ReportsComponent_Template_input_ngModelChange_93_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.filters.startDate, $event) || (ctx.filters.startDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ReportsComponent_Template_input_change_93_listener() {
            return ctx.loadReportData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 14)(95, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "End Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ReportsComponent_Template_input_ngModelChange_97_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.filters.endDate, $event) || (ctx.filters.endDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ReportsComponent_Template_input_change_97_listener() {
            return ctx.loadReportData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 26)(99, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Search Query");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 27)(102, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ReportsComponent_Template_input_ngModelChange_104_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.filters.search, $event) || (ctx.filters.search = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function ReportsComponent_Template_input_keyup_enter_104_listener() {
            return ctx.loadReportData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 29)(106, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsComponent_Template_button_click_106_listener() {
            return ctx.resetFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "restart_alt");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " Reset ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 31)(111, "div", 32)(112, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Report Records");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 32)(117, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Total Financial Valuation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 32)(122, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Active / Normal Items");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 32)(127, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Alerts / Pending Items");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](132, ReportsComponent_div_132_Template, 4, 0, "div", 39)(133, ReportsComponent_table_133_Template, 21, 1, "table", 40)(134, ReportsComponent_div_134_Template, 5, 0, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || ctx.items.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || ctx.items.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || ctx.items.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.selectedPreset === "executive");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.selectedPreset === "procurement");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.selectedPreset === "projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.selectedPreset === "inventory");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.filters.module);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.filters.status);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.filters.startDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.filters.endDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.filters.search);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.items.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", ctx.formatCurrency(ctx.totalValuation), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.normalCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.alertCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.items.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.items.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: [".reports-page[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 24px; }\n    .page-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      flex-wrap: wrap;\n      gap: 16px;\n    }\n    .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 26px; font-weight: 800; margin: 0 0 6px 0; }\n    .page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; color: #a0a3b1; font-size: 14px; }\n\n    .export-actions[_ngcontent-%COMP%] { display: flex; gap: 12px; }\n    .btn[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      padding: 10px 18px;\n      border-radius: 10px;\n      font-weight: 600;\n      cursor: pointer;\n      font-size: 13px;\n      transition: all 0.2s ease;\n    }\n    .btn-outline[_ngcontent-%COMP%] {\n      background: rgba(255, 255, 255, 0.05);\n      border: 1px solid rgba(255, 255, 255, 0.12);\n      color: #fff;\n    }\n    .btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n      background: rgba(255, 255, 255, 0.12);\n    }\n    .btn-primary[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, #6C63FF, #00BFA5);\n      border: none;\n      color: #fff;\n      box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);\n    }\n    .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n      transform: translateY(-1px);\n      box-shadow: 0 6px 20px rgba(108, 99, 255, 0.45);\n    }\n    .btn[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\n\n    \n\n    .template-presets[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n      gap: 16px;\n    }\n    .preset-card[_ngcontent-%COMP%] {\n      background: #1a1d2e;\n      border: 1px solid rgba(255, 255, 255, 0.08);\n      border-radius: 14px;\n      padding: 16px;\n      display: flex;\n      align-items: center;\n      gap: 14px;\n      cursor: pointer;\n      text-align: left;\n      transition: all 0.2s ease;\n    }\n    .preset-card[_ngcontent-%COMP%]:hover, .preset-card.active[_ngcontent-%COMP%] {\n      border-color: #6C63FF;\n      background: rgba(108, 99, 255, 0.1);\n      transform: translateY(-2px);\n    }\n    .preset-icon[_ngcontent-%COMP%] {\n      width: 42px;\n      height: 42px;\n      border-radius: 12px;\n      background: rgba(108, 99, 255, 0.15);\n      color: #9c95ff;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .preset-info[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n    .preset-title[_ngcontent-%COMP%] { font-size: 14px; font-weight: 700; color: #fff; }\n    .preset-desc[_ngcontent-%COMP%] { font-size: 11px; color: #a0a3b1; margin-top: 2px; }\n\n    \n\n    .filter-card[_ngcontent-%COMP%] {\n      background: #1a1d2e;\n      border: 1px solid rgba(255, 255, 255, 0.08);\n      border-radius: 16px;\n      padding: 20px;\n    }\n    .filter-row[_ngcontent-%COMP%] {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 16px;\n      align-items: flex-end;\n    }\n    .filter-group[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 6px;\n      flex: 1;\n      min-width: 140px;\n    }\n    .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n      font-size: 11px;\n      font-weight: 700;\n      color: #a0a3b1;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n    }\n    .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .filter-group[_ngcontent-%COMP%]   input[type=\"date\"][_ngcontent-%COMP%] {\n      background: #0f1117;\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      border-radius: 10px;\n      padding: 10px 12px;\n      color: #fff;\n      font-size: 13px;\n      outline: none;\n    }\n    .search-group[_ngcontent-%COMP%] { flex: 2; min-width: 220px; }\n    .search-input-wrap[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      background: #0f1117;\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      border-radius: 10px;\n      padding: 0 12px;\n      gap: 8px;\n    }\n    .search-input-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { color: #6b6f82; font-size: 20px; }\n    .search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      color: #fff;\n      padding: 10px 0;\n      width: 100%;\n      font-size: 13px;\n      outline: none;\n    }\n    .reset-group[_ngcontent-%COMP%] { flex: 0 0 auto; min-width: auto; }\n\n    \n\n    .summary-metrics[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n      gap: 16px;\n    }\n    .metric-card[_ngcontent-%COMP%] {\n      background: #1a1d2e;\n      border: 1px solid rgba(255, 255, 255, 0.08);\n      border-radius: 14px;\n      padding: 16px 20px;\n      display: flex;\n      flex-direction: column;\n      gap: 4px;\n    }\n    .m-label[_ngcontent-%COMP%] { font-size: 12px; color: #a0a3b1; }\n    .m-val[_ngcontent-%COMP%] { font-size: 22px; font-weight: 800; color: #fff; }\n\n    \n\n    .table-container[_ngcontent-%COMP%] {\n      background: #1a1d2e;\n      border: 1px solid rgba(255, 255, 255, 0.08);\n      border-radius: 16px;\n      overflow: hidden;\n    }\n    table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; text-align: left; }\n    th[_ngcontent-%COMP%] {\n      background: rgba(0, 0, 0, 0.2);\n      color: #a0a3b1;\n      font-size: 12px;\n      font-weight: 700;\n      padding: 16px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n      text-transform: uppercase;\n    }\n    td[_ngcontent-%COMP%] {\n      padding: 16px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n      color: #c4c7d4;\n      font-size: 13px;\n    }\n    tr[_ngcontent-%COMP%]:hover { background: rgba(255, 255, 255, 0.02); }\n\n    code[_ngcontent-%COMP%] {\n      background: rgba(255,255,255,0.06);\n      padding: 3px 8px;\n      border-radius: 6px;\n      font-size: 12px;\n      color: #9c95ff;\n    }\n    .module-badge[_ngcontent-%COMP%] {\n      font-size: 10px;\n      font-weight: 700;\n      padding: 3px 8px;\n      border-radius: 6px;\n      text-transform: uppercase;\n    }\n    .module-badge.procurement[_ngcontent-%COMP%] { background: rgba(0, 191, 165, 0.15); color: #00BFA5; }\n    .module-badge.projects[_ngcontent-%COMP%] { background: rgba(108, 99, 255, 0.15); color: #9c95ff; }\n    .module-badge.inventory[_ngcontent-%COMP%] { background: rgba(255, 193, 7, 0.15); color: #ffc107; }\n\n    .badge[_ngcontent-%COMP%] {\n      font-size: 11px;\n      font-weight: 700;\n      padding: 4px 10px;\n      border-radius: 8px;\n    }\n    .badge-success[_ngcontent-%COMP%] { background: rgba(0, 191, 165, 0.15); color: #00BFA5; }\n    .badge-danger[_ngcontent-%COMP%] { background: rgba(255, 107, 107, 0.15); color: #FF6B6B; }\n    .badge-warning[_ngcontent-%COMP%] { background: rgba(255, 193, 7, 0.15); color: #ffc107; }\n    .badge-info[_ngcontent-%COMP%] { background: rgba(108, 99, 255, 0.15); color: #9c95ff; }\n\n    .loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n      padding: 60px 20px;\n      text-align: center;\n      color: #6b6f82;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 12px;\n    }\n    .spin[_ngcontent-%COMP%] { animation: _ngcontent-%COMP%_spin 1.2s linear infinite; }\n    @keyframes _ngcontent-%COMP%_spin { 100% { transform: rotate(360deg); } }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSSxnQkFBZ0IsYUFBYSxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRTtJQUNsRTtNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixTQUFTO0lBQ1g7SUFDQSxrQkFBa0IsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFO0lBQ3hFLGlCQUFpQixTQUFTLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRTs7SUFFN0Qsa0JBQWtCLGFBQWEsRUFBRSxTQUFTLEVBQUU7SUFDNUM7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFFBQVE7TUFDUixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsZUFBZTtNQUNmLHlCQUF5QjtJQUMzQjtJQUNBO01BQ0UscUNBQXFDO01BQ3JDLDJDQUEyQztNQUMzQyxXQUFXO0lBQ2I7SUFDQTtNQUNFLHFDQUFxQztJQUN2QztJQUNBO01BQ0UscURBQXFEO01BQ3JELFlBQVk7TUFDWixXQUFXO01BQ1gsOENBQThDO0lBQ2hEO0lBQ0E7TUFDRSwyQkFBMkI7TUFDM0IsK0NBQStDO0lBQ2pEO0lBQ0EsZ0JBQWdCLFlBQVksRUFBRSxtQkFBbUIsRUFBRTs7SUFFbkQscUJBQXFCO0lBQ3JCO01BQ0UsYUFBYTtNQUNiLDJEQUEyRDtNQUMzRCxTQUFTO0lBQ1g7SUFDQTtNQUNFLG1CQUFtQjtNQUNuQiwyQ0FBMkM7TUFDM0MsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFNBQVM7TUFDVCxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLHlCQUF5QjtJQUMzQjtJQUNBO01BQ0UscUJBQXFCO01BQ3JCLG1DQUFtQztNQUNuQywyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osbUJBQW1CO01BQ25CLG9DQUFvQztNQUNwQyxjQUFjO01BQ2QsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7SUFDekI7SUFDQSxlQUFlLGFBQWEsRUFBRSxzQkFBc0IsRUFBRTtJQUN0RCxnQkFBZ0IsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRTtJQUNoRSxlQUFlLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFOztJQUVqRSxpQkFBaUI7SUFDakI7TUFDRSxtQkFBbUI7TUFDbkIsMkNBQTJDO01BQzNDLG1CQUFtQjtNQUNuQixhQUFhO0lBQ2Y7SUFDQTtNQUNFLGFBQWE7TUFDYixlQUFlO01BQ2YsU0FBUztNQUNULHFCQUFxQjtJQUN2QjtJQUNBO01BQ0UsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixRQUFRO01BQ1IsT0FBTztNQUNQLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QseUJBQXlCO01BQ3pCLHFCQUFxQjtJQUN2QjtJQUNBO01BQ0UsbUJBQW1CO01BQ25CLDBDQUEwQztNQUMxQyxtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxlQUFlO01BQ2YsYUFBYTtJQUNmO0lBQ0EsZ0JBQWdCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRTtJQUMzQztNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLDBDQUEwQztNQUMxQyxtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLFFBQVE7SUFDVjtJQUNBLDhCQUE4QixjQUFjLEVBQUUsZUFBZSxFQUFFO0lBQy9EO01BQ0UsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixXQUFXO01BQ1gsZUFBZTtNQUNmLFdBQVc7TUFDWCxlQUFlO01BQ2YsYUFBYTtJQUNmO0lBQ0EsZUFBZSxjQUFjLEVBQUUsZUFBZSxFQUFFOztJQUVoRCxvQkFBb0I7SUFDcEI7TUFDRSxhQUFhO01BQ2IsMkRBQTJEO01BQzNELFNBQVM7SUFDWDtJQUNBO01BQ0UsbUJBQW1CO01BQ25CLDJDQUEyQztNQUMzQyxtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsUUFBUTtJQUNWO0lBQ0EsV0FBVyxlQUFlLEVBQUUsY0FBYyxFQUFFO0lBQzVDLFNBQVMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRTs7SUFFekQsb0JBQW9CO0lBQ3BCO01BQ0UsbUJBQW1CO01BQ25CLDJDQUEyQztNQUMzQyxtQkFBbUI7TUFDbkIsZ0JBQWdCO0lBQ2xCO0lBQ0EsUUFBUSxXQUFXLEVBQUUseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUU7SUFDbEU7TUFDRSw4QkFBOEI7TUFDOUIsY0FBYztNQUNkLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLGtEQUFrRDtNQUNsRCx5QkFBeUI7SUFDM0I7SUFDQTtNQUNFLGFBQWE7TUFDYixrREFBa0Q7TUFDbEQsY0FBYztNQUNkLGVBQWU7SUFDakI7SUFDQSxXQUFXLHFDQUFxQyxFQUFFOztJQUVsRDtNQUNFLGtDQUFrQztNQUNsQyxnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIseUJBQXlCO0lBQzNCO0lBQ0EsNEJBQTRCLG1DQUFtQyxFQUFFLGNBQWMsRUFBRTtJQUNqRix5QkFBeUIsb0NBQW9DLEVBQUUsY0FBYyxFQUFFO0lBQy9FLDBCQUEwQixtQ0FBbUMsRUFBRSxjQUFjLEVBQUU7O0lBRS9FO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsa0JBQWtCO0lBQ3BCO0lBQ0EsaUJBQWlCLG1DQUFtQyxFQUFFLGNBQWMsRUFBRTtJQUN0RSxnQkFBZ0IscUNBQXFDLEVBQUUsY0FBYyxFQUFFO0lBQ3ZFLGlCQUFpQixtQ0FBbUMsRUFBRSxjQUFjLEVBQUU7SUFDdEUsY0FBYyxvQ0FBb0MsRUFBRSxjQUFjLEVBQUU7O0lBRXBFO01BQ0Usa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixjQUFjO01BQ2QsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsU0FBUztJQUNYO0lBQ0EsUUFBUSxvQ0FBb0MsRUFBRTtJQUM5QyxrQkFBa0IsT0FBTyx5QkFBeUIsRUFBRSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnJlcG9ydHMtcGFnZSB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMjRweDsgfVxuICAgIC5wYWdlLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGdhcDogMTZweDtcbiAgICB9XG4gICAgLnBhZ2UtaGVhZGVyIGgxIHsgZm9udC1zaXplOiAyNnB4OyBmb250LXdlaWdodDogODAwOyBtYXJnaW46IDAgMCA2cHggMDsgfVxuICAgIC5wYWdlLWhlYWRlciBwIHsgbWFyZ2luOiAwOyBjb2xvcjogI2EwYTNiMTsgZm9udC1zaXplOiAxNHB4OyB9XG5cbiAgICAuZXhwb3J0LWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7IH1cbiAgICAuYnRuIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgfVxuICAgIC5idG4tb3V0bGluZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuYnRuLW91dGxpbmU6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgICB9XG4gICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2QzYzRkYsICMwMEJGQTUpO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMTA4LCA5OSwgMjU1LCAwLjMpO1xuICAgIH1cbiAgICAuYnRuLXByaW1hcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDEwOCwgOTksIDI1NSwgMC40NSk7XG4gICAgfVxuICAgIC5idG46ZGlzYWJsZWQgeyBvcGFjaXR5OiAwLjU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cblxuICAgIC8qIFRlbXBsYXRlIFByZXNldHMgKi9cbiAgICAudGVtcGxhdGUtcHJlc2V0cyB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSk7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgfVxuICAgIC5wcmVzZXQtY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMWExZDJlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDE0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICB9XG4gICAgLnByZXNldC1jYXJkOmhvdmVyLCAucHJlc2V0LWNhcmQuYWN0aXZlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzZDNjNGRjtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTA4LCA5OSwgMjU1LCAwLjEpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIH1cbiAgICAucHJlc2V0LWljb24ge1xuICAgICAgd2lkdGg6IDQycHg7XG4gICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMDgsIDk5LCAyNTUsIDAuMTUpO1xuICAgICAgY29sb3I6ICM5Yzk1ZmY7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAucHJlc2V0LWluZm8geyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgLnByZXNldC10aXRsZSB7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICNmZmY7IH1cbiAgICAucHJlc2V0LWRlc2MgeyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjYTBhM2IxOyBtYXJnaW4tdG9wOiAycHg7IH1cblxuICAgIC8qIEZpbHRlcnMgQ2FyZCAqL1xuICAgIC5maWx0ZXItY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMWExZDJlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAuZmlsdGVyLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIH1cbiAgICAuZmlsdGVyLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICBmbGV4OiAxO1xuICAgICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICB9XG4gICAgLmZpbHRlci1ncm91cCBsYWJlbCB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICNhMGEzYjE7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cbiAgICAuZmlsdGVyLWdyb3VwIHNlbGVjdCwgLmZpbHRlci1ncm91cCBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMGYxMTE3O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gICAgLnNlYXJjaC1ncm91cCB7IGZsZXg6IDI7IG1pbi13aWR0aDogMjIwcHg7IH1cbiAgICAuc2VhcmNoLWlucHV0LXdyYXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjMGYxMTE3O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cbiAgICAuc2VhcmNoLWlucHV0LXdyYXAgbWF0LWljb24geyBjb2xvcjogIzZiNmY4MjsgZm9udC1zaXplOiAyMHB4OyB9XG4gICAgLnNlYXJjaC1pbnB1dC13cmFwIGlucHV0IHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gICAgLnJlc2V0LWdyb3VwIHsgZmxleDogMCAwIGF1dG87IG1pbi13aWR0aDogYXV0bzsgfVxuXG4gICAgLyogU3VtbWFyeSBNZXRyaWNzICovXG4gICAgLnN1bW1hcnktbWV0cmljcyB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgfVxuICAgIC5tZXRyaWMtY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMWExZDJlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogNHB4O1xuICAgIH1cbiAgICAubS1sYWJlbCB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICNhMGEzYjE7IH1cbiAgICAubS12YWwgeyBmb250LXNpemU6IDIycHg7IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiAjZmZmOyB9XG5cbiAgICAvKiBUYWJsZSBDb250YWluZXIgKi9cbiAgICAudGFibGUtY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxYTFkMmU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIHRhYmxlIHsgd2lkdGg6IDEwMCU7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IHRleHQtYWxpZ246IGxlZnQ7IH1cbiAgICB0aCB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBjb2xvcjogI2EwYTNiMTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgICB0ZCB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XG4gICAgICBjb2xvcjogI2M0YzdkNDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgdHI6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpOyB9XG5cbiAgICBjb2RlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICM5Yzk1ZmY7XG4gICAgfVxuICAgIC5tb2R1bGUtYmFkZ2Uge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgICAubW9kdWxlLWJhZGdlLnByb2N1cmVtZW50IHsgYmFja2dyb3VuZDogcmdiYSgwLCAxOTEsIDE2NSwgMC4xNSk7IGNvbG9yOiAjMDBCRkE1OyB9XG4gICAgLm1vZHVsZS1iYWRnZS5wcm9qZWN0cyB7IGJhY2tncm91bmQ6IHJnYmEoMTA4LCA5OSwgMjU1LCAwLjE1KTsgY29sb3I6ICM5Yzk1ZmY7IH1cbiAgICAubW9kdWxlLWJhZGdlLmludmVudG9yeSB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMTUpOyBjb2xvcjogI2ZmYzEwNzsgfVxuXG4gICAgLmJhZGdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG4gICAgLmJhZGdlLXN1Y2Nlc3MgeyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE5MSwgMTY1LCAwLjE1KTsgY29sb3I6ICMwMEJGQTU7IH1cbiAgICAuYmFkZ2UtZGFuZ2VyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDEwNywgMTA3LCAwLjE1KTsgY29sb3I6ICNGRjZCNkI7IH1cbiAgICAuYmFkZ2Utd2FybmluZyB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMTUpOyBjb2xvcjogI2ZmYzEwNzsgfVxuICAgIC5iYWRnZS1pbmZvIHsgYmFja2dyb3VuZDogcmdiYSgxMDgsIDk5LCAyNTUsIDAuMTUpOyBjb2xvcjogIzljOTVmZjsgfVxuXG4gICAgLmxvYWRpbmctc3RhdGUsIC5lbXB0eS1zdGF0ZSB7XG4gICAgICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzZiNmY4MjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICB9XG4gICAgLnNwaW4geyBhbmltYXRpb246IHNwaW4gMS4ycyBsaW5lYXIgaW5maW5pdGU7IH1cbiAgICBAa2V5ZnJhbWVzIHNwaW4geyAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5297:
/*!*************************************************************!*\
  !*** ./src/app/components/resources/resources.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourcesComponent: () => (/* binding */ ResourcesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/resource.service */ 258);
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/project.service */ 1279);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function ResourcesComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add Machinery / Equipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ResourcesComponent_div_34_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.saveEquipment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 21)(5, "div", 22)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Equipment/Item Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 22)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Category *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "select", 24)(13, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Excavators");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Concrete Mixers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Cranes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Dump Trucks");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Generators");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Safety Equipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 22)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Next Service Date *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 32)(30, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResourcesComponent_div_34_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.showEquipmentForm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.equipmentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.equipmentForm.invalid || ctx_r1.resourceSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.resourceSaving ? "Saving..." : "Add Equipment", " ");
  }
}
function ResourcesComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Register Laborer / Staff Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ResourcesComponent_div_35_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.saveWorker());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 21)(5, "div", 22)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Full Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 22)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Role Category *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "select", 24)(13, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Engineers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Supervisors");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Contractors");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Skilled Workers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Unskilled Workers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Consultants");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 22)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Contact Number *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 22)(30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Daily Wage (\u20B9) *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 22)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Status *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "select", 44)(37, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 32)(42, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResourcesComponent_div_35_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.showWorkerForm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.workerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.workerForm.invalid || ctx_r1.workerSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.workerSaving ? "Saving..." : "Register Worker", " ");
  }
}
function ResourcesComponent_div_43_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading machinery...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ResourcesComponent_div_43_table_3_tr_16_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \uD83D\uDCCD ", (r_r5.currentProjectId == null ? null : r_r5.currentProjectId.name) || "Project", " ");
  }
}
function ResourcesComponent_div_43_table_3_tr_16_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Idle / Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ResourcesComponent_div_43_table_3_tr_16_div_23_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", p_r7._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r7.name);
  }
}
function ResourcesComponent_div_43_table_3_tr_16_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66)(1, "select", 67, 0)(3, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Select Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ResourcesComponent_div_43_table_3_tr_16_div_23_option_5_Template, 2, 2, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResourcesComponent_div_43_table_3_tr_16_div_23_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const projSelect_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
      const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.allocateMachinery(r_r5._id, projSelect_r8.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Deploy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.projectsList);
  }
}
function ResourcesComponent_div_43_table_3_tr_16_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResourcesComponent_div_43_table_3_tr_16_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.releaseMachinery(r_r5._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Decommission / Release");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ResourcesComponent_div_43_table_3_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td")(5, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td")(8, "select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ResourcesComponent_div_43_table_3_tr_16_Template_select_change_8_listener($event) {
      const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.updateEquipmentStatus(r_r5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Maintenance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ResourcesComponent_div_43_table_3_tr_16_span_19_Template, 2, 1, "span", 58)(20, ResourcesComponent_div_43_table_3_tr_16_span_20_Template, 2, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td")(22, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ResourcesComponent_div_43_table_3_tr_16_div_23_Template, 8, 1, "div", 61)(24, ResourcesComponent_div_43_table_3_tr_16_button_24_Template, 2, 0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResourcesComponent_div_43_table_3_tr_16_Template_button_click_25_listener() {
      const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.deleteMachinery(r_r5._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r5.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", r_r5.status)("ngClass", ctx_r1.getEquipmentStatusClass(r_r5.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 9, r_r5.nextServiceDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", r_r5.status === "Allocated" && r_r5.currentProjectId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", r_r5.status !== "Allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", r_r5.status !== "Allocated" && r_r5.status !== "Maintenance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", r_r5.status === "Allocated");
  }
}
function ResourcesComponent_div_43_table_3_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No machinery resources registered in the system.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ResourcesComponent_div_43_table_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Equipment Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Next Service Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Current Deployment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Deploy actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ResourcesComponent_div_43_table_3_tr_16_Template, 27, 12, "tr", 51)(17, ResourcesComponent_div_43_table_3_tr_17_Template, 3, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.machineryList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.machineryList.length === 0);
  }
}
function ResourcesComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ResourcesComponent_div_43_div_2_Template, 2, 0, "div", 48)(3, ResourcesComponent_div_43_table_3_Template, 18, 2, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loadingResources);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.loadingResources);
  }
}
function ResourcesComponent_div_44_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading workforce...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ResourcesComponent_div_44_table_3_tr_18_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const w_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \uD83D\uDCCD ", (w_r11.currentProjectId == null ? null : w_r11.currentProjectId.name) || "Project", " ");
  }
}
function ResourcesComponent_div_44_table_3_tr_18_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Global / Unassigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ResourcesComponent_div_44_table_3_tr_18_div_19_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", p_r13._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r13.name);
  }
}
function ResourcesComponent_div_44_table_3_tr_18_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66)(1, "select", 67, 1)(3, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Select Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ResourcesComponent_div_44_table_3_tr_18_div_19_option_5_Template, 2, 2, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResourcesComponent_div_44_table_3_tr_18_div_19_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const wpSelect_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
      const w_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.allocateWorker(w_r11._id, wpSelect_r14.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Assign");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.projectsList);
  }
}
function ResourcesComponent_div_44_table_3_tr_18_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResourcesComponent_div_44_table_3_tr_18_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const w_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.releaseWorker(w_r11._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Release");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ResourcesComponent_div_44_table_3_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td")(5, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td")(12, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ResourcesComponent_div_44_table_3_tr_18_span_15_Template, 2, 1, "span", 58)(16, ResourcesComponent_div_44_table_3_tr_18_span_16_Template, 2, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td")(18, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ResourcesComponent_div_44_table_3_tr_18_div_19_Template, 8, 1, "div", 61)(20, ResourcesComponent_div_44_table_3_tr_18_button_20_Template, 2, 0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResourcesComponent_div_44_table_3_tr_18_Template_button_click_21_listener() {
      const w_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleWorkerStatus(w_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\uD83D\uDD04 Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResourcesComponent_div_44_table_3_tr_18_Template_button_click_23_listener() {
      const w_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.deleteWorker(w_r11._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const w_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](w_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](w_r11.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](w_r11.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", w_r11.dailyWage, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", w_r11.status === "Active" ? "badge-success" : "badge-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", w_r11.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", w_r11.currentProjectId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !w_r11.currentProjectId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !w_r11.currentProjectId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", w_r11.currentProjectId);
  }
}
function ResourcesComponent_div_44_table_3_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No workforce logged in the database.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ResourcesComponent_div_44_table_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Staff / Laborer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Contact Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Daily Wage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Project Deployment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Deploy actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ResourcesComponent_div_44_table_3_tr_18_Template, 25, 10, "tr", 51)(19, ResourcesComponent_div_44_table_3_tr_19_Template, 3, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.workersList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.workersList.length === 0);
  }
}
function ResourcesComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ResourcesComponent_div_44_div_2_Template, 2, 0, "div", 48)(3, ResourcesComponent_div_44_table_3_Template, 20, 2, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loadingWorkers);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.loadingWorkers);
  }
}
function ResourcesComponent_div_45_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading attendance sheet...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ResourcesComponent_div_45_table_12_tr_16_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(Inactive)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ResourcesComponent_div_45_table_12_tr_16_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const w_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \uD83D\uDCCD ", (w_r18.currentProjectId == null ? null : w_r18.currentProjectId.name) || "Project", " ");
  }
}
function ResourcesComponent_div_45_table_12_tr_16_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Global / Unassigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ResourcesComponent_div_45_table_12_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 50)(2, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ResourcesComponent_div_45_table_12_tr_16_Template_input_change_2_listener() {
      const w_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleWorkerPresence(w_r18._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "strong", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ResourcesComponent_div_45_table_12_tr_16_span_6_Template, 2, 0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td")(8, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ResourcesComponent_div_45_table_12_tr_16_span_13_Template, 2, 1, "span", 58)(14, ResourcesComponent_div_45_table_12_tr_16_span_14_Template, 2, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const w_r18 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("opacity", w_r18.status !== "Active" ? "0.5" : "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.isWorkerPresent(w_r18._id))("disabled", w_r18.status !== "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](w_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", w_r18.status !== "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](w_r18.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](w_r18.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", w_r18.currentProjectId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !w_r18.currentProjectId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", w_r18.dailyWage, " / Day");
  }
}
function ResourcesComponent_div_45_table_12_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No workers found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ResourcesComponent_div_45_table_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Worker Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Role Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Contact Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Current Deployment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Daily Wage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ResourcesComponent_div_45_table_12_tr_16_Template, 17, 11, "tr", 84)(17, ResourcesComponent_div_45_table_12_tr_17_Template, 3, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.workersList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.workersList.length === 0);
  }
}
function ResourcesComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 77)(2, "div", 78)(3, "div", 79)(4, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Attendance Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ResourcesComponent_div_45_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.attendanceDate, $event) || (ctx_r1.attendanceDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ResourcesComponent_div_45_Template_input_change_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.loadAttendanceForDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResourcesComponent_div_45_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.saveAttendance());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ResourcesComponent_div_45_div_11_Template, 2, 0, "div", 48)(12, ResourcesComponent_div_45_table_12_Template, 18, 2, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.attendanceDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loadingAttendance || ctx_r1.submittingAttendance || ctx_r1.workersList.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.submittingAttendance ? "Saving Sheet..." : "\uD83D\uDCBE Save Attendance Sheet", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loadingAttendance || ctx_r1.loadingWorkers);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.loadingAttendance && !ctx_r1.loadingWorkers);
  }
}
class ResourcesComponent {
  constructor(resourceService, projectService, fb) {
    this.resourceService = resourceService;
    this.projectService = projectService;
    this.fb = fb;
    this.activeMainTab = 'machinery'; // 'machinery' | 'workforce' | 'attendance'
    this.machineryList = [];
    this.workersList = [];
    this.projectsList = [];
    this.loadingResources = true;
    this.loadingWorkers = true;
    // Add forms visibility
    this.showEquipmentForm = false;
    this.showWorkerForm = false;
    this.resourceSaving = false;
    this.workerSaving = false;
    // Attendance state
    this.attendanceDate = '';
    this.presentWorkersSet = new Set();
    this.loadingAttendance = false;
    this.submittingAttendance = false;
    this.equipmentForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      category: ['Excavators', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      nextServiceDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.workerForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      category: ['Skilled Workers', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      dailyWage: [400, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]],
      status: ['Active', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  ngOnInit() {
    this.loadData();
    // Set today's date in YYYY-MM-DD
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    this.attendanceDate = `${year}-${month}-${day}`;
  }
  loadData() {
    // 1. Fetch machinery
    this.loadingResources = true;
    this.resourceService.getResources().subscribe({
      next: res => {
        this.machineryList = res.success ? res.data : Array.isArray(res) ? res : [];
        this.loadingResources = false;
      },
      error: () => this.loadingResources = false
    });
    // 2. Fetch workforce
    this.loadingWorkers = true;
    this.resourceService.getWorkers().subscribe({
      next: res => {
        this.workersList = res.success ? res.data : Array.isArray(res) ? res : [];
        this.loadingWorkers = false;
        // Pre-fetch attendance once workforce is loaded
        this.loadAttendanceForDate();
      },
      error: () => this.loadingWorkers = false
    });
    // 3. Fetch active projects list
    this.projectService.getProjects().subscribe({
      next: res => {
        this.projectsList = res.success ? res.data : Array.isArray(res) ? res : [];
      }
    });
  }
  // Form toggles
  toggleAddEquipmentForm() {
    this.showEquipmentForm = !this.showEquipmentForm;
    if (this.showEquipmentForm) {
      this.equipmentForm.reset({
        category: 'Excavators'
      });
    }
  }
  toggleAddWorkerForm() {
    this.showWorkerForm = !this.showWorkerForm;
    if (this.showWorkerForm) {
      this.workerForm.reset({
        category: 'Skilled Workers',
        dailyWage: 400,
        status: 'Active'
      });
    }
  }
  // --- Machinery Logic ---
  getEquipmentStatusClass(status) {
    const map = {
      'available': 'status-available',
      'allocated': 'status-allocated',
      'maintenance': 'status-maintenance'
    };
    return map[status?.toLowerCase()] || 'status-available';
  }
  saveEquipment() {
    if (this.equipmentForm.invalid) return;
    this.resourceSaving = true;
    const payload = {
      ...this.equipmentForm.value,
      status: 'Available'
    };
    this.resourceService.createResource(payload).subscribe({
      next: () => {
        this.resourceSaving = false;
        this.showEquipmentForm = false;
        this.equipmentForm.reset();
        this.loadData();
      },
      error: err => {
        this.resourceSaving = false;
        alert(err?.error?.message || 'Failed to add machinery.');
      }
    });
  }
  updateEquipmentStatus(resource, event) {
    const newStatus = event.target.value;
    this.resourceService.updateResource(resource._id, {
      status: newStatus
    }).subscribe({
      next: () => this.loadData(),
      error: err => alert(err?.error?.message || 'Failed to update equipment status.')
    });
  }
  allocateMachinery(resourceId, projectId) {
    if (!projectId) {
      alert('Please select a project to deploy to.');
      return;
    }
    this.resourceService.allocateResource(resourceId, projectId).subscribe({
      next: () => this.loadData(),
      error: err => alert(err?.error?.message || 'Failed to deploy machinery.')
    });
  }
  releaseMachinery(resourceId) {
    if (!confirm('Are you sure you want to release this machinery from project deployment?')) return;
    this.resourceService.releaseResource(resourceId).subscribe({
      next: () => this.loadData(),
      error: err => alert(err?.error?.message || 'Failed to release machinery.')
    });
  }
  deleteMachinery(resourceId) {
    if (!confirm('Are you sure you want to delete this machinery from database?')) return;
    this.resourceService.deleteResource(resourceId).subscribe({
      next: () => this.loadData(),
      error: err => alert(err?.error?.message || 'Failed to delete machinery.')
    });
  }
  // --- Workforce Logic ---
  saveWorker() {
    if (this.workerForm.invalid) return;
    this.workerSaving = true;
    this.resourceService.createWorker(this.workerForm.value).subscribe({
      next: () => {
        this.workerSaving = false;
        this.showWorkerForm = false;
        this.workerForm.reset();
        this.loadData();
      },
      error: err => {
        this.workerSaving = false;
        alert(err?.error?.message || 'Failed to register laborer.');
      }
    });
  }
  allocateWorker(workerId, projectId) {
    if (!projectId) {
      alert('Please select a project to assign this worker to.');
      return;
    }
    this.resourceService.allocateWorker(workerId, projectId).subscribe({
      next: () => this.loadData(),
      error: err => alert(err?.error?.message || 'Failed to assign worker.')
    });
  }
  releaseWorker(workerId) {
    if (!confirm('Are you sure you want to release this staff member from project assignment?')) return;
    this.resourceService.releaseWorker(workerId).subscribe({
      next: () => this.loadData(),
      error: err => alert(err?.error?.message || 'Failed to release worker.')
    });
  }
  toggleWorkerStatus(worker) {
    const nextStatus = worker.status === 'Active' ? 'Inactive' : 'Active';
    this.resourceService.updateWorker(worker._id, {
      status: nextStatus
    }).subscribe({
      next: () => this.loadData(),
      error: err => alert(err?.error?.message || 'Failed to update worker status.')
    });
  }
  deleteWorker(workerId) {
    if (!confirm('Are you sure you want to delete this staff member?')) return;
    this.resourceService.deleteWorker(workerId).subscribe({
      next: () => this.loadData(),
      error: err => alert(err?.error?.message || 'Failed to delete worker.')
    });
  }
  // --- Summary/Stats Helpers ---
  getAllocatedMachineryCount() {
    return this.machineryList.filter(r => r.status === 'Allocated').length;
  }
  getMaintenanceMachineryCount() {
    return this.machineryList.filter(r => r.status === 'Maintenance').length;
  }
  getActiveWorkersCount() {
    return this.workersList.filter(w => w.status === 'Active').length;
  }
  getAllocatedWorkersCount() {
    return this.workersList.filter(w => !!w.currentProjectId).length;
  }
  getDailyWagesSum() {
    return this.workersList.filter(w => w.status === 'Active').reduce((sum, w) => sum + (w.dailyWage || 0), 0);
  }
  // --- Attendance Business Logic ---
  loadAttendanceForDate() {
    if (!this.attendanceDate || this.workersList.length === 0) return;
    this.loadingAttendance = true;
    this.resourceService.getAttendance(this.attendanceDate).subscribe({
      next: res => {
        this.presentWorkersSet.clear();
        if (res.success && res.data && res.data.length > 0) {
          const record = res.data[0];
          if (record.presentWorkers) {
            record.presentWorkers.forEach(w => {
              const id = typeof w === 'object' ? w._id : w;
              this.presentWorkersSet.add(id);
            });
          }
        } else {
          // Default: mark all Active workers as present if no records exist for this day yet
          this.workersList.forEach(w => {
            if (w.status === 'Active') {
              this.presentWorkersSet.add(w._id);
            }
          });
        }
        this.loadingAttendance = false;
      },
      error: err => {
        console.error('Failed to load attendance sheet', err);
        this.loadingAttendance = false;
      }
    });
  }
  toggleWorkerPresence(workerId) {
    if (this.presentWorkersSet.has(workerId)) {
      this.presentWorkersSet.delete(workerId);
    } else {
      this.presentWorkersSet.add(workerId);
    }
  }
  isWorkerPresent(workerId) {
    return this.presentWorkersSet.has(workerId);
  }
  saveAttendance() {
    if (!this.attendanceDate) {
      alert('Please specify a date.');
      return;
    }
    this.submittingAttendance = true;
    const presentList = Array.from(this.presentWorkersSet);
    this.resourceService.submitAttendance(this.attendanceDate, presentList).subscribe({
      next: () => {
        this.submittingAttendance = false;
        alert('Attendance sheet updated successfully!');
        this.loadAttendanceForDate();
      },
      error: err => {
        this.submittingAttendance = false;
        alert(err?.error?.message || 'Failed to submit attendance sheet.');
      }
    });
  }
  static {
    this.ɵfac = function ResourcesComponent_Factory(t) {
      return new (t || ResourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_resource_service__WEBPACK_IMPORTED_MODULE_0__.ResourceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_1__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ResourcesComponent,
      selectors: [["app-resources"]],
      decls: 46,
      vars: 20,
      consts: [["projSelect", ""], ["wpSelect", ""], [1, "page-header"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between"], [2, "display", "flex", "gap", "12px"], [1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-label"], [1, "stat-value", 2, "color", "#9c95ff"], [2, "font-size", "12px", "color", "#a0a3b1", "margin-top", "6px"], [1, "stat-value", 2, "color", "#00BFA5"], [1, "stat-value", 2, "color", "#ffc107"], ["class", "glass-card", "style", "padding:24px;margin-bottom:28px", 4, "ngIf"], [1, "resource-tabs"], [1, "tab-btn", 3, "click"], [4, "ngIf"], [1, "glass-card", 2, "padding", "24px", "margin-bottom", "28px"], [2, "margin-bottom", "18px", "font-size", "15px", "color", "#fff"], [3, "ngSubmit", "formGroup"], [1, "form-grid", 2, "grid-template-columns", "1fr 1fr 1fr", "gap", "16px"], [1, "field-group"], ["formControlName", "name", "placeholder", "e.g. Caterpillar Excavator 320", 1, "input-field"], ["formControlName", "category", 1, "input-field"], ["value", "Excavators"], ["value", "Concrete Mixers"], ["value", "Cranes"], ["value", "Dump Trucks"], ["value", "Generators"], ["value", "Safety Equipment"], ["type", "date", "formControlName", "nextServiceDate", 1, "input-field"], [2, "margin-top", "16px", "display", "flex", "gap", "12px", "justify-content", "end"], ["type", "button", 1, "btn", "btn-outline", 2, "padding", "8px 16px", "font-size", "13px", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 2, "padding", "8px 16px", "font-size", "13px", 3, "disabled"], ["formControlName", "name", "placeholder", "e.g. John Doe", 1, "input-field"], ["value", "Engineers"], ["value", "Supervisors"], ["value", "Contractors"], ["value", "Skilled Workers"], ["value", "Unskilled Workers"], ["value", "Consultants"], ["formControlName", "phone", "placeholder", "e.g. +91-9988776655", 1, "input-field"], ["type", "number", "formControlName", "dailyWage", "placeholder", "e.g. 500", 1, "input-field"], ["formControlName", "status", 1, "input-field"], ["value", "Active"], ["value", "Inactive"], [1, "table-container"], ["class", "loading-state", 4, "ngIf"], [1, "loading-state"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], [2, "color", "#fff"], [1, "badge", "badge-info", 2, "font-size", "10px"], [1, "select-status-badge", 3, "change", "value", "ngClass"], ["value", "Available"], ["value", "Allocated", "disabled", ""], ["value", "Maintenance"], ["style", "color:#00BFA5;font-weight:600", 4, "ngIf"], ["style", "color:#6b6f82", 4, "ngIf"], [2, "display", "flex", "gap", "8px", "justify-content", "center"], ["style", "display:flex;gap:4px", 4, "ngIf"], ["class", "action-btn delete-btn", "style", "padding:4px 12px", 3, "click", 4, "ngIf"], ["title", "Delete", 1, "action-btn", 2, "border-color", "#FF6B6B", "color", "#FF6B6B", 3, "click"], [2, "color", "#00BFA5", "font-weight", "600"], [2, "color", "#6b6f82"], [2, "display", "flex", "gap", "4px"], [1, "input-field", 2, "padding", "4px 8px", "font-size", "12px", "max-width", "180px"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-btn", "edit-btn", 2, "padding", "4px 8px", 3, "click"], [3, "value"], [1, "action-btn", "delete-btn", 2, "padding", "4px 12px", 3, "click"], ["colspan", "6", 2, "text-align", "center", "color", "#6b6f82", "padding", "32px"], [1, "badge", 3, "ngClass"], ["title", "Toggle Active Status", 1, "action-btn", 2, "color", "#ffc107", "border-color", "#ffc107", 3, "click"], ["colspan", "7", 2, "text-align", "center", "color", "#6b6f82", "padding", "32px"], [1, "glass-card", 2, "padding", "20px", "margin-bottom", "24px"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "flex-wrap", "wrap", "gap", "16px"], [2, "display", "flex", "align-items", "center", "gap", "12px"], [2, "font-weight", "600", "color", "#a0a3b1"], ["type", "date", 1, "input-field", 2, "padding", "6px 12px", "width", "180px", 3, "ngModelChange", "change", "ngModel"], [1, "btn", "btn-primary", 2, "padding", "8px 16px", 3, "click", "disabled"], [2, "width", "100px", "text-align", "center"], [3, "opacity", 4, "ngFor", "ngForOf"], ["type", "checkbox", 2, "width", "18px", "height", "18px", "cursor", "pointer", 3, "change", "checked", "disabled"], ["style", "font-size:11px;color:#FF6B6B;margin-left:8px", 4, "ngIf"], [2, "font-size", "11px", "color", "#FF6B6B", "margin-left", "8px"]],
      template: function ResourcesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div")(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Resource & Workforce Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Deploy machinery, equipment, engineers, and laborers across active construction projects.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResourcesComponent_Template_button_click_8_listener() {
            return ctx.toggleAddEquipmentForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResourcesComponent_Template_button_click_10_listener() {
            return ctx.toggleAddWorkerForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Total Machinery");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 8)(21, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Total Laborers / Staff");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 8)(28, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Est. Daily Wages Pool");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Cumulative daily staff expense");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ResourcesComponent_div_34_Template, 34, 3, "div", 14)(35, ResourcesComponent_div_35_Template, 46, 3, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 15)(37, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResourcesComponent_Template_button_click_37_listener() {
            return ctx.activeMainTab = "machinery";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\uD83C\uDFD7 Heavy Machinery & Equipment");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResourcesComponent_Template_button_click_39_listener() {
            return ctx.activeMainTab = "workforce";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\uD83D\uDC65 Workforce & Labor");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResourcesComponent_Template_button_click_41_listener() {
            return ctx.activeMainTab = "attendance";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\uD83D\uDCC5 Daily Attendance Sheet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ResourcesComponent_div_43_Template, 4, 2, "div", 17)(44, ResourcesComponent_div_44_Template, 4, 2, "div", 17)(45, ResourcesComponent_div_45_Template, 13, 5, "div", 17);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.showEquipmentForm ? "Close Machinery Form" : "+ Add Machinery", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.showWorkerForm ? "Close Labor Form" : "+ Add Labor/Staff", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.machineryList.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.getAllocatedMachineryCount(), " Deployed | ", ctx.getMaintenanceMachineryCount(), " In Maintenance ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.workersList.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.getActiveWorkersCount(), " Active Staff | ", ctx.getAllocatedWorkersCount(), " Allocated ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", ctx.getDailyWagesSum().toLocaleString("en-IN"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showEquipmentForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showWorkerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeMainTab === "machinery");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeMainTab === "workforce");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeMainTab === "attendance");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeMainTab === "machinery");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeMainTab === "workforce");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeMainTab === "attendance");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: [".form-grid[_ngcontent-%COMP%] { display: grid; gap: 16px; margin-bottom: 12px; }\n    .field-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n    .field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 13px; font-weight: 600; color: #a0a3b1; margin-bottom: 6px; }\n    .input-field[_ngcontent-%COMP%] {\n      padding: 10px 12px; background: rgba(255,255,255,0.05);\n      border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;\n      color: #fff; font-size: 13px; font-family: 'Inter', sans-serif; outline: none;\n    }\n    .input-field[_ngcontent-%COMP%]:focus { border-color: #6C63FF; }\n    .input-field[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] { background: #1a1d2e; color:#fff; }\n    .loading-state[_ngcontent-%COMP%] { padding: 40px; text-align: center; color: #6b6f82; }\n\n    .action-btn[_ngcontent-%COMP%] {\n      background: rgba(255,255,255,0.04);\n      border: 1px solid rgba(255,255,255,0.08);\n      border-radius: 6px;\n      color: #fff;\n      font-size: 12px;\n      cursor: pointer;\n      transition: all 0.2s;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .action-btn[_ngcontent-%COMP%]:hover {\n      background: rgba(255,255,255,0.12);\n      transform: translateY(-1px);\n    }\n    .edit-btn[_ngcontent-%COMP%]:hover { border-color: #6C63FF; color: #6C63FF; }\n    .delete-btn[_ngcontent-%COMP%]:hover { border-color: #FF6B6B; color: #FF6B6B; }\n\n    .resource-tabs[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 12px;\n      margin-bottom: 24px;\n      border-bottom: 1px solid rgba(255,255,255,0.08);\n      padding-bottom: 8px;\n    }\n    .tab-btn[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      color: #a0a3b1;\n      padding: 10px 20px;\n      cursor: pointer;\n      font-size: 15px;\n      font-weight: 500;\n      transition: all 0.2s;\n      border-bottom: 2px solid transparent;\n      outline: none;\n    }\n    .tab-btn[_ngcontent-%COMP%]:hover {\n      color: #fff;\n    }\n    .tab-btn.active[_ngcontent-%COMP%] {\n      color: #6C63FF;\n      border-bottom-color: #6C63FF;\n      font-weight: 600;\n    }\n\n    .select-status-badge[_ngcontent-%COMP%] {\n      background: rgba(255,255,255,0.05);\n      border: 1px solid rgba(255,255,255,0.08);\n      border-radius: 6px;\n      color: #fff;\n      font-size: 12px;\n      padding: 4px 8px;\n      outline: none;\n      cursor: pointer;\n    }\n    .status-available[_ngcontent-%COMP%] { color: #00BFA5; border-color: rgba(0,191,165,0.3); }\n    .status-allocated[_ngcontent-%COMP%] { color: #6C63FF; border-color: rgba(108,99,255,0.3); }\n    .status-maintenance[_ngcontent-%COMP%] { color: #FF6B6B; border-color: rgba(255,107,107,0.3); }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZXMvcmVzb3VyY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0ksYUFBYSxhQUFhLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFO0lBQzVELGVBQWUsYUFBYSxFQUFFLHNCQUFzQixFQUFFO0lBQ3RELHFCQUFxQixlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO0lBQzVGO01BQ0Usa0JBQWtCLEVBQUUsa0NBQWtDO01BQ3RELHVDQUF1QyxFQUFFLGtCQUFrQjtNQUMzRCxXQUFXLEVBQUUsZUFBZSxFQUFFLGdDQUFnQyxFQUFFLGFBQWE7SUFDL0U7SUFDQSxxQkFBcUIscUJBQXFCLEVBQUU7SUFDNUMsc0JBQXNCLG1CQUFtQixFQUFFLFVBQVUsRUFBRTtJQUN2RCxpQkFBaUIsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRTs7SUFFcEU7TUFDRSxrQ0FBa0M7TUFDbEMsd0NBQXdDO01BQ3hDLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsZUFBZTtNQUNmLGVBQWU7TUFDZixvQkFBb0I7TUFDcEIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGtDQUFrQztNQUNsQywyQkFBMkI7SUFDN0I7SUFDQSxrQkFBa0IscUJBQXFCLEVBQUUsY0FBYyxFQUFFO0lBQ3pELG9CQUFvQixxQkFBcUIsRUFBRSxjQUFjLEVBQUU7O0lBRTNEO01BQ0UsYUFBYTtNQUNiLFNBQVM7TUFDVCxtQkFBbUI7TUFDbkIsK0NBQStDO01BQy9DLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLG9CQUFvQjtNQUNwQixvQ0FBb0M7TUFDcEMsYUFBYTtJQUNmO0lBQ0E7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLGNBQWM7TUFDZCw0QkFBNEI7TUFDNUIsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0Usa0NBQWtDO01BQ2xDLHdDQUF3QztNQUN4QyxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLGVBQWU7SUFDakI7SUFDQSxvQkFBb0IsY0FBYyxFQUFFLGlDQUFpQyxFQUFFO0lBQ3ZFLG9CQUFvQixjQUFjLEVBQUUsa0NBQWtDLEVBQUU7SUFDeEUsc0JBQXNCLGNBQWMsRUFBRSxtQ0FBbUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5mb3JtLWdyaWQgeyBkaXNwbGF5OiBncmlkOyBnYXA6IDE2cHg7IG1hcmdpbi1ib3R0b206IDEycHg7IH1cbiAgICAuZmllbGQtZ3JvdXAgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgLmZpZWxkLWdyb3VwIGxhYmVsIHsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI2EwYTNiMTsgbWFyZ2luLWJvdHRvbTogNnB4OyB9XG4gICAgLmlucHV0LWZpZWxkIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTJweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTsgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMTNweDsgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7IG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgIC5pbnB1dC1maWVsZDpmb2N1cyB7IGJvcmRlci1jb2xvcjogIzZDNjNGRjsgfVxuICAgIC5pbnB1dC1maWVsZCBvcHRpb24geyBiYWNrZ3JvdW5kOiAjMWExZDJlOyBjb2xvcjojZmZmOyB9XG4gICAgLmxvYWRpbmctc3RhdGUgeyBwYWRkaW5nOiA0MHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiAjNmI2ZjgyOyB9XG5cbiAgICAuYWN0aW9uLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuYWN0aW9uLWJ0bjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIH1cbiAgICAuZWRpdC1idG46aG92ZXIgeyBib3JkZXItY29sb3I6ICM2QzYzRkY7IGNvbG9yOiAjNkM2M0ZGOyB9XG4gICAgLmRlbGV0ZS1idG46aG92ZXIgeyBib3JkZXItY29sb3I6ICNGRjZCNkI7IGNvbG9yOiAjRkY2QjZCOyB9XG5cbiAgICAucmVzb3VyY2UtdGFicyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICB9XG4gICAgLnRhYi1idG4ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiAjYTBhM2IxO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gICAgLnRhYi1idG46aG92ZXIge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC50YWItYnRuLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogIzZDNjNGRjtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM2QzYzRkY7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5zZWxlY3Qtc3RhdHVzLWJhZGdlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLnN0YXR1cy1hdmFpbGFibGUgeyBjb2xvcjogIzAwQkZBNTsgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMTkxLDE2NSwwLjMpOyB9XG4gICAgLnN0YXR1cy1hbGxvY2F0ZWQgeyBjb2xvcjogIzZDNjNGRjsgYm9yZGVyLWNvbG9yOiByZ2JhKDEwOCw5OSwyNTUsMC4zKTsgfVxuICAgIC5zdGF0dXMtbWFpbnRlbmFuY2UgeyBjb2xvcjogI0ZGNkI2QjsgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwxMDcsMTA3LDAuMyk7IH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);



class AuthGuard {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  canActivate(route, state) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      // Authorized - allow route execution
      return true;
    }
    // Not logged in - redirect to login page with return url
    this.router.navigate(['/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
    return false;
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2210:
/*!***********************************************!*\
  !*** ./src/app/services/analytics.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsService: () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class AnalyticsService {
  constructor(http) {
    this.http = http;
    this.apiUrl = '/api/analytics';
  }
  getDashboardAnalytics() {
    return this.http.get(`${this.apiUrl}/dashboard`);
  }
  static {
    this.ɵfac = function AnalyticsService_Factory(t) {
      return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AnalyticsService,
      factory: AnalyticsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class AuthService {
  constructor(http) {
    this.http = http;
    this.apiUrl = '/api/auth';
    const storedUser = localStorage.getItem('bt_user');
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }
  get currentUserValue() {
    return this.currentUserSubject.value;
  }
  login(credentials) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      if (res && res.token) {
        localStorage.setItem('bt_token', res.token);
        localStorage.setItem('bt_user', JSON.stringify(res.user));
        this.currentUserSubject.next(res.user);
      }
      return res;
    }));
  }
  register(userData) {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      if (res && res.token) {
        localStorage.setItem('bt_token', res.token);
        localStorage.setItem('bt_user', JSON.stringify(res.user));
        this.currentUserSubject.next(res.user);
      }
      return res;
    }));
  }
  logout() {
    localStorage.removeItem('bt_token');
    localStorage.removeItem('bt_user');
    this.currentUserSubject.next(null);
  }
  forgotPassword(data) {
    return this.http.post(`${this.apiUrl}/forgot-password`, data);
  }
  resetPassword(data) {
    return this.http.post(`${this.apiUrl}/reset-password`, data);
  }
  sendOtpEmail(email, type) {
    return this.http.post(`${this.apiUrl}/send-otp-email`, {
      email,
      type
    });
  }
  hasRole(roles) {
    const user = this.currentUserValue;
    if (!user) return false;
    return roles.includes(user.role);
  }
  getToken() {
    return localStorage.getItem('bt_token');
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4934:
/*!***********************************************!*\
  !*** ./src/app/services/inventory.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryService: () => (/* binding */ InventoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class InventoryService {
  constructor(http) {
    this.http = http;
    this.apiUrl = '/api/inventory';
  }
  getInventory() {
    return this.http.get(this.apiUrl);
  }
  addInventoryItem(item) {
    return this.http.post(this.apiUrl, item);
  }
  updateInventoryItem(id, item) {
    return this.http.put(`${this.apiUrl}/${id}`, item);
  }
  deleteInventoryItem(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static {
    this.ɵfac = function InventoryService_Factory(t) {
      return new (t || InventoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InventoryService,
      factory: InventoryService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7473:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);




class NotificationService {
  constructor(http) {
    this.http = http;
    this.apiUrl = '/api/notifications';
    this.notificationsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.notifications$ = this.notificationsSubject.asObservable();
    this.unreadCountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
    this.unreadCount$ = this.unreadCountSubject.asObservable();
    this.statsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.stats$ = this.statsSubject.asObservable();
    this.toastSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.toast$ = this.toastSubject.asObservable();
    this.soundEnabled = true;
  }
  fetchNotifications(filters) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    if (filters) {
      Object.keys(filters).forEach(key => {
        const val = filters[key];
        if (val !== undefined && val !== null && val !== '') {
          params = params.set(key, val);
        }
      });
    }
    return this.http.get(this.apiUrl, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(res => {
      if (res.success && Array.isArray(res.data)) {
        this.notificationsSubject.next(res.data);
        const unread = res.data.filter(n => !n.read).length;
        this.unreadCountSubject.next(unread);
        this.refreshStats();
      }
    }));
  }
  fetchStats() {
    return this.http.get(`${this.apiUrl}/stats`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(res => {
      if (res.success && res.data) {
        this.statsSubject.next(res.data);
      }
    }));
  }
  refreshStats() {
    this.fetchStats().subscribe();
  }
  markAsRead(id) {
    return this.http.put(`${this.apiUrl}/${id}/read`, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this.fetchNotifications().subscribe()));
  }
  markAllAsRead() {
    return this.http.put(`${this.apiUrl}/read-all`, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.triggerToast({
        id: Date.now().toString(),
        title: 'Notifications Cleared',
        message: 'All notifications marked as read.',
        type: 'info'
      });
      this.fetchNotifications().subscribe();
    }));
  }
  clearAllRead() {
    return this.http.delete(`${this.apiUrl}/clear-read`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.triggerToast({
        id: Date.now().toString(),
        title: 'Read Log Cleaned',
        message: 'Cleared all read notification items from memory.',
        type: 'success'
      });
      this.fetchNotifications().subscribe();
    }));
  }
  deleteNotification(id) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this.fetchNotifications().subscribe()));
  }
  broadcastNotification(payload) {
    return this.http.post(`${this.apiUrl}/broadcast`, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(res => {
      if (res.success && res.data) {
        this.triggerToast({
          id: res.data._id || Date.now().toString(),
          title: `[BROADCAST] ${res.data.title}`,
          message: res.data.message,
          type: res.data.type,
          priority: res.data.priority,
          link: res.data.link
        });
        this.fetchNotifications().subscribe();
      }
    }));
  }
  triggerSystemCheck() {
    return this.http.post(`${this.apiUrl}/trigger-system-alert`, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(res => {
      if (res.success && Array.isArray(res.data)) {
        const alertCount = res.data.length;
        this.triggerToast({
          id: Date.now().toString(),
          title: 'System Audit Completed',
          message: `Scanned inventory & milestones. Generated ${alertCount} alert updates.`,
          type: 'success'
        });
        this.fetchNotifications().subscribe();
      }
    }));
  }
  triggerToast(toast) {
    this.toastSubject.next(toast);
    if (this.soundEnabled && (toast.type === 'danger' || toast.type === 'warning' || toast.priority === 'urgent' || toast.priority === 'high')) {
      this.playChime(toast.type === 'danger' ? 'urgent' : 'normal');
    }
  }
  playChime(mode = 'normal') {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = mode === 'urgent' ? 'sawtooth' : 'sine';
      const freq = mode === 'urgent' ? 880 : 587.33; // A5 or D5 tone
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      if (mode === 'urgent') {
        osc.frequency.exponentialRampToValueAtTime(1174.66, ctx.currentTime + 0.15);
      } else {
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
      }
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.36);
    } catch (e) {
      // Ignore browser audio context block if user hasn't interacted yet
    }
  }
  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    return this.soundEnabled;
  }
  static {
    this.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1292:
/*!*************************************************!*\
  !*** ./src/app/services/procurement.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcurementService: () => (/* binding */ ProcurementService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class ProcurementService {
  constructor(http) {
    this.http = http;
    this.apiUrl = '/api/procurements';
  }
  getProcurements() {
    return this.http.get(this.apiUrl);
  }
  createProcurement(po) {
    return this.http.post(this.apiUrl, po);
  }
  updateProcurement(id, po) {
    return this.http.put(`${this.apiUrl}/${id}`, po);
  }
  deleteProcurement(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static {
    this.ɵfac = function ProcurementService_Factory(t) {
      return new (t || ProcurementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProcurementService,
      factory: ProcurementService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1279:
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectService: () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class ProjectService {
  constructor(http) {
    this.http = http;
    this.apiUrl = '/api';
  }
  getProjects() {
    return this.http.get(`${this.apiUrl}/projects`);
  }
  getProjectById(id) {
    return this.http.get(`${this.apiUrl}/projects/${id}`);
  }
  createProject(project) {
    return this.http.post(`${this.apiUrl}/projects`, project);
  }
  updateProject(id, project) {
    return this.http.put(`${this.apiUrl}/projects/${id}`, project);
  }
  deleteProject(id) {
    return this.http.delete(`${this.apiUrl}/projects/${id}`);
  }
  getMilestones(projectId) {
    return this.http.get(`${this.apiUrl}/projects/${projectId}/milestones`);
  }
  createMilestone(projectId, milestone) {
    return this.http.post(`${this.apiUrl}/projects/${projectId}/milestones`, milestone);
  }
  updateMilestone(milestoneId, milestone) {
    return this.http.put(`${this.apiUrl}/milestones/${milestoneId}`, milestone);
  }
  deleteMilestone(milestoneId) {
    return this.http.delete(`${this.apiUrl}/milestones/${milestoneId}`);
  }
  logDailyProgress(logData) {
    return this.http.post(`${this.apiUrl}/progress-logs`, logData);
  }
  getProgressLogs() {
    return this.http.get(`${this.apiUrl}/progress-logs`);
  }
  getProjectProgressLogs(projectId) {
    return this.http.get(`${this.apiUrl}/projects/${projectId}/progress-logs`);
  }
  getProjectBudgets(projectId) {
    return this.http.get(`${this.apiUrl}/projects/${projectId}/budgets`);
  }
  createProjectBudget(projectId, budget) {
    return this.http.post(`${this.apiUrl}/projects/${projectId}/budgets`, budget);
  }
  updateBudget(budgetId, budget) {
    return this.http.put(`${this.apiUrl}/budgets/${budgetId}`, budget);
  }
  deleteBudget(budgetId) {
    return this.http.delete(`${this.apiUrl}/budgets/${budgetId}`);
  }
  static {
    this.ɵfac = function ProjectService_Factory(t) {
      return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProjectService,
      factory: ProjectService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5828:
/*!***********************************************!*\
  !*** ./src/app/services/reporting.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportingService: () => (/* binding */ ReportingService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class ReportingService {
  constructor(http) {
    this.http = http;
    this.apiUrl = '/api/reports/data';
  }
  getReportData(filters = {}) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filters.module) params = params.set('module', filters.module);
    if (filters.startDate) params = params.set('startDate', filters.startDate);
    if (filters.endDate) params = params.set('endDate', filters.endDate);
    if (filters.status) params = params.set('status', filters.status);
    if (filters.search) params = params.set('search', filters.search);
    return this.http.get(this.apiUrl, {
      params
    });
  }
  // Helper method: Export dataset to CSV file download
  exportToCsv(filename, rows) {
    if (!rows || !rows.length) return;
    const headers = ['ID', 'Module', 'Title', 'Category', 'Reference', 'Amount (INR)', 'Status', 'Date'];
    const csvContent = [headers.join(','), ...rows.map(r => [`"${r.id || ''}"`, `"${r.module || ''}"`, `"${(r.title || '').replace(/"/g, '""')}"`, `"${r.category || ''}"`, `"${r.reference || ''}"`, r.amount || 0, `"${r.status || ''}"`, `"${r.date ? new Date(r.date).toLocaleDateString() : ''}"`].join(','))].join('\n');
    const blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  // Helper method: Export dataset to JSON file download
  exportToJson(filename, rows) {
    if (!rows) return;
    const jsonStr = JSON.stringify(rows, null, 2);
    const blob = new Blob([jsonStr], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  // Helper method: Export/Print as styled PDF report
  printPdfReport(title, rows) {
    const printWindow = window.open('', '_blank', 'width=900,height=700');
    if (!printWindow) return;
    const totalVal = rows.reduce((acc, r) => acc + (r.amount || 0), 0);
    const tableRowsHtml = rows.map((r, i) => `
      <tr>
        <td>${i + 1}</td>
        <td><strong>${r.title}</strong></td>
        <td>${r.module}</td>
        <td>${r.category}</td>
        <td><code>${r.reference}</code></td>
        <td>₹${(r.amount || 0).toLocaleString()}</td>
        <td><span class="badge ${r.status.toLowerCase().includes('low') || r.status.toLowerCase().includes('danger') ? 'badge-danger' : 'badge-success'}">${r.status}</span></td>
        <td>${r.date ? new Date(r.date).toLocaleDateString() : 'N/A'}</td>
      </tr>
    `).join('');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${title} - BuildTrack Report</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; color: #222; background: #fff; }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #6C63FF; padding-bottom: 16px; margin-bottom: 24px; }
          .header h1 { margin: 0; color: #1a1d2e; font-size: 24px; }
          .meta { color: #666; font-size: 13px; margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 13px; }
          th, td { border: 1px solid #e0e0e0; padding: 10px 12px; text-align: left; }
          th { background: #f4f5f9; color: #333; font-weight: 600; }
          tr:nth-child(even) { background: #fbfbfd; }
          .summary-card { background: #f0f2fe; border: 1px solid #c7c4ff; border-radius: 8px; padding: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; }
          .summary-card div { font-size: 14px; }
          .badge { padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; }
          .badge-success { background: #e8f5e9; color: #2e7d32; }
          .badge-danger { background: #ffebee; color: #c62828; }
          .footer { margin-top: 40px; text-align: center; font-size: 11px; color: #888; border-top: 1px solid #eee; padding-top: 16px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <h1>🏗 BuildTrack Platform</h1>
            <p style="margin:4px 0 0 0; color:#6C63FF; font-weight:600;">${title}</p>
          </div>
          <div style="text-align:right;">
            <div style="font-size:12px; color:#888;">Generated On</div>
            <div style="font-weight:bold;">${new Date().toLocaleString()}</div>
          </div>
        </div>

        <div class="summary-card">
          <div>Total Report Items: <strong>${rows.length}</strong></div>
          <div>Combined Financial Valuation: <strong>₹${totalVal.toLocaleString()}</strong></div>
        </div>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Module</th>
              <th>Category</th>
              <th>Reference</th>
              <th>Valuation</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHtml}
          </tbody>
        </table>

        <div class="footer">
          BuildTrack System Analytics & Reporting Engine &bull; Confidential Internal Report
        </div>

        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  }
  static {
    this.ɵfac = function ReportingService_Factory(t) {
      return new (t || ReportingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ReportingService,
      factory: ReportingService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 258:
/*!**********************************************!*\
  !*** ./src/app/services/resource.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourceService: () => (/* binding */ ResourceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class ResourceService {
  constructor(http) {
    this.http = http;
    this.apiUrl = '/api';
  }
  // --- Machinery/Equipment API ---
  getResources() {
    return this.http.get(`${this.apiUrl}/resources`);
  }
  createResource(resource) {
    return this.http.post(`${this.apiUrl}/resources`, resource);
  }
  updateResource(id, resource) {
    return this.http.put(`${this.apiUrl}/resources/${id}`, resource);
  }
  deleteResource(id) {
    return this.http.delete(`${this.apiUrl}/resources/${id}`);
  }
  allocateResource(id, projectId) {
    return this.http.put(`${this.apiUrl}/resources/${id}/allocate`, {
      projectId
    });
  }
  releaseResource(id) {
    return this.http.put(`${this.apiUrl}/resources/${id}/release`, {});
  }
  // --- Workforce/Workers API ---
  getWorkers() {
    return this.http.get(`${this.apiUrl}/workers`);
  }
  createWorker(worker) {
    return this.http.post(`${this.apiUrl}/workers`, worker);
  }
  updateWorker(id, worker) {
    return this.http.put(`${this.apiUrl}/workers/${id}`, worker);
  }
  deleteWorker(id) {
    return this.http.delete(`${this.apiUrl}/workers/${id}`);
  }
  allocateWorker(id, projectId) {
    return this.http.put(`${this.apiUrl}/workers/${id}/allocate`, {
      projectId
    });
  }
  releaseWorker(id) {
    return this.http.put(`${this.apiUrl}/workers/${id}/release`, {});
  }
  // --- Attendance API ---
  getAttendance(date) {
    return this.http.get(`${this.apiUrl}/attendance?date=${date}`);
  }
  submitAttendance(date, presentWorkers) {
    return this.http.post(`${this.apiUrl}/attendance`, {
      date,
      presentWorkers
    });
  }
  deleteAttendance(date) {
    return this.http.delete(`${this.apiUrl}/attendance?date=${date}`);
  }
  static {
    this.ɵfac = function ResourceService_Factory(t) {
      return new (t || ResourceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ResourceService,
      factory: ResourceService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2543:
/*!***********************************************!*\
  !*** ./src/app/services/token.interceptor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenInterceptor: () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 4796);


class TokenInterceptor {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(request, next) {
    const token = this.authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
  static {
    this.ɵfac = function TokenInterceptor_Factory(t) {
      return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TokenInterceptor,
      factory: TokenInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map