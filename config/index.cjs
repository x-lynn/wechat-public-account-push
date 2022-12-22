/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  // 请将以下代码按照图示粘贴到对应位置
  USE_PASSAGE: 'server-chan',
  
  TIAN_API:{key:'74172b4477599d545841fd0b7c96d0bc'},
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx4d9e3084bc34c6a9',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '76aa1a3cc6cefbf2726109935073e32c',

  PROVINCE: '湖南',
  CITY: '邵阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'SCT150188TiW44CLs7Yvtc3Oy5Moz2Vi3p',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'e5rdoHCvQtBcl_6iRENBP_7MaZ3HSPtz3Wk6j8zZXlk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-25',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '自己', year: '1997', date: '12-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '自己', year: '1998', date: '01-25',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '11-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-11-22' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-11-22' },
      ],
    },{
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyk9g6elGL95ZtjCE8YIsfPq9c3w',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Efx5Zd91Gi6w86LXY-8_IME1O-weDB9QWfq0NkrOI8I',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2001', date: '10-04',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2001', date: '11-17',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '11-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-11-22' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-11-22' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'q9CS-cnCdZ14yz1am5IpEQpB7Q_DaCdfpU5wDXgFq1I',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyk9g6YYuJmKeJz_esZCPyIj4oM4',
    }
  ],

}

module.exports = USER_CONFIG

