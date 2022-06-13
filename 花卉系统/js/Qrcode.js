// 获取二维码
function code (token, id, cb) {
    let xhr = new XMLHttpRequest()
    let url = `http://newshopapi.0melon0.cn/api/f_user/Qrcode?token=${token}&id=${id}`
    xhr.open("GET", url)
    xhr.send()
    let a = null
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText)
            a = data.data.data
            console.log(a);
            newImg(a)
            format(a)
            cb(a)
        }
    })
}

// 获取token、id、name、day_time、day、二维码、下载按钮、渲染位置
let token = sessionStorage.getItem('token')
let id = sessionStorage.getItem('id')
let nameArr = sessionStorage.getItem('name')
let newTime = sessionStorage.getItem('day_time')
let newDay = sessionStorage.getItem('day')
let img = document.querySelector('#img')
const downloadBtn = document.querySelector('#button')
const nameBox = document.querySelector('.topName')
const dayTime = document.querySelector('.day_time')
console.log(token);
console.log(id);
console.log(nameArr);
console.log(newTime);
console.log(newDay);


code(token, id, function (res) {
    // 点击下载二维码
    downloadBtn.addEventListener('click', () => {
        const aEle = document.createElement('a')
        aEle.download = `OR.${format(res)}`
        aEle.href = res
        aEle.click()
    })
})
newName(nameArr)

// 渲染二维码
function newImg (a) {
    img.setAttribute('src', a)
}

// 获取图片格式
function format (a) {
    let str = a.split(';')
    let arr = str[0].split('/')[1]
    return arr
}

// 渲染姓名和时间
function newName (name) {
    nameBox.innerHTML = `
    <span>${name}</span>
    `
    dayTime.innerHTML = `
    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎您在${Arrday(newDay) + Arrtime(newTime)}参观2019广州国际花卉艺术展暨中国插花花艺展。</span>
    `
}

// 截取日期
function Arrday (newDay) {
    let day = newDay.split('-')
    let num = day[1].split('')
    let newday
    if (Number(num[0]) == 1) {
        newday = day[1] + '月' + day[2] + '日'
    } else {
        newday = num[1] + '月' + day[2] + '日'
    }
    return newday
}


// 截取时间
function Arrtime (newTime) {
    let time = newTime.split('-')
    let newtime = time[0]
    return newtime
}