<template>
  <div class="manager-container">
    <div>
      <page-review
        :propagateList="propagateList"
        :blockList="blockList"
        :studentList="studentList"
        :noticeList="noticeList"
        :studentTitle="studentTitle"
        :noticeTitle="noticeTitle"
        :contactInfo="contactsData"
        @updateType="updateType"
      />
    </div>
    <div class="setting">
      <!-- 联系方式、立即咨询 -->
      <component
        v-if="showOthersBlock.includes(showEditBlock)"
        :is="showEditBlock"
        :contactsData="contactsData"
        @updateContactsData="updateContactsData"
      ></component>
      <div class="content-container" v-show="showPageManager.includes(showEditBlock)">
        <!-- Banner图片列表 -->
        <div v-show="showEditBlock === 4">
          <p class="title">宣传图片</p>
          <div class="page-propagate-content">
            <propagate-item
              v-for="(item, idx) in propagateList"
              class="page-propagate-item"
              :dataList="propagateList"
              :key="idx"
              :idx="idx"
              :item.sync="item"
              :type="4"
              :showAdd="idx === propagateList.length - 1 && propagateList.length <= 4"
              :showDel="propagateList.length > 1"
              @add="addBanner"
              @delete="delBanner"
              @open="openAirticle"
            />
          </div>
          <p class="tips">宣传图片上传不得超过5张</p>
        </div>
        <!-- 方块导航 -->
        <div
          v-show="showEditBlock === 1"
          class="block-area"
        >
          <p class="title">图片列表</p>
          <block-item
            v-for="(item, idx) in blockList"
            :key="idx"
            :idx="idx"
            :item="item"
            :type="1"
            :showAdd="idx === blockList.length - 1 && blockList.length <= 5"
            :showDel="blockList.length > 1"
            @add="addBlock"
            @delete="delBlock"
            @open="openAirticle"
          />
          <p class="tips">建议尺寸110px*60px，图片最多上传不能超过6张</p>
        </div>
        <!-- 图标导航 -->
        <div
          v-show="showEditBlock === 2"
          class="mt38"
        >
          <p class="title">图标导航</p>
          <div class="set-title">
            <span class="required">*</span>
            <el-input v-model="studentTitle" class="title-input"></el-input>
          </div>
          <student-item
            v-for="(item, idx) in studentList"
            :key="idx"
            :idx="idx"
            :item="item"
            :type="2"
            :showAdd="idx === studentList.length - 1 && studentList.length <= 9"
            :showDel="studentList.length > 1"
            @add="addStudent"
            @delete="delStudent"
            @open="openAirticle"
          />
          <p class="tips">建议尺寸45*45px 图片最多上传不能超过10张</p>
        </div>
        <!-- 通知栏目 -->
        <div
          v-show="showEditBlock === 3"
          class="mt38"
        >
          <p class="title">通知栏目</p>
          <div class="set-title">
            <span class="required">*</span>
            <el-input v-model="noticeTitle" class="title-input"></el-input>
          </div>
          <notice-item
            v-for="(item, idx) in noticeList"
            :key="idx"
            :idx="idx"
            :item="item"
            :type="3"
            :showAdd="idx === noticeList.length - 1"
            :showDel="noticeList.length > 1"
            @add="addNotice"
            @delete="delNotice"
            @open="openAirticle"
          />
        </div>
      </div>
      <div
        v-show="showPageManager.includes(showEditBlock)"
        class="btn-wrap">
        <el-button class="select-btn" type="primary" @click="save">保存</el-button>
        <!-- <el-button class="select-btn" @click="cancel">取消</el-button> -->
        <!-- <el-button plain class="select-btn" @click="save('preview')">保存并预览</el-button> -->
      </div>
    </div>
    <!-- 关联文章弹框 -->
    <el-dialog class="article_dialog" title="关联文章" :visible.sync="dialogTableVisible">
      <el-table
        :data="tableArticle"
        height="340"
        style="width:100%"
        highlight-current-row
        @current-change="handleCurrentChange">
        <el-table-column property="articleTitle" label="文章标题" width="270"></el-table-column>
        <el-table-column property="personName" label="创建人" width="200"></el-table-column>
        <el-table-column property="createTime" label="创建时间"></el-table-column>
      </el-table>
      <div class="main-pagination" v-if="tableArticle.length > 0">
        <div class="exhibit">
          <div>共<span>{{totalNumber}}</span>条记录，每页显示
            <el-select v-model="optionsValue" placeholder="15" @change="changePageSize">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>
        <div class="ope-num">
          <el-pagination
            :current-page="currentPage"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="totalNumber"
            @current-change="choosePage"
            @prev-click="preNextPage"
            @next-click="preNextPage">
            </el-pagination></div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import pageReview from './pageReview'
