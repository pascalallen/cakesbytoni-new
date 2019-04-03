<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone_number',
        'due_date',
        'product',
        'instructions',
        'unique_id',
        'completed',
        'image',
        'price',
    ];
}
