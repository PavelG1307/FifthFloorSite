function HandleMessage(req) {

}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

function save() {
    const time = document.querySelector('#time').value
    const active = document.querySelector('#active').value
    const sunrise = document.querySelector('#sunrise').value
    const music = document.querySelector('#music').value
    const type = (id === "new")?"NEW RING":"EDIT RING"
    if (time == "") {
        error()
        return
    }
    wsApp.doSend({
        type: type,
        time: time,
        active: active,
        sunrise: sunrise,
        music: music
    })
}

function error(){
    new Toast({
        title: false,
        text: 'Ошибка',
        theme: 'warning',
        autohide: true,
        interval: 5000
      });
}