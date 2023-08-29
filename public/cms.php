<?php
require_once('vendor/autoload.php');
use \Microcms\Client;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
mb_language("japanese");
mb_internal_encoding("UTF-8");
$mail = new PHPMailer();
$mail->CharSet = "iso-2022-jp";
$mail->Encoding = "7bit";
$mail->isSMTP();
$mail->Host = 'sv10093.xserver.jp';
$mail->SMTPAuth   = true;
$mail->Username   = 'contact@yukiokamura.com';  // SMTP ユーザ名
$mail->Password   = 'yuuki123';  // SMTP パスワード
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;  // 暗号化を有効に
$mail->Port       = 465;  // TCP ポートを指定
$mail->setFrom('contact@yukiokamura.com', mb_encode_mimeheader('岡村裕樹'));  
// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

Dotenv\Dotenv::createImmutable(__DIR__)->load();
$key = $_ENV['GKEY'];
$client = new Client(
    "2abur33ta1",
    $key
  );



header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json; charset=UTF-8');
$formData = array(
    "attendance"=> $_POST['attendance'] === '1' ? true : false,
    "name"=>$_POST['sei'].' '.$_POST['namae'],
    "kana"=>$_POST['sei-furigana'].' '.$_POST['namae-furigana'],
    'mail'=>$_POST['mail'],
    'number'=>$_POST['number'],
    'tel'=>$_POST['tel'],
    'address'=>$_POST['address'],
    'allergie'=>$_POST['allergie'],
    'message'=>$_POST['message'],  
);
$data = $client->create(
    "invitation",
    $formData
);
$footerMsg = $formData['attendance'] ? 'それでは　当日皆様とお会いできることを楽しみお待ちしております' : 'それでは　ご確認のほどよろしくお願いします';
$attendance = $formData['attendance'] ? "ご出席" : 'ご欠席';
$allergie = $formData['allergie'] === "" ? "特になし" : $formData['allergie'];
$message = '招待状のご回答ありがとうございました<br/>ご回答された内容をメールにて送付させていただきます<br/>内容を修正したい方はお手数ですが 岡村か佐藤かに個別でご連絡いただけますと幸いです<br/><br/><br/>
--------------------------<br/>
<b>ご出欠</b>:'.$attendance.'<br/><b>お名前（ふりがな）</b>:'.$formData['name'].'('.$formData['kana'].')<br/>
<b>メールアドレス</b>:'.$formData['mail'].'<br/><b>電話番号</b>:'.$formData['tel'].'<br/>
<b>ご住所</b>:<br/>〒'.$formData['number'].'<br/>'.$formData['address'].'<br/><b>アレルギー</b>:'.$allergie.'<br/>
<b>メッセージ</b>:'.$formData['message'].'<br/>
--------------------------<br/><br/><br/>
結婚式についてはこちらからご確認ください<br/>
<a href="https://wedding.yukiokamura.com/">https://wedding.yukiokamura.com/</a><br/>'.$footerMsg.'<br/>
---------------------<br/><br/><br/>
岡村裕樹　佐藤多希';
$mail->addAddress($_POST['mail'], mb_encode_mimeheader($formData['name'])); 
$mail->isHTML(true);
$mail->Subject = mb_encode_mimeheader('岡村家佐藤家結婚式の確認メール'); 
$mail->Body  = mb_convert_encoding($message,"JIS","UTF-8");  
if($mail->send()){
echo 'success';
}else{
echo 'error';
}

// echo json_encode($data);

?>