<?php

$url = '';
$params = array(
    array('modestbranding',      '1'),
    array('autoplay',            '0'),
    array('rel',                 '0'),
    array('showinfo',            '0'),
    array('controls',            '0'),
    array('autohide',            '1')
);

foreach ($params as $i => $param) {
    $url .= $param[0] . '=' . $param[1] . '&';
}


?>
<body style="background: black">
    <div style="margin: 200px auto; width: 700px;">
        <iframe style="width: 640px; height: 348px;"
            src="https://www.youtube.com/embed/65y4vUPIn0A?<?php echo $url ?>"
            frameborder="0"
            allowfullscreen>
        </iframe>
    </div>
</body>
