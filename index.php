<?php
include_once "assets/includes/connect.php";

$p_sql = "SELECT id, p_name, p_company, p_function, p_tags, p_email, p_number FROM crm_contacts";
$p_result = $conn->query($p_sql);

$c_sql = "SELECT id, c_name, c_tags, c_email, c_number FROM crm_companies";
$c_result = $conn->query($c_sql);

$cu_sql = "SELECT id, cu_name, cu_email, cu_number, cu_street, cu_zip, cu_city, cu_country, cu_pdf, cu_total, cu_date, cu_payment FROM crm_customers ORDER BY id DESC";
$cu_result = $conn->query($cu_sql);


$js_p_id = "";
$js_p_name = "";
$js_p_company = "";
$js_p_function = "";
$js_p_tags = "";
$js_p_email = "";
$js_p_number = "";

$js_c_id = "";
$js_c_name = "";
$js_c_tags = "";
$js_c_email = "";
$js_c_number = "";

$js_cu_id = "";
$js_cu_name = "";
$js_cu_email = "";
$js_cu_number = "";
$js_cu_street = "";
$js_cu_zip = "";
$js_cu_city = "";
$js_cu_country = "";
$js_cu_pdf = "";
$js_cu_total = "";
$js_cu_date = "";
$js_cu_payment = "";


if ($p_result->num_rows > 0) {
    while ($p_row = $p_result->fetch_assoc()) {

        $js_p_id .= $p_row['id'];
        $js_p_id .= ", ";

        $js_p_name .= $p_row['p_name'];
        $js_p_name .= ", ";

        $js_p_company .= $p_row['p_company'];
        $js_p_company .= ", ";

        $js_p_function .= $p_row['p_function'];
        $js_p_function .= ", ";

        $js_p_tags .= $p_row['p_tags'];
        $js_p_tags .= ", ";

        $js_p_email .= $p_row['p_email'];
        $js_p_email .= ", ";

        $js_p_number .= $p_row['p_number'];
        $js_p_number .= ", ";


    }
} else {
    echo "<tr><td>0 results</td></tr>";
}

if ($c_result->num_rows > 0) {
    while ($c_row = $c_result->fetch_assoc()) {

        $js_c_id .= $c_row['id'];
        $js_c_id .= ", ";

        $js_c_name .= $c_row['c_name'];
        $js_c_name .= ", ";

        $js_c_tags .= $c_row['c_tags'];
        $js_c_tags .= ", ";

        $js_c_email .= $c_row['c_email'];
        $js_c_email .= ", ";

        $js_c_number .= $c_row['c_number'];
        $js_c_number .= ", ";


    }
} else {
    echo "<tr><td>0 results</td></tr>";
}

if ($cu_result->num_rows > 0) {
    while ($cu_row = $cu_result->fetch_assoc()) {

        $js_cu_id .= $cu_row['id'];
        $js_cu_id .= ", ";

        $js_cu_name .= $cu_row['cu_name'];
        $js_cu_name .= ", ";

        $js_cu_email .= $cu_row['cu_email'];
        $js_cu_email .= ", ";

        $js_cu_number .= $cu_row['cu_number'];
        $js_cu_number .= ", ";

        $js_cu_street .= $cu_row['cu_street'];
        $js_cu_street .= ", ";

        $js_cu_zip .= $cu_row['cu_zip'];
        $js_cu_zip .= ", ";

        $js_cu_city .= $cu_row['cu_city'];
        $js_cu_city .= ", ";

        $js_cu_country .= $cu_row['cu_country'];
        $js_cu_country .= ", ";

        $js_cu_pdf .= $cu_row['cu_pdf'];
        $js_cu_pdf .= ", ";

        $js_cu_total .= $cu_row['cu_total'];
        $js_cu_total .= ", ";

        $js_cu_date .= $cu_row['cu_date'];
        $js_cu_date .= ", ";

        $js_cu_payment .= $cu_row['cu_payment'];
        $js_cu_payment .= ", ";

    }
} else {
    echo "<tr><td>0 results</td></tr>";
}


