<?php

namespace App\Core\Services;


use Exception;

class QueryBus
{
    public function executeQuery($query)
    {
        $handlerClass = get_class($query) . 'Handler';
        if (class_exists($handlerClass)) {
            $handler = new $handlerClass;
            return $handler->executeQuery($query);
        }
        throw new Exception("Handler for " . get_class($query) . " not found.");
    }
}
