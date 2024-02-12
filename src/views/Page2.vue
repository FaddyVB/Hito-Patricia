<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hito_1_RAA</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<body>
  <div id="app">
    <router-link to="/page1">Page 1</router-link>
    <router-link to="/page2">Page 2</router-link>
    <router-link to="/page3">Page 3</router-link>
    <router-link to="/page4">Page 4</router-link>
    <router-link to="/page5">Page 5</router-link>

    <router-view></router-view>
  </div>

  <script>
    const Page1 = { template: '<div>Page 1</div>' }
    const Page2 = { template: '<div>Page 2</div>' }
    const Page3 = { template: '<div>Page 3</div>' }
    const Page4 = { template: '<div>Page 4</div>' }
    const Page5 = { template: '<div>Page 5</div>' }

    const routes = [
      { path: '/page1', component: Page1 },
      { path: '/page2', component: Page2 },
      { path: '/page3', component: Page3 },
      { path: '/page4', component: Page4 },
      { path: '/page5', component: Page5 }
    ]

    const router = new VueRouter({
      routes
    })

    new Vue({
      el: '#app',
      router
    })
  </script>
</body>
</html>
