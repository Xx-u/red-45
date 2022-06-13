

// 渲染日期
function date (num) {
    dateBtn.innerHTML += `
            <span id="span" style="display: none;">${num}</span>
            `
}

function date2 (set) {
    dateBtn.innerHTML = `
        <span id="span">${set}</span>
    `
}



// 获取时间列表
function timer () {
    let num
    let xhr = new XMLHttpRequest()
    let url = `http://newshopapi.0melon0.cn/api/f_user/chooselist?token=${token}`
    xhr.open("GET", url)
    xhr.send()
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText)
            num = data.result.list
            date2(num[0].day_time)
            num.forEach(function (ele, index) {
                if (index != 0) {
                    date(num[index].day_time)
                }
            })
            newTimer(num[0].day_time)
        }
    })

}

// 查询某天场次
function newTimer (index) {
    let xhr = new XMLHttpRequest()
    let url = `http://newshopapi.0melon0.cn/api/f_user/chooseday?token=${token}&day_time=${index}`
    xhr.open("GET", url)
    xhr.send()
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText)
            let a = data.result.list
            console.log(a);
            let day = sessionStorage.setItem('day', a[0].day_time)
            let num = Array.from(tbody.children)
            num.forEach(function (ele) {
                ele.remove()
            })
            hourTimr(hour, a)
            tbody.innerHTML = `
                        <tr>
                            <td>${a[0].show_name}</td>
                            <td data-index="1">可预约</td>
                        </tr>
                        <tr>
                            <td>${a[1].show_name}</td>
                            <td data-index="2">可预约</td>
                        </tr>
                        <tr>
                            <td>${a[2].show_name}</td>
                            <td data-index="3">可预约</td>
                        </tr>
                    `
        }
    })
}

// 判断当前场次有没有过期
function hourTimr (hour, a) {
    let num = ''
    a.forEach(function (ele, index) {
        console.log(ele);
        num += ele.show_name + ';'
    })
    let str = num.split(';')
    num = str.filter((ele) => {
        return ele != ''
    })
    console.log(num);
    num.forEach((ele) => {
        let a = ele.slice(0, 2)
        console.log(a);
        // if (Nubmer(a) > hour) {

        // }
    })
}


// 预约某天场次
function click (token, day_time, show_id, newName) {
    let url = 'http://newshopapi.0melon0.cn/api/f_user/bookday'
    let options = {
        method: 'POST',
        body: `token=${token}&day_time=${day_time}&show_id=${show_id}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    fetch(url, options).then((res) => {
        return res.json()
    }).then(res => {
        console.log(res.result);
        sessionStorage.setItem('id', res.result.id)
        sessionStorage.setItem('day_time', res.result.day_time)
        sessionStorage.setItem('name', res.result.name)
    })
    setTimeout(() => {
        let str = `./Qrcode.html?`
        location.assign(str)
    }, 200)
}


let tbody = document.querySelector('tbody')
let dateBtn = document.querySelector('.bodybox-top-choose')
let token = sessionStorage.getItem('token')
let newName = sessionStorage.getItem('name')
let currentTime = new Date()
let hour = currentTime.getHours()
console.log(hour);
console.log(token);
console.log(newName);
timer()
let flag = 0

// 点击日期事件
dateBtn.addEventListener('click', function (e) {
    flag++
    let num = Array.from(dateBtn.children)
    if (flag % 2 == 1) {
        num.forEach(function (ele) {
            ele.classList.add('active')
            // date(ele)
        })
    } else {
        num.forEach(function (ele, index) {
            ele.classList.remove('active')
        })
        let index = e.target.innerHTML
        newTimer(index)
        date2(index)
    }
})


// 点击预约按钮
let box = document.querySelector('.box')
tbody.addEventListener('click', function (e) {
    let index = e.target.dataset.index
    let timer = e.target.previousElementSibling.innerHTML
    let show_id = index
    let day_time = timer
    console.log(timer);
    console.log(index);
    // 弹出提示
    box.classList.add('active')
    box.addEventListener('click', (e) => {
        let a = e.target.dataset.index
        if (a == 1) {
            box.classList.remove('active')
            click(token, day_time, show_id, newName)
        } else {
            box.classList.remove('active')
        }
    })
})