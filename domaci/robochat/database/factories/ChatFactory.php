<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\User;
use App\Models\RoboChat;
use App\Models\Feedback;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Chat>
 */
class ChatFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(), 
            'robochat_id' => RoboChat::factory(), 
            'timestamp' => now()->subDays(rand(0, 15)),
            'message' => $this->faker->sentence(), 
            'response' => $this->faker->sentence(),
            'feedback_id' => Feedback::factory(),
        ];
    }
}
