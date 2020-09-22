<template>
  <div class="org-wrap">
    <div class="search-box">
      <qw-search-bar
        v-model="keyWord"
        placeholder="请输入"
        @change="handleSearch"
      />
    </div>
    <div class="radio-panel-container">
      <qw-scroll
        ref="scroll"
        :data="djOrgData"
        :options="scrollOptions"
        @pulling-up="onPullingUp"
      >
        <div class="panel-scroll">
          <qw-radio-group v-model="selectedId">
            <qw-radio
              v-for="item in djOrgData"
              :key="item.value"
              :value="item.id"
              :disabled="item.id === isSameOrg"
            >
              {{ item.orgName }}
            </qw-radio>
          </qw-radio-group>
        </div>
      </qw-scroll>
    </div>
    <div class="radio-panel-footer button_wrap">
      <div class="radio-selected">
        <span>已选： </span>
        <span class="select-text">{{ selectedObj.orgName || '' }}</span>
      </div>
      <qw-button
        type="primary"
        class="confirm-btn"
        @click="handleConfirm"
      >
        确定
      </qw-button>
    </div>
    <no-data
      :is-show="showRecord"
      :top-distance="52"
      tips-text="暂无数据"
    />
  </div>
</template>

<script>
import { partyMixin } from '@/module/partyMeet/mixin/party'
import { getDjOrgPagerList } from '@/module/partyMeet/api/partyApi'
import noData from '../../components/noData'
export default {
  name: 'RaidoPanel',
  components: {
    noData
  },
  mixins: [partyMixin],
  props: {
    showPane: {
      type: Boolean,
      default: true
    },
    initSelectId: {
      type: String,
      default: ''
    },
    isSameOrg: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      keyWord: '',
      searchValue: '',
      selectedId: '',
      djOrgData: [] // 党组织数据
    }
  },
  computed: {
    orgListMap () {
      let obj = {}
      this.djOrgData.forEach(item => {
        obj[item.id] = Object.assign({}, item)
      })
      return obj
    },
    selectedObj () {
      return (this.selectedId && this.orgListMap[this.selectedId]) || {}
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.selectedId = this.initSelectId
      this.getDjOrgList()
    },
    // 党组织列表
    getDjOrgList (isLoadMore = false) {
      getDjOrgPagerList({
        orgName: this.searchValue,
        currentPage: this.currPage,
        pageSize: this.pageSize
      }, data => {
        let pageData = data.pageData || []
        if (isLoadMore) {
          this.djOrgData.push(...pageData)
        } else {
          this.djOrgData = pageData
        }
        this.currPage = data.currPage
        this.totalRows = data.totalRows
        this.maxPage = data.maxPage
      })
    },
    // 搜索党组织
    handleSearch () {
      this.currPage = 1
      this.searchValue = this.keyWord
      this.getDjOrgList()
    },
    // 上拉加载
    onPullingUp () {
      this.currPage += 1
      this.getDjOrgList(true)
    },
    handleConfirm () {
      this.$emit('confirm', this.selectedObj)
    }
  }
}
</script>

<style lang="less" scoped>
.org-wrap {
  display: flex;
  flex-direction: column;
  background: #fff;
  z-index: 2;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  margin: auto;
  /deep/ .noData {
    bottom: 60px;
  }
  .search-box {
    padding: 8px 14px;
  }
  .radio-panel-container {
    height: calc(100vh - 60px);
  }

  .panel-scroll {
    padding: 0 0 60px;
    overflow-y: auto;
  }
  .radio-panel-footer {
    display: flex;
    position: absolute;
    justify-content: space-between;
    min-height: 40px;
    line-height: 40px;
    padding: 10px 14px;
    background: #fff;
    border-top: 1px solid #fafafb;
    font-size:15px;
    color: rgba(132, 139, 154, 1);
    bottom: 0;
    z-index: 3;
    width: 100%;
    box-sizing: border-box;
    .select-text {
      color: rgba(85, 133, 240, 1);
    }
    .confirm-btn {
      width: 60px;
    }
  }
}
@media screen and (min-width: 1024px) {
  .org-wrap {
    width: 740px;
  }
}
@media only screen and (-webkit-device-pixel-ratio: 3) and (device-height: 812px) and (device-width: 375px) {
  .org-wrap .panel-scroll {
    padding-bottom: 80px;
  }
}

</style>
