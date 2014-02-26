<?php

use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'user';

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = array('password', 'register_ip', 'forget_token', 'active_token');
    protected $fillable = array('first_name', 'last_name', 'patronymic', 'email', 'phone');

    public static $rules = array(
        'first_name'=>'required|min:2|alpha',
        'last_name'=>'min:2|alpha',
        'patronymic'=>'min:2|alpha',
        'phone'=>'required|unique:user|between:7,11',
        'email'=>'required|email|unique:user',
        'password'=>'required|alpha_num|between:4,12|confirmed',
        'password_confirmation'=>'required|alpha_num|between:4,12'
    );

    public function role()
    {
        return $this->belongsToMany('Role');
    }

    public function attempts()
    {
        return $this->hasMany('Login_attempts');
    }

    /**
     * Get the unique identifier for the user.
     *
     * @return mixed
     */
    public function getAuthIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Get the password for the user.
     *
     * @return string
     */
    public function getAuthPassword()
    {
        return $this->password;
    }

    /**
     * Get the e-mail address where password reminders are sent.
     *
     * @return string
     */
    public function getReminderEmail()
    {
        return $this->email;
    }

}