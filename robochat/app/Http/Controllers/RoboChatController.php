<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Resources\RoboChatResource;
use App\Models\RoboChat;
use Illuminate\Support\Facades\Validator;

class RoboChatController extends Controller
{
    public function index()
    {
        $robochat = RoboChat::all();
        return RoboChatResource::collection($robochat);
    }


    public function show($id)
    {
        $robochat = RoboChat::findOrFail($id);
        return new RoboChatResource($robochat);
    }

    public function store(Request $request)
    {
    $validator = Validator::make($request->all(), [
        'robochat_name' => 'required',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors());
    }


    $robochat = new RoboChat();
    $robochat->robochat_name = $request->robochat_name;
    $robochat->number_of_positive_feedbacks = 0;
    $robochat->number_of_negative_feedbacks = 0;

    $robochat->save();

    return response()->json(['NEW ROBOCHAT SUCCESSFULY CREATED!',
         new RoboChatResource($robochat)]);
    }



    public function updateRoboChatName(Request $request, $id)
     {
         $request->validate([
            'robochat_name' => 'required',
         ]);

         $robochat = RoboChat::findOrFail($id);

         $robochat->update(['robochat_name' => $request->input('robochat_name')]);

         return response()->json(['message' => 'THE NAME OF ROBOCHAT SUCCESSFULY ALTERED!', new RoboChatResource($robochat)]);
     }



    public function destroy($id)
    {
        $robochat = robochat::findOrFail($id);
        $robochat->delete();
        return response()->json('ROBOCHAT SUCCESSFULY DELETED!');
    }
}
