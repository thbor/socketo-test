// //vue.config.js

// module.exports = {
//   devServer: {
//     proxy: {
//         '/socket.io': {
//           target: 'http://127.0.0.1:8081',
//           ws: true,
//           changeOrigin: true
//         },
//         // 'sockjs-node': {
//         //   target: 'http://192.168.37.130:5050',
//         //   ws: false,
//         //   changeOrigin: true
//         // },
//     }

//   }
// }
module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/dash',
//   devServer: {
//     proxy: {
//         // '/api': {
//         //     target: 'http://10.244.186.86:8080/api',
//         //     changeOrigin: true,
//         //     ws: true,
//         //     pathRewrite: {
//         //       '^/api': ''
//         //     }
//         // },
//         '/dfm': {
//           target: 'http://10.244.186.111:8080/dfm',
//           changeOrigin: true,
//           ws: true,
//           pathRewrite: {
//             '^/dfm': ''
//           }
//         }
//     }
//  },
  outputDir: '../src/main/webapp',
  transpileDependencies: [/node_modules[/\\\\](element-ui|vuex|debug|mqtt|router)[/\\\\]/],
};
