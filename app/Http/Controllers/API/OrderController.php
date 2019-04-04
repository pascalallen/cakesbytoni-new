<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Order;
use App\Http\Resources\Order as OrderResource;
use Illuminate\Http\Response;
use App\Http\Requests\NewOrderRequest;
use Illuminate\Support\Carbon;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $pageSize = $request->get('page_size', 20);

        $orders = Order::paginate($pageSize);

        return OrderResource::collection($orders);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  NewOrderRequest  $request
     * @return \App\Http\Resources\Order
     */
    public function store(NewOrderRequest $request)
    {
        $order = Order::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'instructions' => $request->instructions,
            'due_date' => Carbon::parse($request->due_date),
            'phone_number' => $request->phone_number,
            'image' => $request->image,
            'product' => $request->product,
            'unique_id' => uniqid(),
        ]);

        // Mail::to(env('ADMIN_EMAIL'))->send(new NewOrder($order));

        return new OrderResource($order);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \App\Http\Resources\Order
     */
    public function show($id)
    {
        $order = Order::where('unique_id', $id)->first();
        return new OrderResource($order);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \App\Http\Resources\Order|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $order = Order::where('unique_id', $id);
        $order->update($request->all());

        if (!$order->exists()) {
            return response(null, Response::HTTP_NOT_FOUND);
        }

        // Mail::to(env('ADMIN_EMAIL'))->send(new UpdateOrder($order));

        return new OrderResource($order->first());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order = Order::where('unique_id', $id)->delete();

        if (!$order) {
            return response(null, Response::HTTP_NOT_FOUND);
        }

        return response(null, Response::HTTP_OK);
    }
}
