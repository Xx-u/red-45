// let data = [
//     {
//         id: 1,
//         title:
//             "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
//     },
//     {
//         userId: 1,
//         id: 2,
//         title: "qui est esse",
//         body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
//     },
//     {
//         userId: 1,
//         id: 3,
//         title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
//     },
//     {
//         id: 4,
//         title: "eum et est occaecati",
//         body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
//     },
//     {
//         id: 5,
//         title: "nesciunt quas odio",
//         body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
//     },
//     {
//         id: 6,
//         title: "dolorem eum magni eos aperiam quia",
//         body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
//     },
//     {
//         id: 7,
//         title: "magnam facilis autem",
//         body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas",
//     },
//     {
//         id: 8,
//         title: "dolorem dolore est ipsam",
//         body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae",
//     },
//     {
//         id: 9,
//         title: "nesciunt iure omnis dolorem tempora et accusantium",
//         body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas",
//     },
//     {
//         id: 10,
//         title: "optio molestias id quia eum",
//         body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error",
//     },
//     {
//         id: 11,
//         title: "et ea vero quia laudantium autem",
//         body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus accusamus in eum beatae sit vel qui neque voluptates ut commodi qui incidunt ut animi commodi",
//     },
//     {
//         id: 12,
//         title: "in quibusdam tempore odit est dolorem",
//         body: "itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia id voluptatem incidunt ea est distinctio odio",
//     },
//     {
//         id: 13,
//         title: "dolorum ut in voluptas mollitia et saepe quo animi",
//         body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
//     },
//     {
//         id: 14,
//         title: "voluptatem eligendi optio",
//         body: "fuga et accusamus dolorum perferendis illo voluptas non doloremque neque facere ad qui dolorum molestiae beatae sed aut voluptas totam sit illum",
//     },
//     {
//         id: 15,
//         title: "eveniet quod temporibus",
//         body: "reprehenderit quos placeat velit minima officia dolores impedit repudiandae molestiae nam voluptas recusandae quis delectus officiis harum fugiat vitae",
//     },
// ];

// /*
// ?????????????????????
// */
// function render (ele) {
//     posts.innerHTML += `
//     <div class="post">
//             <div class="number">${ele.id}</div>
//             <div class="post-info">
//                 <h2 class="post-title">${ele.title}</h2>
//                 <div class="post-body">${ele.body}</div>
//             </div>
//         </div>
//                     `
// }

// // 1.??????????????????????????????

// // ????????????
// let posts = document.querySelector('#posts-container')
// let count = 0
// data.forEach(function (ele, index) {
//     if (index < 5) {
//         count++
//         render(ele)
//     }
// })

// // ????????????
// let searchBox = document.querySelector('#filter')
// searchBox.addEventListener('input', function () {
//     let arr = searchBox.value
//     console.log(arr);
//     posts.innerHTML = `
//         <div id="posts-container"></div>
//         `
//     data.forEach(function (ele) {
//         if (ele.title.indexOf(arr) !== -1 || ele.body.indexOf(arr) !== -1) {
//             render(ele)
//         }
//     })
// })

// let loader = document.querySelector('.loader')
// window.addEventListener('scroll', function () {
//     let scrollTop = document.documentElement.scrollTop
//     let clientHeight = document.documentElement.clientHeight
//     let scrollHeight = document.documentElement.scrollHeight
//     let num = scrollTop + clientHeight

//     if (num / scrollHeight >= 0.9) {
//         loader.classList.add('show')
//         setTimeout(function () {
//             loader.classList.remove('show')
//             setTimeout(function () {
//                 for (let i = 0; i < 4; i++) {
//                     count++
//                     render(data[count])
//                 }
//             }, 1000)
//         }, 2000)
//     }
// })


let limit = 5;
let page = 0;

function getPosts (cd) {
    let xhr = new XMLHttpRequest()
    let url = `http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    xhr.open('GET', url)
    xhr.send()
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText)
            cd(data)
        }
    })
}


// ????????????
const postsContainer = document.getElementById("posts-container");
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter");
// let num = 5
showPost()
function showPost () {
    // 1.???????????? 0-5
    getPosts(function (data) {
        console.log(data, 'data');
        let posts = data
        posts.forEach(function (ele) {
            const div = document.createElement('div')
            div.classList.add('post')
            // ????????? <div class="post"> </div>
            div.innerHTML = `
            <div class="post-info">
                <h2 class="post-title">${ele.title}</h2>
                <div class="post-body">${ele.body}</div>
            </div>
            <div class="number">${ele.id}</div>
        `
            // ???????????????div???????????????
            postsContainer.appendChild(div)
        })
    })

}

// ??????2?????????????????????   step1 ????????????  step2 ????????????
window.addEventListener('scroll', function () {
    // es6?????????
    // ???????????????  scrollTop  scrollHeight  clientHeight
    // scrollTop + clientHeight  ??????  scrollHeight  ???????????????
    const { scrollTop, scrollHeight, clientHeight } = this.document.documentElement
    const a = scrollTop + clientHeight
    if (a / scrollHeight > 0.9) {
        // console.log('?????????');
        showIoding()
    }
})
function showIoding () {
    // ?????????????????????  ???????????????????????? ???????????????
    loading.classList.add('show')
    setTimeout(() => {
        loading.classList.remove('show')
        // ??????????????????
        setTimeout(function () {
            // num += 5
            page++
            showPost()
        }, 500)
    }, 2000)
}
filter.addEventListener('input', function (e) {
    let val = e.target.value
    // ??????var???????????? ????????????title  ???  body?????????  ????????????
    // ?????????????????????????????????????????????
    let posts = document.querySelectorAll('.post')
    posts.forEach(function (post) {
        // ??????????????????post?????? ??????title???body
        const titles = post.querySelector('.post-title').innerHTML
        const body = post.querySelector('.post-body').innerHTML
        // ???val ???????????????  titles body?????????
        // ???????????????????????????titles?????????body???????????????
        // ???????????????post ????????????????????????
        if (titles.indexOf(val) > -1 || body.indexOf(val) > -1) {
            post.style.display = 'flex'
        } else {
            // ??????
            post.style.display = 'none'
        }
    })

})