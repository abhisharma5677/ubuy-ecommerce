import React from 'react'
import Products from './Products'

const HomePage = () => {
  return (
    <main className="container mx-auto px-4 py-8">
        <section className="bg-white shadow-2xl rounded-lg py-16">
            <div className="text-center">
                <h2 className="text-3xl text-gray-600 font-bold mb-4">Discover Amazing Products</h2>
                <p className="text-lg text-gray-600 mb-6">Shop the latest trends in fashion, electronics, home decor, and more!</p>
                {/* <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">Shop Now</a> */}
            </div>
        </section>
        <section className="py-12">
            <div className="text-center">
                {/* <h2 className="text-2xl font-bold mb-8">Featured Products</h2> */}
                {/* <!-- Display featured products here --> */}
                <Products />
            </div>
        </section>
    </main>
  )
}

export default HomePage