<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class ImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $this->getImages()->each(static function ($attributes) {
            DB::table('images')->updateOrInsert([
                'imgur_id' => $attributes['imgur_id'],
            ], $attributes);
        });
    }

    protected function getImages(): Collection
    {
        return collect([
            ['name' => 'Unicorn Cake', 'imgur_id' => 'yR8LgqG', 'category_id' => 1, 'slug' => 'unicorn-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Unicorn Cake', 'imgur_id' => 'cwsNKum', 'category_id' => 1, 'slug' => 'unicorn-cake-1', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Unicorn Cake', 'imgur_id' => 'fR6FkFo', 'category_id' => 1, 'slug' => 'unicorn-cake-2', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Unicorn Cake', 'imgur_id' => '9bZ1pfl', 'category_id' => 1, 'slug' => 'unicorn-cake-3', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Train Cake', 'imgur_id' => 'MpiWcor', 'category_id' => 1, 'slug' => 'train-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Train Cake', 'imgur_id' => 'wsSgmYL', 'category_id' => 1, 'slug' => 'train-cake-1', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Train Cake', 'imgur_id' => 'gfR4iBK', 'category_id' => 1, 'slug' => 'train-cake-2', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Train Cake', 'imgur_id' => 'nn8GL8Y', 'category_id' => 1, 'slug' => 'train-cake-3', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Train Cake', 'imgur_id' => 'wsSgmYL', 'category_id' => 1, 'slug' => 'train-cake-4', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Magical Cupcakes', 'imgur_id' => '3TWSKrA', 'category_id' => 2, 'slug' => 'magical-cupcakes-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Magical Cupcakes', 'imgur_id' => 'tKPUpxn', 'category_id' => 2, 'slug' => 'magical-cupcakes-1', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Magical Cupcakes', 'imgur_id' => 'gpswrdX', 'category_id' => 2, 'slug' => 'magical-cupcakes-2', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Magical Cupcakes', 'imgur_id' => 'RyvkPui', 'category_id' => 2, 'slug' => 'magical-cupcakes-3', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Beer Theme Cake', 'imgur_id' => 'XgZez3V', 'category_id' => 1, 'slug' => 'beer-theme-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Beer Theme Cake', 'imgur_id' => 'U1WyJI3', 'category_id' => 1, 'slug' => 'beer-theme-cake-1', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Fruit Ice Cream Cake', 'imgur_id' => 'YBcmTSO', 'category_id' => 1, 'slug' => 'fruit-ice-cream-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Peanut Brittle Ice Cream Cake', 'imgur_id' => 'AMSPIiU', 'category_id' => 1, 'slug' => 'peanut-brittle-ice-cream-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Colorful Cake', 'imgur_id' => '5uKktcV', 'category_id' => 1, 'slug' => 'colorful-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Lorax Cake', 'imgur_id' => 'vi1PhxQ', 'category_id' => 1, 'slug' => 'lorax-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Wedding Cake', 'imgur_id' => '0bUCVHr', 'category_id' => 1, 'slug' => 'wedding-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Wedding Cake', 'imgur_id' => '97DmmNI', 'category_id' => 1, 'slug' => 'wedding-cake-1', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Wedding Cake', 'imgur_id' => 'pyQX6Fk', 'category_id' => 1, 'slug' => 'wedding-cake-2', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Wedding Cake', 'imgur_id' => '1T2aJr9', 'category_id' => 1, 'slug' => 'wedding-cake-3', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Wedding Cake', 'imgur_id' => 'iqJmqQb', 'category_id' => 1, 'slug' => 'wedding-cake-4', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Dragon + Unicorn Cake', 'imgur_id' => 'a8NKtgT', 'category_id' => 1, 'slug' => 'dragon-unicorn-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Dragon + Unicorn Cake', 'imgur_id' => 'Zz6eTEf', 'category_id' => 1, 'slug' => 'dragon-unicorn-cake-1', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Dragon + Unicorn Cake', 'imgur_id' => 'WwdaFez', 'category_id' => 1, 'slug' => 'dragon-unicorn-cake-2', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Dragon + Unicorn Cake', 'imgur_id' => '77IWQo6', 'category_id' => 1, 'slug' => 'dragon-unicorn-cake-3', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Dragon + Unicorn Cake', 'imgur_id' => 'AknQnGk', 'category_id' => 1, 'slug' => 'dragon-unicorn-cake-4', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Dragon + Unicorn Cake', 'imgur_id' => '2zCYD5l', 'category_id' => 1, 'slug' => 'dragon-unicorn-cake-5', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Unicorn Cupcakes', 'imgur_id' => 'YUd7hIj', 'category_id' => 2, 'slug' => 'unicorn-cupcakes-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Unicorn Cupcakes', 'imgur_id' => '93sFNwI', 'category_id' => 2, 'slug' => 'unicorn-cupcakes-1', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Unicorn Cupcakes', 'imgur_id' => 'k2ojRN3', 'category_id' => 2, 'slug' => 'unicorn-cupcakes-2', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Unicorn Cake', 'imgur_id' => 'kQIx2Xf', 'category_id' => 1, 'slug' => 'unicorn-cake-4', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Unicorn Cake', 'imgur_id' => '9WtGVXV', 'category_id' => 1, 'slug' => 'unicorn-cake-5', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Unicorn Cake', 'imgur_id' => 'ax0lRjj', 'category_id' => 1, 'slug' => 'unicorn-cake-6', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Bride & Groom Cake', 'imgur_id' => 'QDE9vyt', 'category_id' => 1, 'slug' => 'bride-and-groom-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Bride & Groom Cake', 'imgur_id' => '38VSIPy', 'category_id' => 1, 'slug' => 'bride-and-groom-cake-1', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Bride & Groom Cake', 'imgur_id' => 'nI69RaB', 'category_id' => 1, 'slug' => 'bride-and-groom-cake-2', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Bride & Groom Cake', 'imgur_id' => 'qse5QqG', 'category_id' => 1, 'slug' => 'bride-and-groom-cake-3', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Bride & Groom Cake', 'imgur_id' => 'IW2WfGC', 'category_id' => 1, 'slug' => 'bride-and-groom-cake-4', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Groom Cake', 'imgur_id' => 'sFWGGDi', 'category_id' => 1, 'slug' => 'groom-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Groom Cake', 'imgur_id' => 'iiqPWFq', 'category_id' => 1, 'slug' => 'groom-cake-1', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Groom Cake', 'imgur_id' => 'HLUykH0', 'category_id' => 1, 'slug' => 'groom-cake-2', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Bride Cake', 'imgur_id' => 'jITk72i', 'category_id' => 1, 'slug' => 'bride-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Bride Cake', 'imgur_id' => 'nrdSFKV', 'category_id' => 1, 'slug' => 'bride-cake-1', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Bride Cake', 'imgur_id' => '6TURcaH', 'category_id' => 1, 'slug' => 'bride-cake-2', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Bride Cake', 'imgur_id' => '4CxO5JU', 'category_id' => 1, 'slug' => 'bride-cake-3', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Bride Cake', 'imgur_id' => 'TX0isd3', 'category_id' => 1, 'slug' => 'bride-cake-4', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Bride Cake', 'imgur_id' => 'Nz49lP6', 'category_id' => 1, 'slug' => 'bride-cake-5', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Bride Cake', 'imgur_id' => 'UoN857r', 'category_id' => 1, 'slug' => 'bride-cake-6', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Oh Baby', 'imgur_id' => 'FObiz5J', 'category_id' => 1, 'slug' => 'oh-baby-cake-0', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Oh Baby', 'imgur_id' => 'p1eq4u5', 'category_id' => 1, 'slug' => 'oh-baby-cake-1', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Oh Baby', 'imgur_id' => '7f3CxgC', 'category_id' => 1, 'slug' => 'oh-baby-cake-2', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => 'Oh Baby', 'imgur_id' => 'oyIccq5', 'category_id' => 1, 'slug' => 'oh-baby-cake-3', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'ZgG7qH4', 'category_id' => 2, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'dLTmMno', 'category_id' => 2, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'LDSHeP4', 'category_id' => 2, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'DNG2wfO', 'category_id' => 2, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'RoitCwK', 'category_id' => 2, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'pbt7oDT', 'category_id' => 2, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => '7KzYaKG', 'category_id' => 2, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'zCdLR2n', 'category_id' => 2, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'xNdoZTI', 'category_id' => 2, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'ZGxTxGB', 'category_id' => 2, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'itxbXaI', 'category_id' => 2, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'MwQ1USe', 'category_id' => 2, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'TrHivFM', 'category_id' => 2, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'WTyqm4m', 'category_id' => 2, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'PGQECFC', 'category_id' => 2, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'qm3UDQl', 'category_id' => 1, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => 'kpTVboS', 'category_id' => 1, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
            ['name' => '', 'imgur_id' => '1hUcTmM', 'category_id' => 1, 'slug' => '', 'main' => true, 'created_at' => Carbon::now()],
        ]);
    }
}
