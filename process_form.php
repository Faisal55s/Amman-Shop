<?php
// إعدادات قاعدة البيانات
$servername = "localhost";
$username = "root";
$password = "Faisal123r4";
$dbname = "contact_form";

// إنشاء اتصال بقاعدة البيانات
$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("فشل الاتصال بقاعدة البيانات: " . $conn->connect_error);
}

// الحصول على البيانات من النموذج
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// تحضير واستعلام SQL
$sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $email, $message);

// تنفيذ الاستعلام
if ($stmt->execute()) {
    echo "تم إرسال الرسالة بنجاح.";
} else {
    echo "حدث خطأ أثناء إرسال الرسالة: " . $stmt->error;
}

// إغلاق الاتصال
$stmt->close();
$conn->close();
?>
