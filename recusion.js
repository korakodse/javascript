function factorial(n) {
    if (n === 0) { //เช็คว่า n เป็น 0 หรือไม่ พร้อมกับ type เดียวกันไหม
        return 1;
    } 
        return n * factorial(n - 1); //เรียกใช้ฟังก์ชัน factorial แบบ recursive

}

console.log(factorial(5)); //เรียกใช้งานฟังก์ชัน factorial และแสดงผลลัพธ์