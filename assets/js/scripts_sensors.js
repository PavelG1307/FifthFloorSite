function HandleMessage(request) {
    const parrent = document.getElementById("container")
    parrent.innerHTML = ""
    for (const key in request.modules){
        
        const sens = request.modules[key]
        console.log(sens)
        const elem = document.createElement('div');
        const elem_cont = document.createElement('div');
        const elem_name = document.createElement('div');
        elem.setAttribute("id", key);
        if (sens["type"] < 10) {
            elem.setAttribute("onclick", "openSettings(id)")
        } else {
            elem.setAttribute("onclick", "changeStatus(id)")
        }
        let elem_value;
        if (sens["type"] == 1) {
            elem_value = document.createElement('div');
            elem_value.appendChild(document.createTextNode(sens["last_value"]));
            elem_value.classList.value = "value"
        } else if (sens["type"] == 2) {
            elem_value = document.createElement("img");
            elem_value.setAttribute("src", "./assets/src/img/sensors.png");
        } else if (sens["type"] == 3) {
            elem_value = document.createElement("img");
            elem_value.setAttribute("src", "./assets/src/img/door.png");
        } else if (sens["type"] == 10) {
            elem_value = document.createElement("img");
            elem_value.setAttribute("src", "./assets/src/img/plug.png");
        } else {
            console.log('Ошибка')
            return
        }
        const elem_location = document.createElement('div');
        const elem_circle = document.createElement('div');
        elem_name.appendChild(document.createTextNode(sens["name"]));
        elem_location.appendChild(document.createTextNode(sens["location"]));
        if (sens["active"]){
            elem.classList.value = "sensor active"
        } else {
            if (sens["type"] < 10) {
                elem.classList.value = "sensor yellow"
            } else {
                elem.classList.value = "sensor"
            }
        }
        elem_name.classList.value = "name"
        elem_location.classList.value = "location"
        elem_circle.classList.value = "circle"
        elem_cont.classList.value = "sensor_container"

        elem_cont.appendChild(elem_name)
        elem_cont.appendChild(elem_value)
        elem_cont.appendChild(elem_location)
        elem_cont.appendChild(elem_circle)
        elem.appendChild(elem_cont)

        parrent.appendChild(elem);
    }
}

function changeStatus(id) {
    document.getElementById(id).classList.toggle('active')
}

function openSettings(id) {

}