<?php

include_once "includes/connect.php";

$sql = "DELETE FROM crm_contacts WHERE id=" . $_GET['id'];

if ($conn->query($sql) === TRUE) {
    header("Location: ../index.php");
} else {
    echo "Error deleting record: " . $conn->error;
}

$conn->close();
