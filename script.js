// รอให้ DOM (โครงสร้าง HTML) โหลดเสร็จสมบูรณ์ก่อนที่จะรันโค้ด JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // -------------------------------------------------------------------
    // 1. Smooth Scrolling (การเลื่อนหน้าอย่างนุ่มนวลเมื่อคลิกเมนู)
    // -------------------------------------------------------------------

    // เลือก Element ทั้งหมดที่เป็นลิงก์ภายในหน้า (ที่มี href ขึ้นต้นด้วย #)
    const navLinks = document.querySelectorAll('nav ul li a');

    // วนลูปผ่านลิงก์แต่ละตัว
    navLinks.forEach(link => {
        // เพิ่ม Event Listener เมื่อมีการคลิกที่ลิงก์
        link.addEventListener('click', function(event) {
            // ป้องกันการทำงานเริ่มต้นของลิงก์ (ซึ่งคือการกระโดดไปทันที)
            event.preventDefault();

            // ดึงค่า href ของลิงก์ (เช่น "#home", "#about")
            const targetId = this.getAttribute('href');

            // ค้นหา Element ที่มี ID ตรงกับค่า href
            const targetSection = document.querySelector(targetId);

            // ตรวจสอบว่า Element นั้นมีอยู่จริงหรือไม่
            if (targetSection) {
                // เลื่อนหน้าจอไปยัง Element นั้นอย่างนุ่มนวล
                // behavior: 'smooth' คือการทำให้เลื่อนแบบ Smooth
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // -------------------------------------------------------------------
    // 2. Highlight Active Navigation Link (เน้นเมนูที่กำลังใช้งานอยู่)
    //    (ฟังก์ชันนี้จะทำได้สมบูรณ์ยิ่งขึ้นเมื่อมีการใช้ Intersection Observer API ซึ่งซับซ้อนกว่าสำหรับผู้เริ่มต้น)
    //    สำหรับตอนนี้ เราจะเน้นการปรับแต่งเมื่อคลิกเท่านั้น
    // -------------------------------------------------------------------

    // ฟังก์ชันสำหรับลบ Class 'active' ออกจากลิงก์ทั้งหมด
    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    // เมื่อคลิกที่ลิงก์เมนู
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            removeActiveClass(); // ลบ active class ออกจากลิงก์ทั้งหมดก่อน
            this.classList.add('active'); // เพิ่ม active class ให้กับลิงก์ที่ถูกคลิก
        });
    });

    // -------------------------------------------------------------------
    // 3. Simple Form Submission (การส่งฟอร์มแบบง่ายๆ - สำหรับส่วน Contact)
    //    (ในโปรเจกต์นี้เรายังไม่มีฟอร์มจริง แต่เตรียมโค้ดไว้หากต้องการเพิ่ม)
    // -------------------------------------------------------------------

    // สมมติว่าในอนาคตคุณมีฟอร์มติดต่อที่มี id="contactForm"
    // const contactForm = document.getElementById('contactForm');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(event) {
    //         event.preventDefault(); // ป้องกันการโหลดหน้าใหม่เมื่อส่งฟอร์ม
    //         alert('ข้อความของคุณถูกส่งแล้ว! (นี่คือตัวอย่างเท่านั้น)'); // แสดงข้อความแจ้งเตือน
    //         // ในอนาคต คุณจะเพิ่มโค้ดเพื่อส่งข้อมูลฟอร์มไปยัง Backend ที่นี่
    //     });
    // }

    // -------------------------------------------------------------------
    // 4. Dynamic Copyright Year (แสดงปีปัจจุบันใน Footer โดยอัตโนมัติ)
    // -------------------------------------------------------------------

    // เลือก Element ที่มี Class 'current-year' (ถ้ามี)
    const currentYearSpan = document.querySelector('.current-year');
    if (currentYearSpan) {
        // กำหนดข้อความให้เป็นปีปัจจุบัน
        currentYearSpan.textContent = new Date().getFullYear();
    }
}); 
