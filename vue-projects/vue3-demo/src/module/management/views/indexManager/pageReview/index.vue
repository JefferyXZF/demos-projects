<template>
  <div class="page-review">
    <div class="content_box">
      <div>
        <!-- banner图 -->
        <div
          class="content-item content-hover content-banner"
          :class="{active: activeType === 4 }"
        >
          <i class="edit-propagate" @click="editInfo(4)"></i>
          <div class="swiper_banner">
            <el-carousel height="167px">
              <el-carousel-item
                v-for="(item, index) in propagateList"
                :key="index"
              >
                <el-image
                  :src="item.iconUrl"
                  fit="fill"
                ></el-image>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!-- 类型 -->
        <div class="content-item edit-type-icon">
          <i class="edit-common" @click="editInfo(1)"></i>
        </div>
        <div class="nav_box content-hover">
          <div
            class="content-item"
            :class="{active: activeType === 1 }"
          >
            <div class="scroll_view">
              <div
                class="nav_item"
                v-for="(item, index) in blockList"
                :key="index"
                :style="{'backgroundImage': 'url('+ item.iconUrl + ')', 'backgroundSize': 'contain'}"
              >
                <!-- <el-image :src="item.iconUrl" fit="fill"></el-image> -->
                <span>{{item.themeTitle}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 报考咨询 -->
        <div
          class="section_white consultation_box mar_b20 content-item"
          :class="{active: activeType === 'advisory' }"
          >
          <i class="edit-common" @click="editInfo('advisory')"></i>
          <div class="section_title content_padded">
            <div class="title">报考咨询</div>
            <!-- <div class="title_sub">CANDIDATE RULES</div> -->
          </div>
          <div class="content_padded flex flex_center flex_middle consultation_detail">
            <div class="flex_item_2">
              <el-image class="icon" :src="iconChatUrl" fit="fill"></el-image>
              <span>线上与老师沟通</span>
            </div>
            <div class="content_right">
              <div class="btn">立即咨询</div>
            </div>
          </div>
        </div>
        <!-- 考生须知 -->
        <div
          class="section_white examinee_box mar_b20 content-item"
          :class="{active: activeType === 2 }"
        >
          <i class="edit-common" @click="editInfo(2)"></i>
          <div class="section_title content_padded">
            <div class="title">
              {{studentTitle}}
            </div>
            <!-- <div class="title_sub">CANDIDATE RULES</div> -->
          </div>
          <div class="section_content content_padded">

            <div class="scroll_view">
              <div
                class="examinee_item content_center"
                v-for="(item, index) in studentList"
                :key="index"
              >
                <el-image class="icon" :src="item.iconUrl" fit="fill"></el-image>
                <span>{{item.themeTitle}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 通知公告 -->
        <div
          class="section_white notice_box mar_b20 content-item"
          :class="{active: activeType === 3 }"
        >
          <i class="edit-common" @click="editInfo(3)"></i>
          <div class="section_title content_padded flex flex_center flex_middle">
            <div class="flex_item_2">
              <div class="title">{{noticeTitle}}</div>
              <!-- <div class="title_sub">ANNOUNCEMENTS</div> -->
            </div>
            <!-- <div class="more_box content_right">
              <div class="item_circule" v-for="(item, index) in 3" :key="index"></div>
            </div> -->
          </div>
          <div class="section_content">
            <div
              class="flex flex_center flex_middle notice_item"
              v-for="(item, index) in noticeData"
              :key="index"
              v-show="index <= 2"
            >
              <div class="content_center date_box">
                <div class="day">{{item.day}}</div>
                <div class="short_date">{{item.shortDate}}</div>
              </div>
              <div class="flex_item">{{item.articleTitle}}</div>
            </div>
          </div>
        </div>
        <!-- 联系方式 -->
        <div
          class="section_white contact_box content-item"
          :class="{active: activeType === 'contacts' }"
        >
          <i class="edit-common" @click="editInfo('contacts')"></i>
          <div class="section_title content_padded">
            <div class="title">联系方式</div>
            <!-- <div class="title_sub">CONTACT</div> -->
          </div>
          <div class="section_content">
            <div class="flex flex_middle">
              <div class="text_dec">
                <!-- <el-image class="icon icon_01" :src="require('@/assets/img/icon_location.png')" mode=""></el-image> -->
                <span>地 址：</span>
                <span>{{contactInfo.address}}</span>
              </div>
              <!-- <div class="flex_item">{{contactInfo.address}}</div> -->
            </div>
            <div class="flex flex_middle">
              <div class="text_dec">
                <!-- <el-image class="icon icon_02" :src="require('@/assets/img/icon_user.png')" mode=""></el-image> -->
                <span>联系人：</span>
                <span>{{contactInfo.contracts}}</span>
              </div>
              <!-- <div class="flex_item">{{contactInfo.contracts}}</div> -->
            </div>
            <div class="flex flex_middle">
              <div class="text_dec">
                <!-- <el-image class="icon icon_03" :src="require('@/assets/img/icon_phone.png')" mode=""></el-image> -->
                <span>电 话：</span>
                <span>{{contactInfo.mobile}}</span>
              </div>
              <!-- <div class="flex_item">{{contactInfo.mobile}}</div> -->
            </div>
            <div class="flex flex_middle">
              <div class="text_dec mobile-content">
                <!-- <el-image class="icon icon_04" :src="require('@/assets/img/icon_gw.png')" mode=""></el-image> -->
                <span>官方网址：</span>
                <span class="flex_item">{{contactInfo.officialWebsite}}</span>
                <span class="btn">在线咨询</span>
              </div>
              <!-- <div class="flex_item">
                <div class="flex flex_center flex_middle">
                  <div class="flex_item">{{contactInfo.officialWebsite}}</div>
                  <div class="btn_box content_right">
                    <div class="btn">在线咨询</div>
                    <button class="btn" @click="toChatList">在线咨询</button>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
          <!-- 二维码 -->
          <div class="content_center code_box mar_b20">
            <el-image class="icon_code" :src="qrCodeUrl" fit="contain"></el-image>
            <span>官方微信公众号</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pageReview',
  props: {
    propagateList: {
      type: Array,
      default: () => []
    },
    blockList: {
      type: Array,
      default: () => []
    },
    studentList: {
      type: Array,
      default: () => []
    },
    noticeList: {
      type: Array,
      default: () => []
    },
    studentTitle: {
      type: String,
      default: ''
    },
    noticeTitle: {
      type: String,
      default: ''
    },
    contactInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      iconChatUrl: require('@/assets/images/icon_chat.png'),
      qrCodeUrl: require('@/assets/images/qrcode.png'),
      activeType: -1
    }
  },
  computed: {
    noticeData () {
      return this.noticeList.map(item => {
        const dateArry = item.createTime.split(' ')[0].split('-')
        item.day = dateArry[2]
        item.shortDate = `${dateArry[0]}.${dateArry[1]}.`
        return item
      })
      // for (let i = 0; i < this.noticeList.length; i++) {
      //   const item = this.noticeList[i]
      //   const dateArry = item.createTime.split(' ')[0].split('-')
      //   item.day = dateArry[2]
      //   item.shortDate = `${dateArry[0]}.${dateArry[1]}.`
      //   tempArr.push(item)
      // }
      // return tempArr
    }
  },
  methods: {
    editInfo (type, id) {
      this.activeType = type
      this.$emit('updateType', type)
    }
  }
}
</script>
<style lang="scss" scoped>
.page-review {
  width: 320px;
  background: #F6F6F6;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, .1);
  padding-bottom: 20px;
  .content_box {
    max-height: calc(100vh - 100px);
    overflow-y: auto;
    overflow-x: hidden;
    padding: 3px;
  }
  .content_box .mobile-content {
    display: flex;
    .flex_item {
      flex: 1;
    }
    .btn {
      margin: -7px 3px 0 0;
      font-size: 12px;
    }
  }
  .content-banner {
    overflow: hidden;
  }
  /deep/ .el-carousel__button {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
  .content-item {
    position: relative;
    border: 1px dashed transparent;
  }
  .active {
    border-color: #898989;
    overflow: hidden;
  }
  .edit-type-icon {
    height: 30px;
  }
  .nav_item {
    background-repeat: no-repeat;
    background-position: center;
  }
  .edit-propagate {
    width: 35px;
    height: 35px;
    background: url('../../../../../assets/images/icon_edit_propagate.png') no-repeat;
  }
  .edit-common {
    width: 18px;
    height: 19px;
    background: url('../../../../../assets/images/icon_edit_common.png') no-repeat;
  }
  .edit-propagate,
  .edit-common {
    position: absolute;
    right: 6px;
    top: 6px;
    cursor: pointer;
    background-size: cover;
    z-index: 10;
  }

}
.swiper_banner {
  width: 320px;
  height: 167px;
  background: #fff;
  image {
    width: 320px;
    height: 167px;
  }
}
.nav_box {
  padding: 10px 10px 10px 12px;
  margin-bottom: 5px;
  user-select: none;
  .scroll_view {
    // width: 320px;
    height: 70px;
    padding-right: 15px;
    white-space: nowrap;
    overflow-x: auto;
    background: #fff;
    .nav_item {
      display: inline-block;
      width: 92px;
      height: 49px;
      margin-right: 11px;
      span {
        line-height: 49px;
        margin-left: 10px;
        font-size: 14px;
        color: #FFFFFF;
      }
    }
  }
}

.consultation_box {
  .icon {
    display: inline-block;
    width: 19px;
    height: 18px;
    vertical-align: middle;
    margin-right: 4px;
  }
  span {
    font-size: 15px;
  }
  .btn {
    display: inline-block;
    background: linear-gradient(to left, #4A77F0, #78BEFA);
    color: #FFFFFF;
    font-size: 12px;
    padding: 0 12px;
    line-height: 2.2;
    border-radius: 5px;
  }
}

.examinee_box {
  > .section_content {
    overflow: hidden;
  }
  .scroll_view {
    width: 320px;
    height: 80px;
    padding-right: 15px;
    white-space: nowrap;
    overflow-x: scroll;
  }
  .examinee_item {
    display: inline-block;
    width: 61px;
    /deep/ .el-image__inner {
      border-radius: 15px;
    }
  }
  .icon {
    display: block;
    width: 45px;
    height: 45px;
    margin: 0 auto 5px;
  }
  span {
    font-size: 10px;
  }
}

.notice_box {
  .section_content {
    padding: 0 10px;
  }
  .notice_item {
    justify-content: flex-start;
    padding: 20px 0;
    border-bottom: 1px solid #E9E9E9;
    .date_box {
      display: inline-block;
      width: 50px;
      margin-right: 7px;
      font-size: 13px;
    }
    .day { font-size: 22px; }
    .short_date { font-size: 12px; }
    &:last-child {
      border-bottom: 0;
    }
    > .flex_item {
      font-size: 14px;
    }
  }
  .more_box {
    width: 60upx;
    .item_circule {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #969696;
      margin-right: 3px;
    }
  }
}

.contact_box {
  .section_content {
    > .flex {
      margin-bottom: 10px;
      padding-left: 10px;
    }
  }
  .title {
    padding-bottom: 20px;
  }
  .flex_item {
    font-size: 14px;
  }
  .text_dec {
    display: inline-block;
    // width: 100px;
    span {
      font-size: 14px;
    }
  }
  .icon {
    display: inline-block;
    vertical-align: middle;
    margin-right: 4px;
  }
  .icon_01,
  .icon_02,
  .icon_03,
  .icon_04 {
    width: 17px;
    // height: 25px;
    margin-right: 5px;
  }
  // .icon_02 {
  //   width: 24px;
  //   height: 24px;
  // }
  // .icon_03 {
  //   width: 21px;
  //   height: 21px;
  // }
  // .icon_04 {
  //   width: 21px;
  //   height: 20px;
  // }
  .btn {
    display: inline-block;
    background: linear-gradient(to left, #4A77F0, #78BEFA);
    color: #FFFFFF;
    font-size: 12px;
    padding: 0 12px;
    line-height: 2.2;
    border-radius: 5px;
  }
}

.code_box {
  padding: 15px 0 25px;
  .icon_code {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto 5px;
  }
}

.section_title {
  .title {
    font-size: 14px;
    color: #666666;
    margin-bottom: 2px;
  }
  .title_sub {
    font-size: 11px;
    color: #B4B4B4;
  }
}
.flex {
	display: flex;
}

.flex_item {
	width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.flex_item_2 {
  flex: 2;
}
.flex_center {
	justify-content: center;
}

.flex_middle {
	align-items: center;
}

.content_center {
	text-align: center;
}

.content_right {
	text-align: right;
}

.content_padded {
	padding: 10px;
}

.section_white {
	background-color: #fff;
}
.section_white:hover,
.content-hover:hover {
  box-shadow:0px 0px 8px rgba(0,103,237,0.5);
}
.gray {
	color: #999999;
}
.mar_b20 {
  margin-bottom: 10px;
}
</style>
