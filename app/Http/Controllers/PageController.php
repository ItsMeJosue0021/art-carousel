<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function gallery() {
        return Inertia::render('Gallery');
    }

    public function materials() {
        return Inertia::render('Materials');
    }

    public function exhibit() {
        return Inertia::render('Exhibit');
    }

    public function community() {
        return Inertia::render('Community');
    }
}
