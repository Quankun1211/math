
"Gọi số xe ban đầu của đội là: x (xe)"
"Số hàng ban đầu mỗi xe phải chở là: 180 / x (tấn)"
"Số xe thực tế của đội là: x + 3"
"Số hàng thực tế mỗi xe phải chở là: 180 / (x + 3)"
"Vì sóo hàng mỗi xe thực tế chở ít hơn 2 tấn nên có pt: "
"(180 / x) - (180 / (x + 3)) = 2"

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const btn = document.getElementById('btn')
const output = document.getElementById('output')


btn.onclick = () => {
    var value1 = input1.value 
    var value2 = input2.value 
    var value3 = input3.value 
    const pass = handleErr(value1, value2, value3)
    const a = value3
    const b = value2 * value3
    const c = value1 * value2
    const delta = Math.pow(b, 2) - (4 * a * c * -1)
    if(!pass) return
    if(delta < 0) {
        output.innerHTML = "VO NGHIEM"
    } else if(delta == 0) {
        output.innerHTML = -b / (2 * a)
    } else if(delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a)
        output.innerHTML = x1 > 0 ? x1 : x2
    }
}

function handleErr(value1, value2, value3) {
    if(!value1 || !value2 || !value3) {
        output.innerHTML = "Nhập đủ thông tin"
        return false
    }
    return true
}