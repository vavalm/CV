<?php

//INITIALISATION VARIABLES
$email = '';
$message = '';
$subject = '';
$contactName = '';
$hasError = false;

//check to make sur the e-mail is valid
if (!filter_var($_POST ['email'], FILTER_VALIDATE_EMAIL)) {//fonction de v�rification d'e-mail
    //L'email est erron�
    $messageError = 'Vous avez entr� une adresse e-mail invalide.';
    $hasError = true;
    echo "Your email address is wrong."; // there is a problem
} else {
    $email = trim($_POST ['email']);
}

//Check to make sur a subject were entered
if (trim($_POST ['subject']) === '') {
    $messageError = 'Le champ de votre sujet est vide.';
    $hasError = true;
    echo("$messageError");
} else {
    if (function_exists('stripslashes')) {
        $subject = stripslashes(trim($_POST ['subject']));
    } else {
        $subject = trim($_POST ['subject']);
    }
}

// Check to make sure comments were entered
if (trim($_POST ['message']) === '') {
    $messageError = 'Le champ de votre message est vide.';
    $hasError = true;
    echo("$messageError");
} else {
    if (function_exists('stripslashes')) {
        $message = stripslashes(trim($_POST ['message']));
    } else {
        $message = trim($_POST ['message']);
    }
}

// Check to make sure a contact name were entered
if (trim($_POST ['name']) === '') {
    $messageError = 'Le champ de votre nom est vide.';
    $hasError = true;
    echo("$messageError");
} else {
    if (function_exists('stripslashes')) {
        $contactName = stripslashes(trim($_POST ['name']));
    } else {
        $contactName = trim($_POST ['name']);
    }
}
if ($hasError != true) {
    $status = "";
    require_once('class.smtp.php');
    require_once('class.phpmailer.php');
    require_once('class.phpmaileroauth.php');
    $mail = new PHPMailer ();
    $mail->isSendmail();
    $mail->IsHTML(true);
    $mail->CharSet = "utf-8";
    $mail->From = $email;
    $mail->FromName = $contactName;
    $mail->WordWrap = 50;
    $mail->Subject = "[SiteWeb][Contact] $subject";
    $mail->Body = "Vous avez re�u un message de $contactName qui est le suivant : 
		<br><br>$message
		<br><br>Cordialement";
    $mail->AddAddress('valentin@maupin.eu');
    $mail->AddReplyTo($email);

    $dir = dirname($_SERVER ["PHP_SELF"]);
    $dir = dirname($dir); // permet de pointer sur le dossier parent

    reset($_POST); //reset des variables

    if (!$mail->Send()) { // send e-mail
        echo "Your email was not sent : problem with sending"; // there is a problem
    } else {
        echo "Your email was sent successfully!"; // Success message
    }
} else {
    echo("You e-mail was not sent");
}
?>