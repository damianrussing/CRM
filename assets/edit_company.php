<?php
include_once "includes/connect.php";
$sql = "UPDATE crm_companies SET c_name =\"" . $_POST['name'] . "\", c_tags = \"" . $_POST['tags'] . "\", c_email = \"" . $_POST['email'] . "\", c_number = \"" . $_POST['number'] . "\" WHERE id=\"" . $_GET['id'] . "\"";

if ($conn->query($sql) === TRUE) {
    header("Location: ../index.php");
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
