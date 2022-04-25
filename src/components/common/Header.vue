<template>
  <div class="page-light">
    <div class="wrapper">
      <header class="header">
        <nav>
          <ul class="nav">
            <li class="nav-item"><a class="nav-link" href="">Услуги</a></li>
            <li class="nav-item"><a class="nav-link" href="">О нас</a></li>
            <li class="nav-item"><a class="nav-link" href="">Контакты</a></li>
          </ul>
        </nav>
        <img class="header-logo" src="./../../images/logo.svg" alt="Logo" />
        <ul class="nav nav-info">
          <li class="nav-item"><a class="nav-link" href="">Цены</a></li>
          <li class="nav-item"><a class="nav-link" href="">Тренеры</a></li>
        </ul>
        <router-link to="login" class="nubex">Войти</router-link>
        <div class="toggle-menu">
          <div class="line line1"></div>
          <div class="line line2"></div>
          <div class="line line3"></div>
        </div>
      </header>
    </div>
  </div>
</template>