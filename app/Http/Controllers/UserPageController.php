<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class UserPageController extends Controller
{
    public function dashboard() {
        return Inertia::render('User/Dashboard');
    }

    public function artworks() {
        return Inertia::render('User/Artworks');
    }

    public function artMaterials() {
        return Inertia::render('User/ArtMaterials');
    }
}
