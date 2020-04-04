module.exports = {
  development: {
    loginUrl: 'http://eduguide-login-dev.qcloudtrip.com/oauth/authorize?client_id=6rwIcvatiWqBQ5rdVCFkmcXvmXjPgXs0&scope=get_username&response_type=code&appid=11&disable-sub-account-switch=1&disable-country=0&state=453&nonce=2342&redirect_uri=[redirect_uri]',
    redirectUrl: 'http://zstdev.qq.com/enroll',
    cgiUrl: 'https://www.jhjyj.cn/do1cloud-authorization-single' // 测试
    // cgiUrl: 'https://izs.qhavtc.com/do1cloud-authorization-single' // 生产
  },
  test: {
    loginUrl: 'http://eduguide-login-dev.qcloudtrip.com/oauth/authorize?client_id=6rwIcvatiWqBQ5rdVCFkmcXvmXjPgXs0&scope=get_username&response_type=code&appid=11&disable-sub-account-switch=1&disable-country=0&state=453&nonce=2342&redirect_uri=[redirect_uri]',
    redirectUrl: 'http://zstdev.qq.com/enroll',
    // cgiUrl: 'https://www.jhjyj.cn/do1cloud-authorization-single' // 测试
    cgiUrl: 'https://izs.qhavtc.com/do1cloud-authorization-single' // 生产
  },
  production: {
    loginUrl: 'http://eduguide-login-dev.qcloudtrip.com/oauth/authorize?client_id=6rwIcvatiWqBQ5rdVCFkmcXvmXjPgXs0&scope=get_username&response_type=code&appid=11&disable-sub-account-switch=1&disable-country=0&state=453&nonce=2342&redirect_uri=[redirect_uri]',
    redirectUrl: 'http://zstdev.qq.com/enroll',
    cgiUrl: 'https://www.jhjyj.cn/do1cloud-authorization-single' // 测试
    // cgiUrl: 'https://izs.qhavtc.com/do1cloud-authorization-single' // 生产
  },
  baseUrl: '/do1cloud-authorization-single'
}
