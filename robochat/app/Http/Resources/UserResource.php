<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'NAME: ' => $this->resource->name,
            'EMAIL: ' => $this->resource->email,
            'PASSWORD: ' => $this->resource->password,
        ];
    }
}
