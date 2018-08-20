<template>
    <Card>
        <div class="layout">
            <div slot="header" class="clearfix">
                <span>余热发电参数</span>
            </div>
            <div class="d-interval">
                <p>低温烟气</p>
                <Row>
                    <Col :span="4">
                        <span>温度</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.low_temperature_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.low_temperature_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>压力</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.low_pressure_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.low_pressure_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>流量</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.low_flow_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.low_flow_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
            </div>
            <div class="d-interval">
                <p>高温烟气</p>
                <Row>
                    <Col :span="4">
                        <span>温度</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.high_temperature_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.high_temperature_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>压力</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.high_pressure_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.high_pressure_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>流量</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.high_flow_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.high_flow_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
            </div>
            <div class="d-interval">
                <p>高压蒸汽</p>
                <Row>
                    <Col :span="4">
                        <span>温度</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.steamup_temperature_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.steamup_temperature_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>压力</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.steamup_pressure_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.steamup_pressure_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>流量</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.steamup_flow_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.steamup_flow_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
            </div>
            <div class="d-interval">
                <p>低压蒸汽</p>
                <Row>
                    <Col :span="4">
                        <span>温度</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.steamdown_temperature_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.steamdown_temperature_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>压力</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.steamdown_pressure_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.steamdown_pressure_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>流量</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.steamdown_flow_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.steamdown_flow_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
            </div>
            <div class="d-interval">
                <p>高参数汽包</p>
                <Row>
                    <Col :span="4">
                        <span>压力</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.hign_parameter_drum_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.hign_parameter_drum_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
            </div>
            <div class="d-interval">
                <p>低参数汽包</p>
                <Row>
                    <Col :span="4">
                        <span>压力</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.low_parameter_drum_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.low_parameter_drum_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
            </div>
            <div class="d-interval">
                <p>高精度调节阀门开度</p>
                <Row>
                    <Col :span="4">
                        <span>值</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.high_adjust_mentparameters_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.high_adjust_mentparameters_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
            </div>
            <div class="d-interval">
                <p>发电瞬时负荷</p>
                <Row>
                    <Col :span="4">
                        <span>值</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="smoke_parameters.instantaneous_power_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="smoke_parameters.instantaneous_power_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
            </div>
            <div class="d-interval">
                <p>出入口参数</p>
                <Row>
                    <Col :span="4">
                        <span>高参数过热器入口</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="entry_parameters.temperature1_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="entry_parameters.temperature1_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>高参数过热器出口</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="exit_parameters.temperature1_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="exit_parameters.temperature1_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>高参数蒸发器入口</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="entry_parameters.temperature2_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="entry_parameters.temperature2_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>高参数蒸发器出口</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="exit_parameters.temperature2_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="exit_parameters.temperature2_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>中压蒸发器入口</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="entry_parameters.temperature3_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="entry_parameters.temperature3_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>中压蒸发器出口</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="exit_parameters.temperature3_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="exit_parameters.temperature3_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>高参数省煤器入口</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="entry_parameters.temperature4_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="entry_parameters.temperature4_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>高参数省煤器出口</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="exit_parameters.temperature4_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="exit_parameters.temperature4_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>低参数蒸发器入口</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="entry_parameters.temperature5_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="entry_parameters.temperature5_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>低参数蒸发器出口</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="exit_parameters.temperature5_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="exit_parameters.temperature5_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                 <Row>
                    <Col :span="4">
                        <span>水预热器入口</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="entry_parameters.temperature6_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="entry_parameters.temperature6_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>水预热器出口</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="exit_parameters.temperature6_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="exit_parameters.temperature6_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
                <Row>
                    <Col :span="4">
                        <span>温度</span>
                    </Col>
                    <Col :span="20">
                        <Input-number v-model="entry_parameters.temperature_0" :precision="0" :step="100" :max="1000000"/>
                        <Input-number v-model="entry_parameters.temperature_1" :precision="0" :step="100" :max="1000000"/>
                    </Col>
                </Row>
            </div>
        </div>
        <Button v-if="button_state" type="success" @click="RandGo">开始模拟</Button>
        <Button v-else type="error" @click="RandGo">停止模拟</Button>
    </Card>
