<template>
  <div class="container">
    <nav>Navbar</nav>
    <main>Main</main>
    <div id="sidebar">Sidebar</div>
    <div id="content1">Content1</div>
    <div id="content2">Content2</div>
    <div id="content3">Content3</div>
    <footer>Footer</footer>
  </div>
</template>

<!--<script>-->
<!--export default {-->
<!--name: "Container"-->
<!--}-->
<!--</script>-->

<style scoped>
.container {
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 0.2fr 1.5fr 1.2fr 0.8fr;
  grid-template-areas:
      "nav nav nav nav"
      "sidebar main main main"
      "sidebar content1 content2 content3"
      "sidebar footer footer footer";
  grid-gap: 0.2rem;
}

nav {
  background-color: aqua;
  grid-area: nav;
  border-radius:var(--main-radius);
  padding:var(--main-padding);
}

main {
  background-color: lavender;
  grid-area: main;
  border-radius: var(--main-radius);
  padding: var(--main-padding);
}

#sidebar {
  background-color: aquamarine;
  grid-area: sidebar;
  border-radius: var(--main-radius);
  padding: var(--main-padding);
}

#content1 {
  background-color: lightcoral;
  grid-area: content1;
  border-radius: var(--main-radius);
  padding: var(--main-padding);
}

#content2 {
  background-color: lightcyan;
  grid-area: content2;
  border-radius: var(--main-radius);
  padding: var(--main-padding);
}

#content3 {
  background-color: orange;
  grid-area: content3;
  border-radius: var(--main-radius);
  padding: var(--main-padding);
}

footer {
  background-color: antiquewhite;
  grid-area: footer;
  border-radius: var(--main-radius);
  padding: var(--main-padding);
}

@media only screen and (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 0.4fr) 2.2fr repeat(3, 1.2fr) 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content1"
      "content2"
      "content3"
      "footer";
    grid-gap: 0.2rem;
  }
}
</style>