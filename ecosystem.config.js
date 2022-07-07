module.exports = {
    apps : [{
      name   : "rest-node-ui",
      script : "npm run build && npm run start",
      watch: true,
      ignore_watch: [
          "node_modules",
          ".next",
          "cypress"
      ]
    }]
  }
  