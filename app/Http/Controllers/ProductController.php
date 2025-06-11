<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Exception;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $puddings = Product::all();

            return response([
                'message' => 'Showed',
                'data' => $puddings
            ], 201);
        } catch (Exception $e) {
            return response([
                'message' => 'Failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'products_name' => 'required|unique:products,products_name',
            'description' => 'required',
            'price' => 'required|numeric',
            'stock' => 'required|numeric',
            'img_url' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imagename = time().'.'.$request->img_url->extension();
        $request->img_url->move(public_path('image'), $imagename);

        Product::create([
            'products_name' => $request->products_name,
            'description' => $request->description,
            'price' => $request->price,
            'stock' => $request->stock,
            'img_url' => url('image/'.$imagename),
            'img_name' => $imagename,
        ]);
        return response(["message" => "Product  created successfully"], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        if (is_null($product)) {
            return response([
                "massage" => "Product not found",
                "data" => [],
            ], 404);
        }
        return response([
            "massage" => "product list",
            "data" => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product, string $id)
    {
    $request->validate([
        'products_name' => 'required',
        'description' => 'required',
        'price' => 'required|numeric',
        'stock' => 'required|integer',
        'img_url' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

    $data = Product::find($id);
    if (is_null($data)) {
        return response([
            "message" => "Product not found",
            "data" => [],
        ], 404);
    }

    $imagename = time() . '.' . $request->img_url->extension();
    $request->img_url->move(public_path('image'), $imagename);

    $data->products_name = $request->products_name;
    $data->description = $request->description;
    $data->price = $request->price;
    $data->stock = $request->stock;
    $data->img_url = $request->img_url;
    $data->img_name = $imagename;
    $data->save();

    return response([
        "message" => "Product updated successfully",
        "data" => $data,
    ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product, string $id)
    {
        $data = Product::find($id);
        if (is_null($data)) {
            return response([
                "message" => "Product not found",
                "data" => [],
            ], 404);
        }

        $data->delete();
        return response([
            "message" => "Product deleted successfully",
            "data" => $data,
        ]);
    }
}
