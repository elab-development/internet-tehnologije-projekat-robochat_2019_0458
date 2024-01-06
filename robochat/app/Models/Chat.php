<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Chat extends Pivot
{
    use HasFactory;

    protected $table = 'chats';

    protected $fillable = [
        'user_id', 
        'robochat_id', 
        'dateAndTime', 
        'message', 
        'response',
    ];


}
