<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoboChat extends Model
{
    use HasFactory;

    protected $table = 'robochats';

    protected $fillable = [
        'robochat_name', 
        'number_of_psitive_feedbacks',
        'number_of_negative_feedbacks', 
    ];

    public function chatingWithUsers() {
        return $this->belongsToMany(User::class, 'chats', 'robochat_id', 'user_id')
        ->withPivot('dateAndTime','message','response');
    }
}
