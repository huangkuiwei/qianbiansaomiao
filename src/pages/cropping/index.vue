<template>
  <view>
    <view class="water-mark" v-show="false">
      <wd-watermark
          ref="waterRef"
          image="data:image/png;base64,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"
          :width="100"
          :height="100"
          :imageWidth="60"
          :imageHeight="43"
          :rotate="0"
      ></wd-watermark>
    </view>

   <template v-if="showCropper && resultList.length">
     <jp-cropper-watermark
         ref="cropperRef"
         @cancel="oncancel"
         @ok="onok"
         :watermarkType="1"
         mode="free"
         :width="width"
         :height="height"
         :maxWidth="1024"
         :maxHeight="1024"
         :url="resultList[currentIndex].url"
         v-model:showCropBox="showCropBox"
         @submit1="submit1"
         @submit2="submit2"
         @reAdd="reAdd"
     />

     <view class="toggle">
       <view class="left" @click="toggleIndex('decrease')" :class="{ disabled: resultList.length === 1 ||currentIndex === 0 }">〈</view>
       <view class="number">
         <view>{{ currentIndex + 1 }}</view>
         <view>/</view>
         <view >{{ resultList.length }}</view>
       </view>
       <view class="right" @click="toggleIndex('add')" :class="{ disabled: resultList.length === 1 ||currentIndex === resultList.length - 1 }">〉</view>
     </view>
   </template>

    <template v-if="!showCropper">
      <view class="img-list">
        <view class="img-item" v-for="item of resultList" :key="item.url">
          <image :src="item.url" mode="aspectFit" />
        </view>
      </view>

      <view class="cropping-fixed">
        <view style="padding: 0 2rem; height: 50px; display: flex; align-items: center">
          <view @click="reAdd" style="flex-grow: 1; display: flex">
            <view style="display: flex; flex-direction: column; align-items: center; gap: 6rpx">
              <image
                  src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/scantool/static/assets/xiangji.png"
                  style="height: 16px; width: 16px"
                  mode="heightFix"
              />
              <view style="font-size: 22rpx; ">重新拍摄</view>
            </view>
          </view>

          <view style="display: flex; align-items: center; gap: 20rpx;">
            <button class="submit" @click="submit">{{ submitText }}</button>
            <button class="share" @click="onShare">分享</button>
          </view>
        </view>
      </view>
    </template>
  </view>

  <Share :show="shareShow"></Share>

  <id-card ref="idCardRef" :propUrls="urls"/>
  <bank-card ref="bankCardRef" :propUrls="urls"/>
  <hukou ref="hukouRef" :propUrls="urls"/>
  <passport ref="passportRef" :propUrls="urls"/>
  <driver ref="driverRef" :propUrls="urls"/>
  <certificate ref="certificateRef" :propUrls="urls"/>
  <license ref="licenseRef" :propUrls="urls"/>
  <fileScan ref="fileScanRef" :propUrls="urls"/>
  <test-paper ref="testPaperRef" :propUrls="urls"/>
  <Jigsaw ref="jigsawRef" :propUrls="urls"/>
  <PicTransform ref="picTransformRef" :propsChannel="tab" :propUrls="urls"/>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import JpCropperWatermark from './jp-cropper-watermark.vue'
import { onLoad, onShareAppMessage, onShow } from '@dcloudio/uni-app'
import { toRouter, toSwich } from '@/hooks/utils'
import $http from '@/hooks/http'
import IdCard from '../camera/certificate/idCard.vue'
import BankCard from '../camera/certificate/bankCard.vue'
import Hukou from '../camera/certificate/hukou.vue'
import Passport from '../camera/certificate/passport.vue'
import Driver from '../camera/certificate/driver.vue'
import Certificate from '../camera/certificate/certificate.vue'
import License from '../camera/certificate/license.vue'
import FileScan from '../camera/fileScan/index.vue'
import TestPaper from '../test-paper/index.vue'
import Jigsaw from '../camera/jigsaw/index.vue'
import PicTransform from '../pic-transform/index.vue'
import { shareShow, shareUrl, taskId } from '@/section/share'
import Share from '@/section/share.vue'

const user = ref({})

const tab = ref(null);
const cerIndex = ref(null);

const width = ref(100);
const height = ref(100);
const urls = ref([]);
const currentIndex = ref(0);
const showCropper = ref(true);
const idCardRef = ref(null);
const bankCardRef = ref(null);
const hukouRef = ref(null);
const passportRef = ref(null);
const driverRef = ref(null);
const certificateRef = ref(null);
const licenseRef = ref(null);
const fileScanRef = ref(null);
const testPaperRef = ref(null);
const jigsawRef = ref(null);
const picTransformRef = ref(null);
const submitText = ref('完成');
const cropperRef = ref(null)
const waterRef = ref(null)
const showCropBox = ref(false);

