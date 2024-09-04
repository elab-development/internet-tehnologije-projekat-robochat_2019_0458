<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\RoboChat;

class RoboChatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RoboChat::create([
            'robochat_name' => "Robot 1",
            'number_of_positive_feedbacks' => 2,
            'number_of_negative_feedbacks' => 1,
        ]);

        RoboChat::create([
            'robochat_name' => "Robot 2",
            'number_of_positive_feedbacks' => 1,
            'number_of_negative_feedbacks' => 3,
        ]);

        RoboChat::factory()->times(2)->create();
    }
}
