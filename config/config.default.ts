import { defineConfigFactory, type Context, type PartialEggConfig } from 'egg';

const domainWhiteList = [
  'http://localhost:8000',
  'http://127.0.0.1:8000',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:3100',
  'http://127.0.0.1:8080',
  'https://dreamstep.top',
  'https://www.dreamstep.top',
  'https://shoptraffic.cn',
  'https://www.shoptraffic.cn',
  'http://139.224.110.211',
  'https://139.224.110.211',
  'https://www.limeetpet.com',
  'https://limeetpet.com',
  'https://admin.limeetpet.com',
  'https://m.limeetpet.com',
  'https://api.limeetpet.com',
  'chrome-extension://kinkjndcehejpaleaobfmnlbpgbpnlok'
];

export default defineConfigFactory((appInfo) => {
  const config = {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_{{keys}}',

    // add your egg config in here
    middleware: [] as string[],

    // change multipart mode to file
    // https://github.com/eggjs/egg-multipart
    // @see https://github.com/eggjs/multipart/blob/master/src/config/config.default.ts#L104
    multipart: {
      mode: 'file' as const,
    },
    redis:{
      client: {
        port: 6379, // Redis port
        host: '192.168.3.93', // Redis host
        password: '',
        db: 0
      },
      agent: true,
      expire: 604800 // 保存周期7D
    },
    // egg-session-redis 配套，session存入这个redis
    sessionRedis:{
      name: 'EGG_SESS',
    },
    sequelize:{
      dialect: 'mysql',
      database: 'musicMcpServer',
      host: '192.168.3.93',
      port: 3306,
      // username: 'affiliatetraffic',
      username: 'root',
      password: 'Hwszhou2416$',
      timezone: '+08:00',
      dialectOptions: {
        dateStrings: true,
        typeCast: true
      },
      operatorsAliases: false,
      define: {
        freezeTableName: true,
        timestamps: true,
        updatedAt: true,
        createdAt: true,
        underscored: false
      },
      logging: true
    },
    security:{
      csrf: {
        enable: false
      },
      domainWhiteList
    },
    cors: {
      origin: (ctx: Context) => {
        const origin = ctx.request.header.origin;
        if (origin && domainWhiteList.includes(origin)) {
          return origin;
        }
      },
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
      credentials: true
    },
    http: {
      headers: {
        common: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      },
      timeout: 60000 * 5 // 默认请求超时
    },

  } as PartialEggConfig;

  // add your special config in here
  // Usage: `app.config.bizConfig.sourceUrl`    
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    bizConfig,
  };
});
