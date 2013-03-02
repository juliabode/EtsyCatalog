<?php

define( 'API_KEY', 'js72ltwo7txbx0x1m2yzmpkj' );

$shop_name     = $_REQUEST['name'];
$url           = "http://openapi.etsy.com/v2/shops/" . $shop_name . "/listings/active?fields=title,url&includes=MainImage(url_170x135)&api_key=" . API_KEY;
$ch            = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response_body = curl_exec($ch);
$status        = curl_getinfo($ch, CURLINFO_HTTP_CODE);
if (intval($status) != 200) throw new Exception("HTTP $status\n$response_body");

$response = json_decode($response_body);
$listings = $response->results;

?>

<div class="products">
  <header>
    <h1><?php echo "The shop you requested is $shop_name."; ?></h1>
  </header>
  <?php
    foreach ( $listings as $listing ) {
      $title   = $listing->title;
      $url     = $listing->url;
      $img_url = $listing->MainImage->url_170x135;

      echo "<img class='product-image' src='$img_url' alt='$title' />";
    }
  ?>
</div>
