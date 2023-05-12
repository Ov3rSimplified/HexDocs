<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=MuseoModerno:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=MuseoModerno:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet">

    <title>HexDocs</title>

    <script src="src/lightdark.js"></script>
</head>
<body>
    <div class="topnav">
        <b class="navtitle">HexDocumentation </b>
        <a class="active" href="https://discord.gg/B5jJWwTcJn">Discord</a>
        <button id="theme-toggle">
            <img id="ldicon" src="img/brightness.png" alt="lightdark" width="14" height="14">
        </button>
    </div>
    <main id="main">

        <div class="sidenav" id="sidenav">
        </div>

        <div id="WikiContainer" class="flex-container">
            <?php 
                $ordnerPfad = "pages";
                if (is_dir($ordnerPfad)) {
                    $dateien = scandir($ordnerPfad);

                    foreach($dateien as $datei) {
                        if (!in_array($datei, array(".", ".."))) {
                            $jsonFile = file_get_contents("$ordnerPfad/$datei/setup.json");
                            $decodeFile = json_decode($jsonFile, true);
                            
                            $image = "img/brightness.pnng";
                            $name = $datei;

                            if (file_exists("$ordnerPfad/$datei/setup.json")) {
                                $name = $decodeFile["Name"];
                                $image = $decodeFile["Img"];
                            }

                            echo "
                            <a id='WikiItems'>
                                <img src='$image' width='128' height='128'> </img>
                                <h1> $name </h1>
                            </a>
                            ";
                        }
                    }
                }
            ?>
        </div>
          <div id="main_s">
            <h1 id='wiki_titles1'></h1>
            <h1 id='wiki_titles2'></h1>
            <strong id='wiki_bold'></strong>
            <em id='wiki_italic'></em>
          </div>
    </main>
    <script src="src/logic.js"></script>

</body>

<footer>
    <p id="copyright"> ©Hexagon Cryptics 2023 </p>
</footer>