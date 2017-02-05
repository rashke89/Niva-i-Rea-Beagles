<?php 
if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$mail = $_POST['email'];
	$message = $_POST['message'];
	if (($name == '') || ($mail == '') || ($message == '')) {
		echo 'Morate popuniti sva polja.'
	}else{
		$subject = 'Poruka je poslata sa sajta Bigl Niva i Rea';
		$from = 'Od: $name <$mail>';
		mail('rashke89@gamil.com', $subject, $message, $from);
		echo 'Poruka je uspesno poslata.'
	}
}
 ?>