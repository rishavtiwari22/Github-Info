

function btnClicked(){
    let myname = document.getElementById('username').value;
    fetch(`https://api.github.com/users/${myname}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let val = document.querySelector('img')
        val.src = data.avatar_url;

        let myname = document.getElementById('name');
        myname.innerText = data.name ? data.name : data.login;

        let mybio = document.getElementById('bio');
        mybio.innerText = `I'm ${data.name}\n${data.bio ? data.bio : '-'}\nI Love Coding!`

        let alldata = document.querySelectorAll('i');
        alldata[0].innerText = data.type ? data.type : 'Unknown';
        alldata[1].innerText = data.followers ? data.followers: `Not visiable`;
        alldata[2].innerText = data.public_repos ? data.public_repos: 'Not visiable';
        alldata[3].innerText = data.email ? data.email: `Missing Email`;
        alldata[4].innerText = data.created_at ? data.created_at : 'Missing Joining Data';
    });
}



















