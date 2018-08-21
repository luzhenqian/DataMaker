<style scoped>
.layout {
  border: 1px solid #d7dde4;
  /*background: #f5f7f9;*/
  /*background: #fff;*/
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  background-image: url('assets/dog.jpg');
  -webkit-background-size: cover;
}

.layout-nav {
  width: 220px;
  margin: 0 auto;
  margin-right: 20px;
}

.top {
  padding: 10px;
  background: rgba(0, 153, 229, .7);
  color: #fff;
  text-align: center;
  border-radius: 2px;
}

.ivu_layout_header_light{
  background: #fff;
}

</style>
<template>
  <div class="layout">
    <Layout>
      <Header v-bind:class="{ivu_layout_header_light:themeState}">
        <Menu mode="horizontal" :theme="theme" active-name="1" @on-select="chanageTheme">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                皮肤设置
              </template>
              <MenuGroup title="皮肤">
                <MenuItem name="light">日间模式</MenuItem>
                <MenuItem name="dark">夜间模式</MenuItem>
              </MenuGroup>
            </Submenu>
            <!-- <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem> -->
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-0" theme="light" width="auto" :open-names="['1']" :theme="theme">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                数据模拟
              </template>
              <MenuItem name="1-0" to="/overviewMap">总览图</MenuItem>
              <MenuItem name="1-1" to="/desulphurization">脱硫</MenuItem>
              <MenuItem name="1-2" to="/wasteHeatGeneration">余热发电</MenuItem>
              <MenuItem name="1-3" to="/environmentalProtectionAndDustRemoval">环保除尘</MenuItem>
            </Submenu>
            <!-- <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu> -->
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <router-view></router-view>
          <!-- <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        Content
                    </Content> -->
        </Layout>
      </Layout>
    </Layout>
    <BackTop :height="100" :bottom="100">
      <div class="top">返回顶端</div>
    </BackTop>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theme: 'dark',
      themeState:false,
    }
  },
  methods: {
    chanageTheme(name) {
      this.theme = name;
      if(name == "light"){
        this.themeState = true;
      }else if (name == "dark"){
        this.themeState = false;
      }
    }
  }
}

</script>
