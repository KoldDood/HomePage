const dbd_btn = document.getElementById('dbd_btn');
const dbd = document.getElementById('dbd');

const val = document.getElementById('val');
const val_btn = document.getElementById('val_btn');

const osu = document.getElementById('osu');
const osu_btn = document.getElementById('osu_btn');

const ro = document.getElementById('ro');
const ro_btn = document.getElementById('ro_btn');

const fort = document.getElementById('fort');
const fort_btn = document.getElementById('fort_btn');

ro_btn.addEventListener('click', () => {
    ro.style.display = 'block';
    osu.style.display = 'none';
    val.style.display = 'none';
    dbd.style.display = 'none';
    fort.style.display = 'none';
})

osu_btn.addEventListener('click', () => {
    osu.style.display = 'block';
    ro.style.display = 'none';
    val.style.display = 'none';
    dbd.style.display = 'none';
    fort.style.display = 'none';
})
fort_btn.addEventListener('click', () => {
    fort.style.display = 'block';
    osu.style.display = 'none';
    ro.style.display = 'none';
    val.style.display = 'none';
    dbd.style.display = 'none';
})

val_btn.addEventListener('click', () => {
    val.style.display = 'block';
    osu.style.display = 'none';
    ro.style.display = 'none';
    dbd.style.display = 'none';
    fort.style.display = 'none';

})

dbd_btn.addEventListener('click', () => {
    dbd.style.display = 'block';
    val.style.display = 'none';
    osu.style.display = 'none';
    fort.style.display = 'none';
    ro.style.display = 'none';
})