import propagateItem from './components/propagateItem'
import blockItem from './components/blockItem'
import studentItem from './components/studentItem'
import noticeItem from './components/noticeItem'
import advisory from './advisory'
import contacts from './contacts'
import articleList from './../../assets/js/articleList.js'
import contactsInfo from './../../assets/js/info.js'
import listAll from './../../assets/js/listAll.js'
const api = require('@/api/index')
export default {
  name: 'indexManager',
  components: {
    pageReview,
    propagateItem,
    blockItem,
    studentItem,
    noticeItem,
    advisory,
    contacts
  },
  data () {
    return {
      studentTitle: '考生须知',
      noticeTitle: '通知公告',
      // banner图数据列表
      propagateList: [],
      // 方块列表
      blockList: [],
      // 考生须知列表
      studentList: [],
      // 通知栏目列表
      noticeList: [],
      dialogTableVisible: false, // 是否显示关联文章弹窗
      tableArticle: [], // 关联文章数据
      options: [ // 页码选项
        {
          value: 1,
          label: 10
        },
        {
          value: 2,
          label: 20
        },
        {
          value: 3,
          label: 30
        }
      ],
      currentPage: 1,
      optionsValue: 1,
      totalNumber: 0,
      chooseArticleItem: null,
      curIndex: -1,
      curType: 0, // 1:方块图；2：圆形图；3：列表；4：banner图
      showEditBlock: 4, // 显示编辑块
      showPageManager: [1, 2, 3, 4],
      showOthersBlock: ['contacts', 'advisory'],
      contactsData: {}, // 联系方式
      articleList: articleList.data,
      contactsInfo: contactsInfo.data,
      listAll: listAll.data
    }
  },
  created () {
    // this.initData()
    // this.getArticleList()
    // this.getContactsInfo()
    this.mockData()
  },
  computed: {
    pageSize () {
      return this.options.filter(item => item.value === this.optionsValue)[0].label
    }
  },
  methods: {
    // 分块编辑
    updateType (type) {
      this.showEditBlock = type
    },
    mockData () {
      this.tableArticle = this.articleList
      this.contactsData = this.contactsInfo
      this.classifyList(this.listAll)
    },
    classifyList (data) {
      Array.isArray(data) && data.forEach(item => {
        if (item.type === 1) {
          this.blockList.push(item)
        }
        if (item.type === 2) {
          this.studentList.push(item)
          this.studentTitle = item.theme
        }
        if (item.type === 3) {
          this.noticeList.push(item)
          this.noticeTitle = item.theme
        }
        if (item.type === 4) {
          this.propagateList.push(item)
        }
      })
    },
    // 初始化页面信息
    initData () {
      const _this = this
      api.searchListAll('', this).then(res => {
        this.classifyList(res)
        // 加载初始化数据
        if (_this.propagateList.length <= 0) {
          _this.propagateList.push({
            id: '',
            iconUrl: '', // 图片地址
            articleId: '', // 文章Id
            articleTitle: '', // 文章名称
            personName: '',
            sort: 1,
            theme: '',
            themeTitle: '',
            type: 4,
            userId: ''
          })
        }
        if (_this.blockList.length <= 0) {
          _this.blockList.push({
            id: '',
            iconUrl: '', // 图片地址
            articleId: '', // 文章Id
            articleTitle: '', // 文章名称
            personName: '',
            sort: 1,
            theme: '',
            themeTitle: '',
            type: 1,
            userId: ''
          })
        }
        if (_this.studentList.length <= 0) {
          _this.studentList.push({
            id: '',
            iconUrl: '', // 图片地址
            articleId: '', // 文章Id
            articleTitle: '', // 文章名称
            personName: '',
            sort: 1,
            theme: '',
            themeTitle: '',
            type: 2,
            userId: ''
          })
        }
        if (_this.noticeList.length <= 0) {
          _this.noticeList.push({
            id: '',
            iconUrl: '', // 图片地址
            articleId: '', // 文章Id
            articleTitle: '', // 文章名称
            personName: '',
            sort: 1,
            theme: '',
            themeTitle: '',
            type: 3,
            userId: ''
          })
        }
      })
    },
    addBanner () {
      // 增加banner
      this.propagateList.push({
        id: '',
        iconUrl: '', // 图片地址
        articleId: '', // 文章Id
        articleTitle: '', // 文章名称
        personName: '',
        sort: '',
        theme: '',
        themeTitle: '',
        type: 4,
        userId: ''
      })
    },
    delBanner (idx) {
      // 删除banner
      this.propagateList.splice(idx, 1)
    },
    addBlock () {
      // 增加方块
      this.blockList.push({
        id: '',
        iconUrl: '', // 图片地址
        articleId: '', // 文章Id
        articleTitle: '', // 文章名称
        personName: '',
        sort: '',
        theme: '',
        themeTitle: '',
        type: 1,
        userId: ''
      })
    },
    delBlock (idx) {
      // 删除方块
      this.blockList.splice(idx, 1)
    },
    addStudent () {
      // 增加考生须知
      this.studentList.push({
        id: '',
        iconUrl: '', // 图片地址
        articleId: '', // 文章Id
        articleTitle: '', // 文章名称
        personName: '',
        sort: '',
        theme: '',
        themeTitle: '',
        type: 2,
        userId: ''
      })
    },
    delStudent (idx) {
      // 删除考生须知
      this.studentList.splice(idx, 1)
    },
    addNotice () {
      // 增加通知栏目
      this.noticeList.push({
        id: '',
        articleId: '', // 文章Id
        articleTitle: '', // 文章名称
        personName: '',
        sort: '',
        theme: '',
        themeTitle: '',
        type: 3,
        userId: ''
      })
    },
    delNotice (idx) {
      // 删除通知栏目
      this.noticeList.splice(idx, 1)
    },
    save (type) {
      // 保存
      if (!this.studentTitle) {
        this.$alert('考生须知不能为空', '提示')
        return
      }
      if (!this.noticeTitle) {
        this.$alert('通知栏目不能为空', '提示')
        return
      }
      this.studentList.map(item => {
        item.id = ''
        item.theme = this.studentTitle
      })
      this.noticeList.map(item => {
        item.id = ''
        item.theme = this.noticeTitle
      })
      this.propagateList.map(item => {
        item.id = ''
      })
      this.blockList.map(item => {
        item.id = ''
      })
      const list = [...this.propagateList, ...this.blockList, ...this.studentList, ...this.noticeList]
      list.map((item, index) => {
        item.sort = index + 1
        return item
      })
      api.saveList(list, this).then(res => {
        this.$alert('保存成功', '提示', {
          confirmButtonText: '确定'
        })
      })
    },
    // 打开关联文章
    openAirticle (idx, type) {
      this.dialogTableVisible = true
      this.curIndex = idx
      this.curType = type
    },
    // 选择关联文章
    handleCurrentChange (currRow, oldRow) {
      // 1:方块图；2：圆形图；3：列表；4：banner图
      switch (this.curType) {
        case 1:
          this.blockList[this.curIndex].articleId = currRow.id
          this.blockList[this.curIndex].articleTitle = currRow.articleTitle
          break
        case 2:
          this.studentList[this.curIndex].articleId = currRow.id
          this.studentList[this.curIndex].articleTitle = currRow.articleTitle
          break
        case 3:
          this.noticeList[this.curIndex].articleId = currRow.id
          this.noticeList[this.curIndex].articleTitle = currRow.articleTitle
          break
        case 4:
          this.propagateList[this.curIndex].articleId = currRow.id
          this.propagateList[this.curIndex].articleTitle = currRow.articleTitle
          break
      }
      this.dialogTableVisible = false
    },
    // 改变页码
    changePageSize (e) {
      this.getArticleList()
    },
    choosePage (e) {
      this.currentPage = e
      this.getArticleList()
    },
    // 上一页，下一页
    preNextPage (e) {
      this.currentPage = e
      this.getArticleList()
    },
    // 加载关联文章列表
    getArticleList () {
      const _this = this
      const params = {
        limit: this.pageSize,
        page: this.currentPage,
        status: 1
      }
      api.getArticleList(params).then(res => {
        _this.tableArticle = res.list
        _this.totalNumber = res.totalCount
      })
    },
    // 获取联系方式
    getContactsInfo () {
      const _this = this
      const id = 1
      api.contractInfo(id, _this).then(res => {
        this.contactsData = {
          address: res.address,
          contracts: res.contracts,
          mobile: res.mobile,
          officialWebsite: res.officialWebsite,
          onlineUrl: encodeURI(res.onlineUrl)
        }
      }).catch(err => {
        console.log('test api post err:', err)
        this.msg = 'Get请求后台接口错误'
        this.$message.error(err)
      })
    },
    updateContactsData (value) {
      this.contactsData = value
    }
  }
}
</script>
<style lang="scss" scoped>
.manager-container {
  display: flex;
  height: calc(100vh - 100px);
  overflow: hidden;
  .setting {
    flex: 1;
    padding: 20px 0 85px 40px;
    margin-left: 22px;
    position: relative;
    border: 1px solid #dadee7;
    overflow: hidden;
    .content-container {
      height: calc(100vh - 185px);
      overflow-y: scroll;
      overflow-x: hidden;
    }
    .title {
      font-size: 18px;
    }
    .tips {
      margin: 20px 0 40px;
      font-size: 16px;
      color: #eca625;
    }
    .block-area {
      margin-top: 30px;
    }
    .mt38 {
      margin-top: 38px;
    }
    .required {
      display: inline-block;
      margin: 3px 4px 0 0;
      font-size: 16px;
      color: #ff4222;
    }
    .title-input {
      width: 150px;
      /deep/ .el-input__inner {
        padding-left: 0;
        border: none;
        border-bottom: 1px solid #dadee7;
      }
    }
    .set-title {
      margin-bottom: 32px;
    }
    .btn-wrap {
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      background: #fff;
      z-index: 10;
      padding: 20px;
      .select-btn {
        width: 150px;
        height: 45px;
      }
    }
  }
  .page-propagate-content {
    min-width: 800px;
    .page-propagate-item {
      display: inline-block;
      width: 50%;
    }
  }
}
.article_dialog {
  /deep/ .el-dialog__body {
    padding-top: 0;
  }
}
</style>
