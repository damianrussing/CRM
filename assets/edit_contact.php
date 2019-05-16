<?php
include_once "includes/connect.php";
$sql = "UPDATE crm_contacts SET p_name =\"" . $_POST['name'] . "\", p_company = \"" . $_POST['company'] . "\", p_function = \"" . $_POST['function'] . "\", p_tags = \"" . $_POST['tags'] . "\", p_email = \"" . $_POST['email'] . "\", p_number = \"" . $_POST['number'] . "\" WHERE id=\"" . $_GET['id'] . "\"";

if ($conn->query($sql) === TRUE) {
    header("Location: ../index.php");
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
