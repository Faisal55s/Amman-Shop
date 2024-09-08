// كود بسيط لإضافة المنتج إلى السلة
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("تم إضافة المنتج إلى السلة");
        });
    });
});
