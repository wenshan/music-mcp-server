'use strict';

import tracerPlugin from '@eggjs/tracer';

export default {
  // 聚合MCP
  // mcpProxy: {
  //   enable: true,
  //   package: '@eggjs/mcp-proxy-plugin'
  // },
  mysql: {
    enable: false,
    package: 'egg-mysql'
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  http: {
    enable: true,
    package: 'egg-axios'
  },
  apiMock: {
    enable: false,
    package: 'egg-api-mock'
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },
  redis: {
    enable: true,
    package: 'egg-redis'
  },
  validate: {
    enable: true,
    package: 'egg-validate'
  },
  // enable tracer plugin
  ...tracerPlugin(),
};
