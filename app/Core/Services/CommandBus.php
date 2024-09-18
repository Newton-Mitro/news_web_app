<?php

namespace App\Core\Services;


use Exception;

class CommandBus
{
    public function executeCommand($command)
    {
        $handlerClass = get_class($command) . 'Handler';
        if (class_exists($handlerClass)) {
            $handler = new $handlerClass;
            return $handler->executeCommand($command);
        }
        throw new Exception("Handler for " . get_class($command) . " not found.");
    }
}
