<?php

class UserController extends BaseController {

    public function __construct() {
        parent::__construct();
        $this->beforeFilter('csrf', array('on'=>'post'));
    }

    public function getNewaccount() {
        return View::make('user.newaccount');
    }

    public function postCreate() {
        $validator = Validator::make(Input::all(), User::$rules);

        if ($validator->passes()) {

            $user = new User;
            $user->first_name = Input::get('first_name');
            $user->last_name = Input::get('last_name');
            $user->patronymic = Input::get('patronymic');
            $user->phone = Input::get('phone');
            $user->email = Input::get('email');
            $user->password = Hash::make(Input::get('password'));
            $user->register_ip = ip2long(Request::getClientIp());
            $user->save();

            return Redirect::to('user/signin')
                ->with('message', 'Thank you for creating a new account. Please sign in.');
        }

        return Redirect::to('user/newaccount')
            ->with('message', 'Something went wrong')
            ->withErrors($validator)
            ->withInput();
    }

    public function getSignin() {
        return View::make('user.signin');
    }

    public function postSignin() {
        if (Auth::attempt(array('phone'=>Input::get('phone'), 'password'=>Input::get('password')))) {
            return Redirect::to('/')->with('message', 'Thanks for signing in');
        }

        return Redirect::to('user/signin')->with('message', 'Your phone/password combo was incorrect');
    }

    public function getSignout() {
        Auth::logout();
        return Redirect::to('user/signin')->with('message', 'You have been signed out');
    }
}