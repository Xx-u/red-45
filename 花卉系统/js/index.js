const myBtn = document.getElementById('myBtn')
const startBtn = document.getElementById('startBtn')
let iptName = document.getElementById('iptName')
let iptPhone = document.getElementById('iptPhone')
let iptCard = document.getElementById('iptCard')
let iptname
let iptphone
let iptcard

// 名字获取
iptName.addEventListener('input', function () {
    iptname = textName()
})

// 电话获取
iptPhone.addEventListener('input', function () {
    iptphone = textPhone()
})
// 身份证获取
iptCard.addEventListener('input', function () {
    iptcard = textCard()
})

// 开始预约
function begin () {
    let url = 'http://newshopapi.0melon0.cn/api/f_user/register'
    let options = {
        method: 'POST',
        body: `name=${iptname}&phone=${iptphone}&card=${iptcard}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    fetch(url, options).then((res) => {
        return res.json()
    }).then(res => {
        console.log(res.result.token);
        sessionStorage.setItem('token', res.result.token)
        sessionStorage.setItem('name', iptname)
    })
    setTimeout(() => {
        let str = `./order.html?`
        location.assign(str)
    }, 200)
}


// 开始预约
startBtn.addEventListener('click', function () {
    if (iptName.value != '' && iptPhone.value != '' && iptCard.value != '') {
        begin()
    }
})

// 我的预约
myBtn.addEventListener('click', () => {
    if (iptName.value != '' && iptPhone.value != '' && iptCard.value != '') {
        iptname = textName()
        iptphone = textPhone()
        sessionStorage.setItem('name', iptname)
        sessionStorage.setItem('phone', iptphone)
        setTimeout(() => {
            let str = `./My.html?`
            location.assign(str)
        }, 200)
    }
})


/*
功能：判断名字
*/
function textName () {
    let arr
    let name
    arr = iptName.value.split('')
    if (arr.length == 0 || arr == '') {
        style2(iptName)
    } else {
        name = arr.join('')
        style1(iptName)
    }
    return name
}
/*
功能：判断电话号码
*/
function textPhone () {
    let phone
    let arr
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let str
    arr = iptPhone.value.split('')
    for (let i = 0; i < arr.length; i++) {
        if (num.indexOf(Number(arr[i])) != -1) {
            str = 1
        } else {
            str = 0
            break
        }
    }
    if (arr.length == 11 && str == 1) {
        style1(iptPhone)
        phone = arr.join('')
    } else if (arr.length > 11 || arr.length < 11) {
        style2(iptPhone)
    }
    return phone
}
/*
功能：判断身份证
*/
function textCard () {
    let card
    let arr
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'X']
    let str = 0
    arr = iptCard.value.split('')
    let arr1 = iptCard.value.slice(10, 12)
    let arr2 = iptCard.value.slice(12, 14)
    for (let i = 0; i < arr.length; i++) {
        if (num.indexOf(Number(arr[i])) != -1) {
            str = 1
        } else if (num.indexOf(arr[17]) != -1) {
            str = 1
        } else {
            str = 0
            break
        }
    }
    if (arr.length == 15 || arr.length == 18 && str == 1 && 0 < Number(arr2) < 31 && 0 < Number(arr1) < 13) {
        card = arr.join('')
        style1(iptCard)
    } else if (arr.length > 18 || arr.length < 18) {
        style2(iptCard)
    }
    return card
}


// 样式颜色
function style1 (num) {
    num.setAttribute('style', 'border: 1px solid green;background-color: green;background-color: rgba(48, 237, 58, 0.3);')
}
function style2 (num) {
    num.setAttribute('style', 'border: 1px solid red;background-color: red;background-color: rgba(250, 17, 17, 0.3);')
}