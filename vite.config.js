// import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
// export default defineConfig({
//   // plugins: [vue()],
//   // resolve: {
//   //   alias: {
//   //     "@": fileURLToPath(new URL("./src", import.meta.url)),
//   //   },
//   // },
//   resolve: {
//     alias: [
//         {
//             find: '@',
//             replacement: path.resolve(__dirname, 'src')
//         }
//     ]
// },
// });

export default defineConfig({
  server: {
    plugins: [vue()],
    base: "/new-cocktails",
  },
});