onLoad(async (options) => {
  tab.value = options.tab;
  cerIndex.value = options.cerIndex;

  if (options.urls) {
    urls.value = options.urls.split(',')
  }

  $http.get('api/user/auth/userauth/info?referch=1').then(res => {
    let vip_info = res.data.vip_info

    user.value = {
      ...res.data,
      ...vip_info,
    };
  })
})

onMounted(() => {
  setTimeout(async () => {
    if (tab.value === '14' || tab.value === '15' || tab.value === '16' || tab.value === '17') {
      submitText.value = '正在转换'
      await picTransformRef.value.setResultList(urls.value)
    }

    width.value = resultList.value[currentIndex.value].width
    height.value = resultList.value[currentIndex.value].height
  }, 100)
})

onShow(() => {
  let globalData = getApp().globalData

  if (globalData.watermarkImg) {
    resultList.value[currentIndex.value].url = globalData.watermarkImg
    globalData.watermarkImg = undefined
  }
})

const resultList = computed(() => {
  if (tab.value === '4') {
    if (cerIndex.value === '1') {
      return idCardRef?.value?.resultList || []
    } else if (cerIndex.value === '2') {
      return bankCardRef?.value?.resultList || []
    } else if (cerIndex.value === '3') {
      return hukouRef?.value?.resultList || []
    } else if (cerIndex.value === '4') {
      return passportRef?.value?.resultList || []
    } else if (cerIndex.value === '5') {
      return driverRef?.value?.resultList || []
    } else if (cerIndex.value === '6') {
      return certificateRef?.value?.resultList || []
    } else if (cerIndex.value === '7') {
      return licenseRef?.value?.resultList || []
    }
  } else if (tab.value === '6') {
    return fileScanRef?.value?.resultList || []
  } else if (tab.value === '10') {
    return testPaperRef?.value?.resultList || []
  } else if (tab.value === '13') {
    return jigsawRef?.value?.resultList || []
  } else if (tab.value === '14' || tab.value === '15' || tab.value === '16' || tab.value === '17') {
    return picTransformRef?.value?.resultList || []
  }

  return []
})

const submit1 = async () => {
  uni.setNavigationBarTitle({
    title: ''
  })

  currentIndex.value = 0

  if (tab.value === '4') {
    if (cerIndex.value === '1') {
      await idCardRef.value.submit()
    } else if (cerIndex.value === '2') {
      await bankCardRef.value.submit()
    } else if (cerIndex.value === '3') {
      await hukouRef.value.submit()
    } else if (cerIndex.value === '4') {
      await passportRef.value.submit()
    } else if (cerIndex.value === '5') {
      await driverRef.value.submit()
    } else if (cerIndex.value === '6') {
      await certificateRef.value.submit()
    } else if (cerIndex.value === '7') {
      await licenseRef.value.submit()
    }
  } else if (tab.value === '6') {
    await fileScanRef.value.submit()
  } else if (tab.value === '10') {
    await testPaperRef.value.submit()
  } else if (tab.value === '13') {
    await jigsawRef.value.submit()
  }

  cropperRef.value.step = 2
}

const submit2 = async () => {
  if (tab.value === '14' || tab.value === '15' || tab.value === '16' || tab.value === '17') {
    await picTransformRef.value.submit()
    submitText.value = '预览'
  } else {
    uni.showLoading({
      title: '加载中...',
      mask: true,
    })

    let saveUrlItem = resultList.value[0]

    if (tab.value === '6') {
      await fileScanRef.value.mergePic()
      saveUrlItem = fileScanRef.value.mergePicUrl[0]
    }

    // 非VIP加水印分享
    if (!user.value.vip_type) {
      let watermarkPicInfo = await toTransformPics(saveUrlItem).catch(() => {})

      if (watermarkPicInfo) {
        saveUrlItem = watermarkPicInfo
      }
    }

    let file_url = saveUrlItem.url

    // 文件未上传就先进行上传处理
    if (!saveUrlItem.url.includes('hnenjoy.oss-cn-shanghai.aliyuncs.com')) {
      let res = await $http.upload('api/global/fileupload/upload', saveUrlItem.url).catch(() => {})

      if (res?.data) {
        file_url = res.data
      } else {
        uni.showToast({
          title: '图片上传失败',
          icon: 'none',
        })
      }
    }

    // 合成长图
    if (tab.value === '13') {
      let res = await $http.post('api/user/tools/pic/composite_long_image', {
        img_urls: [file_url]
      })

      if (res?.data) {
        taskId.value = res.data.task_id
      }
    }

    // 保存结果
    await $http.post('api/global/fileupload/save_result_file', {
      file_url: file_url,
      taskid: taskId.value
    }).catch(() => {})

    shareUrl.value = file_url
  }

  uni.hideLoading()
  showCropper.value = false
}

