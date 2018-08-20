var express = require("express")
var bodyParser = require('body-parser')
var mysql = require("mysql")

var app = express()

var urlencodedParser = bodyParser.urlencoded({ extended: false }) // 創建application/x-www-form-urlencoded編碼解析

app.use(express.static("page")) //訪問靜態資源

app.use(bodyParser.json()) //解析json

//解決跨域問題
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

//數據庫配置
var connection = mysql.createConnection({
    /*host: "192.168.9.201", //默認地址
    user: "nuosinter", //用戶名
    password: "nuotec123456@", //密碼
    database: "nuosinter", //數據庫名*/
    host: "127.0.0.1", //默認地址
    user: "root", //用戶名
    password: "123456", //密碼
    database: "nuosinter", //數據庫名
})

// get请求
app.get("/index", function(req, res) {
    res.sendFile(__dirname + "/page/" + "index.html")
})

// post请求
app.post("/desulphurization0", urlencodedParser, function(req, res) {
    var addSql = "insert into desulphurization" + 
    "(id,nitrogen_oxide_concentration,O2_content,create_time,dust_content,entrance_or_exit,flue_gas_flow,flue_gas_pressure,flue_gas_temperature,so2_concentration)" +
    "values(0,?,?,?,?,?,?,?,?,?)"
    var addSqlParams = []
    for(var key in req.body){
        var value = req.body[key]
        addSqlParams.push(value)
    }
    insert(addSql,addSqlParams)
    // res.send(JSON.stringify(insertId))
    res.send(null)
})

app.post("/desulphurization1", urlencodedParser, function(req, res) {
    var addSql = "insert into desulphurization" + 
    "(id,nitrogen_oxide_concentration,O2_content,create_time,dust_content,entrance_or_exit,flue_gas_flow,flue_gas_pressure,flue_gas_temperature,so2_concentration)" +
    "values(0,?,?,?,?,?,?,?,?,?)"
    var addSqlParams = []
    for(var key in req.body){
        var value = req.body[key]
        addSqlParams.push(value)
    }
    insert(addSql,addSqlParams)
    // res.send(JSON.stringify(insertId))
    res.send(null)
})

app.post("/desulphurization2", urlencodedParser, function(req, res) {
    var addSql = "insert into desulphurizationfan" + 
    "(id,create_time,electric_current,fan_id,frequency_feedback_value,frequency_set_value,valve_feedback,valve_setting_value)" +
    "values(0,?,?,?,?,?,?,?)"
    var addSqlParams = []
    for(var key in req.body){
        var value = req.body[key]
        addSqlParams.push(value)
    }
    console.log(addSqlParams)
    insert(addSql,addSqlParams)
    // res.send(JSON.stringify(insertId))
    res.send(null)
})

app.post("/desulphurization3", urlencodedParser, function(req, res) {
    var addSql = "insert into desulphurizationfan" + 
    "(id,create_time,electric_current,fan_id,frequency_feedback_value,frequency_set_value,valve_feedback,valve_setting_value)" +
    "values(0,?,?,?,?,?,?,?)"
    var addSqlParams = []
    for(var key in req.body){
        var value = req.body[key]
        addSqlParams.push(value)
    }
    console.log(addSqlParams)
    insert(addSql,addSqlParams)
    // res.send(JSON.stringify(insertId))
    res.send(null)
})

app.post("/generation", urlencodedParser, function(req, res) {
    var addSql = "insert into generation" + 
    "(id,time,low_temperature,low_pressure,low_flow,high_temperature,high_pressure,high_flow,steamup_temperature,steamup_pressure,steamup_flow,steamdown_temperature,steamdown_pressure,steamdown_flow,high_parameter_drum,low_parameter_drum,high_adjustment_parameters,instantaneous_power)" +
    "values(0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    var addSqlParams = []
    for(var key in req.body){
        var value = req.body[key]
        addSqlParams.push(value)
    }
    console.log(addSqlParams)
    insert(addSql,addSqlParams)
    // res.send(JSON.stringify(insertId))
    res.send(null)
})

app.post("/cogeneration", urlencodedParser, function(req, res) {
    var addSql = "insert into cogeneration" + 
    "(id,entrance_or_exit,create_time,temperature1,temperature2,temperature3,temperature4,temperature5,temperature6,temperature)" +
    "values(0,?,?,?,?,?,?,?,?,?)"
    var addSqlParams = []
    for(var key in req.body){
        var value = req.body[key]
        addSqlParams.push(value)
    }
    //console.log(addSqlParams)
    insert(addSql,addSqlParams)
    // res.send(JSON.stringify(insertId))
    res.send(null)
})

var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("访问地址为：http://", host, port)
})

//需要兩個參數，第一個是sql語句，第二個是sql語句需要的參數
function insert(addSql,addSqlParams) {
    //插入数据
    let insertId = ""
    connection.query(addSql, addSqlParams, function(error, result) {
        if (error) {
            console.log("[INSERT ERROR] - ", error.message)
            return
        }
        console.log("INSERT ID", result.insertId) //插入的数据ID
    })
    // connection.end()
}