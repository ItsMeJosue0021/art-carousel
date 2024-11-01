<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class MakeService extends Command
{
    protected $signature = 'make:service {name}';
    protected $description = 'Create a new service class';
    public function __construct()
    {
        parent::__construct();
    }
    public function handle()
    {
        $name = $this->argument('name');
        $filePath = app_path("Services/{$name}.php");
        if (file_exists($filePath)) {
            $this->error('Service already exists!');
            return;
        }
        $template = "<?php
        namespace App\Services;

        class {$name}
        {
            // Service methods here
        }";

        file_put_contents($filePath, $template);
        $this->info("Service {$name} created successfully.");
    }
}

