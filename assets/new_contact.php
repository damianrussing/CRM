<?php

include_once "includes/connect.php";


if (isset($_POST['submit'])) {

    $name = $_POST['name'];
    $company = $_POST['company'];
    $function = $_POST['function'];
    $tags = $_POST['tags'];
    $email = $_POST['email'];
    $number = $_POST['number'];

    $sql = "INSERT INTO crm_contacts (p_name, p_company, p_function, p_tags, p_email, p_number) VALUES ('$name', '$company', '$function', '$tags', '$email', '$number')";


    if ($conn->query($sql) === TRUE) {
        header("Location: ../index.php");
    } else {
        echo "Error updating record: " . $conn->error;
    }

    $conn->close();

}