const submit = async () => {
  if (tab.value === '14' || tab.value === '15' || tab.value === '16' || tab.value === '17') {
    let url = picTransformRef.value.previewUrl
    let filesuffix = url.split('.')[url.split('.').length - 1]

    let filename = url.split('/')[url.split('/').length - 1]
    let newFilePath = `${uni.env.USER_DATA_PATH}/${filename}`

    if (url) {
      if (filesuffix.toLowerCase() === 'pdf' && uni.getDeviceInfo().platform === 'android') {
        uni.downloadFile({
          url: url,
          filePath: newFilePath,
          success: (res) => {
            uni.openDocument({
              filePath: newFilePath,
              showMenu: true,
              success: (res) => {
                console.log('打开成功', res)
              },
              fail: (res) => {
                console.log('打开失败', res)
              }
            })
            console.log('下载成功', res)
          },
          fail: (res) => {
            console.log('下载失败', res)
          }
        })
      } else {
        toRouter('/pages/ai-view/index', 'url=' + encodeURIComponent(picTransformRef.value.previewUrl))
      }
    } else {
      uni.showToast({
        title: '无转换内容',
        icon: 'none'
      })
    }
    return
  }

  toSwich('/pages/document/index')
}

const reAdd = () => {
  uni.navigateBack()
}

const onok = (ev) => {
  resultList.value[currentIndex.value].url = ev.path
};

const onShare = async () => {
  let url = ''

  if (tab.value === '4') {
    if (cerIndex.value === '1') {
      url = idCardRef?.value?.resultList?.[0]?.url
    } else if (cerIndex.value === '2') {
      url = bankCardRef?.value?.resultList?.[0]?.url
    } else if (cerIndex.value === '3') {
      url = hukouRef?.value?.resultList?.[0]?.url
    } else if (cerIndex.value === '4') {
      url = passportRef?.value?.resultList?.[0]?.url
    } else if (cerIndex.value === '5') {
      url = driverRef?.value?.resultList?.[0]?.url
    } else if (cerIndex.value === '6') {
      url = certificateRef?.value?.resultList?.[0]?.url
    } else if (cerIndex.value === '7') {
      url = licenseRef?.value?.resultList?.[0]?.url
    }
  } else if (tab.value === '6') {
    url = fileScanRef?.value?.resultList?.[0]?.url
  } else if (tab.value === '10') {
    url = testPaperRef?.value?.resultList?.[0]?.url
  } else if (tab.value === '13') {
    url = jigsawRef?.value?.resultList?.[0]?.url
  } else if (tab.value === '14' || tab.value === '15' || tab.value === '16' || tab.value === '17') {
    url = picTransformRef.value.previewUrl
  }

  if (tab.value === '14' || tab.value === '15' || tab.value === '16' || tab.value === '17') {
    uni.showLoading({
      title: '正在加载...'
    })

    let filename = url.split('/')[url.split('/').length - 1]
    let newFilePath = `${uni.env.USER_DATA_PATH}/${filename}`

    uni.downloadFile({
      url: url,
      filePath: newFilePath,
      success: () => {
        uni.shareFileMessage({
          filePath: newFilePath,
          success() {
            console.log('文件转发成功');
          },
          fail(res) {
            console.log('文件转发失败', res);
          },
          complete() {
            uni.hideLoading();
          }
        });
      },
      fail(res) {
        console.log('文件下载失败', res);
        uni.hideLoading();
      },
      complete: () => {
        uni.hideLoading();
      }
    });
  } else {
    shareShow.value = true
  }
}

const oncancel = () => {};

const toggleIndex = (type) => {
  if (type === 'add') {
    if (resultList.value.length === 1 ||currentIndex.value === resultList.value.length - 1) {
      uni.showToast({
        title: '已经是最后一张了',
        icon: 'none'
      })

      return
    }

    currentIndex.value += 1
  } else {
    if (resultList.value.length === 1 || currentIndex.value === 0) {
      uni.showToast({
        title: '已经是第一张了',
        icon: 'none'
      })

      return
    }

    currentIndex.value -= 1
    width.value = resultList.value[currentIndex.value].width
    height.value = resultList.value[currentIndex.value].height
  }
}

