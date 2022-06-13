// 获取预约记录
function my (name, phone) {
    let url = 'http://newshopapi.0melon0.cn/api/f_user/report'
    let options = {
        method: 'POST',
        body: `name=${name}&phone=${phone}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    fetch(url, options).then((res) => {
        return res.json()
    }).then(res => {
        console.log(res.result);
        let num = res.result
        if (num.length != 0) {
            num.forEach((ele) => {
                let name = ele.name
                let time = ele.day_time
                newNameTime(name, time)
            })
        } else {
            let str = `./my-wu.html?`
            location.assign(str)
        }
    })
}


let newName = sessionStorage.getItem('name')
let newPhone = sessionStorage.getItem('phone')
let textBody = document.querySelector('.dabox')

my(newName, newPhone)


// 渲染有记录
function newNameTime (name, time) {
    textBody.innerHTML += `
    <div class="bodybox">
        <div class="bodybox-span1">
            <span>姓名：${name}</span>
        </div>
        <div class="bodybox-span2">
            <span>场次：${time}</span>
        </div>
    </div>
    `
}
