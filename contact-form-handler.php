<?php
    $firstname = $_POST['firstName'];
    $lastname = $_POST['lastName'];
    $message = $_POST['message'];

    $visitor_email = $_POST['email']
    $visitor_phone = $_POST['phone']

    $email_from = 'nddarnell90@hotmail.com';

    $email_subject = 'New Form Submission';

    $email_body = "User Name: $firstname, $lastname.\n".
                    "User Email: $visitor_email.\n".
                        "User Phone: $visitor_phone.\n".
                            "User Message: $message.\n";

    $to = "darnell.nathaniel95@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .="Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: contact.html");



?>