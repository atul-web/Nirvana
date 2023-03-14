<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "atulwebhm@gmail.com";
    $subject = "New Message from $name";
    $body = "Name: $name\nPhone: $phone\nEmail: $email\nMessage: $message";

    if(mail($to, $subject, $body)){
        echo "Thank you for contacting us, $name. We will get back to you shortly.";
    } else{
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
