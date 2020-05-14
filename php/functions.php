<?php
    function select_sql ($conn, $target, $table) {
        if ($table == "food" || $table == "today_word") {
            $query = "SELECT ".$target ." FROM ".$table;
            $result = mysqli_query($conn, $query);
            while ($row = mysqli_fetch_assoc($result)) {
                $array[$row['id']] = $row;
            }
            return $array;
        } else if ($table == "food_date") {
            $query = "SELECT ".$target." FROM ".$table." ORDER BY bld";
            $result = mysqli_query($conn, $query);
            while ($row = mysqli_fetch_assoc($result)) {
                $array[] = $row;
            }
            return $array;
        } else if ($table !== "food") {
            $query = "SELECT ".$target." FROM ".$table;
            $result = mysqli_query($conn, $query);
            while ($row = mysqli_fetch_assoc($result)) {
                $array[] = $row;
            }
            return $array;
        }
    }
?>