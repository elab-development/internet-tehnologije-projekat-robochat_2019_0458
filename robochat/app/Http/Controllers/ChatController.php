<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Resources\ChatResource;
use App\Models\Chat;
use App\Models\RoboChat;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

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
            $chat->save();
        };

    
    if($message == 'What is your name?'){
            $chat->robochat_id = $request->robochat_id;
            $robochat_name = (RoboChat::find($chat->robochat_id))->robochat_name;
            $response = 'My name is '.$robochat_name.'.';
            $chat->response = $response;
            $chat->user_id = $user_id;
            $chat->save();
        };

    if($message == 'What is the definition of AI?'){
            $response = 'AI, or Artificial Intelligence, refers to the development of computer systems that can perform tasks that typically require human intelligence.';
            $chat->response = $response;
            $chat->user_id = $user_id;
            $chat->robochat_id = $request->robochat_id;
            $chat->save();
        };


        if($message == 'Write me a rhyme.'){
            $response = '
            In the realm of code, where algorithms FLOW,
            A dance of electrons, in circuits they GLOW.
            Bits and bytes waltz, in the digital SEA,
            A symphony of data, a binary DECREE.
            ';
            $chat->response = $response;
            $chat->user_id = $user_id;
            $chat->robochat_id = $request->robochat_id;
            $chat->save();
        };


    return response()->json(['CHAT IS SUCCESSFULY CREATED!!!',
         new ChatResource($chat)]);
    }


    public function destroy($id)
    {
        $chat = Chat::findOrFail($id);
        $chat->delete();
        return response()->json('CHAT IS SUCCESSFULY DELETED!');
    }
}
