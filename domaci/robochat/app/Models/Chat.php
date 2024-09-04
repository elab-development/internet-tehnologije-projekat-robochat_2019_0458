<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

use DB;

class Chat extends Pivot
{
    use HasFactory;

    protected $table = 'chats';

    protected $fillable = [
        'user_id', 
        'robochat_id', 
        'timestamp', 
        'message', 
        'response',
        'feedback_id'
    ];

    
    public function feedback()
    {
        return $this->belongsTo(Feedback::class);
    }




    public static function getAllChats(){
        $result = DB::table('chats')
            ->join('users', 'chats.user_id', '=', 'users.id')
            ->join('robochats', 'chats.robochat_id', '=', 'robochats.id')
            ->select(
                'chats.id',
                'chats.timestamp',
                'chats.message',
                'chats.response',
                'users.name as user_name',
                'robochats.robochat_name as robochat_name'
            )
            ->get()
            ->toArray();
        return $result;
    }

}
