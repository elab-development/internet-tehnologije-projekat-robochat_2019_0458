<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoboChatController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\ChatController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::post('resetPassword',[AuthController::class,'resetPassword']);


Route::get('users', [UserController::class, 'index']);
Route::get('users/{id}', [UserController::class, 'show']); 

Route::resource('robochats', RoboChatController::class);

Route::get('feedbacks', [FeedbackController::class, 'index']);
Route::get('feedbacks/{id}', [FeedbackController::class, 'show']); 

Route::get('chats', [ChatController::class, 'index']);
Route::get('chats/{id}', [ChatController::class, 'show']);

Route::get('/cached-robochats', [RoboChatController::class, 'showCachedRoboChats']);


Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::post('chats', [ChatController::class, 'store']);

    Route::delete('chats/{id}', [ChatController::class, 'destroy']);

    Route::post('feedbacks', [FeedbackController::class, 'store']);


    Route::post('logout', [AuthController::class, 'logout']);
});
