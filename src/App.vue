<template>
  <nav>
    <ul>
      <li><RouterLink :to="{ name: 'home' }">Home</RouterLink></li>
      <li><RouterLink :to="{ name: 'post-list' }">Posts</RouterLink></li>
    </ul>
  </nav>
  <RouterView />
</template>
