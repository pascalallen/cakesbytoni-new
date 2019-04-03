<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class ImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('images')->truncate();

        DB::table('images')->insert([
            ['name' => 'Unicorn Cake 0', 'imgur_id' => 'yR8LgqG', 'category_id' => 1, 'slug' => 'unicorn-cake-0', 'main' => false, 'created_at' => Carbon::now()],
            ['name' => 'Unicorn Cake 1', 'imgur_id' => 'cwsNKum', 'category_id' => 1, 'slug' => 'unicorn-cake-1', 'main' => false, 'created_at' => Carbon::now()],
            ['name' => 'Unicorn Cake 2', 'imgur_id' => 'fR6FkFo', 'category_id' => 1, 'slug' => 'unicorn-cake-2', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Unicorn Cake 3', 'imgur_id' => '9bZ1pfl', 'category_id' => 1, 'slug' => 'unicorn-cake-3', 'main' => false, 'created_at' => Carbon::now()],
            ['name' => 'Train Cake 0', 'imgur_id' => 'MpiWcor', 'category_id' => 1, 'slug' => 'train-cake-0', 'main' => false, 'created_at' => Carbon::now()],
            ['name' => 'Train Cake 1', 'imgur_id' => 'wsSgmYL', 'category_id' => 1, 'slug' => 'train-cake-1', 'main' => false, 'created_at' => Carbon::now()],
            ['name' => 'Train Cake 2', 'imgur_id' => 'gfR4iBK', 'category_id' => 1, 'slug' => 'train-cake-2', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Train Cake 3', 'imgur_id' => 'nn8GL8Y', 'category_id' => 1, 'slug' => 'train-cake-3', 'main' => false, 'created_at' => Carbon::now()],
            ['name' => 'Train Cake 4', 'imgur_id' => 'wsSgmYL', 'category_id' => 1, 'slug' => 'train-cake-4', 'main' => false, 'created_at' => Carbon::now()],
            ['name' => 'Magical Cupcakes 0', 'imgur_id' => '3TWSKrA', 'category_id' => 2, 'slug' => 'magical-cupcakes-0', 'main' => false, 'created_at' => Carbon::now()],
            ['name' => 'Magical Cupcakes 1', 'imgur_id' => 'tKPUpxn', 'category_id' => 2, 'slug' => 'magical-cupcakes-1', 'main' => false, 'created_at' => Carbon::now()],
            ['name' => 'Magical Cupcakes 2', 'imgur_id' => 'gpswrdX', 'category_id' => 2, 'slug' => 'magical-cupcakes-2', 'main' => false, 'created_at' => Carbon::now()],
            ['name' => 'Magical Cupcakes 3', 'imgur_id' => 'RyvkPui', 'category_id' => 2, 'slug' => 'magical-cupcakes-3', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Beer Theme Cake 0', 'imgur_id' => 'XgZez3V', 'category_id' => 1, 'slug' => 'beer-theme-cake-0', 'main' => false, 'created_at' => Carbon::now()],
            ['name' => 'Beer Theme Cake 1', 'imgur_id' => 'U1WyJI3', 'category_id' => 1, 'slug' => 'beer-theme-cake-1', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Fruit Ice Cream Cake 0', 'imgur_id' => 'YBcmTSO', 'category_id' => 1, 'slug' => 'fruit-ice-cream-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Peanut Brittle Ice Cream Cake 0', 'imgur_id' => 'AMSPIiU', 'category_id' => 1, 'slug' => 'peanut-brittle-ice-cream-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Colorful Cake 0', 'imgur_id' => '5uKktcV', 'category_id' => 1, 'slug' => 'colorful-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Lorax Cake 0', 'imgur_id' => 'vi1PhxQ', 'category_id' => 1, 'slug' => 'lorax-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Wedding Cake 0', 'imgur_id' => '0bUCVHr', 'category_id' => 1, 'slug' => 'wedding-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Wedding Cake 1', 'imgur_id' => '97DmmNI', 'category_id' => 1, 'slug' => 'wedding-cake-1', 'main' => false, 'created_at' => Carbon::now()],
            ['name' => 'Wedding Cake 2', 'imgur_id' => 'pyQX6Fk', 'category_id' => 1, 'slug' => 'wedding-cake-2', 'main' => false, 'created_at' => Carbon::now()],
            ['name' => 'Wedding Cake 3', 'imgur_id' => '1T2aJr9', 'category_id' => 1, 'slug' => 'wedding-cake-3', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Wedding Cake 4', 'imgur_id' => 'iqJmqQb', 'category_id' => 1, 'slug' => 'wedding-cake-4', 'main' => false, 'created_at' => Carbon::now()],
            ['name' => 'Dragon + Unicorn Cake', 'imgur_id' => 'a8NKtgT', 'category_id' => 1, 'slug' => 'dragon-unicorn-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Dragon + Unicorn Cake', 'imgur_id' => 'Zz6eTEf', 'category_id' => 1, 'slug' => 'dragon-unicorn-cake-1', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Dragon + Unicorn Cake', 'imgur_id' => 'WwdaFez', 'category_id' => 1, 'slug' => 'dragon-unicorn-cake-2', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Dragon + Unicorn Cake', 'imgur_id' => '77IWQo6', 'category_id' => 1, 'slug' => 'dragon-unicorn-cake-3', 'main' => false, 'created_at' => Carbon::now()],
            ['name' => 'Dragon + Unicorn Cake', 'imgur_id' => 'AknQnGk', 'category_id' => 1, 'slug' => 'dragon-unicorn-cake-4', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Dragon + Unicorn Cake', 'imgur_id' => '2zCYD5l', 'category_id' => 1, 'slug' => 'dragon-unicorn-cake-5', 'main' => false, 'created_at' => Carbon::now()],
        ]);
    }
}
