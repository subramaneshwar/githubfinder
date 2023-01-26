const input = document.getElementById("inputs")
const bottom = document.getElementById("bottom")

async function display(){
    const response = await fetch("https://api.github.com/users")
    data = await response.json()
    bottom.innerHTML=""
    data.map((ele)=>{
       const {avatar_url,html_url,login} = ele
        bottom.innerHTML +=` <div class="innerdiv">
        <img src="${avatar_url}" alt="">
        <div>
            <h3>${login}</h3>
            <a href="${html_url}">View Profile</a>
        </div>
    </div>`
    })
}
display()

async function search(){
    const SearchValue = input.value 
    bottom.innerHTML=""
    if(SearchValue===""){
        bottom.innerHTML=`<div style="padding: 50px; font-size:20px; "> Enter the user </div>`
        console.log("sss")

    }
    else{
        const response = await fetch(`https://api.github.com/search/users?q=${SearchValue}`)
        data = await response.json()
        console.log(data)
        items = data.items
        items.map((ele)=>{
            // console.log(ele)
           const {avatar_url,html_url,login} = ele
            console.log(avatar_url)
            console.log(html_url)
            console.log(login)
            bottom.innerHTML +=` <div class="innerdiv">
            <img src="${avatar_url}" alt="">
            <div>
                <h3>${login}</h3>
                <a href="${html_url}">View Profile</a>
            </div>
        </div>`
    })
    }
}

function myclear(){
    console.log("hi clear")
    bottom.innerHTML=""
    input.value=""
}

