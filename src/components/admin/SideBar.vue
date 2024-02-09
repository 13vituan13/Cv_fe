<template>
  <div class="app-sidebar sidebar-shadow">
    <div class="app-header__logo">
      <div class="logo-src"></div>
      <div class="header__pane ml-auto">
        <div>
          <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="app-header__mobile-menu">
      <div>
        <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <div class="app-header__menu">
      <span>
        <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
          <span class="btn-icon-wrapper">
            <i class="fa fa-ellipsis-v fa-w-6"></i>
          </span>
        </button>
      </span>
    </div>
    <div class="scrollbar-sidebar">
      <div class="app-sidebar__inner">
        <ul class="vertical-nav-menu">
          <li class="app-sidebar__heading">Dashboards</li>
          <li>
            <router-link to="/" class="mm-active">
              <i class="metismenu-icon bi bi-speedometer2"></i>
              Dashboard
            </router-link>
          </li>
          <li class="app-sidebar__heading">Pages</li>
          <li>
            <a href="#">
              <i class="metismenu-icon bi bi-house"></i>
              Masters
              <i class="metismenu-state-icon bi bi-chevron-down caret-left"></i>
            </a>
            <ul>
              <li>
                <router-link to="/">
                  <i class="metismenu-icon bi bi-chat-dots">
                  </i>User Management
                </router-link>
              </li>
              <li>
                <a href="components-accordions.html">
                  <i class="metismenu-icon bi bi-chat-dots">
                  </i>Item Management
                </a>
              </li>
            </ul>
          </li>
          <li>
              <router-link to="/">
                  <i class="metismenu-icon bi bi-chat-dots">
                  </i>Chat Box
              </router-link>
          </li>
        </ul>
      </div>
      <div class="app-sidebar__footer">
        <button @click="authStore.logout">Logout</button>
      </div>
    </div>
  </div>
</template>
  
<script>

import { useAuthStore } from '../../stores/auth';
export default {
  name: 'Sidebar',
  setup() {
      const authStore = useAuthStore();
      return {
         authStore,
      };
   },
};
</script>
  
<style scoped>
</style>
  