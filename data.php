<?php
$postdata = file_get_contents("php://input");
file_put_contents("data.txt", $postdata);
?>