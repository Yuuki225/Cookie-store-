<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('products', ProductController::class);

Route::post('/add-product', [ProductController::class, 'store']);
Route::get('/product', [ProductController::class, 'index']);
Route::delete('/delete-product/{id}', [ProductController::class, 'destroy']);
Route::post('/update-product/{id}', [ProductController::class, 'update']);