<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FeedbackResource extends JsonResource
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
            'FEEDBACK TYPE: ' => $this->resource->feedbackType,
            'FEEDBACK LEFT BY USER: ' => new UserResource($this->resource->user),
        ];
    }

    public function getFeedbackType(): array
    {
        return [
            'FEEDBACK TYPE: ' => $this->resource->feedbackType,
        ];
    }
}
