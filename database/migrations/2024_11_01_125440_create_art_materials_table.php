<?php

use App\Models\User;
use App\Models\ProductStatus;
use App\Models\ArtMaterialCategory;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('art_materials', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('description')->nullable();
            $table->double('price');
            $table->integer('quantity');
            $table->foreignIdFor(ArtMaterialCategory::class)->constrained();
            $table->foreignIdFor(ProductStatus::class)->constrained();
            $table->foreignIdFor(User::class)->constrained();
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('art_materials');
    }
};
