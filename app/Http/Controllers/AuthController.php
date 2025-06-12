<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'password' => 'required|string',
        ]);

        if (Auth::attempt(['name' => $request->name, 'password' => $request->password])) {

            $token = $request->user()->createToken('auth_token')->plainTextToken;

            return response([
                'message' => 'Login successful',
                'token' => $token,
            ], 200);
        }

        return response([
            'message' => 'Invalid credentials',
        ], 401);
    }
}