const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

function switchParam(id){
    document.getElementById(id).classList.toggle('active')
}

// function HandleMessage(req) {
//     if (req.type == 'status') {
//         for (key in req.rings) {
//             if (req.rings[key].id == id) {
//                 const ring = req.rings[key]
//                 document.querySelector('#time').value = IntTimeToStr(ring.time)
//                 document.querySelector('#active').checked = ring.active
//                 document.querySelector('#sunrise').checked = ring.sunrise
//                 document.querySelector('#music').selectedIndex = ring.music
//             }
//         }
//     } else if (req.type == 'SAVE RING') {
//         toast(req.state?"Будильник включен":"Будильник выключен")
//         document.location.href = './'
//     }
// }


// function del(){
//     wsApp.doSend({
//         type: "SET VISIBLE RING",
//         visible: false,
//         id: Number(id)
//     })
// }


// function save() {
//     const time = document.querySelector('#time').value
//     const active = document.querySelector('#active').checked
//     const sunrise = document.querySelector('#sunrise').checked
//     const music = document.querySelector('#music').value
//     const type = (id === "new")?"NEW RING":"EDIT RING"
//     if (time == "") {
//         toast('Ошибка', 'warning')
//         return
//     }
//     wsApp.doSend({
//         type: type,
//         time: StrTimeToInt(time),
//         active: active,
//         sunrise: sunrise,
//         music: Number(music),
//         id: Number(id)
//     })
// }


// function StrTimeToInt(strTime) {
//     return Number(strTime.split(':')[0])*60+Number(strTime.split(':')[1])
// }

// function IntTimeToStr(intTime) {
//     const hours = ('0' + String(Math.floor(intTime / 60))).slice(-2)
//     const minutes = ('0' + String(intTime % 60)).slice(-2)
//     return `${hours}:${minutes}`
// }