import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';
import '../Countries/Countries.css';
import loader from '../../img/loader.gif';

export default function Activity() {
  
  async function newActivity(data) {
      await fetch('http://localhost:3001/activity', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'
        }
      })
  }
  return (
    <div className="container">
      <h1 className='title'>  Paises  </h1>
          <div className="countries">
            Activity
          </div>
    </div>
  )
}