$js_p_id = substr_replace($js_p_id, "", -2);
$js_p_name = substr_replace($js_p_name, "", -2);
$js_p_company = substr_replace($js_p_company, "", -2);
$js_p_function = substr_replace($js_p_function, "", -2);
$js_p_tags = substr_replace($js_p_tags, "", -2);
$js_p_email = substr_replace($js_p_email, "", -2);
$js_p_number = substr_replace($js_p_number, "", -2);

$js_c_id = substr_replace($js_c_id, "", -2);
$js_c_name = substr_replace($js_c_name, "", -2);
$js_c_tags = substr_replace($js_c_tags, "", -2);
$js_c_email = substr_replace($js_c_email, "", -2);
$js_c_number = substr_replace($js_c_number, "", -2);


$js_cu_id = substr_replace($js_cu_id, "", -2);
$js_cu_name = substr_replace($js_cu_name, "", -2);
$js_cu_email = substr_replace($js_cu_email, "", -2);
$js_cu_number = substr_replace($js_cu_number, "", -2);
$js_cu_street = substr_replace($js_cu_street, "", -2);
$js_cu_zip = substr_replace($js_cu_zip, "", -2);
$js_cu_city = substr_replace($js_cu_city, "", -2);
$js_cu_country = substr_replace($js_cu_country, "", -2);
$js_cu_pdf = substr_replace($js_cu_pdf, "", -2);
$js_cu_total = substr_replace($js_cu_total, "", -2);
$js_cu_date = substr_replace($js_cu_date, "", -2);
$js_cu_payment = substr_replace($js_cu_payment, "", -2);

?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>CRM</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
              integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
              crossorigin="anonymous">
        <link href="assets/css/style.css" rel="stylesheet">
        <link href="assets/css/fonts.css" rel="stylesheet">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>

    </head>
    <body onload="dashboard(<?php echo "'" . $js_p_id . "', '" . $js_p_name . "', '" . $js_p_company . "', '" . $js_p_function . "', '" . $js_p_tags . "', '" . $js_p_email . "', '" . $js_p_number . "', '" . $js_c_id . "', '" . $js_c_name . "', '" . $js_c_tags . "', '" . $js_c_email . "', '" . $js_c_number . "', '" . $js_cu_id . "', '" . $js_cu_name . "', '" . $js_cu_email . "', '" . $js_cu_number . "', '" . $js_cu_street . "', '" . $js_cu_zip . "', '" . $js_cu_city . "', '" . $js_cu_country . "', '" . $js_cu_total . "', '" . $js_cu_date . "', '" . $js_cu_payment . "'" ?>)">
    <ul id="topnav">
        <li><a><div id="avatar">DR</div></a></li>
    </ul>
    <ul id="sidenav">
        <li><a class="home" href=""><i class="material-icons">menu</i></a></li>
        <li><a id="test1"
               onclick="dashboard(<?php echo "'" . $js_p_id . "', '" . $js_p_name . "', '" . $js_p_company . "', '" . $js_p_function . "', '" . $js_p_tags . "', '" . $js_p_email . "', '" . $js_p_number . "', '" . $js_c_id . "', '" . $js_c_name . "', '" . $js_c_tags . "', '" . $js_c_email . "', '" . $js_c_number . "', '" . $js_cu_id . "', '" . $js_cu_name . "', '" . $js_cu_email . "', '" . $js_cu_number . "', '" . $js_cu_street . "', '" . $js_cu_zip . "', '" . $js_cu_city . "', '" . $js_cu_country . "', '" . $js_cu_total . "', '" . $js_cu_date . "', '" . $js_cu_payment . "'" ?>)"><i
                        class="material-icons">home</i></a></li>
        <li><a id="test2" onclick="contacts()"><i class="material-icons">contacts</i></a></li>
        <li><a id="test3" onclick="companies()"><i class="material-icons">business</i></a></li>
        <li><a id="test4" onclick="customers()"><i class="material-icons">person</i></a></li>
    </ul>
    <div id="content">
        <div id="info-bar">

        </div>

    </div>

    <div id="info-box">

    </div>
    <script src="assets/js/script.js"></script>

    </body>
    </html>