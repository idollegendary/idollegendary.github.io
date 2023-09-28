<!DOCTYPE html>
<html>
<head>
    <title>YouTube Video Embed</title>
    <style>
        /* Додати стилі для блоку, що містить ембед-код */
        .embed-code {
            border: 1px solid #ccc;
            padding: 10px;
            cursor: pointer;
        }

        /* Додати стилі для ховера */
        .embed-code:hover {
            background-color: #ff0000; /* Червоний колір при ховері */
            color: #ffffff; /* Білий текст при ховері */
        }
    </style>
    <script>
        function copyEmbedCode() {
            // Вибрати текстовий елемент, що містить ембед-код
            var embedCodeElement = document.getElementById('embedCode');

            // Створити текстовий вузол для копіювання
            var tempInput = document.createElement("input");
            tempInput.value = embedCodeElement.textContent;
            document.body.appendChild(tempInput);

            // Вибірка тексту у текстовому елементі
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // Для підтримки мобільних пристроїв

            // Копіювання тексту в буфер обміну
            document.execCommand('copy');

            // Зняти виділення тексту та видалити тимчасовий текстовий вузол
            window.getSelection().removeAllRanges();
            document.body.removeChild(tempInput);

            // Повідомлення про успішне копіювання
            alert("Ембед-код відео скопійований до буфера обміну: " + embedCodeElement.textContent);
        }

        // Додати функцію для копіювання при кліку на текст
        function copyEmbedCodeOnClick() {
            copyEmbedCode();
        }
    </script>
</head>
<body>
    <h1>Вставте посилання на відео YouTube:</h1>
    <form method="post">
        <input type="text" name="youtube_url" placeholder="Вставте посилання" />
        <input type="submit" value="Відобразити ембед-код" />
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Отримати введене посилання з форми
        $youtube_url = $_POST['youtube_url'];

        // Визначте функцію для отримання ембед-коду з посилання на відео YouTube
        function getYouTubeEmbedCode($url) {
            preg_match('/[\\?\\&]v=([^\\?\\&]+)/', $url, $matches);
            $video_id = $matches[1];
            return "https://www.youtube.com/embed/{$video_id}";
        }

        // Вивести ембед-код, як айфрейм, якщо відео було введено
        if (!empty($youtube_url)) {
            $embed_code = getYouTubeEmbedCode($youtube_url);
            echo "<h2>Айфрейм відео:</h2>";
            echo "<iframe width=\"560\" height=\"315\" src=\"$embed_code\" frameborder=\"0\" allowfullscreen></iframe>";
            
            echo "<h2>Посилання на відео:</h2>";
            echo "<a href=\"$youtube_url\" target=\"_blank\">$youtube_url</a>";

            echo "<h2>Ембед-код відео:</h2>";
            // Додати блок div з ембед-кодом, на який можна клікнути для копіювання
            echo "<div class=\"embed-code\" id=\"embedCode\" onclick=\"copyEmbedCodeOnClick()\">$embed_code</div>";
            // Додати кнопку для копіювання
            echo "<button onclick=\"copyEmbedCode()\">Скопіювати ембед-код</button>";
        }
    }
    ?>

</body>
</html>