onShareAppMessage(() => {
  return {
    title: '高清电子文档一键转换',
    imageUrl: 'https://hnenjoy.oss-cn-shanghai.aliyuncs.com/scantool2/share-img.png',
    path: '/pages/index/index',
  }
})


const toTransformPics = (imgInfo) => {
  return new Promise((resolve, reject) => {
    const waterMarkUrl = waterRef.value.waterMarkUrl;

    if (uni.createOffscreenCanvas) {
      const canvasImg = uni.createOffscreenCanvas({
        height: imgInfo.height,
        width: imgInfo.width,
        type: "2d",
      });

      canvasImg.id = 'water-canvas'

      const ctxImg = canvasImg.getContext("2d");
      const img = canvasImg.createImage();
      img.crossOrigin = "anonymous";
      img.referrerPolicy = "no-referrer";
      img.src = imgInfo.url

      img.onload = () => {
        ctxImg.drawImage(img, 0, 0, imgInfo.width, imgInfo.height);
        ctxImg.restore();

        const img2 = canvasImg.createImage();
        img2.src = waterMarkUrl;

        img2.onload = () => {
          const numRows = Math.ceil(imgInfo.height / img2.height);
          const numColumns = Math.ceil(imgInfo.width / img2.width);

          for (var i = 0; i < numRows; i++) {
            for (var j = 0; j < numColumns; j++) {
              const x = j * img2.width;
              const y = i * img2.height;

              ctxImg.drawImage(img2, x, y, img2.width, img2.height);
            }
          }

          ctxImg.restore();

          let urlBase = canvasImg.toDataURL();

          const fs = uni.getFileSystemManager();
          const tempFilePath = `${uni.env.USER_DATA_PATH}/${new Date().getTime()}.png`;

          fs.writeFile({
            filePath: tempFilePath,
            data: urlBase.split(',')[1], // Remove the data URL prefix and decode Base64
            encoding: 'base64',
            success: async () => {
              let res = await $http.upload('api/global/fileupload/upload', tempFilePath).catch(() => {})

              if (res?.data) {
                resolve({
                  ...imgInfo,
                  url: res.data
                })
              } else {
                reject(res)
              }
            },
            fail: (error) => {
              reject(error)
            }
          });
        };
      };
    }
  })
};
</script>
<style>
page {
  background: #f7f8fc;
}
</style>
<style scoped lang="scss">
.cropping-img {
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.cropping-fixed {
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
  background: #fff;
  width: 100vw;
  border-top: 1px solid #eee;
  font-size: 0.85rem;
  --wot-button-primary-bg-color: #00D7AD;
}
.cropping-jp{
  overflow: auto;
  display: flex;
  align-items: center;
  font-size: 26rpx;
}

.submit {
  background: #ffffff;
  border: 2rpx solid #00D7AD;
  border-radius: 999px;
  font-size: 28rpx;
  color: #00D7AD;
  width: 180rpx;
  margin: 0;
  padding: 0;
}

.share {
  background: #00D7AD;
  border-radius: 999px;
  font-size: 28rpx;
  color: #ffffff;
  width: 180rpx;
  margin: 0;
  padding: 0;
}

.cropping-jp .d-flex-column-center{
  flex-shrink: 0;
  flex-grow: 1;
}

.step2 {
  padding: 0 20rpx;

  image {
    width: 100%;
  }
}

.toggle {
  position: fixed;
  bottom: 140rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: #ffffff;
  padding: 10rpx 40rpx;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999999;
  color: #2F2F46;
  font-size: 28rpx;

  .number {
    padding: 0 2rpx;
    flex-shrink: 0;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34rpx;
  }

  .left {
    font-weight: bold;
  }

  .right {
    font-weight: bold;
  }

  .disabled {
    color: #D9D9D9;
    border-radius: 10rpx;
  }
}

.img-list {
  display: flex;
  flex-wrap: wrap;
  padding: 40rpx;

  .img-item {
    background: #ffffff;
    width: 315rpx;
    box-shadow: 0 3px 3px #eee;
    height: 446rpx;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-radius: 20rpx;
    margin-bottom: 20rpx;

    &:nth-child(2n - 1) {
      margin-right: 40rpx;
    }

    image {
      height: 100%;
      border-radius: 20rpx;
    }
  }
}
</style>