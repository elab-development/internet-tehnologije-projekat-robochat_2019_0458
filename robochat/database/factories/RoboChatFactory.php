<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RoboChat>
 */
class RoboChatFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'robochat_name' => $this->faker->name(), 
            'number_of_psitive_feedbacks' => $this->faker->numberBetween($min = 0, $max = 3),
            'number_of_negative_feedbacks' => $this->faker->numberBetween($min = 0, $max = 3), 
        ];
    }
}
