<?php

include_once "../connect.php";

$sql = "SELECT MAX(id) AS maximum FROM crm_customers";
$result = $conn->query($sql);

$row = mysqli_fetch_assoc($result);

$maximum = $row['maximum'];

$invoice_id = ++$maximum;

$name = $_POST['name'];

$email = $_POST['email'];

$phone = $_POST['number'];

$street = $_POST['street'];

$zip = $_POST['zip'];

$city = $_POST['city'];
$date = date("d/m/Y");

$country = $_POST['country'];


require('../fpdf.php');


$pdf = new FPDF('P','mm','A4');

$pdf->AddPage();

$pdf->SetFont('Arial','B',14);


$pdf->Cell(130	,5,'Edu-Chain',0,0);
$pdf->Cell(59	,5,'FACTUUR',0,1);

$pdf->SetFont('Arial','',12);

$pdf->Cell(130	,5,'Smedestraat 2',0,0);
$pdf->Cell(59	,5,'',0,1);

$pdf->Cell(130	,5,'6411 CR Heerlen',0,0);
$pdf->Cell(25	,5,'Datum',0,0);
$pdf->Cell(34	,5,$date,0,1);

$pdf->Cell(130	,5,'Nederland',0,0);
$pdf->Cell(25	,5,'Factuur #',0,0);
$pdf->Cell(34	,5,$invoice_id,0,1);

$pdf->Cell(189	,10,'',0,1);

//billing address
$pdf->Cell(100	,5,'Factuur aan',0,1);

$pdf->Cell(10	,5,'',0,0);
$pdf->Cell(90	,5,$name,0,1);

$pdf->Cell(10	,5,'',0,0);
$pdf->Cell(90	,5,$street,0,1);

$pdf->Cell(10	,5,'',0,0);
$pdf->Cell(90	,5,$zip.' '.$city,0,1);

$pdf->Cell(189	,10,'',0,1);

//invoice contents
$pdf->SetFont('Arial','B',12);

$pdf->Cell(100	,5,'Product',1,0);
$pdf->Cell(25	,5,'Prijs',1,0);
$pdf->Cell(34	,5,'Aantal',1,0);
$pdf->Cell(30   ,5,'Totaal prijs',1,1);

$pdf->SetFont('Arial','',12);


//Items
$product = $_POST['product'];
$price = $_POST['price'];
$amount = $_POST['amount'];

foreach ( $product as $number => $n){
    $pdf->Cell(100	,5,$product[$number],1,0);
    //add thousand separator using number_format function
    $pdf->Cell(25	,5,chr(128)."$price[$number]",1,0);
    $pdf->Cell(34	,5,"$amount[$number]",1,0);//end of line
    $pdf->Cell(30	,5,chr(128).$price[$number] * $amount[$number],1,1, 'R');
}

$tot_ex = $_POST['tot_ex'];
$btw = $_POST['btw'];
$tot_inc = $_POST['tot_inc'];

$pdf->Cell(130	,5,'',0,0);
$pdf->Cell(25	,5,'Totaal excl.',0,0);
$pdf->Cell(4	,5,'',0,0);
$pdf->Cell(30	,5,chr(128).$tot_ex,1,1,'R');

$pdf->Cell(130	,5,'',0,0);
$pdf->Cell(25	,5,'BTW',0,0);
$pdf->Cell(4	,5,'',0,0);
$pdf->Cell(30	,5,$btw.'%',1,1,'R');

$pdf->Cell(130	,5,'',0,0);
$pdf->Cell(25	,5,'Totaal incl.',0,0);
$pdf->Cell(4	,5,'',0,0);
$pdf->Cell(30	,5,chr(128).$tot_inc,1,1,'R');

$pdfcontent = $pdf->Output("", "S");
$mysqli=new mysqli("localhost", "root", "", "crm");
$stmt = $mysqli->prepare("INSERT INTO crm_customers (cu_name, cu_email, cu_number, cu_street, cu_zip, cu_city, cu_country, cu_pdf, cu_total, cu_date) VALUES ('$name', '$email', '$phone', '$street', '$zip', '$city', '$country', ?, '$tot_inc', CURDATE())");
$stmt->bind_param('s', $pdfcontent);
$stmt->execute();

header( "Location: ../../../index.php?send=succes");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
include_once "../PHPMailer/PHPMailer.php";
include_once "../PHPMailer/Exception.php";
include_once "../PHPMailer/SMTP.php";

$mail = new PHPMailer(true);
try {

    $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'damianrussing@gmail.com';
    $mail->Password = '-';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    //Recipients
    $mail->setFrom('damianrussingwebsite@gmail.com', 'Edu-Chain');
    $mail->addAddress($email, $name);



    //Attachments
    $mail->AddStringAttachment($pdfcontent, 'Factuur_' . $invoice_id . '.pdf');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Factuur Edu-Chain #' . $invoice_id;
    $mail->Body    = "Beste " . $name . ", <br /><br />" .
        "Bedankt voor uw bestelling bij Edu-Chain. In de bijlage vind u uw factuur. Bewaar de factuur goed aangezien dit tevens je garantiebewijs is. <br />" .
        "Mocht je verder nog vragen hebben, stuur dan gerust een mail terug. <br /><br />" .
        "Met vriendelijke groet,<br /><br />" .
        "Het team van Edu-Chain";

    $mail->send();

} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}

?>
