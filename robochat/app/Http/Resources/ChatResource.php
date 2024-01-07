<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

use App\Models\User;
use App\Models\RoboChat;

class ChatResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        $user = User::find($this->resource->pivot->user_id);
        $robochat = RoboChat::find($this->resource->pivot->robochat_id);

        return [
            'ID: ' => $this->resource->id,
            'MESSAGE: ' => $this->resource->message,
            'RESPONSE: ' => $this->resource->response,
            'DATE AND TIME OF CHAT: ' => $this->resource->timestamp,
            'MESSAGE SENT BY USER: ' => new UserResource($user),
            'RESPONSE ANSWERED BY ROBOCHAT: ' => new RoboChatResource($robochat),
            'FEEDBACK: ' => (new FeedbackResource(optional($this->resource->feedback)))->getFeedbackType(),

        ];
    }
}
