<?php

$emailTo = "valentin@maupin.eu"; // Enter your email for feedbacks here 	
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: {$name} <{$email}>" . "\r\n";

if (!isset($subject)) {
    $subject = "Contact form message"; // Enter your subject here
}

$body = "";
reset($_POST);
$body .= "<p><strong>Name:</strong> $name</p>";
$body .= "<p><strong>Email:</strong> $email</p>";
$body .= "<p><strong>Subject:</strong> $subject</p>";
$body .= "<p><strong>Message:</strong><br/> $message</p>";

$result = mail($emailTo, $subject, $body, $headers); //This method sends the mail.
if ($result == tru)
    echo "Your email was sent successfully!"; // Success message
else
    echo "Your email was not sent";
?>