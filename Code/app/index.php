<?php

$host =  'localhost';
$user = 'root';
$password = '';
$dbname = 'ticketdb';
$dsn = 'mysql:host='. $host .';dbname='. $dbname;


//LOGIN (GET USER DATA)
//url/?get=userdata&email=<EMAIL>&pw=<PW>
if(isset($_GET['get']) && $_GET['get'] == 'userdata'){
    if(isset($_GET['email'])) {
        $pdo = new PDO($dsn, $user, $password);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

        $email = $_GET['email'];
        $pw = $_GET['pw'];
        $sql = 'SELECT * FROM individual WHERE Email = :email && Password = :pw';
        $stmt = $pdo->prepare($sql);
        $stmt->execute(['email' => $email, 'pw' => $pw]);
        $user_data = $stmt->fetchAll();

        echo json_encode($user_data);
    }
}

//GET ALL TICKETS FROM DATABASE
//url/?get=tickets&id=<ID>

if(isset($_GET['get']) && $_GET['get'] == 'tickets'){
    if(isset($_GET['id'])) {
        $pdo = new PDO($dsn, $user, $password);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

        $id = $_GET['id'];
        $sql = 'SELECT * FROM ticket WHERE fk_individual_id = :id';
        $stmt = $pdo->prepare($sql);
        $stmt->execute(['id' => $id]);
        $tickets = $stmt->fetchAll();

        echo json_encode($tickets);
    }
}

//INSERT USER INTO DATABASE
//url/?insert=userdata&vorname=<VORNAME>&nachname=<NACHNAME>&email=<EMAIL>&token=<TOKEN>&pw=<PW>

if(isset($_GET['insert']) && $_GET['insert'] == 'userdata') {
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    $vorname = $_GET['vorname'];
    $nachname = $_GET['nachname'];
    $email = $_GET['email'];
    $token = $_GET['token'];
    $pw = $_GET['pw'];

    $sql = 'SELECT * FROM token_role';
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            if($token == $row['PK_Token_ID']) {
                if($row['activated'] == 0) {
                    $sql = 'INSERT INTO individual(FK_Token, Email, Password, FirstName, LastName) VALUES(:token, :email, :pw, :firstname, :lastname)';
                    $stmt = $pdo->prepare($sql);
                    $stmt->execute(['token' => $token, 'email' => $email, 'pw' => $pw, 'firstname' => $vorname, 'lastname' => $nachname]);

                    $sql = 'UPDATE token_role SET activated=1';
                    $stmt = $pdo->prepare($sql);
                    $stmt->execute();

                    echo 'User inserted.';
                    break;
                } elseif ($row['activated'] == 1) {
                    echo 'Token exists.';
                    break;
                }
            }

    }
}

//INSERT TICKET INTO DATABASE
//url/?insert=ticket&ind_id=<INDIVIDUAL_ID>&kat_id=<CATEGORY_ID>&descr=<DESRIPTION>&status_id=<STATUS_ID>&room=<ROOM>&date=<DATE>

if(isset($_GET['insert']) && $_GET['insert'] == 'ticket') {

    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    $fk_individual_id = $_GET['ind_id'];
    $fk_category_id = $_GET['kat_id'];
    $description = $_GET['descr'];
    $fk_status_id = $_GET['status_id'];
    $room = $_GET['room'];
    $date = $_GET['date'];

    $sql = 'INSERT INTO ticket(FK_Individual_ID, FK_Category_ID, Description, FK_Status_ID, Room, date) VALUES(:fk_individual_id, :fk_category_id, :description, :fk_status_id, :room, :date)';
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['fk_individual_id' => $fk_individual_id, 'fk_category_id' => $fk_category_id, 'description' => $description, 'fk_status_id' => $fk_status_id, 'room' => $room, 'date' => $date]);
    echo 'Ticket inserted.';

}