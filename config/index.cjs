/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: 'server-chan',
  TIAN_API:{key:'74172b4477599d545841fd0b7c96d0bc'},
  APP_ID: 'wx4d9e3084bc34c6a9',
  APP_SECRET: '76aa1a3cc6cefbf2726109935073e32c',

  PROVINCE: '湖南',
  CITY: '长沙',

  USERS: [
    {
      name: '玲宝宝',
      //id: 'oyk9g6elGL95ZtjCE8YIsfPq9c3w',
      id: 'SCT189031Tu4JcwebCZiTWV9F4CcjeREjD',
      useTemplateId: '00011',
      //useTemplateId: 'cmlxbNiGRZ9uKQkdEELEJ3YqpCgmnsX0Gk_5jTaGBNg',
    },
  ],

  CALLBACK_TEMPLATE_ID: '0002',
  //CALLBACK_TEMPLATE_ID: 'q9CS-cnCdZ14yz1am5IpEQpB7Q_DaCdfpU5wDXgFq1I',
  CALLBACK_USERS: [
    {
      name: '自己',
      id: 'SCT150188TiW44CLs7Yvtc3Oy5Moz2Vi3p',
      //id: 'oyk9g6YYuJmKeJz_esZCPyIj4oM4',
    }
  ],

}

module.exports = USER_CONFIG
