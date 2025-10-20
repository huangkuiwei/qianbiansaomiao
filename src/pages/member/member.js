
import { toRouter, toSwich } from '@/hooks/utils'
import $http from '../../hooks/http'
export const onPay = (price, openid, agree, user) => {
  console.log('agree', agree)

  if (!user.uid) {
    uni.showModal({
      title: '提示',
      content: '您当前未登录或登录已失效，为了您有更好的体验，扫妙需要您进行登录',
      showCancel: true,
      success: (res) => {
        if (res.confirm) {
          toRouter('/pages/login/index')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

    return
  }

  if (!agree.includes('1')) {
    uni.showToast({
      title: '请先阅读并同意会员协议',
      icon: 'none',
    })

    return
  }

  if (price.id === 10003) {
    uni.showModal({
      content: '暂不支持连续包月购买',
      showCancel: false,
    })

    return
  }

  uni.showLoading({
    title: '正在开通会员',
    mask: true,
  })

  $http.post('api/user/order/pay/create', {
    product_id: price.id,
    pay_type: 12,
    system_type: uni.getDeviceInfo().platform === 'ios' ? 'ios' : 'android',
    micro_appid: uni.getAccountInfoSync().miniProgram.appId,
    openid: openid
  }).then((res) => {
    console.log('res.data', res.data)
    let payInfo = JSON.parse(res.data)

    uni.requestPayment({
      ...payInfo,
      success: async (res) => {
        console.log('支付成功:', res);
        uni.showToast({
          title: '支付成功',
          icon: 'success',
          duration: 1500
        })

        await $http.get('api/user/auth/userauth/info?referch=1').catch(() => {})
        uni.hideLoading()

        setTimeout(() => {
          toSwich('/pages/my/index')
        }, 1500)
      },
      fail: (err) => {
        uni.hideLoading()
        uni.showToast({
          title: '支付取消',
          icon: 'none',
          duration: 1500
        })
        console.error('支付失败:', err);
      },
    })
  }).catch(() => {
    uni.hideLoading()
  })
}