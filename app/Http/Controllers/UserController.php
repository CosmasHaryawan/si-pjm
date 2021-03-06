<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function dashboard()
    {
        return view('admin.dashboard');
    }

    public function login()
    {
        return view('login');
    }

    public function validasi(Request $req)
    {
        $req->validate([
            'username'=>'required',
            'password'=>'required'
        ]);
        // dd($req);
        $hasil = User::where('name',$req->username)
                    ->orWhere('email',$req->username)
                    ->get();
        if ($hasil->count() > 0){
            foreach($hasil as $h);
            if (Hash::check($req->password, $h['password'])){
                session(['role'=>$h['role'],
                         'username'=>$h['username'],
                         'userid'=>$h['id']
                        ]);
                return redirect("/admin/home");
            }
        }
        return back()->with("status","Username/Email atau Password Salah!");

    }
}
