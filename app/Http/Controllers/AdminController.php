<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard(): Response {
        return Inertia::render('Admin/AdminDashboard');
    }

    public function artworks() {
        return Inertia::render('Admin/Artworks');
    }


}
