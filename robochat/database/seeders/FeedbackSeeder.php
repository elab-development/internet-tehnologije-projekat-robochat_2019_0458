<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Feedback;
use App\Models\RoboChat;

class FeedbackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 3; $i++) {
            Feedback::factory()->create([
                'feedbackType' => 'Positive',
                'user_id' => 1,  
            ]);
        }

        for ($i = 0; $i < 4; $i++) {
            Feedback::factory()->create([
                'feedbackType' => 'Negative', 
                'user_id' => 3,   
            ]);
        }

        $Ids = [3,4];

        foreach ($Ids as $robochat_id) {
            $robochat = RoboChat::find($robochat_id);
            $numberOfCalls1 = $robochat->number_of_psitive_feedbacks;
            $numberOfCalls2 = $robochat->number_of_negative_feedbacks;
            for ($i = 0; $i < $numberOfCalls1; $i++) {
                Feedback::factory()->create([
                    'feedbackType' => 'Positive',
                    'user_id' => 2,  
                ]);
            }

            for ($i = 0; $i < $numberOfCalls2; $i++) {
                Feedback::factory()->create([
                    'feedbackType' => 'Negative', 
                    'user_id' => 4,   
                ]);
            }
        }
    }
}
