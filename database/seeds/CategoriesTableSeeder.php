<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->truncate();

        DB::table('categories')->insert([
            ['category' => 'Cakes', 'created_at' => Carbon::now()],
            ['category' => 'Cupcakes', 'created_at' => Carbon::now()],
            ['category' => 'Cookies', 'created_at' => Carbon::now()],
            ['category' => 'Ice Cream', 'created_at' => Carbon::now()],
            ['category' => 'Pastries', 'created_at' => Carbon::now()],
            ['category' => 'Pies', 'created_at' => Carbon::now()],
        ]);
    }
}
