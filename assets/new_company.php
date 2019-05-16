<?php

include_once "includes/connect.php";

if (isset($_POST['submit'])) {

    $name = $_POST['name'];
    $tags = $_POST['tags'];
    $email = $_POST['email'];
    $number = $_POST['number'];

    $sql = "INSERT INTO crm_companies (c_name, c_tags, c_email, c_number) VALUES ('$name', '$tags', '$email', '$number')";


    if ($conn->query($sql) === TRUE) {
        header("Location: ../index.php");
    } else {
        echo "Error updating record: " . $conn->error;
    }

    $conn->close();

}