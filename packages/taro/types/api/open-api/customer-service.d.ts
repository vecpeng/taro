declare namespace Taro {
  namespace openCustomerServiceChat {
    interface ExtInfo {
      url: string
    }
    interface Option {
      /** 客服信息 */
      extInfo: ExtInfo
      /** 企业ID */
      corpId: string
      /** 是否发送小程序气泡消息，默认值：false */
      showMessageCard?: boolean
      /** 气泡消息标题 */
      sendMessageTitle?: string
      /** 气泡消息小程序路径 */
      sendMessagePath?: string
      /** 气泡消息图片 */
      sendMessageImg?: string
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: General.CallbackResult) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: General.CallbackResult) => void
      /** 接口调用成功的回调函数 */
      success?: (result: General.CallbackResult) => void
    }
  }

  /** 打开微信客服。了解更多信息，可以参考微信客服介绍：https://work.weixin.qq.com/kf/。
   * @supported weapp 基础库 2.19.0 开始支持，低版本需做兼容处理。
   * @example
   * ```tsx
   * Taro.openCustomerServiceChat({
   *   extInfo: {url: ''},
   *   corpId: '',
   *   success: function (res) { }
   * })
   * ```
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/service-chat/wx.openCustomerServiceChat.html
   */
  function openCustomerServiceChat(option?: openCustomerServiceChat.Option): Promise<General.CallbackResult>
}
