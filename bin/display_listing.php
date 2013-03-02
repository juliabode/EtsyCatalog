<?php

define( 'API_KEY', 'js72ltwo7txbx0x1m2yzmpkj' );

$shop_name     = $_REQUEST['name'];
$url           = "http://openapi.etsy.com/v2/shops/" . $shop_name . "/listings/active?fields=listing_id,title,url&includes=MainImage(url_170x135)&api_key=" . API_KEY;
$ch            = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response_body = curl_exec($ch);
$status        = curl_getinfo($ch, CURLINFO_HTTP_CODE);
if (intval($status) != 200) throw new Exception("HTTP $status\n$response_body");

$response = json_decode($response_body);
$listings = $response->results;

?>

<div class="products result-list">
  <header class="clearfix">
    <h1 class="alignleft"><?php echo "The shop you requested is $shop_name."; ?></h1>
    <div class="button awesome large alignright submit-listing_ids">continue &raquo;</div>
  </header>
  <?php
    foreach ( $listings as $listing ) {
      $title        = $listing->title;
      $img_url      = $listing->MainImage->url_170x135;
      $listing_id   = $listing->listing_id;

      echo "<img data-id='$listing_id' class='product-image' src='$img_url' alt='$title' />";
    }
  ?>
</div>
