<?php

use Illuminate\Database\Seeder;

class ProvinsiTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::insert("INSERT INTO `provinsi` (`id`, `kdprovinsi`, `nmprovinsi`) VALUES
        (1, '11', 'ACEH'),
        (2, '12', 'SUMATERA UTARA'),
        (3, '13', 'SUMATERA BARAT'),
        (4, '14', 'RIAU'),
        (5, '15', 'JAMBI'),
        (6, '16', 'SUMATERA SELATAN'),
        (7, '17', 'BENGKULU'),
        (8, '18', 'LAMPUNG'),
        (9, '19', 'KEPULAUAN BANGKA BELITUNG'),
        (10, '21', 'KEPULAUAN RIAU'),
        (11, '31', 'DKI JAKARTA'),
        (12, '32', 'JAWA BARAT'),
        (13, '33', 'JAWA TENGAH'),
        (14, '34', 'DI YOGYAKARTA'),
        (15, '35', 'JAWA TIMUR'),
        (16, '36', 'BANTEN'),
        (17, '51', 'BALI'),
        (18, '52', 'NUSA TENGGARA BARAT'),
        (19, '53', 'NUSA TENGGARA TIMUR'),
        (20, '61', 'KALIMANTAN BARAT'),
        (21, '62', 'KALIMANTAN TENGAH'),
        (22, '63', 'KALIMANTAN SELATAN'),
        (23, '64', 'KALIMANTAN TIMUR'),
        (24, '65', 'KALIMANTAN UTARA'),
        (25, '71', 'SULAWESI UTARA'),
        (26, '72', 'SULAWESI TENGAH'),
        (27, '73', 'SULAWESI SELATAN'),
        (28, '74', 'SULAWESI TENGGARA'),
        (29, '75', 'GORONTALO'),
        (30, '76', 'SULAWESI BARAT'),
        (31, '81', 'MALUKU'),
        (32, '82', 'MALUKU UTARA'),
        (33, '91', 'PAPUA BARAT'),
        (34, '94', 'PAPUA');");
    }
}
