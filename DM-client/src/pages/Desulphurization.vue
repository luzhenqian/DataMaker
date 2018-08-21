<template>
  <Card>
    <div class="layout">
      <div slot="header" class="clearfix">
        <span class="page-title-meiyanti">脱硫系统参数</span>
        <span style="float:right">当前状态：<Tag :color="server_color">{{server_state}}</Tag></span>
      </div>
      <Divider/>
      <div class="split1">
        <Split v-model="split1">
          <div slot="left" class="demo-split-pane">
            <p class="page-title-shoujinti">入口烟气参数模拟</p>
            <Row>
              <Col span="4">SO2浓度</Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num0_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num0_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>SO2含量</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num1_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num1_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>NOx浓度</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num2_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num2_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>粉尘含量</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num3_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num3_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>烟气流量</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num4_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num4_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>烟气温度</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num5_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num5_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>烟气压力</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num6_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num6_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
          </div>
          <div slot="right" class="demo-split-pane">
            <!-- <Divider/> -->
            <p class="page-title-shoujinti">出口烟气参数模拟</p>
            <Row>
              <Col span="4">
              <span>SO2浓度</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num7_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num7_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>SO2含量</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num8_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num8_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>NOx浓度</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num9_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num9_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>粉尘含量</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num10_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num10_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>烟气流量</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num11_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num11_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>烟气温度</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num12_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num12_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>烟气压力</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num13_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num13_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
          </div>
        </Split>
      </div>
      <!-- <Divider/> -->
      <div class="split2">
        <Split v-model="split2">
          <div slot="left" class="demo-split-pane">
            <p class="page-title-shoujinti">5#增压风机</p>
            <Row>
              <Col span="4">
              <span>频率设定值</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num14_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num14_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>频率反馈值</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num15_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num15_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>风门设定值</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num16_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num16_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>风门反馈值</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num17_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num17_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>电流</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num18_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num18_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <!-- <Divider/> -->
          </div>
          <div slot="right" class="demo-split-pane">
            <p class="page-title-shoujinti">6#增压风机</p>
            <Row>
              <Col span="4">
              <span>频率设定值</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num19_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num19_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>频率反馈值</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num20_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num20_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>风门设定值</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num21_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num21_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>风门反馈值</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num22_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num22_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span="4">
              <span>电流</span>
              </Col>
              <Col span="20">
              <InputNumber v-model="desulphurization.num23_0" :precision="0" :step="100" :max="1000000"></InputNumber>
              <InputNumber v-model="desulphurization.num23_1" :precision="0" :step="100" :max="1000000"></InputNumber>
              </Col>
            </Row>
          </div>
        </Split>
      </div>
    </div>
    <!-- </Divider> -->
    </div>
    <Button v-if="desulphurization_button_state" @click="desulphurizationRandGo" type="primary" size="large" style="margin:20px">开始模拟</Button>
    <Button v-else @click="desulphurizationRandGo" type="warning" size="large" style="margin:20px">停止模拟</Button>
  </Card>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true,
      split1: 0.5,
      split2: 0.5,
      desulphurization: {
        // 入口烟气参数模拟
        num0_0: 400,
        num0_1: 800,
        num1_0: 10,
        num1_1: 20,
        num2_0: 200,
        num2_1: 300,
        num3_0: 20,
        num3_1: 40,
        num4_0: 900000,
        num4_1: 1000000,
        num5_0: 110,
        num5_1: 130,
        num6_0: 1400,
        num6_1: 1600,
        // 出口烟气参数模拟
        num7_0: 400,
        num7_1: 600,
        num8_0: 10,
        num8_1: 20,
        num9_0: 200,
        num9_1: 300,
        num10_0: 20,
        num10_1: 40,
        num11_0: 900000,
        num11_1: 1000000,
        num12_0: 110,
        num12_1: 130,
        num13_0: 1400,
        num13_1: 1600,
        // 5#增压风机
        num14_0: 40,
        num14_1: 60,
        num15_0: 80,
        num15_1: 100,
        num16_0: 40,
        num16_1: 60,
        num17_0: 80,
        num17_1: 120,
        num18_0: 140,
        num18_1: 160,
        // 6#增压风机
        num19_0: 40,
        num19_1: 60,
        num20_0: 80,
        num20_1: 100,
        num21_0: 40,
        num21_1: 60,
        num22_0: 80,
        num22_1: 120,
        num23_0: 140,
        num23_1: 160,
      },
      desulphurization_button_state: true, //脱硫按钮状态
      server_state: '未启动', //服务状态
      server_color: 'default', //服务状态
      desulphurization_timer: null, //脱硫定时器
    };
  },
  methods: {
    /*handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
    },*/
    desulphurizationRandGo() {
      if (this.desulphurization_button_state) {
        this.desulphurization_button_state = false
        this.server_state = "启动中";
        this.server_color = "success";
        this.desulphurization_timer = setInterval(
          () => {
            let DateTime = this.currentTimeSub14();
            let params0 = {
              NOx含量: this.randomNum(this.desulphurization.num2_0, this.desulphurization.num2_1),
              SO2含量: this.randomNum(this.desulphurization.num1_0, this.desulphurization.num1_1),
              发生时刻: DateTime,
              粉尘含量: this.randomNum(this.desulphurization.num3_0, this.desulphurization.num3_1),
              entrance_or_exit: 0,
              烟气流量: this.randomNum(this.desulphurization.num4_0, this.desulphurization.num4_1),
              烟气压力: this.randomNum(this.desulphurization.num6_0, this.desulphurization.num6_1),
              烟气温度: this.randomNum(this.desulphurization.num5_0, this.desulphurization.num5_1),
              SO2浓度: this.randomNum(this.desulphurization.num0_0, this.desulphurization.num0_1),
            }
            this.$http({
                method: "post",
                url: "http://127.0.0.1:8080/desulphurization0",
                data: params0,
                responseType: 'json'
              })
              .then(function(res) { console.log(res) })

            let params1 = {
              NOx含量: this.randomNum(this.desulphurization.num2_0, this.desulphurization.num2_1),
              SO2含量: this.randomNum(this.desulphurization.num1_0, this.desulphurization.num1_1),
              发生时刻: DateTime,
              粉尘含量: this.randomNum(this.desulphurization.num3_0, this.desulphurization.num3_1),
              entrance_or_exit: 1,
              烟气流量: this.randomNum(this.desulphurization.num4_0, this.desulphurization.num4_1),
              烟气压力: this.randomNum(this.desulphurization.num6_0, this.desulphurization.num6_1),
              烟气温度: this.randomNum(this.desulphurization.num5_0, this.desulphurization.num5_1),
              SO2浓度: this.randomNum(this.desulphurization.num0_0, this.desulphurization.num0_1),
            }
            this.$http({
                method: "post",
                url: "http://127.0.0.1:8080/desulphurization1",
                data: params1,
                responseType: 'json'
              })
              .then(function(res) { console.log(res) })

            let params2 = {
              发生时刻: DateTime,
              电流: this.randomNum(this.desulphurization.num18_0, this.desulphurization.num18_1),
              风机id: 5,
              频率反馈值: this.randomNum(this.desulphurization.num15_0, this.desulphurization.num15_1),
              频率设定值: this.randomNum(this.desulphurization.num14_0, this.desulphurization.num14_1),
              风门反馈值: this.randomNum(this.desulphurization.num17_0, this.desulphurization.num17_1),
              风门设定值: this.randomNum(this.desulphurization.num16_0, this.desulphurization.num16_1),
            }
            this.$http({
                method: "post",
                url: "http://127.0.0.1:8080/desulphurization2",
                data: params2,
                responseType: 'json'
              })
              .then(function(res) { console.log(res) })

            let params3 = {
              发生时刻: DateTime,
              电流: this.randomNum(this.desulphurization.num18_0, this.desulphurization.num18_1),
              风机id: 6,
              频率反馈值: this.randomNum(this.desulphurization.num15_0, this.desulphurization.num15_1),
              频率设定值: this.randomNum(this.desulphurization.num14_0, this.desulphurization.num14_1),
              风门反馈值: this.randomNum(this.desulphurization.num17_0, this.desulphurization.num17_1),
              风门设定值: this.randomNum(this.desulphurization.num16_0, this.desulphurization.num16_1),
            }
            this.$http({
                method: "post",
                url: "http://127.0.0.1:8080/desulphurization3",
                data: params3,
                responseType: 'json'
              })
              .then(function(res) { console.log(res) })
          }, 1000
        )
      } else {
        this.desulphurization_button_state = true;
        this.server_state = "未启动";
        this.server_color = "default";
        clearInterval(this.desulphurization_timer)
      }
    }
  },
  created() {
    let a = this.randomDec(12, 22, 4);
    console.log(a);
  }
}

</script>
<style scoped>
.split1 {
  height: 300px;
  border: 1px solid #dcdee2;
  text-align: center;
}

.split2 {
  height: 300px;
  border: 1px solid #dcdee2;
  text-align: center;
}

.demo-split-pane {
  padding: 10px;
}

</style>
