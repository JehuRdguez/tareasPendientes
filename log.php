<?php
date_default_timezone_set('America/Mexico_City');
$logFile = 'tareas.log';

$data = json_decode(file_get_contents('php://input'), true);

if ($data && isset($data['action']) && isset($data['taskId'])) {
    $logEntry = date('Y-m-d H:i:s') . ' - ' . $data['action'] . ' tarea con ID: ' . $data['taskId'] . PHP_EOL;
    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
}
?>