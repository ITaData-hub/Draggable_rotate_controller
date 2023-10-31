gsap.registerPlugin(Draggable) 
const value_pole = document.getElementsByClassName('value')[0];
const wrapper = document.getElementsByClassName('wrapper-container')[0];
function changeValue (value){
    value_pole.innerHTML = `<span>${value}</span> `
}

Draggable.create(".wrapper-container", {
    type: "rotation",
    inertia: true,
    snap: function (value) {
        return Math.round(value / 90) * 90;
    },
    onDrag: ()=>{
        rotate = wrapper.style.transform.match(/rotate\((.+)\)/)[1];
        rotate = rotate.replace('deg','')
        changeValue(Math.round(rotate/3.6))
    }
});


changeValue('0')