import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <section className=" dark:bg-gray-900 h-64">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Your Cart in Empty.</p>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">There are No Product Yet ...... </p>
        <Link to={"/home"} className="inline-flex text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-red-900 my-4">Back to Homepage</Link>
      </div>   
    </div>
  </section>
  
  )
}
