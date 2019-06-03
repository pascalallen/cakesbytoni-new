<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Image;
use App\Http\Resources\Image as ImageResource;
use Illuminate\Http\Response;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $pageSize = $request->get('page_size', 20);

        if ($request->has('random')) {
            $images = Image::where('main', true)
                ->distinct()
                ->inRandomOrder()
                ->paginate($pageSize);
        } else {
            $images = Image::where('main', true)
                ->inRandomOrder()
                ->paginate($pageSize);
        }

        return ImageResource::collection($images);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return ImageResource
     */
    public function show($id)
    {
        $image = Image::where('imgur_id', $id)->first();
        return new ImageResource($image);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return ImageResource|\Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function update(Request $request, $id)
    {
        $image = Image::find($id);
        $image->update($request->all());

        if (!$image->exists()) {
            return response(null, Response::HTTP_NOT_FOUND);
        }

        return new ImageResource($image->first());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function destroy($id)
    {
        $image = Image::find($id)->delete();

        if (!$image) {
            return response(null, Response::HTTP_NOT_FOUND);
        }

        return response(null, Response::HTTP_OK);
    }
}
