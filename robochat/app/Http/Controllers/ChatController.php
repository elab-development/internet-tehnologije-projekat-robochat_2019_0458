<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Resources\ChatResource;
use App\Models\Chat;
use App\Models\RoboChat;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    
    public function index()
    {
        $chats = Chat::all();
        return ChatResource::collection($chats);
    }


    public function show($id)
    {
        $chat = Chat::findOrFail($id);
        return new ChatResource($chat);
    }

    public function store(Request $request)
    {
    $user_id = Auth::user()->id; 

    $validator = Validator::make($request->all(), [
        'message' => 'required',
        'robochat_id' => 'required',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors());
    }


    $chat = new Chat();
    $chat->timestamp = now()->format('y-m-d H:i:s');;
    $message = $chat->message = $request->message;
    
    if($message == 'Hi!'){
            $chat->user_id = $user_id;
            $robochat_name = (User::find($chat->user_id))->name;
            $response = 'Hello '.$robochat_name.' !!!';
            $chat->response = $response;
            $chat->robochat_id = $request->robochat_id;
            $chat->feedback_id = null;
            $chat->save();
        };

    
    if($message == 'What is your name?'){
            $chat->robochat_id = $request->robochat_id;
            $robochat_name = (RoboChat::find($chat->robochat_id))->robochat_name;
            $response = 'My name is '.$robochat_name.'.';
            $chat->response = $response;
            $chat->user_id = $user_id;
            $chat->feedback_id = null;
            $chat->save();
        };

    if($message == 'What is the definition of AI?'){
            $response = 'AI, or Artificial Intelligence, refers to the development of computer systems that can perform tasks that typically require human intelligence.';
            $chat->response = $response;
            $chat->user_id = $user_id;
            $chat->robochat_id = $request->robochat_id;
            $chat->feedback_id = null;
            $chat->save();
        };


        if($message == 'Draw me a butterfly.'){
            $response = 'https://i.pinimg.com/originals/86/9a/f9/869af97cd0564bf251c9389073d5ea68.jpg';
            $chat->response = $response;
            $chat->user_id = $user_id;
            $chat->robochat_id = $request->robochat_id;
            $chat->feedback_id = null;
            $chat->save();
        };


    return response()->json(['CHAT IS SUCCESSFULY CREATED!!!',
         new ChatResource($chat)]);
    }


    public function destroy($id)
    {
        $user_id = Auth::user()->id; 
        $chat_user_id = Chat::where('id', $id)->value('user_id');

        if($user_id != $chat_user_id){
            return response()->json(['error' => 'EXECUTION DENIED: THE LOGGED IN USER DIDNT PARTICIPATE IN THIS CHAT!'], 403);
         }

        $chat = Chat::findOrFail($id);
        $chat->delete();
        return response()->json('CHAT IS SUCCESSFULY DELETED!');
    }
}
