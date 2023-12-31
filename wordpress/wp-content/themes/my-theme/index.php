<?php
$query = new WP_Query([
    'post_type' => 'product',
    'tax_query' => array(
        // [
        //     'taxonomy' => 'product_type',
        //     'field' => 'slug',
        //     'terms' => 'grouped',
        // ],
        // [
        //     'taxonomy' => 'series',
        //     'field' => 'slug',
        //     'terms' => 'fury',
        // ],
        [
            'taxonomy' => 'product_cat',
            'field' => 'slug',
            'terms' => 'cpu',
        ],
    ),
    'meta_query' => [
        [
            'prop' => 'prop',
            'value' => "Тип памяти:DDR4",
            'compare' => '=',
        ],
    ]
]);


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?= wp_head() ?>
</head>

<body>
    <div id="app"></div>
    <div id="preloader">

    </div>
    <?= wp_footer() ?>
</body>


<style>
    #preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: gray;
        z-index: 9999;
        transition: all 0.3s ease-in-out;
    }

    .close {
        visibility: hidden;
        /* display: none; */
        opacity: 0;
    }
</style>

</html>