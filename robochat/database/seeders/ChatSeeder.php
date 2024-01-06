<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Chat;
use App\Models\RoboChat;
use App\Models\Feedback;

class ChatSeeder extends Seeder
{




    private function getRandomFeedbackId(array &$feedbackIds): ?int
    {
        return count($feedbackIds) > 0 ? array_splice($feedbackIds, array_rand($feedbackIds), 1)[0] : null;
    }



    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $niz1 = [1,2,3];
        $niz2 = [4,5,6,7];

        for ($i = 0; $i < 2; $i++) {
            Chat::factory()->create([
                'robochat_id' => 1, 
                'feedback_id' => $this->getRandomFeedbackId($niz1), 
                'user_id' => 1,
            ]);
        }

        for ($i = 0; $i < 1; $i++) {
            Chat::factory()->create([
                'robochat_id' => 1,
                'feedback_id' => $this->getRandomFeedbackId($niz2), 
                'user_id' => 3,  
            ]);
        }

        for ($i = 0; $i < 1; $i++) {
            Chat::factory()->create([
                'robochat_id' => 2,  
                'feedback_id' => $this->getRandomFeedbackId($niz1), 
                'user_id' => 1,
            ]);
        }

        for ($i = 0; $i < 3; $i++) {
            Chat::factory()->create([
                'robochat_id' => 2,  
                'feedback_id' => $this->getRandomFeedbackId($niz2), 
                'user_id' => 3,  
            ]);
        }

        $Ids = [3,4];
        $numberP = 0;
        $numberN = 0;

        foreach ($Ids as $robochat_id) {
            $robochat = RoboChat::find($robochat_id);
            $numberOfCalls1 = $robochat->number_of_psitive_feedbacks;
            $numberOfCalls2 = $robochat->number_of_negative_feedbacks;

            $feedbackPositive = Feedback::where('user_id', 2)->first();

            if($feedbackPositive){
            for ($i = 0; $i < $numberOfCalls1; $i++) {
                Chat::factory()->create([
                    'robochat_id' => $robochat_id,
                    'feedback_id' => $feedbackPositive->id + $numberP,
                    'user_id' => 2,
                ]);
                $numberP++;
            }
        }
            $feedbackNegative = Feedback::where('user_id', 4)->first();

            if($feedbackNegative){

            for ($i = 0; $i < $numberOfCalls2; $i++) {
                Chat::factory()->create([
                    'robochat_id' => $robochat_id,
                    'feedback_id' => $feedbackNegative->id + $numberN,
                    'user_id' => 4,
                ]);
                $numberN++;
            }
            }
        }
    }

}
