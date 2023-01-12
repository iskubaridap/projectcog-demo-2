<?php
$errors = [];
$data = [];

    if (empty($_POST['name'])) {
    $errors['name'] = 'Name is required.';
    } 

    if (empty($_POST['email'])) {
        $errors['email'] = 'Email is required.';
    }
    if (empty($_POST['phone'])) {
        $errors['phone'] = 'Phone is required.';
    }
    if (empty($_POST['subjectline'])) {
        $errors['subjectline'] = 'Subject Line is required.';
    }
    if (empty($_POST['messagebody'])) {
        $errors['messagebody'] = 'Please leave a Message.';
    }
    if (!empty($errors)) {
        $data['success'] = false;
        $data['errors'] = $errors;
    } else {
        
            $mailto = "gulliver@projectcog.com";  //My email address

            //getting customer data
            $name = $_POST['name']; //getting customer name
            $fromEmail = $_POST['email']; //getting customer email
            $phone = $_POST['phone']; //getting customer Phome number
            $subject = $_POST['subjectline']; //getting subject line from client
            $message_body = $_POST['messagebody']; // message content
            $subject2 = "Confirmation: Message was submitted successfully | ProjectCog"; // For customer confirmation
            
            //Email body I will receive
            $message = "Client Name: " . $name . "\n"
            . "Phone Number: " . $phone . "\n"
            . "Client Message: " . "\n" 
            . $message_body;
            
            //Message for client confirmation
            $message2 = "Dear " . $name . "\n"
            . "Thank you for contacting us. We will get back to you shortly!" . "\n\n"
            . "You submitted the following message: " . "\n" . $message_body . "\n\n"
            . "Regards," . "\n" . "- ProjectCog";
            
            //Email headers
            $headers = "From: " . $fromEmail; // Client email, I will receive
            $headers2 = "From: " . $mailto; // This will receive client
            
            //PHP mailer function
            
            
            // $result1 = mail($mailto, $subject, $message, $headers); // This email sent to My address
            $result2 = mail($fromEmail, $subject2, $message2, $headers2); //This confirmation email to client

            // error_reporting(-1);
            // ini_set('display_errors', 'On');
            // set_error_handler("var_dump");

        $data['success'] = true;
        $data['message'] = 'Thanks for sending us a message! We will respond as soon as possible.';
        
            
    }


echo json_encode($data);

?>