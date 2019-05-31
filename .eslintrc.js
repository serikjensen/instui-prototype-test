const config = require('@instructure/ui-eslint-config')

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'notice/notice': 0
  }
}
