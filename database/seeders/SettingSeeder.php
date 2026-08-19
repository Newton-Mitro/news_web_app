<?php

namespace Database\Seeders;

use App\Features\Setting\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            [
                'key' => 'editor_Email',
                'value' => 'editor@email.com',
            ],
            [
                'key' => 'advertize_Email',
                'value' => 'advertize@email.com',
            ],
            [
                'key' => 'infoEmail',
                'value' => 'info@email.com',
            ],
            [
                'key' => 'maintenanceMode',
                'value' => '0',
            ],
            [
                'key' => 'facebook',
                'value' => 'https://facebook.com/dcccec',
            ],
            [
                'key' => 'twitter',
                'value' => 'https://twitter.com/dcccec',
            ],
            [
                'key' => 'instagram',
                'value' => 'https://instagram.com/dcccec',
            ],
            [
                'key' => 'messenger',
                'value' => 'https://facebook.com/dcccec/messenger',
            ],
            [
                'key' => 'youtube',
                'value' => 'https://youtube.com/dcccec',
            ],
            [
                'key' => 'whatsapp',
                'value' => '01815458842',
            ],
            [
                'key' => 'address',
                'value' => '173/1/A, East Tejturi Bazar, Tejgaon, Dhaka-1215.',
            ],
            [
                'key' => 'phone',
                'value' => '01815458842',
            ],
        ];

        foreach ($settings as $setting) {
            Setting::updateOrCreate(
                ['key' => $setting['key']],
                ['value' => $setting['value']]
            );
        }
    }
}
