<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadrastro</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <header>
     <h1>Cadastro</h1>
   </header>
   
   <main class="text">
        <?php
           $nome = $_GET["nome"];
               
           echo "<p>Cadastro realizado com sucesso $nome!</p>";
        ?>
   </main>
  
</body>
</html>
