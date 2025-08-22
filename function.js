//การสร้าง function 
function showName() {
    console.log("Korakod");
} //ฟังก์ชันไม่รับค่า และไม่คืนค่า

function showLastName(lastname,age) {
    console.log(lastname);
    console.log(age);
} //ฟังก์ชันนี้รับค่าพารามิเตอร์ 2 ตัว และแสดงผลลัพธ์

function sumNumber(){
    return 10 + 20; //ฟังก์ชันนี้คืนค่าเป็นผลลัพธ์ของการบวกเลข แต่ไม่ได้รับค่าใดๆ
} //ฟังก์ชัน จะมีค่าเท่ากับที่ return
var total = sumNumber(); 
console.log(total); //แสดงผลลัพธ์ของการเรียกใช้งานฟังก์ชัน sumNumber

function mulNumber(a,b){
    return a * b;
}

function showFullName(firstname, lastname, age) {
    return firstname + " " + lastname + " อายุ " + age;
} //ฟังก์ชันรับค่าและคืนค่า
var fullname = showFullName("Korakod", "Seeyoophum", 12); //เก็บค่าผลลัพธ์ที่ได้จากการเรียกใช้งานฟังก์ชัน showFullName ในตัวแปร fullname

showName(); //เรียกใช้งาน function ไม่ได้กำหนดค่าให้กับพารามิเตอร์
showLastName("Seeyoophum", 12.8978); //เรียกใช้งาน function โดยกำหนดค่าให้กับพารามิเตอร์
console.log(fullname); //แสดงผลลัพธ์ของฟังก์ชัน showFullName
console.log(mulNumber(5, 10)); //เรียกใช้งานฟังก์ชัน mulNumber