</template>
<script>
    export default {
        data(){
            return{
                smoke_parameters:{
                    low_temperature_0:0,low_temperature_1:100,
                    low_pressure_0:0,low_pressure_1:100,
                    low_flow_0:0,low_flow_1:100,
                    high_temperature_0:10,high_temperature_1:100,
                    high_pressure_0:0,high_pressure_1:100,
                    high_flow_0:0,high_flow_1:100,
                    steamup_temperature_0:0,steamup_temperature_1:100,
                    steamup_pressure_0:0,steamup_pressure_1:100,
                    steamup_flow_0:0,steamup_flow_1:100,
                    steamdown_temperature_0:0,steamdown_temperature_1:100,
                    steamdown_pressure_0:0,steamdown_pressure_1:100,
                    steamdown_flow_0:0,steamdown_flow_1:100,
                    hign_parameter_drum_0:0,hign_parameter_drum_1:100,
                    high_adjust_mentparameters_0:0,high_adjust_mentparameters_1:100,
                    low_parameter_drum_0:0,low_parameter_drum_1:100,
                    instantaneous_power_0:0,instantaneous_power_1:100,
                },
                entry_parameters:{
                    temperature1_0:0,temperature1_1:100,
                    temperature2_0:0,temperature2_1:100,
                    temperature3_0:0,temperature3_1:100,
                    temperature4_0:0,temperature4_1:100,
                    temperature5_0:0,temperature5_1:100,
                    temperature6_0:0,temperature6_1:100,
                    temperature_0:0,temperature_1:100,
                },
                exit_parameters:{
                    temperature1_0:0,temperature1_1:100,
                    temperature2_0:0,temperature2_1:100,
                    temperature3_0:0,temperature3_1:100,
                    temperature4_0:0,temperature4_1:100,
                    temperature5_0:0,temperature5_1:100,
                    temperature6_0:0,temperature6_1:100,
                    temperature_0:0,temperature_1:100,
                },
                button_state: true, 
                timer: null,
            }
        },
        methods:{
            randomNum(minNum, maxNum) {
                switch (arguments.length) {
                    case 1:
                    return parseInt(Math.random() * minNum + 1, 10);
                    break;
                    case 2:
                    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                    break;
                    default:
                    return 0;
                    break;
                }
            },
            RandGo() {
                if (this.button_state) {
                    this.button_state = false
                    this.timer = setInterval(() => {
                        var myDate = new Date();
                        myDate.getYear(); //获取当前年份(2位)
                        var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
                        myDate.getMonth(); //获取当前月份(0-11,0代表1月)
                        var month = myDate.getMonth() + 1 > 10 ? myDate.getMonth() + 1 : 0 + "" + (myDate.getMonth() + 1)
                        myDate.getDate(); //获取当前日(1-31)
                        var date = myDate.getDate() > 10 ? myDate.getDate() : 0 + "" + myDate.getDate()
                        myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
                        myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
                        myDate.getHours(); //获取当前小时数(0-23)
                        var hours = myDate.getHours()
                        myDate.getMinutes(); //获取当前分钟数(0-59)
                        var minutes = myDate.getMinutes()
                        myDate.getSeconds(); //获取当前秒数(0-59)
                        var seconds = myDate.getSeconds() > 10 ? myDate.getSeconds() : "0" + myDate.getSeconds()
                        myDate.getMilliseconds(); //获取当前毫秒数(0-999)
                        myDate.toLocaleDateString(); //获取当前日期
                        var mytime = myDate.toLocaleTimeString(); //获取当前时间
                        myDate.toLocaleString(); //获取日期与时间
                        let DateTime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
                        //let DateTime = year + "" + month + "" + date + "" + hours + "" + minutes + "" + seconds
                        let params0 = {
                            时间: DateTime,
                            低温烟气温度: this.randomNum(this.smoke_parameters.low_temperature_0, this.smoke_parameters.low_temperature_1),
                            低温烟气压力: this.randomNum(this.smoke_parameters.low_pressure_0, this.smoke_parameters.low_pressure_1),
                            低温烟气流量: this.randomNum(this.smoke_parameters.low_flow_0, this.smoke_parameters.low_flow_1),
                            高温烟气温度: this.randomNum(this.smoke_parameters.high_temperature_0, this.smoke_parameters.high_temperature_1),
                            高温烟气压力: this.randomNum(this.smoke_parameters.high_pressure_0, this.smoke_parameters.high_pressure_1),
                            高温烟气流量: this.randomNum(this.smoke_parameters.high_flow_0, this.smoke_parameters.high_flow_1),
                            高压蒸汽温度: this.randomNum(this.smoke_parameters.steamup_temperature_0, this.smoke_parameters.steamup_temperature_1),
                            高压蒸汽压力: this.randomNum(this.smoke_parameters.steamup_pressure_0, this.smoke_parameters.steamup_pressure_1),
                            高压蒸汽流量: this.randomNum(this.smoke_parameters.steamup_flow_0, this.smoke_parameters.steamup_flow_1),
                            低压蒸汽温度: this.randomNum(this.smoke_parameters.steamdown_temperature_0, this.smoke_parameters.steamdown_temperature_1),
                            低压蒸汽压力: this.randomNum(this.smoke_parameters.steamdown_pressure_0, this.smoke_parameters.steamdown_pressure_1),
                            低压蒸汽流量: this.randomNum(this.smoke_parameters.steamdown_flow_0, this.smoke_parameters.steamdown_flow_1),
                            高参数汽包压力: this.randomNum(this.smoke_parameters.hign_parameter_drum_0, this.smoke_parameters.hign_parameter_drum_1),
                            低参数汽包压力: this.randomNum(this.smoke_parameters.low_parameter_drum_0, this.smoke_parameters.low_parameter_drum_1),
                            高精度调节阀门开度: this.randomNum(this.smoke_parameters.high_adjust_mentparameters_0, this.smoke_parameters.high_adjust_mentparameters_1),
                            发电瞬时负荷: this.randomNum(this.smoke_parameters.instantaneous_power_0, this.smoke_parameters.instantaneous_power_1),
                        }
                        this.$http({
                            method: "post",
                            url: "http://127.0.0.1:8080/generation",
                            data: params0,
                            responseType: 'json'
                        })
                        .then(function(res) { console.log(res) })

                        let DateTime2 = year + "" + month + "" + date + "" + hours + "" + minutes + "" + seconds

                        let params1 = {
                            entrance_or_exit: 0,
                            发生时刻: DateTime2,
                            高参数过热器: this.randomNum(this.entry_parameters.temperature1_0, this.entry_parameters.temperature1_1),
                            高参数蒸发器: this.randomNum(this.entry_parameters.temperature2_0, this.entry_parameters.temperature2_1),
                            中压蒸发器: this.randomNum(this.entry_parameters.temperature3_0, this.entry_parameters.temperature3_1),
                            高参数省煤器: this.randomNum(this.entry_parameters.temperature4_0, this.entry_parameters.temperature4_1),
                            低参数蒸发器: this.randomNum(this.entry_parameters.temperature5_0, this.entry_parameters.temperature5_1),
                            水预热器: this.randomNum(this.entry_parameters.temperature6_0, this.entry_parameters.temperature6_1),
                            温度: this.randomNum(this.entry_parameters.temperature_0,this.entry_parameters.temperature_1),
                        }
                        this.$http({
                            method: "post",
                            url: "http://127.0.0.1:8080/cogeneration",
                            data: params1,
                            responseType: 'json'
                        })
                        .then(function(res) {  })


                        let params2 = {
                            entrance_or_exit: 1,
                            发生时刻: DateTime2,
                            高参数过热器: this.randomNum(this.exit_parameters.temperature1_0, this.exit_parameters.temperature1_1),
                            高参数蒸发器: this.randomNum(this.exit_parameters.temperature2_0, this.exit_parameters.temperature2_1),
                            中压蒸发器: this.randomNum(this.exit_parameters.temperature3_0, this.exit_parameters.temperature3_1),
                            高参数省煤器: this.randomNum(this.exit_parameters.temperature4_0, this.exit_parameters.temperature4_1),
                            低参数蒸发器: this.randomNum(this.exit_parameters.temperature5_0, this.exit_parameters.temperature5_1),
                            水预热器: this.randomNum(this.exit_parameters.temperature6_0, this.exit_parameters.temperature6_1),
                            温度:params1.温度
                        }
                        this.$http({
                            method: "post",
                            url: "http://127.0.0.1:8080/cogeneration",
                            data: params2,
                            responseType: 'json'
                        })
                        .then(function(res) {  })
                    },1000)
                }
                else {
                    this.button_state = true
                    clearInterval(this.timer)
                }
            }
        },
}
</script>
<style>
    .d-interval {
        padding-bottom: 10px;
        border-bottom: .5px #ebeef5 solid;
    }
</style>