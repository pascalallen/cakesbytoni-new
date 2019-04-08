<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'main',
        'name',
        'description',
        'slug',
    ];
}
