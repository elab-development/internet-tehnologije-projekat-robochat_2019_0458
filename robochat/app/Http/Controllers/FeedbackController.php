<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Resources\FeedbackResource;
use App\Models\Feedback;
use App\Models\Chat;

class FeedbackController extends Controller
{
    public function index()
    {
        $feedbacks = Feedback::all();
        return FeedbackResource::collection($feedbacks);
    }


    public function show($id)
    {
        $feedback = Feedback::findOrFail($id);
        return new FeedbackResource($feedback);
    }

    public function store(Request $request)
    {
    $validator = Validator::make($request->all(), [
        'feedbackType' => 'required|in:Positive,Negative',
        'chat_id' =>'required'
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors());
    }


    $feedback = new Feedback();
    $feedback->feedbackType = $request->feedbackType;
    $feedback->user_id = $user_id;

    $chat = Chat::findOrFail($request->chat_id);
    $chat->feedback_id = $feedback->id;

    $feedback->save();

    return response()->json(['SUCCESSFULY LEFT A '.$feedback->feedbackType.' FEEDBACK!!!',
         new FeedbackResource($feedback)]);
    }

}
