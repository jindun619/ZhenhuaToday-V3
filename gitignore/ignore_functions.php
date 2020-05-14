<?
    //connecting to DB
    function conn_db () {
        $servername = "localhost";
        $username = "jindun620";
        $password = "apitong133";
        $db = "jindun620";
        $conn = new mysqli($servername, $username, $password, $db);
        if ($conn->connect_error) {
            die("connection failed: ".
            $conn->connect_error);
        }
        return $conn;
    }
?>