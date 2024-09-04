<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RoboChatResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'ID: ' => $this->resource->id,
            'ROBOCHAT NAME: ' => $this->resource->robochat_name,
            'NUMBER OF POSITIVE FEEDBACKS: ' => $this->resource->number_of_positive_feedbacks,
            'NUMBER OF NEGATIVE FEEDBACKS: ' => $this->resource->number_of_negative_feedbacks,
        ];
    }
}
